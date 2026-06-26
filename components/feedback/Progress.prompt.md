Progress feedback — linear `Progress` and circular `ProgressRing`. Variants map to the status palette; `indeterminate` for unknown-duration work.

```jsx
<Progress label="Indexando memoria" value={62} showValue />
<Progress variant="danger" value={28} size="sm" />
<Progress indeterminate label="Sincronizando" />
<ProgressRing value={87} variant="accent" />   // confidence gauge
```
