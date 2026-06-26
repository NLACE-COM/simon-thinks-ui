Single-choice control. Controlled with `value` / `onChange`. Options are strings or `{ value, label, description, disabled }`.

```jsx
<RadioGroup value={plan} onChange={setPlan}
  options={[
    {value:'light', label:'LIGHT', description:'Equipos pequeños'},
    {value:'core',  label:'CORE',  description:'Gobernanza completa'},
    {value:'enterprise', label:'ENTERPRISE'},
  ]} />
```

`orientation="horizontal"` for short inline sets.
