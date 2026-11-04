# Diseño del sitio

La propuesta editable está en `design/frutiger-aero/jerome-olvera-frutiger-aero.fig`. La implementación está en los componentes de página, las vistas de `pages/` y `styles/aero.css`.

## Dirección

Frutiger Aero y portal personal de los 2000, según la referencia aportada por el autor. Cielo, hojas y agua de Material Dictionary 178 en una cabecera panorámica, pestañas de cristal, relieve brillante y acentos verde hoja. Las filas del archivo evocan temas de foro sin introducir funciones de comunidad.

## Color y materiales

- Azul profundo `#174e70` para títulos.
- Azul Aero `#0875b0` para controles activos.
- Cielo `#c0e8f5` para el fondo.
- Verde hoja `#82bc3a` para encabezados secundarios.
- Superficie clara `#fbfeff` para lectura y listas.

Los reflejos se concentran en la cabecera y los controles. Los textos largos mantienen superficies claras y un contraste estable.

## Aero oscuro

El interruptor de la cabecera alterna entre Aero claro y oscuro. La variante oscura conserva los recursos del archivo con capas azul noche, paneles de lectura oscuros, enlaces cian y controles de cristal azul y verde. No se invierten las imágenes.

La elección se guarda con la clave histórica `dark-mode-enabled`. Sin una elección explícita, se sigue el tema del sistema. El tema se aplica desde el encabezado del documento antes de mostrar la página y se conserva al navegar, recargar y abrir otras pestañas. Si el navegador bloquea el almacenamiento, el control sigue funcionando durante la visita.

## Tipografía y estructura

Liberation Sans para interfaz, títulos y lectura. Liberation Mono para ejemplos de código. El documento muestra escritorio de 1440 px con contenido central y columna de perfil, y móvil de 390 px con una columna.

## Fuente de verdad

`PRODUCT.md` recoge el alcance confirmado. El usuario autorizó trasladar el estilo a las páginas reales y publicarlo. La composición del `.fig` se conserva con una excepción explícita: usar recursos del archivo con mención de origen y no generar imágenes. La ilustración original de la propuesta no se sirve en el sitio. Los recursos actuales y sus fuentes están documentados en `public/images/aero/SOURCES.md` y en la página `/creditos`. El pie de todas las páginas acredita Frutiger Aero Archive y Oxygen / KDE.
