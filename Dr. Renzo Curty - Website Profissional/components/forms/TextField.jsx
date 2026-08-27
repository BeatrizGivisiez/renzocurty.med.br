import React from "react";

const field = {
  width: "100%", padding: "14px 16px",
  background: "rgba(245,241,232,.06)",
  border: "1px solid rgba(245,241,232,.18)",
  color: "var(--rc-creme)",
  fontFamily: "var(--font-body)", fontSize: "var(--fs-body-xs)",
  borderRadius: "var(--radius-none)", outline: "none"
};

export function TextField({ label, placeholder, type = "text", multiline = false, rows = 3, style, ...rest }) {
  return (
    <div style={style}>
      {label ? (
        <label style={{
          display: "block", fontFamily: "var(--font-mono)", fontSize: "var(--fs-label-xs)",
          letterSpacing: "var(--tracking-label-sm)", textTransform: "uppercase",
          color: "var(--text-on-dark-faint)", marginBottom: "9px"
        }}>{label}</label>
      ) : null}
      {multiline
        ? <textarea rows={rows} placeholder={placeholder} style={{ ...field, resize: "vertical" }} {...rest} />
        : <input type={type} placeholder={placeholder} style={field} {...rest} />}
    </div>
  );
}
