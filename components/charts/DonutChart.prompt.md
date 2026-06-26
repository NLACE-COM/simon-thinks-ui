Donut chart with optional centered value and percentage legend.

```jsx
<DonutChart title="Decisiones por estado" centerValue="184" centerLabel="total"
  data={[
    {label:'Aprobadas', value:120, color:'var(--green-500)'},
    {label:'En revisión', value:44, color:'var(--amber-500)'},
    {label:'Bloqueadas', value:20, color:'var(--red-500)'},
  ]} />
```
