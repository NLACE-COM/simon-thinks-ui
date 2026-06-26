Text field with label, hint, error state and optional inline icons.

```jsx
<Input label="Organización" placeholder="Acme Inc." required />
<Input label="Buscar conocimiento" leadingIcon={<SearchIcon/>} />
<Input label="Email" error="Formato no válido" defaultValue="x@" />
```

Props: `label`, `hint`, `error`, `required`, `leadingIcon`, `trailingIcon`, plus all native input props.
