import React from "react";

export function InfoCell({ label, value, sub, tone = "dark", divider = true, style, ...rest }) {
  const onDark = tone === "dark";
  return (
    <div style={{
      padding: "var(--cell-pad)",
      borderRight: divider ? `1px solid ${onDark ? "rgba(168,178,146,.28)" : "var(--border-hairline)"}` : undefined,
      display: "flex", flexDirection: "column", gap: "9px", ...style
    }} {...rest}>
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: "var(--fs-label-xs)",
        letterSpacing: "var(--tracking-label-sm)", textTransform: "uppercase",
        color: onDark ? "var(--text-on-dark-faint)" : "var(--text-faint)"
      }}>{label}</div>
      <div style={{ fontSize: "17px", lineHeight: "var(--lh-snug)", color: onDark ? "var(--text-on-dark)" : "var(--text-primary)" }}>{value}</div>
      {sub ? <div style={{ fontSize: "var(--fs-ui-sm)", lineHeight: 1.5, color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)" }}>{sub}</div> : null}
    </div>
  );
}
