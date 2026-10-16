'use strict';

// Set purchaseUrl to the official HTTPS product URL when it is available.
// The price is stored in bolivianos; no currency conversion takes place.
window.SCALA_CATALOG = Object.freeze({
  books: Object.freeze({
    title: 'Cuentos y libros',
    collections: Object.freeze([
      Object.freeze({
        id: 'scalito-amigos',
        title: 'Scalito y sus amigos',
        description: 'Pequeñas aventuras para crecer con fe, amistad y alegría.',
        cover: 'scalito-amigos-v6',
        coverAlt: 'Scalito de pie con sus cuatro amigos en una luminosa sala de lectura.',
        theme: 'scalito',
        products: Object.freeze([
          Object.freeze({
            id: 'pack-scalito-aventuras',
            title: 'Pack Scalito Aventuras',
            description: 'Acompaña a Scalito en una nueva aventura para compartir en familia.',
            cover: 'pack-scalito-aventuras',
            coverAlt: 'Portada de Pack Scalito Aventuras con Scalito, su sudadera azul y su Biblia.',
            price: 30,
            currency: 'BOB',
            purchaseUrl: null
          })
        ])
      }),
      Object.freeze({
        id: 'historia-biblia',
        title: 'Historia de la Biblia',
        description: 'Relatos de la Biblia para descubrir y compartir en familia.',
        cover: 'historia-biblia',
        coverAlt: 'Portada de Historia de la Biblia: un libro abierto, Jesús con niños y el arca bajo un arcoíris.',
        theme: 'biblia',
        emptyMessage: 'Estamos preparando historias de la Biblia para compartir momentos de fe en familia.',
        products: Object.freeze([])
      }),
      Object.freeze({
        id: 'reflexion-vida',
        title: 'Reflexión en la vida',
        description: 'Un espacio para detenerse, leer y encontrar inspiración para cada día.',
        cover: 'reflexion-vida',
        coverAlt: 'Portada de Reflexión en la vida: una lectura bajo un árbol frente a un amanecer dorado.',
        theme: 'reflexion',
        emptyMessage: 'Pronto compartiremos lecturas para reflexionar, encontrar esperanza y seguir creciendo.',
        products: Object.freeze([])
      })
    ])
  }),
  music: Object.freeze({
    title: 'Música y alabanzas',
    emptyMessage: 'Estamos preparando música y alabanzas para llenar de alegría los momentos en familia.',
    products: Object.freeze([])
  })
});
