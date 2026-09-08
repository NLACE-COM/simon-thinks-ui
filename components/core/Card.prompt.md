Surface container with optional header and footer. Quiet by default; `accent` marks the active node, `interactive` adds hover lift.

```jsx
<Card title="Memoria" subtitle="142 lecciones indexadas" action={<Badge variant="accent">CORE</Badge>}>
  …
</Card>
<Card accent interactive elevation="raised">…</Card>

// Footer: one CTA, or the confirm/dismiss pair
<Card title="Invitación" footer={<Button>Crear invitación</Button>}>…</Card>
<Card title="Descartar" footer={<><Button variant="ghost">Cancelar</Button><Button>Acción</Button></>}>…</Card>
```

Props: `title`, `subtitle`, `action`, `footer`, `padded`, `elevation` (`flat`/`raised`), `accent`, `interactive`.

**Layout rule — equal heights.** Two or more Cards side by side must share the same
height, matched to the tallest. Independent heights leave each CTA at a different
offset and the row reads as disordered. Use `CardGrid`, or any `grid`/`flex`
container with `align-items: stretch` (never `items-start`). The footer pins to the
bottom on its own via `margin-top: auto`.

```jsx
<CardGrid>
  <Card title="A" footer={<Button>Ver</Button>}>Texto corto.</Card>
  <Card title="B" footer={<Button>Ver</Button>}>Un texto bastante más largo que empuja la altura de toda la fila.</Card>
</CardGrid>
```

Exception: a card that must be taller by design (a highlighted plan) goes outside
the row — don't break the equality inside it.

Figma parity: `showFooter` / `showSecondaryAction` are Figma-only booleans (Figma
needs a toggle where React just checks whether `footer` was passed). The `hover`
variant maps to `.st-card--interactive:hover`, not to a prop.
