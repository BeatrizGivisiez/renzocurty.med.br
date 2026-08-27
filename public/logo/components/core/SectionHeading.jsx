import React from "react";
import { Eyebrow } from "./Eyebrow.jsx";

export function SectionHeading({ number, label, title, lead, tone = "light", align = "end", style, ...rest }) {
  const titleColor = tone === "dark" ? "var(--text-on-dark)" : "var(--text-primary)";
  const leadColor = tone === "dark" ? "var(--text-on-dark-secondary)" : "var(--text-secondary)";
  return (
    <div style={{ display: "grid", gridTemplateColumns: lead ? "1.2fr 1fr" : "1fr", gap: "var(--space-11)", alignItems: align, ...style }} {...rest}>
      <div>
        {label ? <Eyebrow number={number} tone={tone}>{label}</Eyebrow> : null}
        <h2 style={{
          margin: "18px 0 0",
          fontFamily: "var(--font-display)",
          fontWeight: "var(--fw-regular)",
          fontSize: "var(--fs-display-4)",
          lineHeight: "var(--lh-display-loose)",
          letterSpacing: "var(--tracking-display-sm)",
          color: titleColor,
          maxWidth: "var(--measure-heading)",
          textWrap: "balance"
        }}>{title}</h2>
      </div>
      {lead ? (
        <p style={{ margin: 0, fontSize: "var(--fs-body)", lineHeight: "var(--lh-body-loose)", color: leadColor, maxWidth: "var(--measure-lead)", textWrap: "pretty" }}>{lead}</p>
      ) : null}
    </div>
  );
}
