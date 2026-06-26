Signature SIMON THINKS node. Renders a cognitive module (THINK · CORE · CUSTOM · LIGHT) as an interlocking card. Modules activate only when needed — `active` for the live one, `idle` to dim dormant ones.

```jsx
<ModuleNode module="think"  name="THINK"  description="Razona en presente" active />
<ModuleNode module="core"   name="CORE"   description="Memoria + contexto" />
<ModuleNode module="custom" name="CUSTOM" description="Flujos a medida" idle />
<ModuleNode module="light"  name="LIGHT"  description="Sólo lo esencial" idle />
```

Props: `module` (selects glyph), `name`, `description`, `active`, `idle`, `status`, `onClick`.
