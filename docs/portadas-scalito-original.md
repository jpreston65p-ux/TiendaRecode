# Portadas con el Scalito original

Se corrige únicamente la identidad y la expresión del personaje en las diez portadas de los productos antiguos. El pack nuevo, las tres portadas de colecciones, los nombres, descripciones, precios, enlaces y tamaños de tarjetas se conservan.

La herramienta integrada de imágenes recibe directamente la MISMA foto original aportada por el usuario en cada llamada, mediante `referenced_image_paths`. Ninguna portada generada se reutiliza como referencia de identidad. La foto original tiene 900 × 1600 píxeles y su SHA-256 es `c6c365c468332bacf5bfb8022705eae96b4462f50591b98b00d1e9750933b1a0`. No se publica el archivo original.

Se conservan los ojos ámbar, los grandes mechones peinados hacia un lado, la sudadera azul sin cierre con corazón y cruz, el pantalón cargo y los zapatos de la referencia. Cada portada tiene una expresión específica.

Las composiciones son horizontales de 1536 × 1024. Se reduce el lienzo completo a WebP de 400 y 800 píxeles, calidad 86, sin recortes. Las tarjetas mantienen su altura automática.

## Prompt común

```text
Use case: illustration-story.
Asset: ONE finished horizontal children's product cover, LANDSCAPE 1536 x 1024, width greater than height.
Input image 1: the user's ORIGINAL SCALITO character model sheet. This is the ONLY authoritative identity reference. Reproduce this specific recognizable character, not a new generic child.
IDENTITY INVARIANTS: copy his exact original facial structure and age, amber-brown oval eyes, thick dark curved eyebrows, small nose, ear shape, warm skin, and original head-to-body proportions. His chestnut hair consists of broad smooth layered locks with a distinctive long side-swept fringe: copy its silhouette, parting and large strands, not tight curls or a different tousled baby haircut. Preserve the natural child proportions in the photo; do not give him a toddler's oversized bobble head.
OUTFIT INVARIANTS: the SAME royal-blue PULLOVER hoodie, kangaroo pocket, blue drawstrings and WHITE HEART ENCLOSING A CROSS on his left chest; yellow shirt visible at neck and hem; mustard-brown cargo trousers with side pockets; original blue high-top sneakers with white toe caps, white laces, white soles and curved white side panels. NO ZIPPER. Keep the chest emblem visible whenever the torso faces the viewer. Do not copy the reference's Bible-hugging pose; the requested action replaces that pose.
STYLE: match the original character's polished warm 3D illustration, face and clothing. No freckle-heavy replacement face, no teenager, no chibi toddler, no redesign.
COMPOSITION: a real wide scene with the title occupying one quiet side and the complete character on the other. Entire hair, hands, body, knees and shoes inside generous safe margins; visible floor below him. Correct anatomy and plausible natural pose, exactly two arms and two legs. No huge foreground foot or extra fingers. Do not hide parts outside the canvas. Ignore the checkerboard background of the reference.
TEXT: render the supplied exact product title, legible and complete, with attractive lettering matching the theme. No additional words, price, watermark, border or book mockup.
EXPRESSION: follow the specific facial expression below precisely; do NOT default to the same open-mouth cheerful grin on every cover.
```

## Escenas y expresiones

El prompt final de cada imagen es el prompt común seguido de `SCENE:`, `FACIAL EXPRESSION:` y `Text (verbatim):` con estos valores.

### Escalito Inventor

- `assets/covers/escalito-inventor-scalito-original-v4-400.webp`
- `assets/covers/escalito-inventor-scalito-original-v4-800.webp`

```text
SCENE: A bright teal-and-copper creative workshop with a little wooden windmill model. Scalito sits on a low wooden stool on the RIGHT, leaning forward slightly, one hand holding the model in place and the other carefully using a small hand tool. A short workbench to his side leaves his whole figure and both sneakers visible. Preserve the original boy's longer child proportions and exact face, hair and pullover emblem. Window light, a few blueprints and wooden blocks. On the LEFT, large cream-and-copper title lettering with subtle gear shapes.
FACIAL EXPRESSION: Focused concentration: mouth CLOSED with gently pursed relaxed lips, eyebrows slightly drawn together, eyes attentively looking at the toy he is building. A charming thoughtful expression, not angry, not smiling broadly and no teeth visible.
Text (verbatim): "Escalito Inventor".
```

### Pack Escalito

- `assets/covers/pack-escalito-scalito-original-v4-400.webp`
- `assets/covers/pack-escalito-scalito-original-v4-800.webp`

