Transient notification with a colored accent bar. Place inside a `ToastStack` for positioning/stacking.

```jsx
<ToastStack position="bottom-right">
  <Toast variant="success" title="Decisión registrada" description="Versionada y trazable." onClose={dismiss} />
  <Toast variant="default" title="Sincronizando módulos" action="Ver" onAction={open} />
</ToastStack>
```

Variants: `default` (violet) · `info` · `success` · `warning` · `danger`. Positions: `bottom-right` · `top-right` · `top-center`.
