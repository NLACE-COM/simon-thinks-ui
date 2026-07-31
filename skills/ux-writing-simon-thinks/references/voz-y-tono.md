# Voz y tono — SIMON THINKS (capa UX writing)

Este documento es **autosuficiente para tareas de UX writing** — no necesitas leer el resto de `readme.md` (colores, dark/light mode, tipografía, spacing, etc.) para escribir o revisar copy; nada de eso es relevante acá y solo consume contexto de más. Este archivo ya resume lo que aplica de la sección "Voice & copy" del design system.

Solo si te falta algo que genuinamente no está cubierto aquí, consulta puntualmente la sección `readme.md#voice--copy` (no el archivo completo).

## Quién es Simon cuando habla

Simon es un sistema organizacional cognitivo: recuerda, razona, anticipa, ordena, estructura, ayuda a decidir. No es un asistente que "quiere ayudar" ni un chatbot con personalidad efusiva. Su autoridad viene de ser preciso y verificable, no de sonar entusiasta.

**Tres verbos que sostienen el tono:** claridad, precisión, calma. Si una frase suena a "vendedor" o a "IA feliz", está mal.

## Dos registros — no confundirlos

| | Copy de marca / marketing | Copy de interfaz / UX |
|---|---|---|
| Persona gramatical | 3ª persona sobre el sistema: *"SIMON recuerda, razona, anticipa"* | 2ª persona / imperativo directo al usuario: *"Elimina el borrador"*, *"Revisa la regla antes de aplicarla"* |
| Dónde aparece | Landing, decks, posts, taglines | Botones, confirmaciones, toasts, tooltips, errores, notificaciones |
| Tono | Aspiracional pero seco (nunca exclamativo) | Funcional, honesto, sin adornos |

Esta distinción es la que más se rompe cuando alguien copia frases de marca directo a un botón. Un botón no dice "SIMON estructura tu conocimiento" — dice "Estructurar" o "Guardar estructura".

## Atributos de tono (en ese orden de prioridad)

1. **Claro antes que ingenioso.** Si hay que elegir entre una frase divertida y una frase entendible al primer vistazo, gana la entendible.
2. **Preciso sobre certeza y reversibilidad.** Simon no dice "resolví esto" cuando sugirió una opción; no dice "esto es correcto" cuando es una inferencia. Distinguir siempre: sugerencia vs. decisión ejecutada, reversible vs. irreversible.
3. **Calmo.** Sin urgencia artificial, sin signos de exclamación, sin mayúsculas para enfatizar.
4. **Seguro sin ser arrogante.** Simon puede decir "no tengo información suficiente" sin que suene a falla.
5. **Económico.** Una idea por mensaje. Si una confirmación necesita dos ideas, son dos líneas, no una frase larga.

## Copy de agente / IA (específico de Simon)

Simon no es una UI pasiva: ejecuta, sugiere y a veces actúa sobre herramientas externas (el task manager, integraciones). Reglas propias de este contexto:

- **Nombra la acción, no la intención.** "Simon movió 3 tareas a 'Esta semana'" en vez de "Simon está organizando tu trabajo".
- **Separa sugerencia de ejecución.** "Simon sugiere reordenar por prioridad" (no ejecutado, requiere confirmación) vs. "Simon reordenó por prioridad" (ya ejecutado, reversible o no debe decirse explícitamente).
- **Nunca humanizar de más.** Evitar "Simon está pensando...", "a Simon le encantaría ayudarte". Preferible: "Procesando", "Analizando reglas de negocio", "Buscando en la base de conocimiento".
- **Cuando actúa en un sistema externo**, el copy debe nombrar el sistema explícitamente ("en tu gestor de tareas", "en la integración con [herramienta]"), nunca dejarlo implícito como si todo ocurriera "dentro de Simon".
- **Incertidumbre se dice, no se esconde.** "Simon no encontró una regla aplicable para este caso" es mejor que forzar una respuesta o quedarse en blanco sin explicar por qué.

## Convenciones de formato

- Español primero; inglés solo si el proyecto ya es bilingüe o el usuario lo pide explícitamente.
- Sentence case en toda la UI (no Title Case).
- Módulos del producto en MAYÚSCULA: THINK, CORE, CUSTOM, LIGHT.
- Verbos de marca recurrentes (para copy de marca, no forzar en UI): recordar, razonar, anticipar, ordenar, estructurar, decidir.

## Prohibido (no negociable)

- Emojis, en ninguna pieza.
- Signos de exclamación.
- Copy "hype": "revolucionario", "increíble", "game-changing", superlativos sin sustento.
- Preguntas retóricas como título de una confirmación ("¿Estás seguro?").
- Humanización excesiva del agente ("Simon está feliz de ayudarte", "a Simon le encanta esto").
- Generalizar certeza que Simon no tiene ("Simon resolvió" cuando en realidad sugirió).
