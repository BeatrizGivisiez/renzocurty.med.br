import React from "react";

export function Chip({ children, selected = false, onDark = false, as = "span", style, ...rest }) {
  const Tag = as;
  const scheme = onDark
    ? selected
      ? { border: "rgba(168,178,146,.75)", background: "rgba(168,178,146,.18)", color: "var(--rc-salvia-200)" }
      : { border: "rgba(245,241,232,.22)", background: "transparent", color: "var(--text-on-dark-secondary)" }
    : selected
      ? { border: "rgba(85,102,61,.55)", background: "rgba(85,102,61,.16)", color: "var(--rc-verde-500)" }
      : { border: "rgba(85,102,61,.28)", background: "rgba(85,102,61,.1)", color: "#3D4A2B" };
  return (
    <Tag style={{
      padding: "10px 16px", border: `1px solid ${scheme.border}`, background: scheme.background,
      color: scheme.color, fontFamily: "var(--font-body)", fontSize: "var(--fs-ui-sm)",
      fontWeight: "var(--fw-medium)", borderRadius: "var(--radius-none)",
      cursor: as === "button" ? "pointer" : undefined, ...style
    }} {...rest}>{children}</Tag>
  );
}
