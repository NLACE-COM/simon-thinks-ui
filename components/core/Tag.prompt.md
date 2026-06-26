Monospace chip for node IDs, module filters, and knowledge tags. Selectable and removable.

```jsx
<Tag>node://core/think</Tag>
<Tag selected onClick={toggle}>CONTEXT</Tag>
<Tag onRemove={() => drop(id)}>finanzas-2024</Tag>
```

Props: `selected`, `onClick` (makes it interactive), `onRemove` (adds ×).
