# Tienda SCALA Kids

Tienda estática en español, sin dependencias de ejecución ni pasos de compilación. Publicar la carpeta completa, incluyendo `assets/`.

En **Cuentos y libros** hay tres colecciones:

- **Scalito y sus amigos**, con **Pack Scalito Aventuras a Bs 30**.
- **Historia de la Biblia**.
- **Reflexión en la vida**.

Las dos últimas muestran sus portadas y un aviso de próximas lecturas hasta incorporar productos reales.

Para habilitar la compra del pack, editar `purchaseUrl` en `assets/catalog.js` y reemplazar `null` por el enlace HTTPS oficial entre comillas. La tarjeta se convierte automáticamente en un enlace de compra. Mientras tanto, el botón permanece desactivado y comunica que la compra estará disponible pronto.

El banner conserva su ilustración y tiene variantes WebP de 768, 1280 y 2048 píxeles. Su precarga usa el mismo `srcset` que la imagen para descargar solo el tamaño elegido por el navegador. El PNG original queda conservado como fuente. Las ilustraciones de la interfaz y las tipografías se sirven como archivos independientes para reducir el HTML y permitir la caché. Las portadas se solicitan al abrir el catálogo, con tamaños adaptables y carga diferida.

Las tipografías Fredoka y Nunito se distribuyen bajo sus licencias originales, incluidas en `assets/fonts/OFL.txt`.

Las cuatro portadas están en `assets/covers/`. Sus instrucciones de creación se conservan en [docs/portadas.md](docs/portadas.md).
