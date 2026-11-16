---
name: create-article
description: Ayuda a Jerome a crear, ordenar o editar artículos para su blog personal, a partir de ideas, notas, grabaciones o fuentes, conservando su voz. Úsala cuando pida trabajar en un artículo del blog; para adaptaciones de LinkedIn sigue además las instrucciones editoriales del repositorio.
---

# Crear un artículo para el blog

Ayuda a Jerome a desarrollar el artículo que quiere escribir. Lee `AGENTS.md`, el artículo o material completo disponible y uno o dos artículos pertinentes de `data/` para entender el tono y las convenciones. Escribe en español por defecto y conserva la voz, los argumentos y las experiencias del autor. No inventes anécdotas, citas, hechos ni resultados.

## Trabajar con material del autor

- Aclara la intención si una ambigüedad impide avanzar. Si hay suficiente contexto, empieza con lo disponible.
- Ajusta tu intervención a lo pedido. Cuando Jerome dicte un artículo o pida solo corrección, conserva su forma de narrar y sus palabras; corrige transcripción, ortografía, puntuación y redundancias sin convertirlo en un texto nuevo. Deja abierto el material que todavía va a continuar.
- Propón títulos, estructura, secciones o un cierre cuando lo solicite. Si pide ordenar sin reescribir, conserva los párrafos y sus relaciones; comprueba que las palabras originales no hayan cambiado fuera de los encabezados acordados.
- Si aporta enlaces o documentos, léelos antes de atribuirles ideas. Verifica las afirmaciones técnicas sensibles al tiempo con fuentes primarias y distingue sus opiniones de los hechos comprobados. Señala incertidumbres o contradicciones en vez de inventar evidencia.
- Mantén los borradores de trabajo y notas en `.scratch/`, excluida de Git. No los guardes en `data/` ni `public/` salvo que Jerome autorice expresamente publicar esa versión; una versión pública marcada «Draft» también es una publicación.

## Preparar para el sitio

Cuando Jerome pida agregar el artículo al sitio, revisa el formato de artículos vecinos y las instrucciones vigentes del repositorio. Los artículos públicos viven en `data/<slug>.md`, con `title`, `excerpt`, `date`, `cover.src` y `cover.alt`. Conserva un slug existente al editar. Usa una fecha real y una portada existente o expresamente elegida; verifica que la imagen exista y acredita su origen. No inventes una licencia o atribución.

Si pide que el artículo sea público como borrador, haz visible «Draft» en el título y al inicio. Preserva esa marca hasta que indique retirarla. Revisa los enlaces, el frontmatter, los textos alternativos y la representación Markdown; ejecuta la compilación del sitio si está disponible. Para cambios editoriales no agregues pruebas que repitan el contenido.

## Ilustraciones y publicación

Si solicita propuestas visuales, explica dónde irían y qué idea comunicarían; no generes ni publiques imágenes solo por haberlas propuesto. Si autoriza imágenes, usa la skill solicitada o una disponible apropiada, respeta el diseño del sitio y verifica la relación de cada imagen con el texto. Guarda los archivos publicados en `public/images/`, incluye texto alternativo y atribución fiel a sus fuentes y a su modo de creación. Revisa la presentación en navegador cuando sea posible y comunica cualquier limitación.

Distingue preparar archivos, publicar una versión y publicar cambios posteriores. La autorización del usuario debe cubrir el texto y el destino antes de publicar. En este repositorio, un push a `main` activa el despliegue y `bun run deploy` publica en `gh-pages`. Cuando la publicación esté autorizada, envía únicamente los cambios de la tarea, verifica el despliegue y ofrece la URL; no afirmes que está publicada si no hay evidencia. Conserva los cambios ajenos y no incluyas carpetas privadas.
