#!/usr/bin/env python3
"""Optional asset preparation with Pillow; the published store needs no build step."""
from pathlib import Path
import math
import re

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"


def main():
    # Encode directly from the opaque source, keeping all three responsive sizes.
    with Image.open(ROOT / "banner-scala.png") as original:
        assert original.getchannel("A").getextrema() == (255, 255)
        for width in (768, 1280, 2048):
            size = (width, round(width * original.height / original.width))
            image = original.convert("RGB").resize(size, Image.Resampling.LANCZOS)
            image.save(ASSETS / f"banner-scala-{width}.avif", quality=65,
                       speed=4, subsampling="4:4:4")

    # CSS reads only these sprite regions. Preserve their coordinates and a
    # four-pixel gutter for interpolation; unused screenshot pixels stay blank.
    css = (ASSETS / "styles.css").read_text()
    with Image.open(ASSETS / "scala-art.webp") as source:
        source = source.convert("RGB")
        atlas = Image.new("RGB", source.size, (255, 253, 247))
        regions = 0
        for selector, body in re.findall(r"([^{}]+)\{([^{}]*)\}", css):
            size = re.search(r"background-size:([\d.]+)%\s+([\d.]+)%", body)
            if not size:
                continue
            position = re.search(r"background-position:([\d.]+)%\s+([\d.]+)%", body)
            if not position:
                raise ValueError(f"Missing sprite coordinates: {selector}")
            width = source.width * 100 / float(size[1])
            height = source.height * 100 / float(size[2])
            left = (source.width - width) * float(position[1]) / 100
            top = (source.height - height) * float(position[2]) / 100
            box = (max(0, math.floor(left) - 4), max(0, math.floor(top) - 4),
                   min(source.width, math.ceil(left + width) + 4),
                   min(source.height, math.ceil(top + height) + 4))
            atlas.paste(source.crop(box), box)
            regions += 1
        if not regions:
            raise ValueError("No sprite regions found; refusing to export an empty atlas")
        atlas.save(ASSETS / "scala-ui.avif", quality=80, speed=4, subsampling="4:4:4")
    print(f"Prepared responsive banners and {regions} sprite regions")


if __name__ == "__main__":
    main()
