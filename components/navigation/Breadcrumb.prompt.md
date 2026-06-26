Path trail for hierarchical navigation. Last item is the current page (non-interactive).

```jsx
<Breadcrumb items={[
  {label:'Acme', href:'#', icon:<HomeIcon/>},
  {label:'Governance', href:'#'},
  {label:'Decisiones', href:'#'},
  {label:'Q3 · Proveedor cloud'},
]} />
```

Custom separator via `separator` (e.g. `›`).
