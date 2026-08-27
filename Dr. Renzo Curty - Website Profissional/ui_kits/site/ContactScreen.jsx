import React from "react";
import { SectionHeading } from "../../components/core/SectionHeading.jsx";
import { InfoCell } from "../../components/content/InfoCell.jsx";
import { TextField } from "../../components/forms/TextField.jsx";
import { Chip } from "../../components/core/Chip.jsx";
import { Button } from "../../components/core/Button.jsx";

const motivos = ["Consulta clínica geral", "Consultoria em gestão", "Convite acadêmico", "Imprensa"];

export function ContactScreen() {
  const [motivo, setMotivo] = React.useState(motivos[0]);
  return (
    <section id="contato" style={{ background: "var(--surface-dark)", color: "var(--text-on-dark)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--container-gutter)" }}>
        <SectionHeading number="07" label="Contato" tone="dark"
          title="Agende uma avaliação clínica"
          lead="Atendimento ambulatorial em clínica geral, consultoria em gestão de saúde e convites para atividades científicas." />

        <div style={{ marginTop: "var(--space-10)", border: "1px solid rgba(168,178,146,.4)", background: "rgba(168,178,146,.07)" }}>
          <div style={{ padding: "22px 28px", borderBottom: "1px solid rgba(168,178,146,.28)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-title-2)", lineHeight: 1.1 }}>Ambulatório de Clínica Geral</div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label-sm)", letterSpacing: "1.5px", textTransform: "uppercase", padding: "6px 12px", border: "1px solid rgba(168,178,146,.5)", color: "var(--rc-salvia-300)", whiteSpace: "nowrap" }}>Agenda aberta</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
            <InfoCell label="Dias de atendimento" value="Quintas e sextas-feiras" />
            <InfoCell label="Modalidades" value="Convênios e particular" />
            <InfoCell label="Local" value="Hospital Flávio Leal" sub="Piraí · RJ" />
            <InfoCell label="Agendamentos" value="(24) 3511-5600" sub="Ramal 2 · Recepção do ambulatório" divider={false} />
          </div>
        </div>

        <div style={{ marginTop: "var(--space-11)", background: "rgba(245,241,232,.05)", border: "1px solid var(--border-on-dark)", padding: "44px 44px 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "var(--space-10)", alignItems: "start" }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "31px", lineHeight: 1.12 }}>Envie uma solicitação</div>
              <p style={{ margin: "14px 0 0", fontSize: "var(--fs-body-xs)", lineHeight: 1.6, color: "var(--text-on-dark-muted)" }}>
                Este formulário não substitui atendimento de urgência: em emergências, procure o serviço de saúde mais próximo ou ligue 192.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
                <TextField label="Nome completo" placeholder="Como devemos chamá-lo" />
                <TextField label="E-mail" type="email" placeholder="nome@email.com" />
                <TextField label="Telefone" type="tel" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label-xs)", letterSpacing: "1.6px", textTransform: "uppercase", color: "var(--text-on-dark-faint)", marginBottom: 11 }}>Motivo do contato</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {motivos.map(m => (
                    <Chip key={m} as="button" onDark selected={motivo === m} onClick={() => setMotivo(m)}>{m}</Chip>
                  ))}
                </div>
              </div>
              <TextField label="Mensagem" multiline rows={3} placeholder="Descreva brevemente sua necessidade" />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="primary" size="sm">Enviar solicitação</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
