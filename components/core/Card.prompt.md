Surface container with optional header. Quiet by default; `accent` marks the active node, `interactive` adds hover lift.

```jsx
<Card title="Memoria" subtitle="142 lecciones indexadas" action={<Badge variant="accent">CORE</Badge>}>
  …
</Card>
<Card accent interactive elevation="raised">…</Card>
```

Props: `title`, `subtitle`, `action`, `padded`, `elevation` (`flat`/`raised`), `accent`, `interactive`.