```text
SCENE: A welcoming creative playroom with an open wooden activity chest. Scalito kneels on a soft rug on the LEFT, naturally lifting a small red-and-white toy rocket in one hand while his other hand rests on the chest edge. His full body and both original high-top sneakers are contained within the frame. A few picture books and a musical shaker suggest the pack's variety. Original pullover heart-and-cross emblem clearly visible. On the RIGHT, large coral-and-ivory title lettering with simple paper-cut stars against a calm cream wall. Cozy turquoise and warm daylight.
FACIAL EXPRESSION: Playful confidence: one eye WINKING, the other original amber eye bright and focused on a toy rocket, a broad CLOSED-MOUTH cheeky smile with raised cheek, not an open-mouth laugh. Keep his exact reference facial design.
Text (verbatim): "Pack Escalito".
```

### Escalito Viaje en el Tiempo

- `assets/covers/escalito-viaje-en-el-tiempo-scalito-original-v4-400.webp`
- `assets/covers/escalito-viaje-en-el-tiempo-scalito-original-v4-800.webp`

```text
SCENE: An indigo-and-copper clockwork gateway opening into a distant old stone village and a tiny sailing ship. Scalito on the RIGHT is stepping briskly out of the portal, torso naturally turned three quarters toward the viewer so the ORIGINAL pullover and heart-cross are visible, one arm held slightly out for balance and the other bent naturally. Both complete legs and normal-size reference sneakers fully inside the image on a wide stone platform. No book in his hands. On the LEFT, large readable cream-and-copper adventure title lettering on a quiet midnight-blue star field, with a few gear decorations.
FACIAL EXPRESSION: Clear astonished surprise: eyebrows RAISED, original amber eyes wide with wonder, mouth forming a small round O. No teeth, no grin. He has just noticed the unexpected world beyond the portal.
Text (verbatim): "Escalito Viaje en el Tiempo".
```

### Escalito y el Versículo del Día

- `assets/covers/escalito-y-el-versiculo-del-dia-scalito-original-v4-400.webp`
- `assets/covers/escalito-y-el-versiculo-del-dia-scalito-original-v4-800.webp`

```text
SCENE: A sunlit peach-and-sky-blue reading corner. Scalito lies on his tummy on a large rug on the RIGHT, in natural side-three-quarter view, his whole body extending horizontally. Knees bent gently so BOTH original high-top sneakers appear completely within the upper-right part with plenty of space from the edge. One hand supports his cheek, the other turns an open little Bible page without readable small text. The blue PULLOVER and original chest emblem remain visible on the upper torso. On the LEFT, the complete product title in blue-and-honey rounded lettering on a calm peach wall. A potted plant and soft window light.
FACIAL EXPRESSION: Serene contentment: relaxed eyebrows and slightly lowered eyelids, a subtle CLOSED-LIP smile, eyes calmly following the book page. Peaceful and absorbed in reading, no raised-excitement eyebrows, no open mouth or visible teeth.
Text (verbatim): "Escalito y el Versículo del Día".
```

### Escalito y la Palabra de Dios

- `assets/covers/escalito-y-la-palabra-de-dios-scalito-original-v4-400.webp`
- `assets/covers/escalito-y-la-palabra-de-dios-scalito-original-v4-800.webp`

```text
SCENE: Scalito sits cross-legged on a cushion on the LEFT, both original high-top sneakers visible and his body fully inside the canvas. He opens a beautiful pop-up book on a low stand: little paper olive trees, a winding path and one paper dove unfold from the pages. One hand holds the page and the other gently lifts the dove. Same original blue pullover, large smooth swept hair locks, white heart and cross. On the RIGHT, the exact product title in emerald-and-ivory lettering on a quiet mint backdrop, with subtle paper-leaf details. Warm wooden reading room, gentle golden light.
FACIAL EXPRESSION: Quiet AWE: soft raised eyebrows, shining original amber eyes gazing at a paper dove, lips very slightly parted in a small gentle gasp. No broad toothy grin and no exaggerated baby face.
Text (verbatim): "Escalito y la Palabra de Dios".
```

### Escalito y las Aventuras de la Fe

- `assets/covers/escalito-y-las-aventuras-de-la-fe-scalito-original-v4-400.webp`
- `assets/covers/escalito-y-las-aventuras-de-la-fe-scalito-original-v4-800.webp`

```text
SCENE: A fresh forest brook with a small stone bridge. Scalito kneels on the RIGHT on a broad dry stone, one hand gently reassuring a little lamb and the other indicating the safe stepping stone ahead. Natural full-body pose with original cargo trousers and both high-top sneakers visible, ordinary proportions from the reference, white heart-cross on his pullover. On the LEFT, the exact title in cream-and-sage woodland lettering against a calm leafy clearing. Soft turquoise water and warm sunbeams. No Bible in his hands.
FACIAL EXPRESSION: Protective compassion: eyebrows lifted slightly at their INNER corners, mouth CLOSED with a gentle concerned curve, eyes attentively checking a tiny lamb. Reassuring and caring, not cheerful laughter and not a broad grin.
Text (verbatim): "Escalito y las Aventuras de la Fe".
```

