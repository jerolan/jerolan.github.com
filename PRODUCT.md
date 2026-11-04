# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Product purpose

Sitio personal de Jerome Olvera para presentar su trabajo, enlazar sus comunidades y publicar sus artículos. El rediseño conserva el blog personal; la referencia a foros corresponde a la estética, sin funciones de comunidad.

## Capabilities and constraints

El sitio existente tiene portada, índice de artículos y páginas individuales de lectura. Usa Next.js, React, Tailwind y Bun, con exportación estática. Los artículos viven en `data/` y sus recursos en `public/images/`. Conservar los textos, enlaces y slugs existentes.

El rediseño se implementa en las páginas reales, conservando Next.js y la exportación estática. El usuario autorizó publicar mediante commit y push a `main`, dejando el despliegue al flujo automático de GitHub Pages. El `.fig` es la referencia de composición. Los recursos que se sirven en el sitio proceden de Frutiger Aero Archive y de los paquetes enlazados por el archivo, con atribución visible. No generar imágenes ni usar la ilustración generada de la propuesta como recurso del sitio.

## Brand commitments

Nombre del autor: Jerome Olvera. Presentación profesional actual: Software Engineer. Contenido principalmente en español. Dirección visual solicitada: Frutiger Aero, con estética de foro web de los 2000. Referencia aportada por el usuario: https://frutigeraeroarchive.org/.

## Evidence on hand

`pages/index.js` contiene la biografía, proyectos y comunidades. `pages/blog/index.js` y `data/` contienen el archivo de artículos. Hay 13 artículos existentes y recursos gráficos en `public/images/`. No inventar actividad de usuarios, contadores de visitas, respuestas ni estadísticas de una comunidad.

## Open decisions

La audiencia específica y los objetivos de conversión no se han definido. El diseño se apoya en las funciones existentes de presentación personal y lectura.
