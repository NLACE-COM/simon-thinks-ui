Data table with sticky header, hover/striped rows and controlled column sorting. Use `render` for custom cells (badges, mono ids), `align:'right'` for numbers.

```jsx
<Table
  columns={[
    {key:'decision', header:'Decisión'},
    {key:'module', header:'Módulo', render:v=><Tag selected>{v}</Tag>},
    {key:'confidence', header:'Confianza', align:'right', sortable:true},
    {key:'status', header:'Estado', render:v=><Badge variant="success" dot>{v}</Badge>},
  ]}
  data={rows} sortBy={by} sortDir={dir} onSort={(k,d)=>setSort(k,d)} rowKey="id" />
```
