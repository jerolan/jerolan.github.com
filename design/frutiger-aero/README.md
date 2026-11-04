# Propuesta Frutiger Aero

Diseño editable del sitio personal de Jerome Olvera, creado con OpenPencil 0.16.0. Conserva el blog personal y adopta la estética de los portales y foros de los 2000. La composición se ha trasladado a las páginas reales del sitio. El usuario pidió reemplazar las imágenes generadas de esta propuesta por recursos del archivo con atribución; `aero-landscape.png` queda únicamente como parte del artefacto de diseño anterior y no se sirve en el sitio.

## Abrir el diseño

Abrir `jerome-olvera-frutiger-aero.fig` desde OpenPencil. Si el editor avisa que faltan fuentes, instalar los tres archivos `.ttf` incluidos en `fonts/` y volver a abrir el documento. El archivo incluye las imágenes utilizadas, capas de texto editables, formas, degradados y componentes reutilizables.

Páginas del documento:

- **Escritorio**: inicio, archivo con los 13 artículos y ejemplo de lectura, a 1440 px de ancho.
- **Móvil**: las mismas tres vistas, a 390 px de ancho.
- **Sistema visual**: paleta, tipografía y ejemplos de controles.
- **Componentes editables**: botones y panel reutilizables.

El archivo se ha vuelto a abrir con OpenPencil para verificar sus cuatro páginas, 297 capas de texto editables, cuatro componentes y cuatro imágenes incorporadas. Los PNG contiguos permiten revisar el diseño sin abrir el editor. Las pantallas de lectura muestran un fragmento del artículo existente, no su extensión completa. Los extractos del archivo se abrevian con puntos suspensivos para representar el espacio disponible; los originales no se han modificado.

## Dirección visual

Cabecera panorámica con cielo, agua y una esfera de cristal. Pestañas con reflejo y relieve. Paneles claros con encabezados satinados, azules acuáticos y verde hoja. La columna lateral recuerda el perfil de un foro y contiene enlaces reales; las filas representan artículos y no conversaciones. La lectura usa texto oscuro sobre blanco.

El diseño no añade visitantes, respuestas, presencia en línea ni cifras de actividad ficticias.

## Recursos y atribución

- Referencia visual y descubrimiento de recursos: [Frutiger Aero Archive](https://frutigeraeroarchive.org/) y su [sección de recursos](https://frutigeraeroarchive.org/resources#iconPacks).
- Los iconos incorporados proceden de [Oxygen, KDE](https://github.com/KDE/oxygen-icons), enlazado por el archivo. Los originales y avisos están en `oxygen/`. Se usan sin modificar. La licencia declarada por `REUSE.toml` es LGPL-3.0-or-later; se conservan `COPYING`, `COPYING.LIB`, `AUTHORS` y `REUSE.toml`.
- `aero-landscape.png` es una ilustración original generada para esta propuesta. No es una fotografía ni una imagen descargada del archivo.
- Tipografías del diseño: Liberation Sans y Liberation Mono. Se incluyen los tres archivos utilizados, sin modificaciones, junto con su licencia SIL Open Font License 1.1 en `fonts/`. Deben estar disponibles en el editor para conservar la composición.
- Los textos y enlaces proceden de `pages/index.js` y `data/`. Se añade LinkedIn usando el perfil proporcionado por el autor.

## Implementación posterior

Conservar los slugs, fechas, metadatos y enlaces existentes. Las vistas móviles deben permitir acceder también a proyectos, comunidades y enlaces externos del escritorio. Implementar foco de teclado, estados de interacción, contraste y comportamiento adaptable al trasladar la propuesta a Next.js.

La conexión al OpenPencil de escritorio no estaba activa durante esta sesión. El documento se creó y exportó con las bibliotecas y herramientas locales de OpenPencil; no se modificó un documento abierto en el equipo del usuario.
