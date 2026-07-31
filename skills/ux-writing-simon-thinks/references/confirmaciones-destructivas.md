# Confirmaciones destructivas y advertencias de pérdida — SIMON THINKS

Adaptado y generalizado a partir de un patrón ya probado en producción (CohabitArte). Aquí se aplica a los flujos propios de Simon: reglas de negocio/cognitivas, fuentes de conocimiento, hilos de decisión, automatizaciones, integraciones externas.

## Meta-regla de esta sección

Toda decisión de wording destructivo se documenta en el mismo cambio que el string/dict (si existe) o en `registro-decisiones.md`. No se inventan variantes sueltas en un componente.

## 1. Confirmaciones destructivas (irreversibles)

Aplica a: eliminar una regla de negocio o cognitiva, borrar un hilo de conversación/decisión, desconectar una fuente de conocimiento (ingestión Neo4j/Qdrant), eliminar una automatización, vaciar un espacio de trabajo.

| Pieza | Regla |
|---|---|
| Título | Afirmación seca, nunca pregunta. *"Estás a punto de eliminar '{nombre}'"* |
| Cuerpo | Solo consecuencias: qué se pierde, qué cambia, que no se puede deshacer. No repetir el nombre como gancho emocional. |
| CTA primario | Verbo + objeto específico. *"Eliminar regla"*, *"Desconectar fuente"* — nunca "Confirmar" a secas. |
| CTA secundario | *"Cancelar"* |

**Prohibido en el título:** "¿Eliminar…?", "¿Estás seguro…?", cualquier signo de interrogación.

**EN (si aplica):** *You're about to delete "{name}"* + cuerpo con consecuencias.

**Específico de Simon — cuando la acción afecta un sistema externo** (ej. una automatización que también borra/mueve algo en el task manager conectado): el cuerpo debe nombrar el sistema externo explícitamente, no solo el objeto dentro de Simon. Ej.: *"Esto eliminará la automatización y las tareas que ya creó en tu gestor de tareas no se revertirán."*

## 2. Advertencia de pérdida no-destructiva (ej. reemplazar un borrador de regla, sobrescribir una configuración sin guardar)

No es eliminar: es advertir que se perderá trabajo no guardado. Es una familia de wording distinta a §1 — no mezclar el patrón.

| Pieza | ES | EN |
|---|---|---|
| Título | *Advertencia: tienes cambios sin guardar* | *Warning: you have unsaved changes* |
| Cuerpo | *Si continúas, se perderá "{nombre}"…* | *If you continue, "{name}" will be lost…* |
| CTA primario | Verbo de producto + objeto, ej. *"Usar esta versión y perder los cambios actuales"* | *"Use this version and lose current changes"* |
| CTA secundario | *"No continuar y conservar los cambios actuales"* | *"Don't continue and keep current changes"* |

Nombre vacío → *"Borrador sin nombre"* / *"Untitled draft"*.

**Prohibido:** título con el nombre del objeto; CTAs cortos y ambiguos ("Sí"/"No"); preguntas en el título.

## 3. Convención de llaves (keys)

Si el proyecto ya tiene un archivo de strings/i18n con convención propia, respétala siempre. Si no existe convención todavía, proponer (y confirmar con el usuario antes de escalarla):

```
simon.<módulo>.<acción>.title
simon.<módulo>.<acción>.body
simon.<módulo>.<acción>.ctaPrimary
simon.<módulo>.<acción>.ctaSecondary
```

Ej.: `simon.core.deleteRule.title`, `simon.integrations.disconnectSource.body`.

## 4. Casos propios de Simon a tener en cuenta (checklist de cobertura)

- Eliminar una regla de negocio o cognitiva (Knowledge Core)
- Desconectar/reingresar una fuente de conocimiento (Neo4j / Qdrant)
- Borrar un hilo de conversación o de decisión
- Revertir o desactivar una automatización que ya actuó en una herramienta externa
- Vaciar un espacio de trabajo u organización completa
- Reemplazar/sobrescribir una configuración sin guardar (patrón §2, no §1)
