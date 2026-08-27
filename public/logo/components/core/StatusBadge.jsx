import React from "react";

export function StatusBadge({ children, active = false, onDark = false, style, ...rest }) {
  const scheme = active
    ? { border: "rgba(245,241,232,.45)", background: "rgba(245,241,232,.12)", color: "var(--rc-creme)", dot: "var(--status-active)" }
    : onDark
      ? { border: "var(--border-on-dark-strong)", background: "transparent", color: "var(--text-on-dark-muted)", dot: "rgba(245,241,232,.3)" }
      : { border: "var(--border-hairline-strong)", background: "transparent", color: "rgba(25,28,19,.55)", dot: "var(--status-done)" };
  return (
    <span style={{
      fontFamily: "var(--font-mono)", fontSize: "var(--fs-label-xs)",
      letterSpacing: "var(--tracking-label-xs)", textTransform: "uppercase",
      padding: "5px 10px", border: `1px solid ${scheme.border}`, background: scheme.background,
      color: scheme.color, display: "inline-flex", alignItems: "center", gap: "7px",
      whiteSpace: "nowrap", ...style
    }} {...rest}>
      <span style={{ width: 5, height: 5, borderRadius: "var(--radius-dot)", background: scheme.dot }} />
      {children}
    </span>
  );
}
