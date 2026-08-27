import React from "react";

export function MetricStat({ value, label, tone = "dark", style, ...rest }) {
  const onDark = tone === "dark";
  return (
    <div style={style} {...rest}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-title-1)", lineHeight: 1, color: onDark ? "var(--text-on-dark)" : "var(--text-primary)" }}>{value}</div>
      <div style={{
        marginTop: "6px", fontFamily: "var(--font-mono)", fontSize: "var(--fs-label-sm)",
        letterSpacing: "var(--tracking-label-xs)", textTransform: "uppercase",
        color: onDark ? "var(--text-on-dark-faint)" : "var(--text-faint)"
      }}>{label}</div>
    </div>
  );
}
