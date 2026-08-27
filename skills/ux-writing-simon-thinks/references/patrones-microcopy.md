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

**Son tres familias, no una.** Confundirlas produce copy absurdo: prometer una solución donde no hay
problema, o dejar sin salida a quien se equivocó escribiendo.

| Caso | Qué es | Cuerpo | CTA |
|---|---|---|---|
| **Vacío inicial** | falta algo | explica qué se gana al llenarlo | primario |
| **Búsqueda sin resultados** | error de usuario recuperable | cómo corregir | de recuperación |
| **Filtro sin resultados** | **respuesta válida** | **ninguno** | con el conteo que recupera |

**Vacío inicial** — hay algo que hacer y conviene explicar por qué vale la pena.
*"Todavía no hay documentos indexados. Simon solo responde sobre lo que está indexado. Sube el
primer documento y queda disponible para consultas con su fuente citada."* → **Subir documento**

**Búsqueda sin resultados** — el término va entre comillas angulares y el cuerpo dice cómo corregir.
*"Ningún documento coincide con «hola». Revisa la escritura o prueba con menos palabras."*
→ **Limpiar búsqueda**

**Filtro sin resultados** — no es un vacío: es una respuesta. Cero documentos con error es buena
noticia. No hay nada que resolver y una línea de relleno miente.
*"Ningún documento con error."* — sin cuerpo — → **Ver los 10 documentos**

El CTA lleva el conteo para que se sepa qué se recupera al salir del filtro.

**Transversal a las tres:** el icono nombra lo que falta o lo que se filtra, no la acción — un
documento para una tabla de documentos, una lupa para una búsqueda, un embudo para un filtro.
Sin humor forzado, sin ilustraciones "graciosas" descritas en el texto.

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

## 8. Eyebrow y texto de apoyo (helper)

Consulta esta sección solo cuando te pidan específicamente el eyebrow o el hint de algo puntual — no es parte del entregable por defecto de título+cuerpo+CTA, son slots de texto de componentes concretos (`Modal`, `Drawer`, `Input`) que se resuelven caso a caso:

- **Eyebrow** (`Modal`, `Drawer` — prop `eyebrow`): etiqueta mono en mayúscula sobre el título; el componente ya aplica el estilo, tú solo entregas el texto. Corto (2-4 palabras), nombra la categoría o el contexto — nunca repite el título. Ejemplos reales del design system: "Filtros", "Decisión · Q3", "Developers · Integración".
- **Helper / texto de apoyo** (bajo un CTA, o prop `hint` en `Input` para campos de formulario): una línea que reduce fricción o ansiedad sobre la acción — aclara algo que el título/CTA no dice, nunca repite lo mismo con otras palabras. Ej.: "Puedes agregar más documentos en cualquier momento." No es una explicación larga; si necesitas más de una línea, probablemente es contenido para el cuerpo, no para el helper.

## Prohibiciones transversales

Emojis, exclamaciones, hype, humanización excesiva del agente, preguntas retóricas, mezclar la familia "error de sistema" con "límite de razonamiento del agente".
