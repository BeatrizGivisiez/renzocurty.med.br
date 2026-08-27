import React from "react";
import { Button } from "../../components/core/Button.jsx";

const links = [
  ["#sobre", "Sobre"], ["#trajetoria", "Trajetória"], ["#atuacao", "Atuação"],
  ["#abmar", "Áreas remotas"], ["#neabi", "NEABI"], ["#producao", "Produção"]
];

export function SiteHeader({ active }) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(30,38,23,.92)", backdropFilter: "var(--blur-header)",
      borderBottom: "1px solid var(--border-on-dark)"
    }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto",
        padding: "0 var(--container-gutter)", height: "var(--header-h)",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-8)"
      }}>
        <a href="#topo" style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", textDecoration: "none" }}>
          <div style={{ width: 34, height: 34, border: "1px solid rgba(245,241,232,.45)", display: "grid", placeItems: "center", fontFamily: "var(--font-display)", fontSize: 16, color: "var(--rc-creme)" }}>RC</div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 19, color: "var(--rc-creme)", whiteSpace: "nowrap" }}>Dr. Renzo Curty</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "1.6px", textTransform: "uppercase", color: "var(--text-on-dark-faint)" }}>Médico</span>
          </div>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {links.map(([href, label]) => (
            <a key={href} href={href} style={{
              fontSize: "var(--fs-ui)", fontWeight: "var(--fw-medium)",
              color: active === href ? "var(--rc-creme)" : "var(--text-on-dark-secondary)",
              whiteSpace: "nowrap", textDecoration: "none"
            }}>{label}</a>
          ))}
          <Button variant="primary" size="sm" href="#contato" style={{ marginLeft: 6 }}>Agendar consulta</Button>
        </nav>
      </div>
    </header>
  );
}
