import React from "react";

export function ListRow({ index, title, meta, description, tone = "light", last = false, style, ...rest }) {
  const onDark = tone === "dark";
  const border = onDark ? "var(--border-on-dark)" : "var(--border-hairline)";
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "44px minmax(0,1fr)", gap: "var(--space-5)",
      padding: "22px 0", borderTop: `1px solid ${border}`,
      borderBottom: last ? `1px solid ${border}` : undefined,
      alignItems: "baseline", ...style
    }} {...rest}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", color: onDark ? "var(--text-on-dark-faint)" : "rgba(85,102,61,.75)" }}>{index}</span>
      <div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--space-4)" }}>
          <span style={{ fontSize: "var(--fs-body-md)", fontWeight: "var(--fw-semibold)", lineHeight: "var(--lh-snug)", color: onDark ? "var(--text-on-dark)" : "var(--text-primary)" }}>{title}</span>
          {meta ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", color: onDark ? "var(--accent-label-dark)" : "var(--text-faint)", whiteSpace: "nowrap" }}>{meta}</span> : null}
        </div>
        {description ? <p style={{ margin: "8px 0 0", fontSize: "var(--fs-body-xs)", lineHeight: "var(--lh-body)", color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)", textWrap: "pretty" }}>{description}</p> : null}
      </div>
    </div>
  );
}
