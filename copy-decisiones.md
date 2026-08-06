# Registro de decisiones de UX Writing — SIMON THINKS

Documento vivo. Cada vez que se fija una convención de copy o se decide un
wording para un flujo (no un ajuste menor de redacción), se registra aquí.
Este archivo es la fuente canónica de decisiones de texto para el
producto — vive en el repo del design system para que quede versionado y
visible para todo el equipo, en vez de guardarse solo en la copia local de
quien lo escribió.

**Una fila por flujo/pantalla — no un log.** Cada fila representa el estado
*actual* de la decisión para ese flujo. Si una decisión cambia, se edita esa
misma fila (no se agrega una fila nueva ni se marca nada como
"Reemplazada"): git ya guarda el historial completo de qué decía antes y por
qué cambió (`git log -p copy-decisiones.md` o `git blame`). Duplicar ese
historial a mano dentro de la tabla es la forma más rápida de perder de
vista cuál es la versión vigente — que es justo lo que este archivo existe
para evitar.

Antes de agregar una fila nueva, revisa si el flujo ya tiene una — si existe,
actualízala en vez de crear una segunda.

| Fecha | Flujo / pantalla | Decisión | Razón | Estado |
|---|---|---|---|---|
| _(ejemplo)_ 2026-07-29 | Confirmación: eliminar regla cognitiva | Título afirmativo sin pregunta: "Estás a punto de eliminar '{nombre}'" | Evitar fricción de duda; el título nunca pregunta, solo constata | Vigente |
| 2026-07-31 | Onboarding inicial (Admin, sin documentos cargados) | Título: "Carga los primeros documentos". Cuerpo: "Simon necesita los documentos de tu organización para empezar a estructurar y razonar sobre ellos. Como administrador, tú decides qué información entra a este espacio de conocimiento." CTA: "Cargar documentos". Helper: "Puedes agregar más documentos en cualquier momento." | Orientación funcional en vez de bienvenida efusiva (patrón de onboarding). Se nombra "Simon" (el sistema), no el módulo ("CORE"), para que el flujo se pueda reutilizar en otros módulos sin reescribir el copy. El helper aclara que la carga inicial no es un paso único ni irreversible | Vigente |
| 2026-08-06 | Campana de notificaciones — estados de ingesta de documento (Admin, Simon Core) | Estados (`NotificationItem`): Éxito → "Documento '{nombre.ext}' indexado correctamente." (sin CTA). Error al subir → "Documento '{nombre.ext}' no se pudo subir." + CTA "Reintentar". Error al indexar (subido pero falla el procesamiento) → "Documento '{nombre.ext}' se subió, pero no se pudo indexar." + CTA "Reintentar". En proceso (opcional) → "Documento '{nombre.ext}' en proceso de indexación." Timestamp relativo aparte del texto: <1 min "Hace instantes", 1–59 min "Hace {n} min", 1–23 h "Hace {n} h", 1 día "Ayer", 2–6 días "Hace {n} días", 7+ días fecha absoluta. | El tipo de archivo se resuelve mostrando la extensión dentro del nombre (no un campo/tag aparte) para mantener una sola idea por notificación. Se separan los dos puntos de falla del pipeline (subida vs. indexación) porque cada uno requiere un reintento distinto y el usuario necesita saber cuál falló. Pretérito siempre (nunca presente), porque el texto se lee como registro persistente, no como toast efímero | En prueba — pendiente confirmar con Diego si el backend distingue "falla al subir" de "falla al indexar" como eventos separados, y si se necesita un tag visual de formato aparte del nombre |

## Cómo agregar o actualizar una entrada

1. Busca primero si el flujo ya tiene fila. Si existe, edítala — no dupliques.
2. Fecha (AAAA-MM-DD) — la de la última actualización de esa fila.
3. Flujo o pantalla exacta donde aplica.
4. La decisión en sí — texto final o la regla de wording fijada (no solo "se mejoró el copy").
5. Razón breve — por qué esta variante y no otra. Autocontenida: no digas "se reemplaza la anterior", explica la decisión como si fuera la primera vez.
6. Estado: Vigente / En prueba (una decisión provisional, pendiente de validar con el equipo).

## Pendientes de decidir

_(vacío por ahora — se llena a medida que surjan casos sin resolver, ej. "¿Cómo se llama el CTA para aprobar una automatización sugerida por Simon?")_

## Ver también

- [Voice & copy](readme.md#voice--copy) en `readme.md` — tono de marca y reglas base.
- `skills/ux-writing-simon-thinks/references/` — patrones de confirmaciones destructivas y microcopy. Este repo es la fuente canónica; la skill de Claude solo cachea una copia local como respaldo.

## Roadmap

- **v1 (actual).** Este archivo es la única fuente editable ("SSOT") de decisiones de copy — comunitario, versionado en git, revisable vía PR. La skill `ux-writing-simon-thinks` clona/actualiza este repo en cada uso y lee/escribe aquí, no en una copia local de una sola persona.
- **v2 (implementado).** Vista de solo consulta en Google Sheets: **["Simon Writing"](https://docs.google.com/spreadsheets/d/1x03KATiTA-y2j-kCq0x7xSepvihqekxBd-hDkIUc6Sc/edit?usp=sharing)**.
  - `scripts/copy-decisiones-to-csv.mjs` convierte esta tabla a `copy-decisiones.csv`.
  - `.github/workflows/sync-copy-decisiones-csv.yml` regenera ese CSV en cada push a `main` que toque este archivo.
  - El Sheet lee el CSV con `=IMPORTDATA("https://raw.githubusercontent.com/NLACE-COM/simon-thinks-ui/main/copy-decisiones.csv")`.
  - El Sheet está compartido en modo **Lector** y el rango de la fórmula está protegido — nadie edita ahí. Todo cambio real se hace en este archivo, nunca en el Sheet.
