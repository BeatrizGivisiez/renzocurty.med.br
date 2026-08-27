import React from "react";

export function ImageCard({ src, alt, eyebrow, title, body, meta, height = 430, objectPosition = "50% 46%", strong = false, style, ...rest }) {
  return (
    <div style={{ position: "relative", overflow: "hidden", background: "var(--surface-alt)", ...style }} {...rest}>
      <img src={src} alt={alt} style={{ width: "100%", height: "100%", minHeight: height, objectFit: "cover", objectPosition, display: "block" }} />
      <div style={{ position: "absolute", inset: 0, background: strong ? "var(--scrim-bottom-strong)" : "var(--scrim-bottom)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 30px", color: "var(--rc-creme)" }}>
        {eyebrow ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label-sm)", letterSpacing: "var(--tracking-label-sm)", textTransform: "uppercase", color: "var(--accent-label-dark)" }}>{eyebrow}</span> : null}
        {title ? <div style={{ marginTop: "10px", fontFamily: "var(--font-display)", fontSize: "var(--fs-title-3)", lineHeight: "var(--lh-title)", maxWidth: "22ch" }}>{title}</div> : null}
        {body ? <p style={{ margin: "12px 0 0", maxWidth: "54ch", fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-body)", color: "var(--text-on-dark-secondary)" }}>{body}</p> : null}
        {meta ? <div style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid rgba(245,241,232,.22)", fontFamily: "var(--font-mono)", fontSize: "10.5px", color: "var(--text-on-dark-muted)" }}>{meta}</div> : null}
      </div>
    </div>
  );
}
