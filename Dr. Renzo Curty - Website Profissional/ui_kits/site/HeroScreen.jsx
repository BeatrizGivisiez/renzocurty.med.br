import React from "react";
import { Button } from "../../components/core/Button.jsx";
import { MetricStat } from "../../components/content/MetricStat.jsx";

export function HeroScreen() {
  return (
    <section id="topo" style={{ position: "relative", background: "var(--surface-dark)", color: "var(--text-on-dark)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "var(--glow-corner)" }} />
      <div style={{
        position: "relative", maxWidth: "var(--container-max)", margin: "0 auto",
        padding: "0 var(--container-gutter)", display: "grid",
        gridTemplateColumns: "1.05fr .95fr", gap: "var(--space-10)",
        alignItems: "stretch", minHeight: 660
      }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "96px 0" }}>
          <div style={{ marginBottom: 34, fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "2.4px", textTransform: "uppercase", color: "rgba(245,241,232,.65)" }}>
            Medicina · Gestão em Saúde Pública · Educação médica
          </div>
          <h1 style={{
            margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--fw-regular)",
            fontSize: "var(--fs-display-1)", lineHeight: "var(--lh-display)",
            letterSpacing: "var(--tracking-display)", textWrap: "balance"
          }}>
            Assistência, gestão e<br /><span style={{ fontStyle: "italic", color: "var(--rc-salvia-300)" }}>educação</span> em saúde.
          </h1>
          <p style={{ margin: "30px 0 0", maxWidth: 520, fontSize: "var(--fs-body-lg)", lineHeight: 1.62, color: "var(--text-on-dark-secondary)", textWrap: "pretty" }}>
            Médico pela Universidade de Vassouras e gestor em Saúde Pública. Atua na interface entre assistência médica, gestão estratégica e educação em saúde.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 42, flexWrap: "wrap" }}>
            <Button variant="primary" href="#contato">Agendar avaliação</Button>
            <Button variant="secondary" href="#trajetoria">Ver trajetória</Button>
          </div>
          <div style={{ display: "flex", gap: 44, marginTop: "var(--space-11)", paddingTop: 30, borderTop: "1px solid rgba(245,241,232,.14)" }}>
            <MetricStat value="2026" label="Diretor Médico · ABMAR" />
            <MetricStat value="24h" label="Semanais em urgência" />
            <MetricStat value="05" label="Formações concluídas" />
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, left: -20, overflow: "hidden" }}>
            <img src="../../assets/wa1.jpeg" alt="Dr. Renzo Curty" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "60% 22%" }} />
            <div style={{ position: "absolute", inset: 0, background: "var(--scrim-left)" }} />
          </div>
          <div style={{
            position: "absolute", bottom: 52, right: 0, background: "var(--surface-veil)",
            backdropFilter: "var(--blur-veil)", border: "1px solid var(--border-on-dark)",
            padding: "20px 24px", maxWidth: 266
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label-xs)", letterSpacing: "1.6px", textTransform: "uppercase", color: "var(--accent-label-dark)" }}>Atuação assistencial</div>
            <div style={{ marginTop: 10, fontSize: "var(--fs-ui)", lineHeight: 1.55, color: "rgba(245,241,232,.82)" }}>
              Urgência e emergência: avaliação, estratificação de risco, diagnóstico e manejo de pacientes em diferentes níveis de complexidade.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
