# Guía para agentes

## Propósito

Mantener el sitio personal de Jerome Olvera y ayudarle a editar sus artículos y adaptarlos para LinkedIn.
Repositorio: https://github.com/jerolan/jerolan.github.com
Perfil de LinkedIn: https://www.linkedin.com/in/jerome-olvera-a0073ab5/

## Sitio y artículos

- El sitio usa Next.js, React y Tailwind CSS, con Bun y `bun.lockb`.
- Los artículos públicos están en `data/<slug>.md`. `lib/postDataSource.js` lee todos los archivos de esa carpeta como artículos.
- Conservar los slugs existentes y los campos `title`, `excerpt`, `date`, `cover.src` y `cover.alt` del frontmatter. Revisar el formato de artículos vecinos antes de agregar uno.
- Las imágenes están en `public/images/`. Comprobar que las referencias correspondan a archivos existentes.
- `bun install` instala dependencias, `bun start` inicia desarrollo y `bun run build` genera la exportación estática en `out/`.
- `bun run deploy` publica en la rama `gh-pages`. Un push a `main` activa `.github/workflows/deploy.yml` y publica el sitio. Tener presente ese efecto antes de enviar cambios.
- Para cambios de código, ejecutar las verificaciones que correspondan. Para cambios editoriales, revisar frontmatter, enlaces, imágenes y representación cuando afecte al formato. No agregar pruebas que solo repitan el contenido.

## Trabajo editorial y LinkedIn

- Escribir en español por defecto y conservar la voz del autor, sus argumentos y experiencias. Corregir ortografía y claridad sin inventar anécdotas, resultados ni citas.
- Leer el artículo completo antes de adaptarlo. Verificar las afirmaciones técnicas que dependan de versiones o información actual con fuentes primarias.
- Guardar adaptaciones en `content/linkedin/<slug>.md`, fuera de `data/`. Registrar el artículo de origen, el texto propuesto, el estado de revisión y, después de publicarlo, su URL y fecha reales.
- Los estados editoriales son `borrador`, `revisado`, `aprobado` y `publicado`. No marcar una publicación como realizada sin evidencia.
- Publicar cuando el usuario haya autorizado el texto y el destino. Si no hay acceso a LinkedIn, entregar el texto listo para copiar e indicar que falta publicarlo.

## Privacidad de notas y borradores

- `.scratch/` contiene tickets, especificaciones y notas locales. Debe permanecer excluida de Git.
- `content/linkedin/` contiene borradores y seguimiento editorial locales. Debe permanecer excluida de Git.
- No guardar tickets, pensamientos de trabajo ni borradores en `data/`, `public/` u otras rutas que se publiquen con el sitio.
- No usar `git add -f` para incluir estas carpetas. Si se solicita compartir material, preparar una versión concreta en una ruta pública autorizada.

## Delegación

- Delegar trabajo acotado y separable cuando la especialización, evidencia independiente o paralelismo compensen la coordinación. Mantener el trabajo trivial y la integración acoplada con el agente principal.
- El principal conserva requisitos, decisiones, diagnóstico, integración y verificación final. Revisar los resultados y comprobar la evidencia relevante.
- Dar a cada agente un objetivo, límites, archivos autorizados, contratos, referencias y comprobaciones necesarias. Los agentes devuelven resultados o bloqueos sin subdelegar.
- Ejecutar en paralelo los encargos independientes sin dependencias pendientes ni escrituras superpuestas.
- Elegir por el trabajo restante entre los agentes disponibles. No instalar agentes por aparecer en una guía. Usar especialistas de frontend, documentación, pruebas, revisión, seguridad o rendimiento cuando el trabajo lo justifique.
- Reservar un asesor para incertidumbre de consecuencias importantes o bloqueos complejos después de investigar. Entregar evidencia, hipótesis descartadas y una pregunta decisiva.
- Cada investigación debe tener una pregunta, rutas o símbolos iniciales, exclusiones y evidencia suficiente para terminar. Localizar al responsable antes de mapear implementaciones.
- Revisar internamente a los 5 minutos y limitar la investigación a 15 minutos de trabajo efectivo. Conservar hallazgos y vacíos. Cambiar de agente o dividir búsquedas no reinicia el presupuesto.
- Terminar al responder la pregunta. Si las búsquedas dejan de aportar evidencia, cambiar de estrategia o informar el bloqueo. Pedir extensión al usuario solo si hace falta superar el presupuesto para resolver una pregunta pendiente.

## Agent skills

### Issue tracker

Las tareas y especificaciones se guardan como Markdown local en `.scratch/`, excluido de Git. Ver `docs/agents/issue-tracker.md`.

### Triage labels

Usar `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human` y `wontfix` en el campo `Status:` de los tickets locales. Ver `docs/agents/triage-labels.md`.

### Domain docs

Usar single-context: `GLOSSARY.md` y `docs/adr/` en la raíz, creados cuando exista contenido que documentar. Ver `docs/agents/domain.md`.
