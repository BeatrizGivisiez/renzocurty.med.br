/* Fallback dos primitivos, para que os cards e o UI kit renderizem mesmo
   antes de _ds_bundle.js ser compilado. O bundle real tem precedência.
   Escrito sem JSX de propósito: não depende de Babel. */
(function (global) {
  var h = function () { return global.React.createElement.apply(null, arguments); };

  function Button(p) {
    var p2 = Object.assign({}, p);
    var variant = p2.variant || 'primary', size = p2.size || 'md';
    delete p2.variant; delete p2.size; delete p2.children; delete p2.style; delete p2.disabled;
    var sizes = { sm: { padding: '11px 22px', fontSize: '13px' }, md: { padding: '16px 30px', fontSize: '14px' } };
    var vs = {
      primary:   { background: 'var(--rc-creme)', color: 'var(--rc-verde-800)' },
      secondary: { background: 'transparent', color: 'var(--rc-creme)', borderColor: 'var(--border-on-dark-strong)' },
      onLight:   { background: 'var(--rc-verde-500)', color: 'var(--rc-creme)' },
      ghost:     { background: 'transparent', color: 'var(--rc-verde-500)', borderColor: 'var(--border-hairline-strong)' }
    };
    var st = Object.assign({
      fontFamily: 'var(--font-body)', fontWeight: 600, borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap', textDecoration: 'none', display: 'inline-flex',
      alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
      border: '1px solid transparent', opacity: p.disabled ? .45 : 1
    }, sizes[size], vs[variant], p.style);
    return h(p.href ? 'a' : 'button', Object.assign({ style: st }, p2), p.children);
  }

  function Eyebrow(p) {
    return h('div', {
      style: Object.assign({
        fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)',
        letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase',
        color: p.tone === 'dark' ? 'var(--accent-label-dark)' : 'var(--accent-label)'
      }, p.style)
    }, (p.number ? p.number + ' · ' : '') + '', p.children);
  }

  function SectionHeading(p) {
    var dark = p.tone === 'dark';
    return h('div', { style: Object.assign({ display: 'grid', gridTemplateColumns: p.lead ? '1.2fr 1fr' : '1fr', gap: 'var(--space-11)', alignItems: p.align || 'end' }, p.style) },
      h('div', null,
        p.label ? h(Eyebrow, { number: p.number, tone: p.tone }, p.label) : null,
        h('h2', { style: { margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--fs-display-4)', lineHeight: 'var(--lh-display-loose)', letterSpacing: 'var(--tracking-display-sm)', color: dark ? 'var(--text-on-dark)' : 'var(--text-primary)', maxWidth: 'var(--measure-heading)', textWrap: 'balance' } }, p.title)
      ),
      p.lead ? h('p', { style: { margin: 0, fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body-loose)', color: dark ? 'var(--text-on-dark-secondary)' : 'var(--text-secondary)', maxWidth: 'var(--measure-lead)', textWrap: 'pretty' } }, p.lead) : null
    );
  }

  function StatusBadge(p) {
    var s = p.active
      ? { border: 'rgba(245,241,232,.45)', background: 'rgba(245,241,232,.12)', color: 'var(--rc-creme)', dot: 'var(--status-active)' }
      : p.onDark
        ? { border: 'var(--border-on-dark-strong)', background: 'transparent', color: 'var(--text-on-dark-muted)', dot: 'rgba(245,241,232,.3)' }
        : { border: 'var(--border-hairline-strong)', background: 'transparent', color: 'rgba(25,28,19,.55)', dot: 'var(--status-done)' };
    return h('span', { style: Object.assign({ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label-xs)', letterSpacing: 'var(--tracking-label-xs)', textTransform: 'uppercase', padding: '5px 10px', border: '1px solid ' + s.border, background: s.background, color: s.color, display: 'inline-flex', alignItems: 'center', gap: '7px', whiteSpace: 'nowrap' }, p.style) },
      h('span', { style: { width: 5, height: 5, borderRadius: '50%', background: s.dot } }), p.children);
  }

  function Chip(p) {
    var s = p.onDark
      ? (p.selected ? { border: 'rgba(168,178,146,.75)', background: 'rgba(168,178,146,.18)', color: 'var(--rc-salvia-200)' }
                    : { border: 'rgba(245,241,232,.22)', background: 'transparent', color: 'var(--text-on-dark-secondary)' })
      : (p.selected ? { border: 'rgba(85,102,61,.55)', background: 'rgba(85,102,61,.16)', color: 'var(--rc-verde-500)' }
                    : { border: 'rgba(85,102,61,.28)', background: 'rgba(85,102,61,.1)', color: '#3D4A2B' });
    var rest = { onClick: p.onClick, key: p.key };
    return h(p.as || 'span', Object.assign(rest, { style: Object.assign({ padding: '10px 16px', border: '1px solid ' + s.border, background: s.background, color: s.color, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-ui-sm)', fontWeight: 500, cursor: p.as === 'button' ? 'pointer' : undefined }, p.style) }), p.children);
  }

  function RoleCard(p) {
    var t = p.active
      ? { bg: 'var(--surface-brand)', fg: 'var(--rc-creme)', period: 'var(--rc-salvia-200)', org: '#E4E9D6', desc: 'rgba(245,241,232,.78)' }
      : { bg: 'var(--surface-page)', fg: 'var(--text-primary)', period: 'var(--accent-label)', org: 'var(--rc-verde-500)', desc: 'var(--text-muted)' };
    return h('div', { style: Object.assign({ background: t.bg, color: t.fg, padding: 'var(--card-pad)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', minHeight: 280, gridColumn: p.span }, p.style) },
      h('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)' } },
        h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--tracking-label-sm)', textTransform: 'uppercase', color: t.period } }, p.period),
        p.status ? h(StatusBadge, { active: p.active }, p.status) : null),
      h('div', null,
        h('div', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--fs-title-2)', lineHeight: 'var(--lh-title)' } }, p.role),
        h('div', { style: { marginTop: 'var(--space-2)', fontSize: 'var(--fs-body-xs)', fontWeight: 600, color: t.org } }, p.org)),
      h('p', { style: { margin: 0, fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-body)', color: t.desc, textWrap: 'pretty' } }, p.description));
  }

  function MetricStat(p) {
    var dark = (p.tone || 'dark') === 'dark';
    return h('div', { style: p.style },
      h('div', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--fs-title-1)', lineHeight: 1, color: dark ? 'var(--text-on-dark)' : 'var(--text-primary)' } }, p.value),
      h('div', { style: { marginTop: 6, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label-sm)', letterSpacing: 'var(--tracking-label-xs)', textTransform: 'uppercase', color: dark ? 'var(--text-on-dark-faint)' : 'var(--text-faint)' } }, p.label));
  }

  function ListRow(p) {
    var dark = p.tone === 'dark';
    var b = dark ? 'var(--border-on-dark)' : 'var(--border-hairline)';
    return h('div', { style: Object.assign({ display: 'grid', gridTemplateColumns: '44px minmax(0,1fr)', gap: 'var(--space-5)', padding: '22px 0', borderTop: '1px solid ' + b, borderBottom: p.last ? '1px solid ' + b : undefined, alignItems: 'baseline' }, p.style) },
      h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: dark ? 'var(--text-on-dark-faint)' : 'rgba(85,102,61,.75)' } }, p.index),
      h('div', null,
        h('div', { style: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-4)' } },
          h('span', { style: { fontSize: 'var(--fs-body-md)', fontWeight: 600, lineHeight: 'var(--lh-snug)', color: dark ? 'var(--text-on-dark)' : 'var(--text-primary)' } }, p.title),
          p.meta ? h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: dark ? 'var(--accent-label-dark)' : 'var(--text-faint)', whiteSpace: 'nowrap' } }, p.meta) : null),
        p.description ? h('p', { style: { margin: '8px 0 0', fontSize: 'var(--fs-body-xs)', lineHeight: 'var(--lh-body)', color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)', textWrap: 'pretty' } }, p.description) : null));
  }

  function InfoCell(p) {
    var dark = (p.tone || 'dark') === 'dark';
    var div = p.divider === false ? undefined : '1px solid ' + (dark ? 'rgba(168,178,146,.28)' : 'var(--border-hairline)');
    return h('div', { style: Object.assign({ padding: 'var(--cell-pad)', borderRight: div, display: 'flex', flexDirection: 'column', gap: '9px' }, p.style) },
      h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label-xs)', letterSpacing: 'var(--tracking-label-sm)', textTransform: 'uppercase', color: dark ? 'var(--text-on-dark-faint)' : 'var(--text-faint)' } }, p.label),
      h('div', { style: { fontSize: 17, lineHeight: 'var(--lh-snug)', color: dark ? 'var(--text-on-dark)' : 'var(--text-primary)' } }, p.value),
      p.sub ? h('div', { style: { fontSize: 'var(--fs-ui-sm)', lineHeight: 1.5, color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)' } }, p.sub) : null);
  }

  function ImageCard(p) {
    return h('div', { style: Object.assign({ position: 'relative', overflow: 'hidden', background: 'var(--surface-alt)' }, p.style) },
      h('img', { src: p.src, alt: p.alt, style: { width: '100%', height: '100%', minHeight: p.height || 430, objectFit: 'cover', objectPosition: p.objectPosition || '50% 46%', display: 'block' } }),
      h('div', { style: { position: 'absolute', inset: 0, background: p.strong ? 'var(--scrim-bottom-strong)' : 'var(--scrim-bottom)' } }),
      h('div', { style: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 30px', color: 'var(--rc-creme)' } },
        p.eyebrow ? h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label-sm)', letterSpacing: 'var(--tracking-label-sm)', textTransform: 'uppercase', color: 'var(--accent-label-dark)' } }, p.eyebrow) : null,
        p.title ? h('div', { style: { marginTop: 10, fontFamily: 'var(--font-display)', fontSize: 'var(--fs-title-3)', lineHeight: 'var(--lh-title)', maxWidth: '22ch' } }, p.title) : null,
        p.body ? h('p', { style: { margin: '12px 0 0', maxWidth: '54ch', fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-body)', color: 'var(--text-on-dark-secondary)' } }, p.body) : null,
        p.meta ? h('div', { style: { marginTop: 18, paddingTop: 16, borderTop: '1px solid rgba(245,241,232,.22)', fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--text-on-dark-muted)' } }, p.meta) : null));
  }

  function TextField(p) {
    var field = { width: '100%', padding: '14px 16px', background: 'rgba(245,241,232,.06)', border: '1px solid rgba(245,241,232,.18)', color: 'var(--rc-creme)', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-xs)', outline: 'none' };
    return h('div', { style: p.style },
      p.label ? h('label', { style: { display: 'block', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label-xs)', letterSpacing: 'var(--tracking-label-sm)', textTransform: 'uppercase', color: 'var(--text-on-dark-faint)', marginBottom: '9px' } }, p.label) : null,
      p.multiline
        ? h('textarea', { rows: p.rows || 3, placeholder: p.placeholder, style: Object.assign({ resize: 'vertical' }, field) })
        : h('input', { type: p.type || 'text', placeholder: p.placeholder, style: field }));
  }

  global.RCFallback = { Button: Button, Eyebrow: Eyebrow, SectionHeading: SectionHeading, StatusBadge: StatusBadge, Chip: Chip, RoleCard: RoleCard, MetricStat: MetricStat, ListRow: ListRow, InfoCell: InfoCell, ImageCard: ImageCard, TextField: TextField };
})(window);