### Escalito y sus Retos Bíblicos

- `assets/covers/escalito-y-sus-retos-biblicos-scalito-original-v4-400.webp`
- `assets/covers/escalito-y-sus-retos-biblicos-scalito-original-v4-800.webp`

```text
SCENE: A warm coral-and-teal puzzle room. Scalito stands in a gentle sideways investigative lean on the LEFT, holding a small magnifying glass in one hand and tracing a route on a large wooden maze with the other. The low table sits beside him and does not hide his legs or original sneakers. His exact original blue PULLOVER, white heart-cross and smooth side-swept fringe stay recognizable. A few blank crossword squares and puzzle pieces, no random letters. On the RIGHT, bold ivory-and-teal product title lettering with restrained puzzle motifs.
FACIAL EXPRESSION: Clever inquisitiveness: ONE eyebrow distinctly raised, the other slightly lowered in thought, an asymmetrical CLOSED-MOUTH half-smirk. Both eyes open, no wink, no toothy grin. He looks as if he has just figured out a clue.
Text (verbatim): "Escalito y sus Retos Bíblicos".
```

### La Biblia

- `assets/covers/la-biblia-scalito-original-v4-400.webp`
- `assets/covers/la-biblia-scalito-original-v4-800.webp`

```text
SCENE: Scalito sits naturally on the floor on the LEFT, his entire body and both original sneakers visible beside a small wooden ark on a low mat. He places a toy giraffe on the ark with one hand while the other steadies the model. His trousers, pullover and chest emblem are copied from the original reference. A few wooden animal toys and a small illustrated Bible connect the scene to the product. On the RIGHT, large beautiful gold-and-sapphire title lettering above a subtle paper rainbow, calm turquoise reading-room backdrop. No book hugged against his chest.
FACIAL EXPRESSION: Tender delight: a soft warm smile with just a SMALL glimpse of upper teeth, eyes gently focused on a toy animal and eyebrows relaxed. Smaller, more intimate smile than the reference's broad laugh, without changing his facial identity.
Text (verbatim): "La Biblia".
```

### VideoCuento de reflexión

- `assets/covers/videocuento-de-reflexion-scalito-original-v4-400.webp`
- `assets/covers/videocuento-de-reflexion-scalito-original-v4-800.webp`

```text
SCENE: A cozy violet-and-amber home cinema. Scalito sits sideways on a small pouf on the RIGHT, both complete original sneakers resting on the rug. One hand holds a small remote toward a screen showing a luminous paper boat on calm starry water; his other hand rests on the pouf. Full figure inside the canvas, blue pullover with original white heart-cross clearly visible, same smooth side-swept hairstyle. On the LEFT, the exact product title in elegant ivory-and-lilac cinema lettering over a quiet plum curtain. No Bible in his hands.
FACIAL EXPRESSION: Emotionally moved and reflective: brows gently raised at the inner corners, subtly glossy attentive original amber eyes, lips CLOSED and relaxed in a thoughtful nearly-neutral line. NO smile, no laughing expression, no exaggerated crying.
Text (verbatim): "VideoCuento de reflexión".
```

### Melodías para Dormir, Aprender y Amar a Dios

- `assets/covers/melodias-para-dormir-aprender-y-amar-a-dios-scalito-original-v4-400.webp`
- `assets/covers/melodias-para-dormir-aprender-y-amar-a-dios-scalito-original-v4-800.webp`

```text
SCENE: A dreamy blue-and-periwinkle night garden with a crescent moon and little warm lights. Scalito sits on a low wooden stool on the LEFT, playing a child-sized ukulele with two correct hands, his full body and both original blue-and-white high-top sneakers planted on the grass and inside the safe margins. The original blue PULLOVER with heart-cross remains visible above the ukulele. On the RIGHT, the entire long title in clear balanced lines of ivory and soft gold on a quiet indigo sky, with a few small musical notes. No Bible and no extra person.
FACIAL EXPRESSION: Peaceful singing: eyes GENTLY CLOSED, eyebrows relaxed, head tilted slightly, lips rounded in a small humming/singing O. No toothy grin. Preserve the reference's facial structure, nose, eyebrows and hair even with closed eyes.
Text (verbatim): "Melodías para Dormir, Aprender y Amar a Dios".
```
