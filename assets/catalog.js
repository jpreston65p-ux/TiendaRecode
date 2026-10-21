'use strict';

// Boliviano (BOB) price tiers follow product formats; these are not FX conversions.
// Original HTTPS checkout destinations are retained for updating their offers.
// Prices use multiples of Bs 10: individual products Bs 10–30, both packs Bs 40.
window.SCALA_CATALOG = Object.freeze({
  "books": Object.freeze({
    "title": "Cuentos y libros",
    "collections": Object.freeze([
      Object.freeze({
        "id": "scalito-amigos",
        "title": "Scalito y sus amigos",
        "description": "Pequeñas aventuras para crecer con fe, amistad y alegría.",
        "cover": "scalito-amigos-v7",
        "coverAlt": "Scalito de pie con sus cuatro amigos en una luminosa sala de lectura.",
        "theme": "scalito",
        "products": Object.freeze([
          Object.freeze({
            "id": "pack-scalito-aventuras",
            "featured": true,
            "title": "Pack Scalito Aventuras",
            "description": "Acompaña a Scalito en una nueva aventura para compartir en familia.",
            "cover": "pack-scalito-aventuras-actual-v2",
            "coverAlt": "Portada de Pack Scalito Aventuras con el Scalito actual, su sudadera azul, pantalón mostaza y zapatillas azules.",
            "price": 40,
            "currency": "BOB",
            "purchaseUrl": null,
            "purchaseLabel": "Comprar pack",
            "coverWidth": 800,
            "coverHeight": 1200
          }),
          Object.freeze({
            "id": "pack-escalito",
            "title": "Pack Escalito",
            "description": "Aventuras con Escalito y sus amigos. Historias bíblicas, canciones y actividades.",
            "price": 40,
            "purchaseUrl": "https://pay.hotmart.com/A106042445O",
            "checkoutPricePending": true,
            "cover": "pack-escalito-scalito-original-v4",
            "coverAlt": "Scalito original guiñando un ojo junto a un cofre de actividades, con un cohete de juguete.",
            "coverWidth": 800,
            "coverHeight": 533,
            "currency": "BOB",
            "coverFormat": "webp"
          }),
          Object.freeze({
            "id": "escalito-inventor",
            "title": "Escalito Inventor",
            "description": "Actividades creativas para imaginar, construir y aprender con Escalito.",
            "price": 20,
            "purchaseUrl": "https://pay.hotmart.com/Y106040339H",
            "checkoutPricePending": true,
            "cover": "escalito-inventor-scalito-original-v4",
            "coverAlt": "Scalito original concentrado, con la boca cerrada, construyendo un molino de madera.",
            "coverWidth": 800,
            "coverHeight": 533,
            "currency": "BOB",
            "coverFormat": "webp"
          }),
          Object.freeze({
            "id": "escalito-viaje-en-el-tiempo",
            "title": "Escalito Viaje en el Tiempo",
            "description": "Una aventura educativa donde Escalito viaja por distintas épocas aprendiendo valores y lecciones importantes.",
            "price": 30,
            "purchaseUrl": "https://pay.hotmart.com/R106037996Q",
            "checkoutPricePending": true,
            "cover": "escalito-viaje-en-el-tiempo-scalito-original-v4",
            "coverAlt": "Scalito original sorprendido, con la boca en forma de O, saliendo de un portal.",
            "coverWidth": 800,
            "coverHeight": 533,
            "currency": "BOB",
            "coverFormat": "webp"
          }),
          Object.freeze({
            "id": "escalito-y-el-versiculo-del-dia",
            "title": "Escalito y el Versículo del Día",
            "description": "Versículos bíblicos explicados de forma sencilla para que los niños aprendan cada día.",
            "price": 20,
            "purchaseUrl": "https://pay.hotmart.com/C106028090T",
            "checkoutPricePending": true,
            "cover": "escalito-y-el-versiculo-del-dia-scalito-original-v4",
            "coverAlt": "Scalito original tumbado leyendo con una sonrisa tranquila y la boca cerrada.",
            "coverWidth": 800,
            "coverHeight": 533,
            "currency": "BOB",
            "coverFormat": "webp"
          }),
          Object.freeze({
            "id": "escalito-y-la-palabra-de-dios",
            "title": "Escalito y la Palabra de Dios",
            "description": "Material cristiano infantil para conocer la Biblia de manera divertida, clara y edificante.",
            "price": 20,
            "purchaseUrl": "https://pay.hotmart.com/G106026266G",
            "checkoutPricePending": true,
            "cover": "escalito-y-la-palabra-de-dios-scalito-original-v4",
            "coverAlt": "Scalito original asombrado al descubrir una paloma en un libro desplegable.",
            "coverWidth": 800,
            "coverHeight": 533,
            "currency": "BOB",
            "coverFormat": "webp"
          }),
          Object.freeze({
            "id": "escalito-y-las-aventuras-de-la-fe",
            "title": "Escalito y las Aventuras de la Fe",
            "description": "Historias llenas de fe, amistad y enseñanzas cristianas para niños.",
            "price": 30,
            "purchaseUrl": "https://pay.hotmart.com/J106021927B",
            "checkoutPricePending": true,
            "cover": "escalito-y-las-aventuras-de-la-fe-scalito-original-v4",
            "coverAlt": "Scalito original cuidando a un corderito con expresión protectora.",
            "coverWidth": 800,
            "coverHeight": 533,
            "currency": "BOB",
            "coverFormat": "webp"
          }),
          Object.freeze({
            "id": "escalito-y-sus-retos-biblicos",
            "title": "Escalito y sus Retos Bíblicos",
            "description": "Sopas de letras, crucigramas, acertijos y desafíos bíblicos para aprender jugando.",
            "price": 10,
            "purchaseUrl": "https://pay.hotmart.com/N106036870W",
            "checkoutPricePending": true,
            "cover": "escalito-y-sus-retos-biblicos-scalito-original-v4",
            "coverAlt": "Scalito original resolviendo un laberinto, con una ceja levantada y gesto ingenioso.",
            "coverWidth": 800,
            "coverHeight": 533,
            "currency": "BOB",
            "coverFormat": "webp"
          })
        ])
      }),
      Object.freeze({
        "id": "historia-biblia",
        "title": "Historia de la Biblia",
        "description": "Relatos de la Biblia para descubrir y compartir en familia.",
        "cover": "historia-biblia-actual-v2",
        "coverAlt": "Portada de Historia de la Biblia con el Scalito actual, su sudadera azul, pantalón mostaza y zapatillas azules.",
        "theme": "biblia",
        "emptyMessage": "Estamos preparando historias de la Biblia para compartir momentos de fe en familia.",
        "products": Object.freeze([
          Object.freeze({
            "id": "la-biblia",
            "title": "La Biblia",
            "description": "La Biblia adaptada para niños con historias y enseñanzas de Dios de forma sencilla y divertida.",
            "price": 30,
            "purchaseUrl": null,
            "cover": "la-biblia-scalito-original-v4",
            "coverAlt": "Scalito original sonriendo con ternura mientras juega con un arca de Noé.",
            "coverWidth": 800,
            "coverHeight": 533,
            "currency": "BOB",
            "coverFormat": "webp"
          })
        ]),
        "coverWidth": 800,
        "coverHeight": 1200
      }),
      Object.freeze({
        "id": "reflexion-vida",
        "title": "Reflexión en la vida",
        "description": "Un espacio para detenerse, leer y encontrar inspiración para cada día.",
        "cover": "reflexion-vida-actual-v2",
        "coverAlt": "Portada de Reflexión en la vida con el Scalito actual, su sudadera azul, pantalón mostaza y zapatillas azules.",
        "theme": "reflexion",
        "emptyMessage": "Pronto compartiremos lecturas para reflexionar, encontrar esperanza y seguir creciendo.",
        "products": Object.freeze([
          Object.freeze({
            "id": "videocuento-de-reflexion",
            "title": "VideoCuento de reflexión",
            "description": "VideoCuentos de reflexión con historias bíblicas y valores cristianos para niños.",
            "price": 30,
            "purchaseUrl": "https://pay.hotmart.com/E105042879M",
            "checkoutPricePending": true,
            "cover": "videocuento-de-reflexion-scalito-original-v4",
            "coverAlt": "Scalito original viendo un videocuento con una expresión emotiva y reflexiva.",
            "coverWidth": 800,
            "coverHeight": 533,
            "currency": "BOB",
            "coverFormat": "webp"
          })
        ]),
        "coverWidth": 800,
        "coverHeight": 1200
      })
    ])
  }),
  "music": Object.freeze({
    "title": "Música y alabanzas",
    "emptyMessage": "Estamos preparando música y alabanzas para llenar de alegría los momentos en familia.",
    "products": Object.freeze([
      Object.freeze({
        "id": "melodias-para-dormir-aprender-y-amar-a-dios",
        "title": "Melodías para Dormir, Aprender y Amar a Dios",
        "description": "Melodías y canciones cristianas para dormir, aprender y amar a Dios con ternura y alegría.",
        "price": 30,
        "purchaseUrl": null,
        "cover": "melodias-para-dormir-aprender-y-amar-a-dios-scalito-original-v4",
        "coverAlt": "Scalito original cantando con los ojos cerrados mientras toca un ukelele.",
        "coverWidth": 800,
        "coverHeight": 533,
        "currency": "BOB",
        "coverFormat": "webp"
      })
    ])
  })
});
