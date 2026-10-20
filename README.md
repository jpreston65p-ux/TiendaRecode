# Tienda SCALA Kids

Tienda estática en español, sin dependencias de ejecución ni pasos de compilación. Publicar la carpeta completa, incluyendo `assets/`.

En **Cuentos y libros** hay tres colecciones:

- **Scalito y sus amigos**, con **Pack Scalito Aventuras a Bs 30**, el Pack Escalito anterior y seis aventuras y actividades de Escalito.
- **Historia de la Biblia**, con **La Biblia**.
- **Reflexión en la vida**, con **VideoCuento de reflexión**.

**Música y alabanzas** incluye **Melodías para Dormir, Aprender y Amar a Dios**.

**Pack Scalito Aventuras** conserva su tarjeta grande como producto destacado (`featured: true`). Los diez productos anteriores se muestran en tarjetas pequeñas, en una cuadrícula de tres columnas en escritorio, dos en pantallas medianas y una en móviles estrechos. Las portadas compactas conservan su encuadre y usan una variante de 400 píxeles cuando corresponde.

Se recuperaron diez productos de la tienda anterior, con sus portadas, descripciones, precios y ocho enlaces de compra originales. La Biblia y Melodías conservan el aviso de compra próxima porque no tenían enlace. Los importes anteriores mantienen el símbolo `$`, sin convertirlos a bolivianos ni atribuirles una moneda que el original no especificaba. El detalle de la recuperación está en [docs/catalogo-recuperado.md](docs/catalogo-recuperado.md).

Para habilitar la compra del pack, editar `purchaseUrl` en `assets/catalog.js` y reemplazar `null` por el enlace HTTPS oficial entre comillas. La tarjeta se convierte automáticamente en un enlace de compra. Mientras tanto, el botón permanece desactivado y comunica que la compra estará disponible pronto.

El banner conserva su ilustración y tiene variantes WebP de 768, 1280 y 2048 píxeles. Su precarga usa el mismo `srcset` que la imagen para descargar solo el tamaño elegido por el navegador. El PNG original queda conservado como fuente. Las ilustraciones de la interfaz y las tipografías se sirven como archivos independientes para reducir el HTML y permitir la caché. Las portadas se solicitan al abrir el catálogo, con tamaños adaptables y carga diferida.

Los títulos usan **Baloo 2**, con pesos de 600 a 800, y las descripciones conservan **Nunito**. La variante latina de Baloo 2 se sirve desde `assets/fonts/baloo2-latin-wght.woff2`, con precarga y `font-display: swap`; incluye los caracteres del español. La página no solicita fuentes a servicios externos. Su licencia está en `assets/fonts/Baloo2-OFL.txt`. Los archivos anteriores de Fredoka y Nunito y sus licencias se conservan en `assets/fonts/`.

Baloo 2 procede del [proyecto de Ek Type](https://github.com/EkType/Baloo2); se conserva sin modificar la [variante WOFF2 latina de Google Fonts](https://fonts.gstatic.com/s/baloo2/v23/wXKrE3kTposypRyd51jcAA.woff2). La bienvenida, las categorías, los tres mensajes de beneficios y el pie de página mantienen su contenido original con una presentación renovada.

Las portadas están en `assets/covers/`. Se cargan de forma diferida al abrir los catálogos, sin añadir solicitudes de portadas al inicio de la página. Se conservan los recursos anteriores y las instrucciones de las primeras ilustraciones en [docs/portadas.md](docs/portadas.md).

Los diez productos anteriores usan portadas **horizontales (3:2)** basadas directamente en la foto original de Scalito, con expresiones diferentes y variantes WebP de 400 y 800 píxeles. Las tarjetas muestran el lienzo completo. El pack nuevo y las tres portadas de colecciones se conservan. La referencia, los archivos y los prompts actuales están en [docs/portadas-scalito-original.md](docs/portadas-scalito-original.md); las versiones anteriores permanecen como historial.
