import React from "react";

export function Eyebrow({ number, children, tone = "light", style, ...rest }) {
  const color = tone === "dark" ? "var(--accent-label-dark)" : "var(--accent-label)";
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-label)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color,
        ...style
      }}
      {...rest}
    >
      {number ? `${number} · ` : ""}{children}
    </div>
  );
}
