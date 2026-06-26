Dropdown menu anchored to a trigger. Opens on click; closes on outside-click, Escape or selection. Items can be actions, `separator`, or `label` rows.

```jsx
<Menu trigger={<IconButton label="opciones"><MoreIcon/></IconButton>}
  align="end"
  items={[
    {type:'label', label:'Decisión'},
    {label:'Duplicar', icon:<CopyIcon/>, shortcut:'⌘D', onSelect:dup},
    {label:'Exportar', icon:<DownloadIcon/>},
    {type:'separator'},
    {label:'Eliminar', icon:<TrashIcon/>, danger:true, onSelect:del},
  ]} />
```
