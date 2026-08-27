import React from "react";

const base = {
  fontFamily: "var(--font-body)",
  fontWeight: "var(--fw-semibold)",
  borderRadius: "var(--radius-sm)",
  whiteSpace: "nowrap",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  border: "1px solid transparent",
  transition: "background var(--dur) var(--ease), color var(--dur) var(--ease), border-color var(--dur) var(--ease)"
};

const sizes = {
  sm: { padding: "11px 22px", fontSize: "13px" },
  md: { padding: "16px 30px", fontSize: "14px" }
};

const variants = {
  primary: { background: "var(--rc-creme)", color: "var(--rc-verde-800)" },
  secondary: { background: "transparent", color: "var(--rc-creme)", borderColor: "var(--border-on-dark-strong)" },
  onLight: { background: "var(--rc-verde-500)", color: "var(--rc-creme)" },
  ghost: { background: "transparent", color: "var(--rc-verde-500)", borderColor: "var(--border-hairline-strong)" }
};

export function Button({ children, variant = "primary", size = "md", href, disabled = false, style, ...rest }) {
  const Tag = href && !disabled ? "a" : "button";
  return (
    <Tag
      href={href}
      disabled={Tag === "button" ? disabled : undefined}
      style={{ ...base, ...sizes[size], ...variants[variant], opacity: disabled ? 0.45 : 1, pointerEvents: disabled ? "none" : undefined, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
