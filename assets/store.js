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
  const collectionCards = new Map();
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

  // Small, decorative story symbols stay outside the cover artwork.
  function storyEmblem(productId) {
    const symbols = {
      'pack-scalito-aventuras': 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.5 5.5-2 5-5 2 2-5 5-2Z',
      'pack-escalito': 'M4 9h16v4H4V9Zm2 4v8h12v-8M12 9v12M12 9C5 9 5 3 8 3c3 0 4 6 4 6Zm0 0c7 0 7-6 4-6-3 0-4 6-4 6Z',
      'escalito-inventor': 'm14 3 7 7-3 3-3-3L7 20l-3-3L14 7l-3-1 3-3Z',
      'escalito-viaje-en-el-tiempo': 'M12 5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 3v5l3 2M9 2h6M12 2v3M18 5l2-2',
      'escalito-y-el-versiculo-del-dia': 'M3 17c4-2 6-2 9 0 3-2 5-2 9 0v4c-4-2-6-2-9 0-3-2-5-2-9 0v-4Zm9 0v4M8 12a4 4 0 0 1 8 0M12 3v2M5 5l2 2M19 5l-2 2M3 12h2M19 12h2',
      'escalito-y-la-palabra-de-dios': 'M3 5c4-1 6 0 9 2 3-2 5-3 9-2v14c-4-1-6 0-9 2-3-2-5-3-9-2V5Zm9 2v14M6 9l3 1M6 13l3 1M15 10l3-1M15 14l3-1',
      'escalito-y-las-aventuras-de-la-fe': 'M12 21V10M12 15C5 16 3 12 3 7c6-1 10 2 9 8Zm0-4c0-6 4-8 9-8 0 6-3 9-9 8ZM7 21h10',
      'escalito-y-sus-retos-biblicos': 'M9 3H4v6h2a3 3 0 1 1 0 6H4v5h6v-2a3 3 0 1 1 6 0v2h5v-6h-2a3 3 0 1 1 0-6h2V3h-6v2a3 3 0 1 1-6 0V3Z',
      'la-biblia': 'M3 14h18l-3 6H6l-3-6Zm4 0V8h10v6M10 8V4h4v4M11 11h2M3 23c2-2 4 2 6 0s4 2 6 0 4 2 6 0',
      'videocuento-de-reflexion': 'M5 5h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm4-3 3 3 3-3M10 9l6 4-6 4V9Z',
      'melodias-para-dormir-aprender-y-amar-a-dios': 'M9 3a7 7 0 0 0 1 13 7 7 0 0 1-1-13ZM17 8v11M17 8l5-1v10M17 19c0 3-5 3-5 0s5-3 5 0Zm5-2c0 3-5 3-5 0s5-3 5 0Z'
    };
    const emblem = node('span', 'product-emblem');
    emblem.setAttribute('aria-hidden', 'true');
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('focusable', 'false');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', symbols[productId] || symbols['escalito-y-la-palabra-de-dios']);
    icon.append(path);
    emblem.append(icon);
    return emblem;
  }

  function cover(item, className, compact = false, priority = false) {
    const image = node('img', className);
    image.alt = item.coverAlt;
    image.width = item.coverWidth || 800;
    image.height = item.coverHeight || 1200;
    // Priority applies only after the user opens a category or collection.
    image.loading = priority ? 'eager' : 'lazy';
    image.fetchPriority = priority ? 'high' : 'auto';
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

  function productCard(product, categoryTitle, headingTag = 'h4', priority = false) {
    const featured = product.featured === true;
    const article = node('article', `product-card ${featured ? 'product-card-featured' : 'product-card-compact'}`);
    article.dataset.product = product.id;
    const art = node('div', 'product-art');
    art.append(cover(product, 'product-cover', !featured, priority));
    const copy = node('div', 'product-copy');
    if (featured) copy.append(node('span', 'product-featured-label', 'Pack destacado'));
    const storyLabel = node('div', 'product-story-label');
    storyLabel.append(node('span', 'collection-eyebrow', categoryTitle), storyEmblem(product.id));
    copy.append(storyLabel);
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
    if (!collectionCards.has(collection.id)) {
      collectionCards.set(collection.id, collection.products.map((product, index) =>
        productCard(product, collection.title, 'h4', index === 0)));
    }
    if (productGrid.dataset.collection !== collection.id) {
      productGrid.replaceChildren(...collectionCards.get(collection.id));
      productGrid.dataset.collection = collection.id;
    }
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
    data.books.collections.forEach((collection, index) => {
      const button = node('button', 'collection-card');
      button.type = 'button';
      button.dataset.collection = collection.id;
      button.dataset.theme = collection.theme;
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-controls', 'collection-panel');
      const art = node('span', 'collection-cover-wrap');
      art.append(cover(collection, 'collection-cover', false, index === 0));
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
    if (key === 'books') {
      buildCollections();
      collectionGrid.querySelectorAll('button').forEach(item => item.setAttribute('aria-expanded', 'false'));
      announcement.textContent = 'Cuentos y libros. Tres colecciones disponibles para explorar.';
    } else if (hasProducts) {
      if (!musicProducts.children.length) {
        musicProducts.append(...category.products.map((product, index) =>
          productCard(product, category.title, 'h3', index === 0)));
      }
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
