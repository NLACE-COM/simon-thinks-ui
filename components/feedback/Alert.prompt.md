Inline contextual message using the status palette. `info` neutral, `success` / `warning` / `danger` for outcomes. Dismissible with `onClose`.

```jsx
<Alert variant="success" title="Decisión registrada">Trazable a 3 fuentes.</Alert>
<Alert variant="danger" title="Política incumplida" onClose={dismiss}>El SLA no cubre region failover.</Alert>
```

Variants: `info` · `success` · `warning` · `danger`. Props: `title`, `icon`, `onClose`.
