Controlled tab strip. `underline` for page nav, `pills` for compact segmented control.

```jsx
const [tab, setTab] = React.useState('memoria');
<Tabs value={tab} onChange={setTab} items={[
  {value:'memoria', label:'Memoria', count:142},
  {value:'contexto', label:'Contexto'},
  {value:'decisiones', label:'Decisiones', count:8},
]} />
```

Props: `items` (`{value,label,icon?,count?}`), `value`, `onChange`, `variant` (`underline`/`pills`).
