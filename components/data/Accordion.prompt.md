Expandable stacked sections. `single` keeps one open, `multiple` allows many.

```jsx
<Accordion type="single" defaultValue="gov" numbered items={[
  {value:'gov', title:'¿Cómo se gobierna una decisión?', content:'Cada decisión se versiona y traza a su evidencia.'},
  {value:'mem', title:'¿Qué recuerda el sistema?', content:'Lecciones pasadas, indexadas por contexto.'},
]} />
```
