Primary action control — violet `primary` for the main action, `secondary`/`ghost` for the rest, `danger` for destructive. Use exactly one primary per view.

```jsx
<Button variant="primary" size="md" onClick={save}>Guardar decisión</Button>
<Button variant="secondary" leadingIcon={<PlusIcon/>}>Nuevo módulo</Button>
<Button variant="ghost" size="sm">Cancelar</Button>
<Button variant="primary" loading>Procesando</Button>
```

Variants: `primary` (violet), `secondary` (ink outline), `ghost` (text), `danger`.
Sizes: `sm` 32 · `md` 40 · `lg` 48. Props: `block`, `leadingIcon`, `trailingIcon`, `loading`, `disabled`, `as="a"`.
