Multi-series line chart, pure SVG, with value axis, area fill, smoothing and legend.

```jsx
<LineChart title="Confianza media por trimestre"
  categories={['Q1','Q2','Q3','Q4']}
  series={[
    {name:'CORE', data:[62,68,74,81]},
    {name:'THINK', data:[40,52,58,63]},
  ]} />
```
