/* @ds-bundle: {"format":3,"namespace":"SIMONTHINKSDesignSystem_ae45ac","components":[{"name":"ModuleNode","sourcePath":"components/brand/ModuleNode.jsx"},{"name":"BarChart","sourcePath":"components/charts/BarChart.jsx"},{"name":"DonutChart","sourcePath":"components/charts/DonutChart.jsx"},{"name":"LineChart","sourcePath":"components/charts/LineChart.jsx"},{"name":"Sparkline","sourcePath":"components/charts/Sparkline.jsx"},{"name":"CHART_COLORS","sourcePath":"components/charts/chartUtils.jsx"},{"name":"Legend","sourcePath":"components/charts/chartUtils.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/core/AvatarGroup.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/data/Accordion.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Drawer","sourcePath":"components/feedback/Drawer.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"ProgressRing","sourcePath":"components/feedback/Progress.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Menu","sourcePath":"components/navigation/Menu.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/ModuleNode.jsx":"7ff26badfac8","components/charts/BarChart.jsx":"eb195634e317","components/charts/DonutChart.jsx":"f1bc9a47d988","components/charts/LineChart.jsx":"aa6d75ab5c4a","components/charts/Sparkline.jsx":"c25e2a555e98","components/charts/chartUtils.jsx":"004e9de9eb57","components/core/Avatar.jsx":"16a129fa8eb5","components/core/AvatarGroup.jsx":"bc5f93fe6980","components/core/Badge.jsx":"b377632341dd","components/core/Button.jsx":"fe91116855b5","components/core/Card.jsx":"12622af2a51f","components/core/IconButton.jsx":"67f0a2c7d160","components/core/Tag.jsx":"510bbcce6b5f","components/data/Accordion.jsx":"bd236b972a6e","components/data/Table.jsx":"7ff61ff9afa1","components/feedback/Alert.jsx":"6076d2c7b850","components/feedback/Drawer.jsx":"0ca3b84603f5","components/feedback/Modal.jsx":"a00c7ae292f2","components/feedback/Progress.jsx":"5d55a53da3cf","components/feedback/Skeleton.jsx":"fcf3a33ac9ac","components/feedback/Toast.jsx":"f0accbb62264","components/feedback/Tooltip.jsx":"328999359133","components/forms/Checkbox.jsx":"a73b15f119ca","components/forms/Input.jsx":"a2c4d56e763c","components/forms/RadioGroup.jsx":"fb6d99bbe1f1","components/forms/Select.jsx":"6b8293aa20fc","components/forms/Switch.jsx":"36b950eacb59","components/icons/Icon.jsx":"56a370ba4db7","components/navigation/Breadcrumb.jsx":"6b70c7f8be38","components/navigation/Menu.jsx":"833001f006e9","components/navigation/Pagination.jsx":"3dfaf6b703ee","components/navigation/Tabs.jsx":"ee8283a152fa","integrations/tailwind.preset.js":"ebe3fa5ae295"},"inlinedExternals":[],"unexposedExports":[{"name":"ensureChartCss","sourcePath":"components/charts/chartUtils.jsx"},{"name":"niceMax","sourcePath":"components/charts/chartUtils.jsx"}]} */

