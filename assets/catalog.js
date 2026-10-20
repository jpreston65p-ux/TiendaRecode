'use strict';

// Prices and HTTPS checkout links are preserved from the original catalog.
// '$' preserves the original symbol, which did not specify an ISO currency.
// Pack Scalito Aventuras is priced in BOB; its purchase URL is still pending.
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
            "price": 30,
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
            "price": 14.99,
            "purchaseUrl": "https://pay.hotmart.com/A106042445O",
            "cover": "pack-escalito-actual-v2",
            "coverAlt": "Portada de Pack Escalito con el Scalito actual, su sudadera azul, pantalón mostaza y zapatillas azules.",
            "coverWidth": 800,
            "coverHeight": 1200,
            "currency": "$"
          }),
          Object.freeze({
            "id": "escalito-inventor",
            "title": "Escalito Inventor",
            "description": "Actividades creativas para imaginar, construir y aprender con Escalito.",
            "price": 9.99,
            "purchaseUrl": "https://pay.hotmart.com/Y106040339H",
            "cover": "escalito-inventor-actual-v2",
            "coverAlt": "Portada de Escalito Inventor con el Scalito actual, su sudadera azul, pantalón mostaza y zapatillas azules.",
            "coverWidth": 800,
            "coverHeight": 1200,
            "currency": "$"
          }),
          Object.freeze({
            "id": "escalito-viaje-en-el-tiempo",
            "title": "Escalito Viaje en el Tiempo",
            "description": "Una aventura educativa donde Escalito viaja por distintas épocas aprendiendo valores y lecciones importantes.",
            "price": 9.99,
            "purchaseUrl": "https://pay.hotmart.com/R106037996Q",
            "cover": "escalito-viaje-en-el-tiempo-actual-v2",
            "coverAlt": "Portada de Escalito Viaje en el Tiempo con el Scalito actual, su sudadera azul, pantalón mostaza y zapatillas azules.",
            "coverWidth": 800,
            "coverHeight": 1200,
            "currency": "$"
          }),
          Object.freeze({
            "id": "escalito-y-el-versiculo-del-dia",
            "title": "Escalito y el Versículo del Día",
            "description": "Versículos bíblicos explicados de forma sencilla para que los niños aprendan cada día.",
            "price": 7.99,
            "purchaseUrl": "https://pay.hotmart.com/C106028090T",
            "cover": "escalito-y-el-versiculo-del-dia-actual-v2",
            "coverAlt": "Portada de Escalito y el Versículo del Día con el Scalito actual, su sudadera azul, pantalón mostaza y zapatillas azules.",
            "coverWidth": 800,
            "coverHeight": 1200,
            "currency": "$"
          }),
          Object.freeze({
            "id": "escalito-y-la-palabra-de-dios",
            "title": "Escalito y la Palabra de Dios",
            "description": "Material cristiano infantil para conocer la Biblia de manera divertida, clara y edificante.",
            "price": 7.99,
            "purchaseUrl": "https://pay.hotmart.com/G106026266G",
            "cover": "escalito-y-la-palabra-de-dios-actual-v2",
            "coverAlt": "Portada de Escalito y la Palabra de Dios con el Scalito actual, su sudadera azul, pantalón mostaza y zapatillas azules.",
            "coverWidth": 800,
            "coverHeight": 1200,
            "currency": "$"
          }),
          Object.freeze({
            "id": "escalito-y-las-aventuras-de-la-fe",
            "title": "Escalito y las Aventuras de la Fe",
            "description": "Historias llenas de fe, amistad y enseñanzas cristianas para niños.",
            "price": 15.99,
            "purchaseUrl": "https://pay.hotmart.com/J106021927B",
            "cover": "escalito-y-las-aventuras-de-la-fe-actual-v2",
            "coverAlt": "Portada de Escalito y las Aventuras de la Fe con el Scalito actual, su sudadera azul, pantalón mostaza y zapatillas azules.",
            "coverWidth": 800,
            "coverHeight": 1200,
            "currency": "$"
          }),
          Object.freeze({
            "id": "escalito-y-sus-retos-biblicos",
            "title": "Escalito y sus Retos Bíblicos",
            "description": "Sopas de letras, crucigramas, acertijos y desafíos bíblicos para aprender jugando.",
            "price": 4.99,
            "purchaseUrl": "https://pay.hotmart.com/N106036870W",
            "cover": "escalito-y-sus-retos-biblicos-actual-v2",
            "coverAlt": "Portada de Escalito y sus Retos Bíblicos con el Scalito actual, su sudadera azul, pantalón mostaza y zapatillas azules.",
            "coverWidth": 800,
            "coverHeight": 1200,
            "currency": "$"
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
            "price": 6.99,
            "purchaseUrl": null,
            "cover": "la-biblia-actual-v2",
            "coverAlt": "Portada de La Biblia con el Scalito actual, su sudadera azul, pantalón mostaza y zapatillas azules.",
            "coverWidth": 800,
            "coverHeight": 1200,
            "currency": "$"
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
            "price": 12,
            "purchaseUrl": "https://pay.hotmart.com/E105042879M",
            "cover": "videocuento-de-reflexion-actual-v2",
            "coverAlt": "Portada de VideoCuento de reflexión con el Scalito actual, su sudadera azul, pantalón mostaza y zapatillas azules.",
            "coverWidth": 800,
            "coverHeight": 1200,
            "currency": "$"
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
        "price": 8.99,
        "purchaseUrl": null,
        "cover": "melodias-para-dormir-aprender-y-amar-a-dios-actual-v2",
        "coverAlt": "Portada de Melodías para Dormir, Aprender y Amar a Dios con el Scalito actual, su sudadera azul, pantalón mostaza y zapatillas azules.",
        "coverWidth": 800,
        "coverHeight": 1200,
        "currency": "$"
      })
    ])
  })
});
