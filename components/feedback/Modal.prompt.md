Centered dialog with overlay. Controlled with `open` / `onClose`. Closes on Escape and overlay click. Use `footer` for actions, `eyebrow` for a mono label.

```jsx
<Modal open={open} onClose={close} eyebrow="Decisión · Q3" title="Registrar decisión"
  footer={<><Button variant="ghost" onClick={close}>Cancelar</Button><Button onClick={save}>Registrar</Button></>}>
  Esta acción versiona la decisión y la hace trazable.
</Modal>
```

Sizes: `sm` 380 · `md` 480 · `lg` 640.
