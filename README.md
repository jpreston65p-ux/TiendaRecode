# Tienda SCALA Kids

Tienda estática en español, sin dependencias de ejecución ni pasos de compilación. Publicar la carpeta completa, incluyendo `assets/`.

En **Cuentos y libros** hay tres colecciones:

- **Scalito y sus amigos**, con **Pack Scalito Aventuras a Bs 30**, el Pack Escalito anterior y seis aventuras y actividades de Escalito.
- **Historia de la Biblia**, con **La Biblia**.
- **Reflexión en la vida**, con **VideoCuento de reflexión**.

**Música y alabanzas** incluye **Melodías para Dormir, Aprender y Amar a Dios**.

Se recuperaron diez productos de la tienda anterior, con sus portadas, descripciones, precios y ocho enlaces de compra originales. La Biblia y Melodías conservan el aviso de compra próxima porque no tenían enlace. Los importes anteriores mantienen el símbolo `$`, sin convertirlos a bolivianos ni atribuirles una moneda que el original no especificaba. El detalle de la recuperación está en [docs/catalogo-recuperado.md](docs/catalogo-recuperado.md).

Para habilitar la compra del pack, editar `purchaseUrl` en `assets/catalog.js` y reemplazar `null` por el enlace HTTPS oficial entre comillas. La tarjeta se convierte automáticamente en un enlace de compra. Mientras tanto, el botón permanece desactivado y comunica que la compra estará disponible pronto.

El banner conserva su ilustración y tiene variantes WebP de 768, 1280 y 2048 píxeles. Su precarga usa el mismo `srcset` que la imagen para descargar solo el tamaño elegido por el navegador. El PNG original queda conservado como fuente. Las ilustraciones de la interfaz y las tipografías se sirven como archivos independientes para reducir el HTML y permitir la caché. Las portadas se solicitan al abrir el catálogo, con tamaños adaptables y carga diferida.

Las tipografías Fredoka y Nunito se distribuyen bajo sus licencias originales, incluidas en `assets/fonts/OFL.txt`.

Las portadas están en `assets/covers/`. Las imágenes recuperadas conservan sus proporciones y se sirven en variantes WebP de 400 y 800 píxeles, sin añadir imágenes al inicio de la página. Las instrucciones de creación de las cuatro portadas nuevas se conservan en [docs/portadas.md](docs/portadas.md).
