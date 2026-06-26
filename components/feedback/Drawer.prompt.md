Edge-anchored sliding panel (sheet). Controlled with `open` / `onClose`; closes on Escape and overlay click.

```jsx
<Drawer open={open} onClose={close} side="right" eyebrow="Filtros" title="Refinar decisiones"
  footer={<Button onClick={apply}>Aplicar</Button>}>
  …contenido del panel…
</Drawer>
```

Sides: `right` (default) · `left` · `bottom`.
