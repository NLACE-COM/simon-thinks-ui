# Patrones de microcopy — SIMON THINKS

Patrones no destructivos: toasts, estados vacíos, errores, validación de formularios, onboarding, notificaciones, copy de agente. Ver `voz-y-tono.md` antes de escribir cualquiera de estos.

## 1. Toasts / confirmaciones breves

| Momento | ES | EN |
|---|---|---|
| Guardado exitoso | *Cambios guardados* | *Changes saved* |
| Acción de agente ejecutada | *Simon movió 3 tareas a "Esta semana"* | *Simon moved 3 tasks to "This week"* |
| Sugerencia disponible (no ejecutada) | *Simon sugiere una nueva prioridad — revisar* | *Simon suggests a new priority — review* |

Regla: nombrar la acción concreta, no un estado emocional ("¡Listo!" está bien como micro-confirmación visual, pero el texto principal siempre nombra qué pasó).

## 2. Estados vacíos (empty states)

- Explicar qué falta y qué acción resuelve el vacío — nunca solo "No hay datos".
- Ej.: *"Aún no hay reglas cognitivas en este espacio. Crea la primera para que Simon empiece a razonar sobre tus decisiones."*
- Sin humor forzado, sin ilustraciones "graciosas" descritas en el texto.

## 3. Errores

Distinguir tres familias — cada una tiene un tono distinto:

| Tipo | Ejemplo | Tono |
|---|---|---|
| Error de sistema (falla técnica) | *"No pudimos conectar con la base de conocimiento. Reintentar."* | Neutro, ofrece acción de recuperación |
| Error de usuario (input inválido) | *"Este nombre ya existe. Prueba con otro."* | Directo, sin culpar |
| Incertidumbre del agente (no es error, es límite del razonamiento) | *"Simon no encontró una regla aplicable para este caso."* | Honesto, no se disfraza de error del sistema |

No mezclar "no tengo certeza" con "algo falló" — son mensajes distintos y el usuario necesita saber cuál es cuál para decidir qué hacer.

## 4. Validación de formularios

- El mensaje va junto al campo, no en un modal aparte.
- Indica qué corregir, no solo que está mal: *"La regla necesita al menos una condición"* en vez de *"Campo inválido"*.
- Sin exclamaciones ni tono de regaño.

## 5. Onboarding

- Explica qué hace Simon en esa pantalla específica, no el producto entero de nuevo.
- Evitar "bienvenida" efusiva; preferir orientación funcional: *"Aquí defines las reglas que Simon usa para priorizar."*
- Si hay pasos, numerarlos y ser breve en cada uno — una acción por paso.

## 6. Notificaciones (dentro o fuera de la app)

- Nombrar el módulo si es relevante (THINK, CORE, CUSTOM, LIGHT) y la acción concreta.
- Nunca urgencia artificial ("¡Actúa ahora!"). Sí urgencia real cuando corresponde, dicha con calma: *"Una automatización necesita tu aprobación antes de ejecutarse."*

## 7. Copy de agente / acciones de IA (resumen operativo)

Ver también `voz-y-tono.md` §Copy de agente. Reglas rápidas al escribir:

1. ¿Ya se ejecutó o es una sugerencia? → El verbo debe reflejarlo (pasado ejecutado vs. "sugiere").
2. ¿Afecta un sistema externo? → Nombrarlo explícitamente.
3. ¿Hay incertidumbre? → Decirla, no ocultarla ni forzar una respuesta con falsa confianza.
4. ¿Es reversible? → Si no lo es, este patrón no aplica — usar `confirmaciones-destructivas.md`.

## Prohibiciones transversales

Emojis, exclamaciones, hype, humanización excesiva del agente, preguntas retóricas, mezclar la familia "error de sistema" con "límite de razonamiento del agente".
