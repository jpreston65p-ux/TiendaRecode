'use strict';

(() => {
  const data = window.SCALA_CATALOG;
  const buttons = [...document.querySelectorAll('button[data-category]')];
  const catalog = document.getElementById('catalog');
  const coming = document.getElementById('coming-soon');
  const title = document.getElementById('catalog-title');
  const announcement = document.getElementById('catalog-announcement');
  const empty = document.getElementById('catalog-empty');
  const collections = document.getElementById('book-collections');
  const collectionGrid = document.getElementById('collection-grid');
  const panel = document.getElementById('collection-panel');
  const collectionTitle = document.getElementById('collection-title');
  const productGrid = document.getElementById('product-grid');
  const musicProducts = document.getElementById('music-products');
  const soon = document.getElementById('collection-soon');
  let active = null;
  let opener = null;
  let collectionOpener = null;

  const node = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };

  function arrow() {
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'm9 5 7 7-7 7');
    icon.append(path);
    return icon;
  }

  function cover(item, className, compact = false) {
    const image = node('img', className);
    image.alt = item.coverAlt;
    image.width = item.coverWidth || 800;
    image.height = item.coverHeight || 1200;
    image.loading = 'lazy';
    image.decoding = 'async';
    const extension = item.coverFormat === 'jpg' ? 'jpg' : 'webp';
    image.srcset = `assets/covers/${item.cover}-400.${extension} 400w, assets/covers/${item.cover}-800.${extension} 800w`;
    image.sizes = compact ? '(max-width: 520px) calc(100vw - 6rem), (max-width: 900px) 40vw, 340px' : className === 'product-cover'
      ? '(max-width: 600px) 80vw, 360px'
      : '(max-width: 620px) 80vw, (max-width: 900px) 42vw, 350px';
    image.src = `assets/covers/${item.cover}-${compact ? 400 : 800}.${extension}`;
    return image;
  }

  function focusAndReveal(heading) {
    requestAnimationFrame(() => {
      // Ignore navigation that was superseded before this frame.
      if (catalog.hidden || heading.closest('[hidden]')) return;
      heading.focus({ preventScroll: true });
      heading.scrollIntoView({
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'nearest'
      });
    });
  }

  function purchaseUrl(value) {
    if (!value) return null;
    try {
      const url = new URL(value);
      return url.protocol === 'https:' ? url.href : null;
    } catch {
      return null;
    }
  }

  function productCard(product, categoryTitle, headingTag = 'h4') {
    const featured = product.featured === true;
    const article = node('article', `product-card ${featured ? 'product-card-featured' : 'product-card-compact'}`);
    const art = node('div', 'product-art');
    art.append(cover(product, 'product-cover', !featured));
    const copy = node('div', 'product-copy');
    if (featured) copy.append(node('span', 'product-featured-label', 'Pack destacado'));
    copy.append(node('span', 'collection-eyebrow', categoryTitle));
    const heading = node(headingTag, 'product-title', product.title);
    heading.id = `product-${product.id}`;
    article.setAttribute('aria-labelledby', heading.id);
    copy.append(heading, node('p', 'product-description', product.description));
    const price = node('p', 'product-price');
    const bolivianos = product.currency === 'BOB';
    const amount = bolivianos ? String(product.price) : product.price.toFixed(2);
    price.setAttribute('aria-label', bolivianos ? `${amount} bolivianos` : `$${amount}`);
    price.append(node('span', 'price-currency', bolivianos ? 'Bs' : '$'), node('span', 'price-value', amount));
    copy.append(price);
    if (bolivianos) copy.append(node('span', 'price-note', 'Precio en bolivianos'));
    const url = purchaseUrl(product.purchaseUrl);
    if (url) {
      const buy = node('a', 'product-buy', product.purchaseLabel || 'Comprar ahora');
      buy.href = url;
      buy.setAttribute('aria-label', `Comprar ${product.title}`);
      buy.append(arrow());
      copy.append(buy);
    } else {
      const unavailable = node('button', 'product-buy', 'Compra disponible pronto');
      unavailable.type = 'button';
      unavailable.disabled = true;
      const note = node('p', 'purchase-note', 'El enlace de compra estará disponible próximamente.');
      note.id = `purchase-note-${product.id}`;
      unavailable.setAttribute('aria-describedby', note.id);
      copy.append(unavailable, note);
    }
    article.append(art, copy);
    return article;
  }

  function showCollection(collection, button) {
    if (active !== 'books') return;
    collectionOpener = button;
    collectionGrid.querySelectorAll('button').forEach(item => {
      item.setAttribute('aria-expanded', String(item === button));
    });
    panel.dataset.theme = collection.theme;
    collectionTitle.textContent = collection.title;
    document.getElementById('collection-description').textContent = collection.description;
    productGrid.replaceChildren(...collection.products.map(product => productCard(product, collection.title)));
    productGrid.hidden = collection.products.length === 0;
    soon.hidden = collection.products.length > 0;
    const preview = document.getElementById('collection-preview');
    preview.replaceChildren();
    if (!collection.products.length) {
      preview.append(cover(collection, 'collection-preview-cover'));
      document.getElementById('collection-soon-description').textContent = collection.emptyMessage;
    }
    collections.hidden = true;
    panel.hidden = false;
    announcement.textContent = collection.products.length
      ? `${collection.title}. ${collection.products.length} ${collection.products.length === 1 ? 'producto' : 'productos'}.`
      : `${collection.title}. Nuevas lecturas próximamente.`;
    focusAndReveal(collectionTitle);
  }

  function showCollections() {
    panel.hidden = true;
    collections.hidden = false;
    collectionGrid.querySelectorAll('button').forEach(item => item.setAttribute('aria-expanded', 'false'));
    announcement.textContent = 'Cuentos y libros. Elige entre tres colecciones.';
    if (collectionOpener) {
      const button = collectionOpener;
      requestAnimationFrame(() => {
        if (active !== 'books' || collections.hidden) return;
        button.focus({ preventScroll: true });
        button.scrollIntoView({ block: 'nearest', behavior: 'auto' });
      });
    }
  }

  function buildCollections() {
    if (collectionGrid.children.length) return;
    data.books.collections.forEach(collection => {
      const button = node('button', 'collection-card');
      button.type = 'button';
      button.dataset.collection = collection.id;
      button.dataset.theme = collection.theme;
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-controls', 'collection-panel');
      const art = node('span', 'collection-cover-wrap');
      art.append(cover(collection, 'collection-cover'));
      const copy = node('span', 'collection-copy');
      const count = collection.products.length;
      copy.append(node('span', 'collection-count', count ? `${count} ${count === 1 ? 'producto' : 'productos'}` : 'Próximamente'));
      copy.append(node('span', 'collection-name', collection.title));
      copy.append(node('span', 'collection-summary', collection.description));
      const cta = node('span', 'collection-cta', 'Explorar colección');
      cta.append(arrow());
      copy.append(cta);
      button.append(art, copy);
      button.addEventListener('click', () => showCollection(collection, button));
      collectionGrid.append(button);
    });
  }

  function close() {
    catalog.hidden = true;
    coming.hidden = false;
    buttons.forEach(button => button.setAttribute('aria-expanded', 'false'));
    active = null;
    if (opener) opener.focus({ preventScroll: true });
    announcement.textContent = 'Catálogo cerrado.';
  }

  function open(button) {
    const key = button.dataset.category;
    if (active === key) { close(); return; }
    const category = data[key];
    if (!category) return;
    active = key;
    opener = button;
    collectionOpener = null;
    catalog.dataset.category = key;
    title.textContent = category.title;
    buttons.forEach(item => item.setAttribute('aria-expanded', String(item === button)));
    panel.hidden = true;
    const hasProducts = Boolean(category.products && category.products.length);
    empty.hidden = key === 'books' || hasProducts;
    collections.hidden = key !== 'books';
    musicProducts.hidden = key !== 'music' || !hasProducts;
    musicProducts.replaceChildren();
    if (key === 'books') {
      buildCollections();
      collectionGrid.querySelectorAll('button').forEach(item => item.setAttribute('aria-expanded', 'false'));
      announcement.textContent = 'Cuentos y libros. Tres colecciones disponibles para explorar.';
    } else if (hasProducts) {
      musicProducts.append(...category.products.map(product => productCard(product, category.title, 'h3')));
      announcement.textContent = `${category.title}. ${category.products.length} ${category.products.length === 1 ? 'producto' : 'productos'}.`;
    } else {
      document.getElementById('catalog-description').textContent = category.emptyMessage;
      announcement.textContent = `${category.title}. Nuevos productos próximamente.`;
    }
    coming.hidden = true;
    catalog.hidden = false;
    focusAndReveal(title);
  }

  buttons.forEach(button => button.addEventListener('click', () => open(button)));
  document.getElementById('close-catalog').addEventListener('click', close);
  document.getElementById('back-collections').addEventListener('click', showCollections);
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || catalog.hidden) return;
    event.preventDefault();
    if (active === 'books' && !panel.hidden) showCollections();
    else close();
  });
})();
