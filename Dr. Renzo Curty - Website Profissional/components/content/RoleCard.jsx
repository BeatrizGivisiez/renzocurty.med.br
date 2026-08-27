import React from "react";
import { StatusBadge } from "../core/StatusBadge.jsx";

export function RoleCard({ period, status, active = false, role, org, description, span, style, ...rest }) {
  const t = active
    ? { bg: "var(--surface-brand)", fg: "var(--rc-creme)", period: "var(--rc-salvia-200)", org: "#E4E9D6", desc: "rgba(245,241,232,.78)" }
    : { bg: "var(--surface-page)", fg: "var(--text-primary)", period: "var(--accent-label)", org: "var(--rc-verde-500)", desc: "var(--text-muted)" };
  return (
    <div style={{
      background: t.bg, color: t.fg, padding: "var(--card-pad)",
      display: "flex", flexDirection: "column", gap: "var(--space-4)",
      minHeight: 280, gridColumn: span, ...style
    }} {...rest}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--tracking-label-sm)", textTransform: "uppercase", color: t.period }}>{period}</span>
        {status ? <StatusBadge active={active}>{status}</StatusBadge> : null}
      </div>
      <div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-title-2)", lineHeight: "var(--lh-title)" }}>{role}</div>
        <div style={{ marginTop: "var(--space-2)", fontSize: "var(--fs-body-xs)", fontWeight: "var(--fw-semibold)", color: t.org }}>{org}</div>
      </div>
      <p style={{ margin: 0, fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-body)", color: t.desc, textWrap: "pretty" }}>{description}</p>
    </div>
  );
}