(() => {

const __ds_ns = (window.SIMONTHINKSDesignSystem_ae45ac = window.SIMONTHINKSDesignSystem_ae45ac || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ModuleNode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.st-module{
  font-family:var(--font-body);position:relative;box-sizing:border-box;
  display:flex;flex-direction:column;gap:var(--space-3);
  background:var(--bg-surface);border:1px solid var(--border-default);
  border-radius:var(--radius-lg);padding:var(--space-5);min-width:180px;
  transition:border-color var(--duration-base) var(--ease-out),box-shadow var(--duration-base) var(--ease-out),transform var(--duration-base) var(--ease-out);
}
.st-module--interactive{cursor:pointer}
.st-module--interactive:hover{transform:translateY(-2px);box-shadow:var(--shadow-md);border-color:var(--border-strong)}
.st-module--active{border-color:transparent;box-shadow:var(--shadow-glow);background:var(--bg-accent-soft)}
.st-module--idle{opacity:.72}
.st-module__top{display:flex;align-items:center;justify-content:space-between;gap:var(--space-2)}
.st-module__glyph{
  width:36px;height:36px;border-radius:var(--radius-md);flex:none;
  display:flex;align-items:center;justify-content:center;
  background:var(--ink-100);color:var(--ink-500);
}
.st-module--active .st-module__glyph{background:var(--violet-500);color:#fff}
.st-module__glyph svg{width:18px;height:18px}
.st-module__id{font-family:var(--font-mono);font-size:var(--text-2xs);color:var(--text-muted);letter-spacing:var(--tracking-wide)}
.st-module__name{font-family:var(--font-display);font-weight:var(--weight-semibold);font-size:var(--text-lg);letter-spacing:var(--tracking-tight);color:var(--text-primary);margin:0;line-height:1}
.st-module--active .st-module__name{color:var(--violet-700)}
.st-module__desc{font-size:var(--text-sm);color:var(--text-secondary);line-height:var(--leading-snug);margin:0}
.st-module__status{display:inline-flex;align-items:center;gap:var(--space-2);font-size:var(--text-2xs);font-family:var(--font-mono);letter-spacing:var(--tracking-wide);text-transform:uppercase;color:var(--text-muted)}
.st-module__dot{width:7px;height:7px;border-radius:var(--radius-pill);background:var(--ink-300)}
.st-module--active .st-module__dot{background:var(--violet-500)}
.st-module--active .st-module__status{color:var(--violet-600)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-module-css')) {
  const s = document.createElement('style');
  s.id = 'st-module-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const GLYPHS = {
  think: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5a3 3 0 0 0-3 3 2.5 2.5 0 0 0-2 4 2.5 2.5 0 0 0 1 4.5A2.5 2.5 0 0 0 12 19Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5a3 3 0 0 1 3 3 2.5 2.5 0 0 1 2 4 2.5 2.5 0 0 1-1 4.5A2.5 2.5 0 0 1 12 19Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14"
  })),
  core: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2 2 7l10 5 10-5-10-5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12l10 5 10-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 17l10 5 10-5"
  })),
  custom: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "8",
    x2: "20",
    y2: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "16",
    x2: "20",
    y2: "16"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "2.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "16",
    r: "2.4"
  })),
  light: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 8 2 22"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 15H9"
  }))
};
function ModuleNode({
  module,
  name,
  description,
  active = false,
  idle = false,
  status,
  onClick,
  className = '',
  ...rest
}) {
  const key = (module || name || '').toString().toLowerCase();
  const glyph = GLYPHS[key] || GLYPHS.core;
  const state = active ? 'active' : idle ? 'idle' : '';
  const cls = ['st-module', state ? 'st-module--' + state : '', onClick ? 'st-module--interactive' : '', className].filter(Boolean).join(' ');
  const statusLabel = status || (active ? 'Activo' : 'En espera');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "st-module__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-module__glyph"
  }, glyph), /*#__PURE__*/React.createElement("span", {
    className: "st-module__id"
  }, (name || module || '').toString().toUpperCase())), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "st-module__name"
  }, name || module), description && /*#__PURE__*/React.createElement("p", {
    className: "st-module__desc",
    style: {
      marginTop: 'var(--space-2)'
    }
  }, description)), /*#__PURE__*/React.createElement("span", {
    className: "st-module__status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-module__dot"
  }), statusLabel));
}
Object.assign(__ds_scope, { ModuleNode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ModuleNode.jsx", error: String((e && e.message) || e) }); }

// components/charts/Sparkline.jsx
try { (() => {
const CSS = `
.st-spark{display:inline-block;vertical-align:middle}
.st-spark__path{fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-spark-css')) {
  const s = document.createElement('style');
  s.id = 'st-spark-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Sparkline({
  values = [],
  width = 120,
  height = 32,
  color = 'var(--violet-500)',
  area = true,
  className = ''
}) {
  const n = values.length;
  if (n < 2) return /*#__PURE__*/React.createElement("svg", {
    className: ['st-spark', className].filter(Boolean).join(' '),
    width: width,
    height: height
  });
  const min = Math.min(...values),
    max = Math.max(...values);
  const span = max - min || 1;
  const pad = 3;
  const x = i => pad + i * (width - pad * 2) / (n - 1);
  const y = v => pad + (height - pad * 2) * (1 - (v - min) / span);
  const pts = values.map((v, i) => [x(i), y(v)]);
  const line = 'M ' + pts.map(p => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' L ');
  return /*#__PURE__*/React.createElement("svg", {
    className: ['st-spark', className].filter(Boolean).join(' '),
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    role: "img"
  }, area && /*#__PURE__*/React.createElement("path", {
    d: `${line} L ${x(n - 1)} ${height - pad} L ${x(0)} ${height - pad} Z`,
    fill: color,
    opacity: "0.12",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    className: "st-spark__path",
    d: line,
    stroke: color
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x(n - 1),
    cy: y(values[n - 1]),
    r: "2.5",
    fill: color
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/charts/chartUtils.jsx
try { (() => {
/* Shared brand chart palette + tiny helpers. Not a component itself. */
const CHART_COLORS = ['var(--violet-500)', 'var(--blue-500)', 'var(--green-500)', 'var(--amber-500)', 'var(--context-500)', 'var(--violet-300)'];
const BASE_CSS = `
.st-chart{font-family:var(--font-body);color:var(--text-primary)}
.st-chart__title{font-size:var(--text-sm);font-weight:var(--weight-semibold);letter-spacing:var(--tracking-tight);margin:0 0 var(--space-3)}
.st-chart__axis{font-family:var(--font-mono);font-size:10px;fill:var(--text-muted)}
.st-chart__grid{stroke:var(--border-subtle);stroke-width:1}
.st-chart__legend{display:flex;flex-wrap:wrap;gap:var(--space-2) var(--space-4);margin-top:var(--space-3)}
.st-chart__lg{display:inline-flex;align-items:center;gap:6px;font-size:var(--text-xs);color:var(--text-secondary)}
.st-chart__sw{width:10px;height:10px;border-radius:3px;flex:none}
`;
function ensureChartCss() {
  if (typeof document !== 'undefined' && !document.getElementById('st-chart-base-css')) {
    const s = document.createElement('style');
    s.id = 'st-chart-base-css';
    s.textContent = BASE_CSS;
    document.head.appendChild(s);
  }
}
function niceMax(v) {
  if (v <= 0) return 1;
  const pow = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / pow;
  const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
  return step * pow;
}
function Legend({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "st-chart__legend"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "st-chart__lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-chart__sw",
    style: {
      background: it.color
    }
  }), it.label)));
}
Object.assign(__ds_scope, { CHART_COLORS, ensureChartCss, niceMax, Legend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/chartUtils.jsx", error: String((e && e.message) || e) }); }

// components/charts/BarChart.jsx
try { (() => {
const CSS = `
.st-bar__rect{transition:opacity var(--duration-fast) var(--ease-out)}
.st-bar:hover .st-bar__rect{opacity:.82}
.st-bar__val{font-family:var(--font-mono);font-size:10px;fill:var(--text-secondary)}
.st-bar__lbl{font-size:11px;fill:var(--text-secondary)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-barchart-css')) {
  const s = document.createElement('style');
  s.id = 'st-barchart-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function BarChart({
  data = [],
  title,
  height = 200,
  showValues = true,
  color,
  formatValue = v => v,
  className = ''
}) {
  __ds_scope.ensureChartCss();
  const W = 480,
    H = height;
  const padL = 8,
    padR = 8,
    padT = showValues ? 22 : 10,
    padB = 28;
  const n = data.length || 1;
  const maxV = __ds_scope.niceMax(Math.max(1, ...data.map(d => d.value)));
  const plotW = W - padL - padR,
    plotH = H - padT - padB;
  const gap = plotW / n;
  const bw = Math.min(46, gap * 0.62);
  return /*#__PURE__*/React.createElement("div", {
    className: ['st-chart', className].filter(Boolean).join(' ')
  }, title && /*#__PURE__*/React.createElement("p", {
    className: "st-chart__title"
  }, title), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    width: "100%",
    preserveAspectRatio: "xMidYMid meet",
    role: "img"
  }, [0, 0.5, 1].map((t, i) => {
    const y = padT + plotH * t;
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      className: "st-chart__grid",
      x1: padL,
      y1: y,
      x2: W - padR,
      y2: y
    });
  }), data.map((d, i) => {
    const h = d.value / maxV * plotH;
    const x = padL + gap * i + (gap - bw) / 2;
    const y = padT + plotH - h;
    const c = d.color || color || __ds_scope.CHART_COLORS[i % __ds_scope.CHART_COLORS.length];
    return /*#__PURE__*/React.createElement("g", {
      key: i,
      className: "st-bar"
    }, /*#__PURE__*/React.createElement("rect", {
      className: "st-bar__rect",
      x: x,
      y: y,
      width: bw,
      height: Math.max(1, h),
      rx: "4",
      fill: c
    }), showValues && /*#__PURE__*/React.createElement("text", {
      className: "st-bar__val",
      x: x + bw / 2,
      y: y - 6,
      textAnchor: "middle"
    }, formatValue(d.value)), /*#__PURE__*/React.createElement("text", {
      className: "st-bar__lbl",
      x: x + bw / 2,
      y: H - 9,
      textAnchor: "middle"
    }, d.label));
  })));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/DonutChart.jsx
try { (() => {
const CSS = `
.st-donut__seg{transition:opacity var(--duration-fast) var(--ease-out)}
.st-donut:hover .st-donut__seg{opacity:.6}
.st-donut__seg:hover{opacity:1 !important}
.st-donut__center{display:flex;flex-direction:column;align-items:center;justify-content:center}
.st-donut__num{font-family:var(--font-display);font-weight:var(--weight-semibold);letter-spacing:var(--tracking-tight);color:var(--text-primary);line-height:1}
.st-donut__cap{font-family:var(--font-mono);font-size:var(--text-2xs);color:var(--text-muted);letter-spacing:var(--tracking-wide)}
.st-donut__wrap{position:relative;display:inline-flex}
.st-donut__overlay{position:absolute;inset:0;pointer-events:none}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-donut-css')) {
  const s = document.createElement('style');
  s.id = 'st-donut-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function DonutChart({
  data = [],
  size = 180,
  thickness = 26,
  title,
  centerValue,
  centerLabel,
  legend = true,
  className = ''
}) {
  __ds_scope.ensureChartCss();
  const total = data.reduce((a, d) => a + d.value, 0) || 1;
  const r = (size - thickness) / 2;
  const circ = 2 * Math.PI * r;
  let acc = 0;
  return /*#__PURE__*/React.createElement("div", {
    className: ['st-chart', className].filter(Boolean).join(' ')
  }, title && /*#__PURE__*/React.createElement("p", {
    className: "st-chart__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-donut__wrap st-donut",
    style: {
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    role: "img"
  }, /*#__PURE__*/React.createElement("g", {
    transform: `rotate(-90 ${size / 2} ${size / 2})`
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--bg-subtle)",
    strokeWidth: thickness
  }), data.map((d, i) => {
    const frac = d.value / total;
    const dash = frac * circ;
    const c = d.color || __ds_scope.CHART_COLORS[i % __ds_scope.CHART_COLORS.length];
    const seg = /*#__PURE__*/React.createElement("circle", {
      key: i,
      className: "st-donut__seg",
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: c,
      strokeWidth: thickness,
      strokeDasharray: `${dash} ${circ - dash}`,
      strokeDashoffset: -acc * circ,
      strokeLinecap: "butt"
    });
    acc += frac;
    return seg;
  }))), (centerValue != null || centerLabel) && /*#__PURE__*/React.createElement("div", {
    className: "st-donut__overlay st-donut__center"
  }, centerValue != null && /*#__PURE__*/React.createElement("span", {
    className: "st-donut__num",
    style: {
      fontSize: size * 0.2
    }
  }, centerValue), centerLabel && /*#__PURE__*/React.createElement("span", {
    className: "st-donut__cap"
  }, centerLabel))), legend && /*#__PURE__*/React.createElement(__ds_scope.Legend, {
    items: data.map((d, i) => ({
      label: `${d.label} · ${Math.round(d.value / total * 100)}%`,
      color: d.color || __ds_scope.CHART_COLORS[i % __ds_scope.CHART_COLORS.length]
    }))
  })));
}
Object.assign(__ds_scope, { DonutChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/DonutChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/LineChart.jsx
try { (() => {
const CSS = `
.st-line__path{fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}
.st-line__dot{transition:r var(--duration-fast) var(--ease-out)}
.st-line__cat{font-size:11px;fill:var(--text-secondary)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-linechart-css')) {
  const s = document.createElement('style');
  s.id = 'st-linechart-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function smoothPath(pts) {
  if (pts.length < 2) return '';
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i],
      [x1, y1] = pts[i + 1];
    const cx = (x0 + x1) / 2;
    d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
  }
  return d;
}
function LineChart({
  series = [],
  categories = [],
  title,
  height = 220,
  area = true,
  smooth = true,
  showDots = true,
  legend = true,
  className = ''
}) {
  __ds_scope.ensureChartCss();
  const W = 520,
    H = height;
  const padL = 30,
    padR = 12,
    padT = 12,
    padB = 26;
  const plotW = W - padL - padR,
    plotH = H - padT - padB;
  const allVals = series.flatMap(s => s.data);
  const maxV = __ds_scope.niceMax(Math.max(1, ...allVals));
  const len = Math.max(...series.map(s => s.data.length), 1);
  const xAt = i => padL + (len === 1 ? plotW / 2 : plotW * i / (len - 1));
  const yAt = v => padT + plotH - v / maxV * plotH;
  return /*#__PURE__*/React.createElement("div", {
    className: ['st-chart', className].filter(Boolean).join(' ')
  }, title && /*#__PURE__*/React.createElement("p", {
    className: "st-chart__title"
  }, title), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    width: "100%",
    preserveAspectRatio: "xMidYMid meet",
    role: "img"
  }, [0, 0.25, 0.5, 0.75, 1].map((t, i) => {
    const y = padT + plotH * t;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("line", {
      className: "st-chart__grid",
      x1: padL,
      y1: y,
      x2: W - padR,
      y2: y
    }), /*#__PURE__*/React.createElement("text", {
      className: "st-chart__axis",
      x: padL - 6,
      y: y + 3,
      textAnchor: "end"
    }, Math.round(maxV * (1 - t))));
  }), series.map((s, si) => {
    const c = s.color || __ds_scope.CHART_COLORS[si % __ds_scope.CHART_COLORS.length];
    const pts = s.data.map((v, i) => [xAt(i), yAt(v)]);
    const path = smooth ? smoothPath(pts) : 'M ' + pts.map(p => p.join(' ')).join(' L ');
    return /*#__PURE__*/React.createElement("g", {
      key: si
    }, area && /*#__PURE__*/React.createElement("path", {
      d: `${path} L ${xAt(len - 1)} ${padT + plotH} L ${xAt(0)} ${padT + plotH} Z`,
      fill: c,
      opacity: "0.1",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      className: "st-line__path",
      d: path,
      stroke: c
    }), showDots && pts.map((p, i) => /*#__PURE__*/React.createElement("circle", {
      key: i,
      className: "st-line__dot",
      cx: p[0],
      cy: p[1],
      r: "3",
      fill: "var(--bg-surface)",
      stroke: c,
      strokeWidth: "2"
    })));
  }), categories.map((cat, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    className: "st-line__cat",
    x: xAt(i),
    y: H - 8,
    textAnchor: "middle"
  }, cat))), legend && series.length > 1 && /*#__PURE__*/React.createElement(__ds_scope.Legend, {
    items: series.map((s, i) => ({
      label: s.name,
      color: s.color || __ds_scope.CHART_COLORS[i % __ds_scope.CHART_COLORS.length]
    }))
  }));
}
Object.assign(__ds_scope, { LineChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/LineChart.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.st-avatar{
  display:inline-flex;align-items:center;justify-content:center;flex:none;
  font-family:var(--font-body);font-weight:var(--weight-semibold);
  background:var(--violet-100);color:var(--violet-700);
  border-radius:var(--radius-pill);overflow:hidden;user-select:none;
  box-shadow:inset 0 0 0 1px rgba(11,11,15,.06);
}
.st-avatar img{width:100%;height:100%;object-fit:cover;display:block}
.st-avatar--sm{width:28px;height:28px;font-size:var(--text-2xs)}
.st-avatar--md{width:36px;height:36px;font-size:var(--text-xs)}
.st-avatar--lg{width:48px;height:48px;font-size:var(--text-sm)}
.st-avatar--square{border-radius:var(--radius-md)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-avatar-css')) {
  const s = document.createElement('style');
  s.id = 'st-avatar-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
}
function Avatar({
  name = '',
  src,
  size = 'md',
  square = false,
  className = '',
  ...rest
}) {
  const cls = ['st-avatar', `st-avatar--${size}`, square ? 'st-avatar--square' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/AvatarGroup.jsx
try { (() => {
const CSS = `
.st-avatargroup{display:inline-flex;align-items:center}
.st-avatargroup .st-avatar{box-shadow:0 0 0 2px var(--bg-surface),inset 0 0 0 1px rgba(11,11,15,.06)}
.st-avatargroup__more{display:inline-flex;align-items:center;justify-content:center;flex:none;
  font-family:var(--font-body);font-weight:var(--weight-semibold);background:var(--ink-100);color:var(--text-secondary);
  border-radius:var(--radius-pill);box-shadow:0 0 0 2px var(--bg-surface),inset 0 0 0 1px rgba(11,11,15,.06)}
.st-avatargroup__more--sm{width:28px;height:28px;font-size:var(--text-2xs)}
.st-avatargroup__more--md{width:36px;height:36px;font-size:var(--text-xs)}
.st-avatargroup__more--lg{width:48px;height:48px;font-size:var(--text-sm)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-avatargroup-css')) {
  const s = document.createElement('style');
  s.id = 'st-avatargroup-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const OVERLAP = {
  sm: -8,
  md: -10,
  lg: -14
};
function AvatarGroup({
  avatars = [],
  max = 4,
  size = 'md',
  className = ''
}) {
  const shown = avatars.slice(0, max);
  const extra = avatars.length - shown.length;
  const ml = OVERLAP[size];
  return /*#__PURE__*/React.createElement("div", {
    className: ['st-avatargroup', className].filter(Boolean).join(' ')
  }, shown.map((a, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : ml,
      zIndex: shown.length - i
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: a.name,
    src: a.src,
    size: size
  }))), extra > 0 && /*#__PURE__*/React.createElement("span", {
    className: `st-avatargroup__more st-avatargroup__more--${size}`,
    style: {
      marginLeft: ml
    }
  }, "+", extra));
}
Object.assign(__ds_scope, { AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AvatarGroup.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.st-badge{
  font-family:var(--font-body);font-weight:var(--weight-semibold);
  display:inline-flex;align-items:center;gap:var(--space-1);
  font-size:var(--text-2xs);line-height:1;letter-spacing:var(--tracking-wide);
  padding:3px var(--space-2);border-radius:var(--radius-sm);border:1px solid transparent;
}
.st-badge--dot::before{content:"";width:6px;height:6px;border-radius:var(--radius-pill);background:currentColor;flex:none}
.st-badge--neutral{background:var(--bg-subtle);color:var(--text-secondary);border-color:var(--border-subtle)}
.st-badge--accent{background:var(--bg-accent-soft);color:var(--text-accent);border-color:color-mix(in srgb,var(--violet-500) 22%,transparent)}
.st-badge--solid{background:var(--bg-accent);color:var(--text-on-accent)}
.st-badge--success{background:var(--green-soft);color:#1c7a52}
.st-badge--warning{background:var(--amber-soft);color:#946312}
.st-badge--danger{background:var(--red-soft);color:#a8322f}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-badge-css')) {
  const s = document.createElement('style');
  s.id = 'st-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  children,
  variant = 'neutral',
  dot = false,
  className = '',
  ...rest
}) {
  const cls = ['st-badge', `st-badge--${variant}`, dot ? 'st-badge--dot' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once. Styling references design-system tokens (styles.css). */
const CSS = `
.st-btn{
  font-family:var(--font-body);font-weight:var(--weight-semibold);
  display:inline-flex;align-items:center;justify-content:center;gap:var(--space-2);
  border:1px solid transparent;border-radius:var(--radius-md);cursor:pointer;
  white-space:nowrap;text-decoration:none;line-height:1;
  transition:background var(--duration-fast) var(--ease-out),
             color var(--duration-fast) var(--ease-out),
             border-color var(--duration-fast) var(--ease-out),
             box-shadow var(--duration-fast) var(--ease-out),
             transform var(--duration-fast) var(--ease-out);
}
.st-btn:focus-visible{outline:none;box-shadow:var(--focus-ring)}
.st-btn:active{transform:translateY(0.5px)}
.st-btn[disabled]{opacity:.45;cursor:not-allowed;transform:none}

/* sizes */
.st-btn--sm{font-size:var(--text-sm);padding:0 var(--space-3);height:32px}
.st-btn--md{font-size:var(--text-sm);padding:0 var(--space-4);height:40px}
.st-btn--lg{font-size:var(--text-base);padding:0 var(--space-5);height:48px}

/* primary */
.st-btn--primary{background:var(--bg-accent);color:var(--text-on-accent)}
.st-btn--primary:hover:not([disabled]){background:var(--bg-accent-hover)}
.st-btn--primary:active:not([disabled]){background:var(--bg-accent-pressed)}

/* secondary (ink outline) */
.st-btn--secondary{background:var(--bg-surface);color:var(--text-primary);border-color:var(--border-default)}
.st-btn--secondary:hover:not([disabled]){border-color:var(--border-strong);background:var(--bg-subtle)}

/* ghost */
.st-btn--ghost{background:transparent;color:var(--text-primary)}
.st-btn--ghost:hover:not([disabled]){background:var(--bg-subtle)}

/* danger */
.st-btn--danger{background:var(--status-danger);color:#fff}
.st-btn--danger:hover:not([disabled]){filter:brightness(0.93)}

.st-btn--block{display:flex;width:100%}
.st-btn__spin{width:1em;height:1em;border-radius:50%;border:2px solid currentColor;border-top-color:transparent;animation:st-spin .7s linear infinite}
@keyframes st-spin{to{transform:rotate(360deg)}}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-button-css')) {
  const s = document.createElement('style');
  s.id = 'st-button-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  leadingIcon,
  trailingIcon,
  loading = false,
  disabled = false,
  as = 'button',
  className = '',
  ...rest
}) {
  const Tag = as;
  const cls = ['st-btn', `st-btn--${variant}`, `st-btn--${size}`, block ? 'st-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    disabled: Tag === 'button' ? disabled || loading : undefined,
    "aria-busy": loading || undefined
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "st-btn__spin",
    "aria-hidden": "true"
  }), !loading && leadingIcon, children && /*#__PURE__*/React.createElement("span", null, children), !loading && trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.st-card{
  font-family:var(--font-body);background:var(--bg-surface);
  border:1px solid var(--border-subtle);border-radius:var(--radius-lg);
  display:flex;flex-direction:column;
  transition:border-color var(--duration-base) var(--ease-out),box-shadow var(--duration-base) var(--ease-out),transform var(--duration-base) var(--ease-out);
}
.st-card--padded{padding:var(--space-5)}
.st-card--flat{box-shadow:none}
.st-card--raised{box-shadow:var(--shadow-md)}
.st-card--interactive{cursor:pointer}
.st-card--interactive:hover{border-color:var(--border-strong);box-shadow:var(--shadow-md);transform:translateY(-1px)}
.st-card--accent{border-color:color-mix(in srgb,var(--violet-500) 30%,transparent);box-shadow:var(--shadow-glow)}
.st-card__header{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);margin-bottom:var(--space-3)}
.st-card__title{font-weight:var(--weight-semibold);font-size:var(--text-md);color:var(--text-primary);letter-spacing:var(--tracking-tight);margin:0}
.st-card__sub{font-size:var(--text-sm);color:var(--text-secondary);margin:2px 0 0}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-card-css')) {
  const s = document.createElement('style');
  s.id = 'st-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  children,
  title,
  subtitle,
  action,
  padded = true,
  elevation = 'flat',
  accent = false,
  interactive = false,
  className = '',
  ...rest
}) {
  const cls = ['st-card', padded ? 'st-card--padded' : '', `st-card--${elevation}`, accent ? 'st-card--accent' : '', interactive ? 'st-card--interactive' : '', className].filter(Boolean).join(' ');
  const hasHeader = title || subtitle || action;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), hasHeader && /*#__PURE__*/React.createElement("div", {
    className: "st-card__header"
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("p", {
    className: "st-card__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "st-card__sub"
  }, subtitle)), action), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.st-iconbtn{
  display:inline-flex;align-items:center;justify-content:center;flex:none;
  border:1px solid transparent;border-radius:var(--radius-md);cursor:pointer;
  color:var(--text-secondary);background:transparent;
  transition:background var(--duration-fast) var(--ease-out),color var(--duration-fast) var(--ease-out),border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out);
}
.st-iconbtn:hover:not([disabled]){background:var(--bg-subtle);color:var(--text-primary)}
.st-iconbtn:focus-visible{outline:none;box-shadow:var(--focus-ring)}
.st-iconbtn[disabled]{opacity:.4;cursor:not-allowed}
.st-iconbtn--sm{width:32px;height:32px}
.st-iconbtn--md{width:40px;height:40px}
.st-iconbtn--lg{width:48px;height:48px}
.st-iconbtn--outline{border-color:var(--border-default);background:var(--bg-surface)}
.st-iconbtn--outline:hover:not([disabled]){border-color:var(--border-strong)}
.st-iconbtn--solid{background:var(--bg-accent);color:var(--text-on-accent)}
.st-iconbtn--solid:hover:not([disabled]){background:var(--bg-accent-hover);color:var(--text-on-accent)}
.st-iconbtn svg{width:1.15em;height:1.15em;font-size:var(--text-base)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-iconbtn-css')) {
  const s = document.createElement('style');
  s.id = 'st-iconbtn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['st-iconbtn', `st-iconbtn--${variant}`, `st-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.st-tag{
  font-family:var(--font-mono);font-weight:500;font-size:var(--text-xs);line-height:1;
  display:inline-flex;align-items:center;gap:var(--space-1);
  padding:5px var(--space-2);border-radius:var(--radius-sm);
  background:var(--bg-subtle);color:var(--text-secondary);border:1px solid var(--border-subtle);
  transition:border-color var(--duration-fast) var(--ease-out),color var(--duration-fast) var(--ease-out);
}
.st-tag--interactive{cursor:pointer}
.st-tag--interactive:hover{border-color:var(--border-strong);color:var(--text-primary)}
.st-tag--selected{background:var(--bg-accent-soft);color:var(--text-accent);border-color:color-mix(in srgb,var(--violet-500) 35%,transparent)}
.st-tag__x{display:inline-flex;cursor:pointer;opacity:.6;margin-left:2px}
.st-tag__x:hover{opacity:1}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-tag-css')) {
  const s = document.createElement('style');
  s.id = 'st-tag-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  className = '',
  ...rest
}) {
  const interactive = !!onClick || selected;
  const cls = ['st-tag', interactive ? 'st-tag--interactive' : '', selected ? 'st-tag--selected' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    onClick: onClick
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "st-tag__x",
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Accordion.jsx
try { (() => {
const CSS = `
.st-accordion{font-family:var(--font-body);display:flex;flex-direction:column;border:1px solid var(--border-default);
  border-radius:var(--radius-lg);overflow:hidden;background:var(--bg-surface)}
.st-accordion__item + .st-accordion__item{border-top:1px solid var(--border-subtle)}
.st-accordion__trigger{display:flex;align-items:center;gap:var(--space-3);width:100%;text-align:left;
  font-family:var(--font-body);font-size:var(--text-sm);font-weight:var(--weight-semibold);color:var(--text-primary);
  background:none;border:none;cursor:pointer;padding:var(--space-4) var(--space-5);
  transition:background var(--duration-fast) var(--ease-out)}
.st-accordion__trigger:hover{background:var(--bg-subtle)}
.st-accordion__num{font-family:var(--font-mono);font-size:var(--text-2xs);color:var(--text-muted);letter-spacing:var(--tracking-wide)}
.st-accordion__title{flex:1}
.st-accordion__chev{flex:none;color:var(--text-muted);transition:transform var(--duration-base) var(--ease-out)}
.st-accordion__item--open .st-accordion__chev{transform:rotate(180deg);color:var(--text-accent)}
.st-accordion__panel{overflow:hidden;display:grid;grid-template-rows:0fr;transition:grid-template-rows var(--duration-base) var(--ease-out)}
.st-accordion__item--open .st-accordion__panel{grid-template-rows:1fr}
.st-accordion__panel-inner{min-height:0;overflow:hidden}
.st-accordion__content{padding:0 var(--space-5) var(--space-4);font-size:var(--text-sm);color:var(--text-secondary);line-height:var(--leading-normal)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-accordion-css')) {
  const s = document.createElement('style');
  s.id = 'st-accordion-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Accordion({
  items = [],
  type = 'single',
  defaultValue,
  numbered = false,
  className = ''
}) {
  const init = defaultValue != null ? Array.isArray(defaultValue) ? defaultValue : [defaultValue] : [];
  const [open, setOpen] = React.useState(init);
  const toggle = value => {
    setOpen(prev => {
      const has = prev.includes(value);
      if (type === 'multiple') return has ? prev.filter(v => v !== value) : [...prev, value];
      return has ? [] : [value];
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ['st-accordion', className].filter(Boolean).join(' ')
  }, items.map((it, i) => {
    const isOpen = open.includes(it.value);
    return /*#__PURE__*/React.createElement("div", {
      key: it.value,
      className: ['st-accordion__item', isOpen ? 'st-accordion__item--open' : ''].filter(Boolean).join(' ')
    }, /*#__PURE__*/React.createElement("button", {
      className: "st-accordion__trigger",
      "aria-expanded": isOpen,
      onClick: () => toggle(it.value)
    }, numbered && /*#__PURE__*/React.createElement("span", {
      className: "st-accordion__num"
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      className: "st-accordion__title"
    }, it.title), /*#__PURE__*/React.createElement("svg", {
      className: "st-accordion__chev",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "6 9 12 15 18 9"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "st-accordion__panel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "st-accordion__panel-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "st-accordion__content"
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
const CSS = `
.st-table-wrap{font-family:var(--font-body);width:100%;overflow:auto;border:1px solid var(--border-default);
  border-radius:var(--radius-lg);background:var(--bg-surface)}
.st-table{width:100%;border-collapse:collapse;font-size:var(--text-sm)}
.st-table thead th{
  text-align:left;font-family:var(--font-mono);font-size:var(--text-2xs);font-weight:var(--weight-medium);
  letter-spacing:var(--tracking-wider);text-transform:uppercase;color:var(--text-muted);
  padding:var(--space-3) var(--space-4);background:var(--bg-subtle);border-bottom:1px solid var(--border-default);
  white-space:nowrap;position:sticky;top:0}
.st-table th.st-table--num,.st-table td.st-table--num{text-align:right;font-variant-numeric:tabular-nums}
.st-table tbody td{padding:var(--space-3) var(--space-4);border-bottom:1px solid var(--border-subtle);color:var(--text-primary);vertical-align:middle}
.st-table tbody tr:last-child td{border-bottom:none}
.st-table--hover tbody tr{transition:background var(--duration-fast) var(--ease-out)}
.st-table--hover tbody tr:hover{background:var(--bg-accent-soft)}
.st-table--striped tbody tr:nth-child(even){background:var(--bg-subtle)}
.st-table__sort{display:inline-flex;align-items:center;gap:4px;cursor:pointer;color:inherit;background:none;border:none;font:inherit;letter-spacing:inherit;text-transform:inherit;padding:0}
.st-table__sort:hover{color:var(--text-secondary)}
.st-table__sort svg{opacity:.5}
.st-table__sort--active{color:var(--text-accent)}
.st-table__sort--active svg{opacity:1}
.st-table__cell-mono{font-family:var(--font-mono);font-size:var(--text-2xs);color:var(--text-muted)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-table-css')) {
  const s = document.createElement('style');
  s.id = 'st-table-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Table({
  columns = [],
  data = [],
  hover = true,
  striped = false,
  sortBy,
  sortDir = 'asc',
  onSort,
  rowKey,
  className = ''
}) {
  const tcls = ['st-table', hover ? 'st-table--hover' : '', striped ? 'st-table--striped' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: ['st-table-wrap', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("table", {
    className: tcls
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(col => {
    const numCls = col.align === 'right' ? 'st-table--num' : '';
    if (col.sortable && onSort) {
      const active = sortBy === col.key;
      return /*#__PURE__*/React.createElement("th", {
        key: col.key,
        className: numCls
      }, /*#__PURE__*/React.createElement("button", {
        className: ['st-table__sort', active ? 'st-table__sort--active' : ''].filter(Boolean).join(' '),
        onClick: () => onSort(col.key, active && sortDir === 'asc' ? 'desc' : 'asc')
      }, col.header, /*#__PURE__*/React.createElement("svg", {
        width: "11",
        height: "11",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round"
      }, active && sortDir === 'desc' ? /*#__PURE__*/React.createElement("polyline", {
        points: "6 9 12 15 18 9"
      }) : /*#__PURE__*/React.createElement("polyline", {
        points: "6 15 12 9 18 15"
      }))));
    }
    return /*#__PURE__*/React.createElement("th", {
      key: col.key,
      className: numCls
    }, col.header);
  }))), /*#__PURE__*/React.createElement("tbody", null, data.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: rowKey ? row[rowKey] : i
  }, columns.map(col => /*#__PURE__*/React.createElement("td", {
    key: col.key,
    className: col.align === 'right' ? 'st-table--num' : ''
  }, col.render ? col.render(row[col.key], row) : row[col.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.st-alert{font-family:var(--font-body);display:flex;gap:var(--space-3);align-items:flex-start;
  padding:var(--space-4);border-radius:var(--radius-md);border:1px solid var(--border-default);
  background:var(--bg-surface);color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-snug)}
.st-alert__icon{flex:none;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;margin-top:1px;color:var(--text-accent)}
.st-alert__body{flex:1;display:flex;flex-direction:column;gap:2px;min-width:0}
.st-alert__title{font-weight:var(--weight-semibold);color:var(--text-primary);letter-spacing:var(--tracking-tight)}
.st-alert__close{flex:none;background:none;border:none;cursor:pointer;color:var(--text-muted);
  padding:2px;border-radius:var(--radius-xs);line-height:0;display:inline-flex}
.st-alert__close:hover{color:var(--text-primary);background:var(--bg-subtle)}
.st-alert--info{background:var(--context-soft);border-color:color-mix(in srgb,var(--context-500) 35%,transparent)}
.st-alert--info .st-alert__icon{color:#2E4DB0}
.st-alert--success{background:var(--green-soft);border-color:color-mix(in srgb,var(--green-500) 35%,transparent)}
.st-alert--success .st-alert__icon{color:#0E7A4E}
.st-alert--warning{background:var(--amber-soft);border-color:color-mix(in srgb,var(--amber-500) 35%,transparent)}
.st-alert--warning .st-alert__icon{color:#9A6212}
.st-alert--danger{background:var(--red-soft);border-color:color-mix(in srgb,var(--red-500) 35%,transparent)}
.st-alert--danger .st-alert__icon{color:#A52A33}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-alert-css')) {
  const s = document.createElement('style');
  s.id = 'st-alert-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const GLYPH = {
  info: 'i',
  success: '✓',
  warning: '!',
  danger: '×'
};
function Alert({
  variant = 'info',
  title,
  icon,
  onClose,
  children,
  className = '',
  ...rest
}) {
  const cls = ['st-alert', `st-alert--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: variant === 'danger' ? 'alert' : 'status'
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "st-alert__icon",
    "aria-hidden": "true"
  }, icon ?? /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, GLYPH[variant])), /*#__PURE__*/React.createElement("div", {
    className: "st-alert__body"
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "st-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("span", null, children)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "st-alert__close",
    "aria-label": "Cerrar",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Drawer.jsx
try { (() => {
const CSS = `
.st-drawer__overlay{position:fixed;inset:0;z-index:1000;background:color-mix(in srgb,var(--ink-950) 50%,transparent);
  backdrop-filter:blur(3px);animation:st-drawer-fade var(--duration-base) var(--ease-out)}
.st-drawer{position:fixed;z-index:1001;background:var(--bg-elevated);display:flex;flex-direction:column;
  box-shadow:var(--shadow-xl);font-family:var(--font-body)}
.st-drawer--right{top:0;right:0;bottom:0;width:min(420px,92vw);border-left:1px solid var(--border-subtle);animation:st-drawer-r var(--duration-base) var(--ease-out)}
.st-drawer--left{top:0;left:0;bottom:0;width:min(420px,92vw);border-right:1px solid var(--border-subtle);animation:st-drawer-l var(--duration-base) var(--ease-out)}
.st-drawer--bottom{left:0;right:0;bottom:0;max-height:85vh;border-top:1px solid var(--border-subtle);border-radius:var(--radius-xl) var(--radius-xl) 0 0;animation:st-drawer-b var(--duration-base) var(--ease-out)}
.st-drawer__head{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-4);
  padding:var(--space-5) var(--space-6) var(--space-4);border-bottom:1px solid var(--border-subtle)}
.st-drawer__titles{display:flex;flex-direction:column;gap:4px;min-width:0}
.st-drawer__eyebrow{font-family:var(--font-mono);font-size:var(--text-2xs);letter-spacing:var(--tracking-wider);text-transform:uppercase;color:var(--text-accent)}
.st-drawer__title{font-family:var(--font-display);font-weight:var(--weight-semibold);font-size:var(--text-lg);letter-spacing:var(--tracking-tight);color:var(--text-primary);margin:0}
.st-drawer__close{flex:none;background:none;border:1px solid var(--border-default);cursor:pointer;color:var(--text-secondary);
  width:30px;height:30px;border-radius:var(--radius-md);display:inline-flex;align-items:center;justify-content:center}
.st-drawer__close:hover{background:var(--bg-subtle);color:var(--text-primary)}
.st-drawer__body{padding:var(--space-6);overflow:auto;flex:1;font-size:var(--text-sm);color:var(--text-secondary);line-height:var(--leading-normal)}
.st-drawer__foot{display:flex;align-items:center;justify-content:flex-end;gap:var(--space-2);padding:var(--space-4) var(--space-6);border-top:1px solid var(--border-subtle);background:var(--bg-subtle)}
@keyframes st-drawer-fade{from{opacity:0}to{opacity:1}}
@keyframes st-drawer-r{from{transform:translateX(100%)}to{transform:none}}
@keyframes st-drawer-l{from{transform:translateX(-100%)}to{transform:none}}
@keyframes st-drawer-b{from{transform:translateY(100%)}to{transform:none}}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-drawer-css')) {
  const s = document.createElement('style');
  s.id = 'st-drawer-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Drawer({
  open,
  onClose,
  side = 'right',
  title,
  eyebrow,
  footer,
  closeOnOverlay = true,
  children,
  className = ''
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "st-drawer__overlay",
    onMouseDown: () => {
      if (closeOnOverlay && onClose) onClose();
    }
  }), /*#__PURE__*/React.createElement("aside", {
    className: ['st-drawer', `st-drawer--${side}`, className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true"
  }, (title || eyebrow) && /*#__PURE__*/React.createElement("div", {
    className: "st-drawer__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-drawer__titles"
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "st-drawer__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    className: "st-drawer__title"
  }, title)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "st-drawer__close",
    "aria-label": "Cerrar",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "st-drawer__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "st-drawer__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
const CSS = `
.st-modal__overlay{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;
  padding:var(--space-6);background:color-mix(in srgb,var(--ink-950) 55%,transparent);
  backdrop-filter:blur(3px);animation:st-modal-fade var(--duration-base) var(--ease-out)}
.st-modal{font-family:var(--font-body);background:var(--bg-elevated);border:1px solid var(--border-subtle);
  border-radius:var(--radius-lg);box-shadow:var(--shadow-xl);width:100%;max-width:480px;max-height:calc(100vh - var(--space-12));
  display:flex;flex-direction:column;overflow:hidden;animation:st-modal-pop var(--duration-base) var(--ease-out)}
.st-modal--sm{max-width:380px}
.st-modal--lg{max-width:640px}
.st-modal__head{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-4);
  padding:var(--space-6) var(--space-6) var(--space-3)}
.st-modal__titles{display:flex;flex-direction:column;gap:4px;min-width:0}
.st-modal__eyebrow{font-family:var(--font-mono);font-size:var(--text-2xs);letter-spacing:var(--tracking-wider);
  text-transform:uppercase;color:var(--text-accent)}
.st-modal__title{font-family:var(--font-display);font-weight:var(--weight-semibold);font-size:var(--text-lg);
  letter-spacing:var(--tracking-tight);line-height:var(--leading-tight);color:var(--text-primary);margin:0}
.st-modal__close{flex:none;background:none;border:1px solid var(--border-default);cursor:pointer;color:var(--text-secondary);
  width:30px;height:30px;border-radius:var(--radius-md);display:inline-flex;align-items:center;justify-content:center;
  transition:background var(--duration-fast) var(--ease-out),color var(--duration-fast) var(--ease-out)}
.st-modal__close:hover{background:var(--bg-subtle);color:var(--text-primary)}
.st-modal__body{padding:0 var(--space-6) var(--space-5);font-size:var(--text-sm);color:var(--text-secondary);
  line-height:var(--leading-normal);overflow:auto}
.st-modal__foot{display:flex;align-items:center;justify-content:flex-end;gap:var(--space-2);
  padding:var(--space-4) var(--space-6);border-top:1px solid var(--border-subtle);background:var(--bg-subtle)}
@keyframes st-modal-fade{from{opacity:0}to{opacity:1}}
@keyframes st-modal-pop{from{opacity:0;transform:translateY(10px) scale(.985)}to{opacity:1;transform:none}}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-modal-css')) {
  const s = document.createElement('style');
  s.id = 'st-modal-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Modal({
  open,
  onClose,
  title,
  eyebrow,
  footer,
  size = 'md',
  closeOnOverlay = true,
  children,
  className = ''
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  const cls = ['st-modal', size !== 'md' ? `st-modal--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "st-modal__overlay",
    onMouseDown: e => {
      if (closeOnOverlay && e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "dialog",
    "aria-modal": "true"
  }, (title || eyebrow) && /*#__PURE__*/React.createElement("div", {
    className: "st-modal__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-modal__titles"
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "st-modal__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    className: "st-modal__title"
  }, title)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "st-modal__close",
    "aria-label": "Cerrar",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "st-modal__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "st-modal__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
const CSS = `
.st-progress{font-family:var(--font-body);display:flex;flex-direction:column;gap:var(--space-2);width:100%}
.st-progress__top{display:flex;align-items:baseline;justify-content:space-between;gap:var(--space-3)}
.st-progress__label{font-size:var(--text-sm);color:var(--text-primary);font-weight:var(--weight-medium)}
.st-progress__val{font-family:var(--font-mono);font-size:var(--text-2xs);color:var(--text-secondary)}
.st-progress__track{height:8px;border-radius:var(--radius-pill);background:var(--bg-subtle);overflow:hidden}
.st-progress--sm .st-progress__track{height:5px}
.st-progress--lg .st-progress__track{height:12px}
.st-progress__fill{height:100%;border-radius:var(--radius-pill);background:var(--violet-500);
  transition:width var(--duration-slow) var(--ease-out)}
.st-progress--success .st-progress__fill{background:var(--green-500)}
.st-progress--warning .st-progress__fill{background:var(--amber-500)}
.st-progress--danger .st-progress__fill{background:var(--red-500)}
.st-progress__fill--indeterminate{width:35% !important;animation:st-prog-indet 1.2s var(--ease-in-out) infinite}
@keyframes st-prog-indet{0%{margin-left:-35%}100%{margin-left:100%}}

.st-ring{font-family:var(--font-body);position:relative;display:inline-flex;align-items:center;justify-content:center}
.st-ring svg{transform:rotate(-90deg)}
.st-ring__bg{stroke:var(--bg-subtle)}
.st-ring__fg{stroke:var(--violet-500);stroke-linecap:round;transition:stroke-dashoffset var(--duration-slow) var(--ease-out)}
.st-ring--success .st-ring__fg{stroke:var(--green-500)}
.st-ring--warning .st-ring__fg{stroke:var(--amber-500)}
.st-ring--danger .st-ring__fg{stroke:var(--red-500)}
.st-ring__label{position:absolute;font-family:var(--font-mono);font-weight:var(--weight-semibold);color:var(--text-primary)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-progress-css')) {
  const s = document.createElement('style');
  s.id = 'st-progress-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const clamp = v => Math.max(0, Math.min(100, v));
function Progress({
  value = 0,
  max = 100,
  label,
  showValue = false,
  size = 'md',
  variant = 'accent',
  indeterminate = false,
  className = ''
}) {
  const pct = clamp(value / max * 100);
  const cls = ['st-progress', `st-progress--${size}`, variant !== 'accent' ? `st-progress--${variant}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    className: "st-progress__top"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "st-progress__label"
  }, label), showValue && !indeterminate && /*#__PURE__*/React.createElement("span", {
    className: "st-progress__val"
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    className: "st-progress__track",
    role: "progressbar",
    "aria-valuenow": indeterminate ? undefined : Math.round(pct),
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, /*#__PURE__*/React.createElement("div", {
    className: ['st-progress__fill', indeterminate ? 'st-progress__fill--indeterminate' : ''].filter(Boolean).join(' '),
    style: indeterminate ? undefined : {
      width: pct + '%'
    }
  })));
}
function ProgressRing({
  value = 0,
  max = 100,
  size = 64,
  thickness = 6,
  variant = 'accent',
  showValue = true,
  className = ''
}) {
  const pct = clamp(value / max * 100);
  const r = (size - thickness) / 2;
  const circ = 2 * Math.PI * r;
  const cls = ['st-ring', variant !== 'accent' ? `st-ring--${variant}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: {
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size
  }, /*#__PURE__*/React.createElement("circle", {
    className: "st-ring__bg",
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    className: "st-ring__fg",
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    strokeWidth: thickness,
    strokeDasharray: circ,
    strokeDashoffset: circ * (1 - pct / 100)
  })), showValue && /*#__PURE__*/React.createElement("span", {
    className: "st-ring__label",
    style: {
      fontSize: size * 0.26
    }
  }, Math.round(pct), "%"));
}
Object.assign(__ds_scope, { Progress, ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.st-skeleton{display:block;background:var(--bg-subtle);position:relative;overflow:hidden;border-radius:var(--radius-sm)}
.st-skeleton::after{content:"";position:absolute;inset:0;transform:translateX(-100%);
  background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--ink-300) 22%,transparent),transparent);
  animation:st-shimmer 1.4s var(--ease-in-out) infinite}
@keyframes st-shimmer{100%{transform:translateX(100%)}}
.st-skeleton--text{height:0.72em;border-radius:var(--radius-xs);margin:0.18em 0}
.st-skeleton--circle{border-radius:var(--radius-pill)}
.st-skeleton--rect{border-radius:var(--radius-md)}
.st-skeleton-group{display:flex;flex-direction:column;gap:var(--space-2)}
@media (prefers-reduced-motion:reduce){.st-skeleton::after{animation:none}}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-skeleton-css')) {
  const s = document.createElement('style');
  s.id = 'st-skeleton-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Skeleton({
  variant = 'rect',
  width,
  height,
  lines = 1,
  className = '',
  style,
  ...rest
}) {
  if (variant === 'text' && lines > 1) {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: "st-skeleton-group"
    }, rest), Array.from({
      length: lines
    }).map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "st-skeleton st-skeleton--text",
      style: {
        width: i === lines - 1 ? '65%' : width || '100%'
      }
    })));
  }
  const cls = ['st-skeleton', `st-skeleton--${variant}`, className].filter(Boolean).join(' ');
  const s = {
    width,
    height: variant === 'circle' ? height || width : height,
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: s
  }, rest));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.st-toaststack{position:fixed;z-index:1100;display:flex;flex-direction:column;gap:var(--space-3);
  bottom:var(--space-6);right:var(--space-6);max-width:calc(100vw - var(--space-12))}
.st-toaststack--tr{top:var(--space-6);bottom:auto;right:var(--space-6)}
.st-toaststack--tc{top:var(--space-6);bottom:auto;left:50%;right:auto;transform:translateX(-50%);align-items:center}
.st-toast{font-family:var(--font-body);position:relative;display:flex;gap:var(--space-3);align-items:flex-start;
  width:340px;max-width:100%;padding:var(--space-4) var(--space-4) var(--space-4) var(--space-5);
  border-radius:var(--radius-md);background:var(--bg-elevated);border:1px solid var(--border-default);
  box-shadow:var(--shadow-lg);overflow:hidden;animation:st-toast-in var(--duration-base) var(--ease-out)}
.st-toast::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--violet-500)}
.st-toast--success::before{background:var(--green-500)}
.st-toast--warning::before{background:var(--amber-500)}
.st-toast--danger::before{background:var(--red-500)}
.st-toast--info::before{background:var(--context-500)}
.st-toast__body{flex:1;display:flex;flex-direction:column;gap:2px;min-width:0}
.st-toast__title{font-weight:var(--weight-semibold);font-size:var(--text-sm);color:var(--text-primary);letter-spacing:var(--tracking-tight)}
.st-toast__desc{font-size:var(--text-xs);color:var(--text-secondary);line-height:var(--leading-snug)}
.st-toast__action{margin-top:var(--space-2);align-self:flex-start;font-family:var(--font-body);font-size:var(--text-xs);
  font-weight:var(--weight-semibold);color:var(--text-accent);background:none;border:none;cursor:pointer;padding:0}
.st-toast__close{flex:none;background:none;border:none;cursor:pointer;color:var(--text-muted);padding:2px;border-radius:var(--radius-xs);line-height:0;display:inline-flex}
.st-toast__close:hover{color:var(--text-primary);background:var(--bg-subtle)}
@keyframes st-toast-in{from{opacity:0;transform:translateY(10px) scale(.98)}to{opacity:1;transform:none}}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-toast-css')) {
  const s = document.createElement('style');
  s.id = 'st-toast-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Toast({
  variant = 'default',
  title,
  description,
  action,
  onAction,
  onClose,
  className = '',
  ...rest
}) {
  const cls = ['st-toast', variant !== 'default' ? `st-toast--${variant}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "st-toast__body"
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "st-toast__title"
  }, title), description && /*#__PURE__*/React.createElement("span", {
    className: "st-toast__desc"
  }, description), action && /*#__PURE__*/React.createElement("button", {
    className: "st-toast__action",
    onClick: onAction
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "st-toast__close",
    "aria-label": "Cerrar",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))));
}
function ToastStack({
  position = 'bottom-right',
  children,
  className = '',
  ...rest
}) {
  const map = {
    'bottom-right': '',
    'top-right': 'st-toaststack--tr',
    'top-center': 'st-toaststack--tc'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['st-toaststack', map[position] || '', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.st-tooltip{position:relative;display:inline-flex}
.st-tooltip__pop{position:absolute;z-index:60;background:var(--ink-950);color:#fff;
  font-family:var(--font-body);font-size:var(--text-2xs);font-weight:var(--weight-medium);letter-spacing:var(--tracking-tight);
  padding:6px 9px;border-radius:var(--radius-sm);white-space:nowrap;pointer-events:none;
  box-shadow:var(--shadow-md);opacity:0;transition:opacity var(--duration-fast) var(--ease-out),transform var(--duration-fast) var(--ease-out)}
.st-tooltip__pop::after{content:"";position:absolute;width:7px;height:7px;background:var(--ink-950);transform:rotate(45deg)}
.st-tooltip:hover .st-tooltip__pop,.st-tooltip:focus-within .st-tooltip__pop{opacity:1}

.st-tooltip__pop--top{bottom:calc(100% + 7px);left:50%;transform:translateX(-50%) translateY(3px)}
.st-tooltip:hover .st-tooltip__pop--top,.st-tooltip:focus-within .st-tooltip__pop--top{transform:translateX(-50%)}
.st-tooltip__pop--top::after{bottom:-3px;left:50%;margin-left:-3px}

.st-tooltip__pop--bottom{top:calc(100% + 7px);left:50%;transform:translateX(-50%) translateY(-3px)}
.st-tooltip:hover .st-tooltip__pop--bottom,.st-tooltip:focus-within .st-tooltip__pop--bottom{transform:translateX(-50%)}
.st-tooltip__pop--bottom::after{top:-3px;left:50%;margin-left:-3px}

.st-tooltip__pop--left{right:calc(100% + 7px);top:50%;transform:translateY(-50%) translateX(3px)}
.st-tooltip:hover .st-tooltip__pop--left,.st-tooltip:focus-within .st-tooltip__pop--left{transform:translateY(-50%)}
.st-tooltip__pop--left::after{right:-3px;top:50%;margin-top:-3px}

.st-tooltip__pop--right{left:calc(100% + 7px);top:50%;transform:translateY(-50%) translateX(-3px)}
.st-tooltip:hover .st-tooltip__pop--right,.st-tooltip:focus-within .st-tooltip__pop--right{transform:translateY(-50%)}
.st-tooltip__pop--right::after{left:-3px;top:50%;margin-top:-3px}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-tooltip-css')) {
  const s = document.createElement('style');
  s.id = 'st-tooltip-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tooltip({
  label,
  placement = 'top',
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['st-tooltip', className].filter(Boolean).join(' '),
    tabIndex: 0
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: `st-tooltip__pop st-tooltip__pop--${placement}`,
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.st-check{font-family:var(--font-body);display:inline-flex;align-items:flex-start;gap:var(--space-3);cursor:pointer;user-select:none}
.st-check input{position:absolute;opacity:0;width:0;height:0}
.st-check__box{
  width:18px;height:18px;flex:none;margin-top:1px;border-radius:var(--radius-xs);
  border:1.5px solid var(--border-strong);background:var(--bg-surface);
  display:inline-flex;align-items:center;justify-content:center;color:#fff;
  transition:background var(--duration-fast) var(--ease-out),border-color var(--duration-fast) var(--ease-out);
}
.st-check__box svg{width:12px;height:12px;opacity:0;transform:scale(.7);transition:opacity var(--duration-fast) var(--ease-out),transform var(--duration-fast) var(--ease-out)}
.st-check:hover input:not(:disabled) ~ .st-check__box{border-color:var(--violet-500)}
.st-check input:checked ~ .st-check__box{background:var(--violet-500);border-color:var(--violet-500)}
.st-check input:checked ~ .st-check__box svg{opacity:1;transform:scale(1)}
.st-check input:focus-visible ~ .st-check__box{box-shadow:var(--focus-ring)}
.st-check input:disabled ~ .st-check__box{background:var(--bg-subtle);border-color:var(--border-default)}
.st-check--disabled{cursor:not-allowed;opacity:.55}
.st-check__text{display:flex;flex-direction:column;gap:1px}
.st-check__label{font-size:var(--text-sm);color:var(--text-primary)}
.st-check__desc{font-size:var(--text-xs);color:var(--text-secondary)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-check-css')) {
  const s = document.createElement('style');
  s.id = 'st-check-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Checkbox({
  label,
  description,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['st-check', disabled ? 'st-check--disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "st-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "st-check__text"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "st-check__label"
  }, label), description && /*#__PURE__*/React.createElement("span", {
    className: "st-check__desc"
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.st-field{font-family:var(--font-body);display:flex;flex-direction:column;gap:var(--space-2)}
.st-field__label{font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--text-primary)}
.st-field__label .req{color:var(--status-danger);margin-left:2px}
.st-input-wrap{position:relative;display:flex;align-items:center}
.st-input{
  width:100%;box-sizing:border-box;font-family:var(--font-body);font-size:var(--text-sm);
  color:var(--text-primary);background:var(--bg-surface);
  border:1px solid var(--border-default);border-radius:var(--radius-md);
  height:40px;padding:0 var(--space-3);outline:none;
  transition:border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out);
}
.st-input::placeholder{color:var(--text-muted)}
.st-input:hover:not(:disabled){border-color:var(--border-strong)}
.st-input:focus{border-color:var(--violet-500);box-shadow:var(--focus-ring)}
.st-input:disabled{background:var(--bg-subtle);color:var(--text-muted);cursor:not-allowed}
.st-input--has-lead{padding-left:38px}
.st-input--has-trail{padding-right:38px}
.st-input--error{border-color:var(--status-danger)}
.st-input--error:focus{box-shadow:0 0 0 3px var(--red-soft)}
.st-input__icon{position:absolute;display:inline-flex;color:var(--text-muted);pointer-events:none}
.st-input__icon--lead{left:var(--space-3)}
.st-input__icon--trail{right:var(--space-3)}
.st-field__msg{font-size:var(--text-xs);color:var(--text-secondary)}
.st-field__msg--error{color:var(--status-danger)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-input-css')) {
  const s = document.createElement('style');
  s.id = 'st-input-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  error,
  required = false,
  leadingIcon,
  trailingIcon,
  id,
  className = '',
  ...rest
}) {
  const fieldId = id || (label ? 'in-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const cls = ['st-input', leadingIcon ? 'st-input--has-lead' : '', trailingIcon ? 'st-input--has-trail' : '', error ? 'st-input--error' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "st-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "st-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "st-input-wrap"
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "st-input__icon st-input__icon--lead"
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: cls,
    "aria-invalid": !!error
  }, rest)), trailingIcon && /*#__PURE__*/React.createElement("span", {
    className: "st-input__icon st-input__icon--trail"
  }, trailingIcon)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: 'st-field__msg' + (error ? ' st-field__msg--error' : '')
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
const CSS = `
.st-radiogroup{font-family:var(--font-body);display:flex;flex-direction:column;gap:var(--space-3)}
.st-radiogroup--row{flex-direction:row;flex-wrap:wrap;gap:var(--space-5)}
.st-radio{display:inline-flex;align-items:flex-start;gap:var(--space-3);cursor:pointer;user-select:none}
.st-radio input{position:absolute;opacity:0;width:0;height:0}
.st-radio__dot{
  width:18px;height:18px;flex:none;margin-top:1px;border-radius:var(--radius-pill);
  border:1.5px solid var(--border-strong);background:var(--bg-surface);position:relative;
  transition:border-color var(--duration-fast) var(--ease-out)}
.st-radio__dot::after{content:"";position:absolute;inset:0;margin:auto;width:8px;height:8px;border-radius:var(--radius-pill);
  background:var(--violet-500);transform:scale(0);transition:transform var(--duration-fast) var(--ease-out)}
.st-radio:hover input:not(:disabled) ~ .st-radio__dot{border-color:var(--violet-500)}
.st-radio input:checked ~ .st-radio__dot{border-color:var(--violet-500)}
.st-radio input:checked ~ .st-radio__dot::after{transform:scale(1)}
.st-radio input:focus-visible ~ .st-radio__dot{box-shadow:var(--focus-ring)}
.st-radio input:disabled ~ .st-radio__dot{background:var(--bg-subtle);border-color:var(--border-default)}
.st-radio--disabled{cursor:not-allowed;opacity:.55}
.st-radio__text{display:flex;flex-direction:column;gap:1px}
.st-radio__label{font-size:var(--text-sm);color:var(--text-primary)}
.st-radio__desc{font-size:var(--text-xs);color:var(--text-secondary)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-radio-css')) {
  const s = document.createElement('style');
  s.id = 'st-radio-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function RadioGroup({
  name,
  value,
  onChange,
  options = [],
  orientation = 'vertical',
  disabled = false,
  className = ''
}) {
  const gname = name || React.useId();
  const cls = ['st-radiogroup', orientation === 'horizontal' ? 'st-radiogroup--row' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "radiogroup"
  }, options.map(opt => {
    const o = typeof opt === 'string' ? {
      value: opt,
      label: opt
    } : opt;
    const isDisabled = disabled || o.disabled;
    return /*#__PURE__*/React.createElement("label", {
      key: o.value,
      className: ['st-radio', isDisabled ? 'st-radio--disabled' : ''].filter(Boolean).join(' ')
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: gname,
      value: o.value,
      checked: value === o.value,
      disabled: isDisabled,
      onChange: () => onChange && onChange(o.value)
    }), /*#__PURE__*/React.createElement("span", {
      className: "st-radio__dot",
      "aria-hidden": "true"
    }), (o.label || o.description) && /*#__PURE__*/React.createElement("span", {
      className: "st-radio__text"
    }, o.label && /*#__PURE__*/React.createElement("span", {
      className: "st-radio__label"
    }, o.label), o.description && /*#__PURE__*/React.createElement("span", {
      className: "st-radio__desc"
    }, o.description)));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.st-field{font-family:var(--font-body);display:flex;flex-direction:column;gap:var(--space-2)}
.st-field__label{font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--text-primary)}
.st-field__msg{font-size:var(--text-xs);color:var(--text-secondary)}
.st-field__msg--error{color:var(--status-danger)}
.st-select-wrap{position:relative;display:flex;align-items:center}
.st-select{
  width:100%;box-sizing:border-box;font-family:var(--font-body);font-size:var(--text-sm);
  color:var(--text-primary);background:var(--bg-surface);
  border:1px solid var(--border-default);border-radius:var(--radius-md);
  height:40px;padding:0 var(--space-8) 0 var(--space-3);outline:none;cursor:pointer;
  appearance:none;-webkit-appearance:none;
  transition:border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out);
}
.st-select:hover:not(:disabled){border-color:var(--border-strong)}
.st-select:focus{border-color:var(--violet-500);box-shadow:var(--focus-ring)}
.st-select:disabled{background:var(--bg-subtle);color:var(--text-muted);cursor:not-allowed}
.st-select__chev{position:absolute;right:var(--space-3);pointer-events:none;color:var(--text-muted);display:inline-flex}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-select-css')) {
  const s = document.createElement('style');
  s.id = 'st-select-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  id,
  className = '',
  children,
  ...rest
}) {
  const fieldId = id || (label ? 'sel-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "st-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "st-field__label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "st-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: ['st-select', className].filter(Boolean).join(' ')
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  }), children), /*#__PURE__*/React.createElement("span", {
    className: "st-select__chev",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: 'st-field__msg' + (error ? ' st-field__msg--error' : '')
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.st-switch{font-family:var(--font-body);display:inline-flex;align-items:center;gap:var(--space-3);cursor:pointer;user-select:none}
.st-switch input{position:absolute;opacity:0;width:0;height:0}
.st-switch__track{
  width:40px;height:24px;border-radius:var(--radius-pill);background:var(--ink-300);
  position:relative;flex:none;transition:background var(--duration-base) var(--ease-out);
}
.st-switch__thumb{
  position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:var(--radius-pill);
  background:#fff;box-shadow:var(--shadow-sm);
  transition:transform var(--duration-base) var(--ease-out);
}
.st-switch input:checked ~ .st-switch__track{background:var(--violet-500)}
.st-switch input:checked ~ .st-switch__track .st-switch__thumb{transform:translateX(16px)}
.st-switch input:focus-visible ~ .st-switch__track{box-shadow:var(--focus-ring)}
.st-switch input:disabled ~ .st-switch__track{opacity:.5}
.st-switch--disabled{cursor:not-allowed}
.st-switch__label{font-size:var(--text-sm);color:var(--text-primary)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-switch-css')) {
  const s = document.createElement('style');
  s.id = 'st-switch-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Switch({
  label,
  disabled = false,
  labelPosition = 'right',
  className = '',
  ...rest
}) {
  const lbl = label && /*#__PURE__*/React.createElement("span", {
    className: "st-switch__label"
  }, label);
  return /*#__PURE__*/React.createElement("label", {
    className: ['st-switch', disabled ? 'st-switch--disabled' : '', className].filter(Boolean).join(' ')
  }, labelPosition === 'left' && lbl, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "st-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-switch__thumb"
  })), labelPosition === 'right' && lbl);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* SIMON THINKS — Icon
   Thin wrapper over the HackerNoon Pixel Icon font (loaded globally via
   tokens/icons.css). Renders an <i class="hn hn-<name>[-solid]">. Color follows
   currentColor; size is font-size in px. No per-component CSS to inject — the
   glyph classes live in the global stylesheet. */

function Icon({
  name,
  solid = false,
  size = 18,
  color,
  title,
  className = '',
  style,
  ...rest
}) {
  const cls = ['hn', `hn-${name}${solid ? '-solid' : ''}`, className].filter(Boolean).join(' ');
  const a11y = title ? {
    role: 'img',
    'aria-label': title,
    title
  } : {
    'aria-hidden': true
  };
  return /*#__PURE__*/React.createElement("i", _extends({
    className: cls,
    style: {
      fontSize: typeof size === 'number' ? `${size}px` : size,
      color,
      ...style
    }
  }, a11y, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
const CSS = `
.st-breadcrumb{font-family:var(--font-body);display:flex;align-items:center;flex-wrap:wrap;gap:var(--space-1)}
.st-breadcrumb__item{display:inline-flex;align-items:center;gap:var(--space-1);
  font-size:var(--text-sm);color:var(--text-secondary);text-decoration:none;
  padding:2px var(--space-2);border-radius:var(--radius-sm);
  transition:color var(--duration-fast) var(--ease-out),background var(--duration-fast) var(--ease-out)}
a.st-breadcrumb__item:hover{color:var(--text-primary);background:var(--bg-subtle)}
.st-breadcrumb__item--current{color:var(--text-primary);font-weight:var(--weight-semibold);cursor:default}
.st-breadcrumb__item__icon{width:15px;height:15px;display:inline-flex;color:var(--text-muted)}
.st-breadcrumb__sep{color:var(--text-muted);display:inline-flex;font-family:var(--font-mono);font-size:var(--text-2xs);user-select:none}
.st-breadcrumb__ellipsis{color:var(--text-muted);padding:0 2px;cursor:default}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-breadcrumb-css')) {
  const s = document.createElement('style');
  s.id = 'st-breadcrumb-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Breadcrumb({
  items = [],
  separator = '/',
  className = ''
}) {
  const last = items.length - 1;
  return /*#__PURE__*/React.createElement("nav", {
    className: ['st-breadcrumb', className].filter(Boolean).join(' '),
    "aria-label": "Breadcrumb"
  }, items.map((it, i) => {
    const isCurrent = i === last;
    const node = it.href && !isCurrent ? /*#__PURE__*/React.createElement("a", {
      key: `i${i}`,
      className: "st-breadcrumb__item",
      href: it.href,
      onClick: it.onClick
    }, it.icon && /*#__PURE__*/React.createElement("span", {
      className: "st-breadcrumb__item__icon"
    }, it.icon), it.label) : /*#__PURE__*/React.createElement("span", {
      key: `i${i}`,
      className: ['st-breadcrumb__item', isCurrent ? 'st-breadcrumb__item--current' : ''].filter(Boolean).join(' '),
      "aria-current": isCurrent ? 'page' : undefined
    }, it.icon && /*#__PURE__*/React.createElement("span", {
      className: "st-breadcrumb__item__icon"
    }, it.icon), it.label);
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, node, !isCurrent && /*#__PURE__*/React.createElement("span", {
      className: "st-breadcrumb__sep",
      "aria-hidden": "true"
    }, separator));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Menu.jsx
try { (() => {
const CSS = `
.st-menu{font-family:var(--font-body);position:relative;display:inline-flex}
.st-menu__panel{position:absolute;z-index:80;min-width:200px;background:var(--bg-elevated);
  border:1px solid var(--border-default);border-radius:var(--radius-md);box-shadow:var(--shadow-lg);
  padding:var(--space-2);display:flex;flex-direction:column;gap:1px;
  animation:st-menu-in var(--duration-fast) var(--ease-out)}
.st-menu__panel--start{left:0}
.st-menu__panel--end{right:0}
.st-menu__panel--top{bottom:calc(100% + 6px)}
.st-menu__panel--bottom{top:calc(100% + 6px)}
.st-menu__item{display:flex;align-items:center;gap:var(--space-3);width:100%;text-align:left;
  font-family:var(--font-body);font-size:var(--text-sm);color:var(--text-primary);
  background:none;border:none;cursor:pointer;padding:var(--space-2) var(--space-3);border-radius:var(--radius-sm);
  transition:background var(--duration-fast) var(--ease-out)}
.st-menu__item:hover{background:var(--bg-accent-soft);color:var(--text-accent)}
.st-menu__item__icon{flex:none;width:16px;height:16px;display:inline-flex;color:var(--text-muted)}
.st-menu__item:hover .st-menu__item__icon{color:var(--text-accent)}
.st-menu__item__shortcut{margin-left:auto;font-family:var(--font-mono);font-size:var(--text-2xs);color:var(--text-muted)}
.st-menu__item--danger{color:var(--red-500)}
.st-menu__item--danger:hover{background:var(--red-soft);color:var(--red-500)}
.st-menu__item--danger .st-menu__item__icon{color:var(--red-500)}
.st-menu__label{font-family:var(--font-mono);font-size:var(--text-2xs);letter-spacing:var(--tracking-wider);
  text-transform:uppercase;color:var(--text-muted);padding:var(--space-2) var(--space-3) var(--space-1)}
.st-menu__sep{height:1px;background:var(--border-subtle);margin:var(--space-1) 0}
@keyframes st-menu-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-menu-css')) {
  const s = document.createElement('style');
  s.id = 'st-menu-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Menu({
  trigger,
  items = [],
  align = 'start',
  placement = 'bottom',
  className = ''
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  const panelCls = ['st-menu__panel', `st-menu__panel--${align}`, `st-menu__panel--${placement}`].join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: ['st-menu', className].filter(Boolean).join(' '),
    ref: ref
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o)
  }, trigger), open && /*#__PURE__*/React.createElement("div", {
    className: panelCls,
    role: "menu"
  }, items.map((it, i) => {
    if (it.type === 'separator') return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "st-menu__sep"
    });
    if (it.type === 'label') return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "st-menu__label"
    }, it.label);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "menuitem",
      className: ['st-menu__item', it.danger ? 'st-menu__item--danger' : ''].filter(Boolean).join(' '),
      onClick: () => {
        setOpen(false);
        it.onSelect && it.onSelect();
      }
    }, it.icon && /*#__PURE__*/React.createElement("span", {
      className: "st-menu__item__icon"
    }, it.icon), /*#__PURE__*/React.createElement("span", null, it.label), it.shortcut && /*#__PURE__*/React.createElement("span", {
      className: "st-menu__item__shortcut"
    }, it.shortcut));
  })));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Menu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
const CSS = `
.st-pagination{font-family:var(--font-body);display:inline-flex;align-items:center;gap:var(--space-1)}
.st-page{min-width:34px;height:34px;padding:0 var(--space-2);display:inline-flex;align-items:center;justify-content:center;
  font-family:var(--font-body);font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--text-secondary);
  background:none;border:1px solid transparent;border-radius:var(--radius-md);cursor:pointer;
  transition:background var(--duration-fast) var(--ease-out),color var(--duration-fast) var(--ease-out),border-color var(--duration-fast) var(--ease-out)}
.st-page:hover:not(:disabled){background:var(--bg-subtle);color:var(--text-primary)}
.st-page--active{background:var(--bg-accent);color:var(--text-on-accent);font-weight:var(--weight-semibold)}
.st-page--active:hover{background:var(--bg-accent-hover);color:#fff}
.st-page:disabled{opacity:.4;cursor:not-allowed}
.st-page--ellipsis{cursor:default;color:var(--text-muted);min-width:24px}
.st-page--ellipsis:hover{background:none}
.st-page--nav{color:var(--text-secondary)}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-pagination-css')) {
  const s = document.createElement('style');
  s.id = 'st-pagination-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function range(start, end) {
  const r = [];
  for (let i = start; i <= end; i++) r.push(i);
  return r;
}
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  siblings = 1,
  className = ''
}) {
  const go = p => {
    if (p >= 1 && p <= pageCount && p !== page && onChange) onChange(p);
  };
  const pages = [];
  const left = Math.max(2, page - siblings);
  const right = Math.min(pageCount - 1, page + siblings);
  pages.push(1);
  if (left > 2) pages.push('…');
  pages.push(...range(left, right));
  if (right < pageCount - 1) pages.push('…');
  if (pageCount > 1) pages.push(pageCount);
  const chevron = d => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: d === 'l' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'
  }));
  return /*#__PURE__*/React.createElement("nav", {
    className: ['st-pagination', className].filter(Boolean).join(' '),
    "aria-label": "Paginaci\xF3n"
  }, /*#__PURE__*/React.createElement("button", {
    className: "st-page st-page--nav",
    disabled: page <= 1,
    onClick: () => go(page - 1),
    "aria-label": "Anterior"
  }, chevron('l')), pages.map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    className: "st-page st-page--ellipsis"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    className: ['st-page', p === page ? 'st-page--active' : ''].filter(Boolean).join(' '),
    "aria-current": p === page ? 'page' : undefined,
    onClick: () => go(p)
  }, p)), /*#__PURE__*/React.createElement("button", {
    className: "st-page st-page--nav",
    disabled: page >= pageCount,
    onClick: () => go(page + 1),
    "aria-label": "Siguiente"
  }, chevron('r')));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const CSS = `
.st-tabs{font-family:var(--font-body);display:flex;gap:var(--space-1);border-bottom:1px solid var(--border-subtle)}
.st-tabs--pills{border-bottom:none;gap:var(--space-2);background:var(--bg-subtle);padding:var(--space-1);border-radius:var(--radius-md);display:inline-flex}
.st-tab{
  font-family:var(--font-body);font-size:var(--text-sm);font-weight:var(--weight-medium);
  color:var(--text-secondary);background:none;border:none;cursor:pointer;
  padding:var(--space-3) var(--space-3);position:relative;display:inline-flex;align-items:center;gap:var(--space-2);
  transition:color var(--duration-fast) var(--ease-out);
}
.st-tab:hover{color:var(--text-primary)}
.st-tab--active{color:var(--text-primary);font-weight:var(--weight-semibold)}
.st-tab--active::after{content:"";position:absolute;left:var(--space-3);right:var(--space-3);bottom:-1px;height:2px;background:var(--violet-500);border-radius:var(--radius-pill)}
.st-tab__count{font-family:var(--font-mono);font-size:var(--text-2xs);color:var(--text-muted);background:var(--bg-subtle);border-radius:var(--radius-sm);padding:1px 6px}
.st-tabs--pills .st-tab{border-radius:var(--radius-sm);padding:var(--space-2) var(--space-3)}
.st-tabs--pills .st-tab--active{background:var(--bg-surface);box-shadow:var(--shadow-xs)}
.st-tabs--pills .st-tab--active::after{display:none}
`;
if (typeof document !== 'undefined' && !document.getElementById('st-tabs-css')) {
  const s = document.createElement('style');
  s.id = 'st-tabs-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  className = ''
}) {
  const active = value ?? (items[0] && items[0].value);
  return /*#__PURE__*/React.createElement("div", {
    className: ['st-tabs', variant === 'pills' ? 'st-tabs--pills' : '', className].filter(Boolean).join(' '),
    role: "tablist"
  }, items.map(it => {
    const isActive = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": isActive,
      className: ['st-tab', isActive ? 'st-tab--active' : ''].filter(Boolean).join(' '),
      onClick: () => onChange && onChange(it.value)
    }, it.icon, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      className: "st-tab__count"
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// integrations/tailwind.preset.js
try { (() => {
/**
 * SIMON THINKS — Tailwind preset
 * ---------------------------------------------------------------------------
 * Works with Tailwind CSS v3 (and v4 via `@config`). It maps the design-system
 * tokens onto Tailwind's theme so you get utilities like `bg-violet-500`,
 * `text-3xl`, `rounded-lg`, `shadow-lg`, `font-display`, `tracking-wider`, and
 * the dark-mode-aware semantic classes `bg-surface`, `text-primary`, etc.
 *
 *   // tailwind.config.js  (v3)
 *   module.exports = { presets: [require('@simonthinks/ds/integrations/tailwind.preset.js')] }
 *
 * The RAW palette (violet / blue / ink / status) is emitted as hex so Tailwind's
 * opacity modifiers work (`bg-violet-500/40`). The SEMANTIC tokens are emitted as
 * `var(--token)` so they follow `[data-theme="dark"]` automatically.
 *
 * Requires the consumer to also load the DS stylesheet once (for fonts + the
 * semantic CSS variables + dark theme):  import '@simonthinks/ds/styles.css'
 */

const violet = {
  50: '#F4ECFF',
  100: '#EADBFF',
  200: '#D6B8FF',
  300: '#C293FF',
  400: '#AE6EFF',
  500: '#9D50FF',
  600: '#883CF2',
  700: '#7126D6',
  800: '#561CA6',
  900: '#3D1478'
};
const blue = {
  50: '#E8ECFF',
  100: '#C9D2FF',
  200: '#99A8FF',
  300: '#6076FF',
  400: '#2E48F2',
  500: '#002ADD',
  600: '#0022B4',
  700: '#001B8F',
  800: '#00146B',
  900: '#000E47'
};
const ink = {
  50: '#F6F6F6',
  100: '#E9E9EC',
  200: '#D6D5DA',
  300: '#B0AEB6',
  400: '#87858F',
  500: '#5D5B66',
  600: '#403E49',
  700: '#2D2B35',
  800: '#201E27',
  900: '#17161D',
  950: '#0F0E14'
};

/** Semantic tokens — emitted as var() so dark mode (`[data-theme="dark"]`) applies. */
const semantic = {
  // surfaces
  canvas: 'var(--bg-canvas)',
  surface: 'var(--bg-surface)',
  subtle: 'var(--bg-subtle)',
  elevated: 'var(--bg-elevated)',
  inverse: 'var(--bg-inverse)',
  // text (also usable as text-* via the `text` key below)
  primary: 'var(--text-primary)',
  secondary: 'var(--text-secondary)',
  muted: 'var(--text-muted)',
  accent: 'var(--text-accent)',
  // borders
  'border-subtle': 'var(--border-subtle)',
  'border-default': 'var(--border-default)',
  'border-strong': 'var(--border-strong)'
};
const preset = {
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        violet,
        blue,
        ink,
        white: '#FFFFFF',
        // status
        success: '#1FA971',
        warning: '#E0962B',
        danger: '#D64550',
        info: '#4C6FE0',
        'success-soft': '#E4F5EE',
        'warning-soft': '#FBF0DD',
        'danger-soft': '#FBE7E8',
        'info-soft': '#E7ECFB',
        // brand alias
        brand: violet,
        // dark-mode-aware semantic tokens
        ...semantic
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        body: ['Figtree', 'system-ui', 'sans-serif'],
        display: ['Schibsted Grotesk', 'Figtree', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      fontSize: {
        '2xs': ['0.6875rem', {
          lineHeight: '1.4'
        }],
        xs: ['0.75rem', {
          lineHeight: '1.5'
        }],
        sm: ['0.875rem', {
          lineHeight: '1.5'
        }],
        base: ['1rem', {
          lineHeight: '1.5'
        }],
        md: ['1.125rem', {
          lineHeight: '1.5'
        }],
        lg: ['1.25rem', {
          lineHeight: '1.28'
        }],
        xl: ['1.5rem', {
          lineHeight: '1.28'
        }],
        '2xl': ['1.875rem', {
          lineHeight: '1.2'
        }],
        '3xl': ['2.25rem', {
          lineHeight: '1.12'
        }],
        '4xl': ['3rem', {
          lineHeight: '1.08'
        }],
        '5xl': ['3.75rem', {
          lineHeight: '1.04'
        }],
        '6xl': ['4.75rem', {
          lineHeight: '0.98'
        }]
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800'
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.015em',
        normal: '0em',
        wide: '0.04em',
        wider: '0.12em'
      },
      lineHeight: {
        none: '1',
        tight: '1.12',
        snug: '1.28',
        normal: '1.5',
        relaxed: '1.68'
      },
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem'
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        md: '10px',
        lg: '14px',
        xl: '20px',
        '2xl': '28px',
        full: '999px',
        pill: '999px'
      },
      boxShadow: {
        xs: '0 1px 2px rgba(11,11,15,0.05)',
        sm: '0 1px 3px rgba(11,11,15,0.07), 0 1px 2px rgba(11,11,15,0.04)',
        md: '0 4px 12px rgba(11,11,15,0.08), 0 1px 3px rgba(11,11,15,0.05)',
        lg: '0 12px 32px rgba(11,11,15,0.10), 0 4px 10px rgba(11,11,15,0.05)',
        xl: '0 24px 60px rgba(11,11,15,0.14)',
        glow: '0 0 0 1px color-mix(in srgb, #9D50FF 30%, transparent), 0 8px 28px color-mix(in srgb, #9D50FF 22%, transparent)'
      },
      maxWidth: {
        'container-sm': '640px',
        'container-md': '840px',
        'container-lg': '1080px',
        'container-xl': '1280px',
        'container-2xl': '1440px'
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
        'in-out': 'cubic-bezier(0.65, 0.05, 0.36, 1)'
      },
      transitionDuration: {
        fast: '120ms',
        base: '200ms',
        slow: '340ms'
      },
      ringColor: {
        accent: 'var(--violet-500)'
      }
    }
  }
};

/* Export guarded so this file is harmless if the DS compiler evaluates it in a
   non-CommonJS context (it would otherwise throw "module is not defined" and
   break the bundle emit). Tailwind's config loader uses CommonJS `require`. */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = preset;
}
if (typeof window !== 'undefined') {
  window.SIMONTHINKS_TW_PRESET = preset;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "integrations/tailwind.preset.js", error: String((e && e.message) || e) }); }

__ds_ns.ModuleNode = __ds_scope.ModuleNode;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.DonutChart = __ds_scope.DonutChart;

__ds_ns.LineChart = __ds_scope.LineChart;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.CHART_COLORS = __ds_scope.CHART_COLORS;

__ds_ns.Legend = __ds_scope.Legend;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
