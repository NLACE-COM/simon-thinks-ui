# Registro de decisiones de UX Writing — SIMON THINKS

Documento vivo. Cada vez que se fija una convención de copy o se decide un
wording para un flujo (no un ajuste menor de redacción), se agrega una fila
aquí. Este archivo es la fuente canónica de decisiones de texto para el
producto — vive en el repo del design system para que quede versionado y
visible para todo el equipo, en vez de guardarse solo en la copia local de
quien lo escribió.

No se borran filas: si una decisión se reemplaza, se agrega una fila nueva y
se marca la anterior como "Reemplazada" en la columna de estado.

| Fecha | Flujo / pantalla | Decisión | Razón | Estado |
|---|---|---|---|---|
| _(ejemplo)_ 2026-07-29 | Confirmación: eliminar regla cognitiva | Título afirmativo sin pregunta: "Estás a punto de eliminar '{nombre}'" | Evitar fricción de duda; el título nunca pregunta, solo constata | Vigente |
| 2026-07-31 | CORE — onboarding inicial (Admin, sin documentos cargados) | Título: "Carga los primeros documentos". Cuerpo: "CORE necesita los documentos de tu organización para empezar a estructurar y razonar sobre ellos. Como administrador, tú decides qué información entra a este espacio de conocimiento." CTA: "Cargar documentos". Helper: "Puedes agregar más documentos en cualquier momento." | Orientación funcional en vez de bienvenida efusiva (patrón de onboarding); nombra el rol de Admin explícitamente porque la responsabilidad de poblar la base de conocimiento es suya, no de cualquier usuario; el helper deja claro que la carga inicial no es un paso único e irreversible | Reemplazada |
| 2026-07-31 | Onboarding inicial (Admin, sin documentos cargados) | Título: "Carga los primeros documentos". Cuerpo: "Simon necesita los documentos de tu organización para empezar a estructurar y razonar sobre ellos. Como administrador, tú decides qué información entra a este espacio de conocimiento." CTA: "Cargar documentos". Helper: "Puedes agregar más documentos en cualquier momento." | Se reemplaza la versión anterior a pedido explícito: no nombrar el módulo "CORE" en este flujo, hablar de "Simon" (el sistema) en su lugar | Vigente |

## Cómo agregar una entrada

1. Fecha (AAAA-MM-DD).
2. Flujo o pantalla exacta donde aplica.
3. La decisión en sí — texto final o la regla de wording fijada (no solo "se mejoró el copy").
4. Razón breve — por qué esta variante y no otra.
5. Estado: Vigente / Reemplazada / En prueba.

## Pendientes de decidir

_(vacío por ahora — se llena a medida que surjan casos sin resolver, ej. "¿Cómo se llama el CTA para aprobar una automatización sugerida por Simon?")_

## Ver también

- [Voice & copy](readme.md#voice--copy) en `readme.md` — tono de marca y reglas base.
- `skills/ux-writing-simon-thinks/references/` — patrones de confirmaciones destructivas y microcopy. Este repo es la fuente canónica; la skill de Claude solo cachea una copia local como respaldo.

## Roadmap

- **v1 (actual).** Este archivo es la única fuente editable ("SSOT") de decisiones de copy — comunitario, versionado en git, revisable vía PR. La skill `ux-writing-simon-thinks` clona/actualiza este repo en cada uso y lee/escribe aquí, no en una copia local de una sola persona.
- **v2 (implementado).** Vista de solo consulta en Google Sheets: **["Simon Writing"](https://docs.google.com/spreadsheets/d/1OqcIqAXgtI9zjXaAiemGe5aHQ6yHLrz_WQWxkjH0Kmk/edit?usp=sharing)**.
  - `scripts/copy-decisiones-to-csv.mjs` convierte esta tabla a `copy-decisiones.csv`.
  - `.github/workflows/sync-copy-decisiones-csv.yml` regenera ese CSV en cada push a `main` que toque este archivo.
  - El Sheet lee el CSV con `=IMPORTDATA("https://raw.githubusercontent.com/NLACE-COM/simon-thinks-ui/main/copy-decisiones.csv")`.
  - El Sheet está compartido en modo **Lector** y el rango de la fórmula está protegido — nadie edita ahí. Todo cambio real se hace en este archivo, nunca en el Sheet.
