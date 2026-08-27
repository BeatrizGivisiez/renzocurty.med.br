import React from "react";
import { SectionHeading } from "../../components/core/SectionHeading.jsx";
import { RoleCard } from "../../components/content/RoleCard.jsx";

const roles = [
  { period: "2026 · Atual", status: "Ativo", active: true, role: "Diretor Médico", org: "ABMAR · Associação Brasileira de Medicina de Áreas Remotas", description: "Supervisão técnica e científica das atividades médicas da entidade: qualidade e segurança dos protocolos assistenciais e elaboração de diretrizes clínicas." },
  { period: "2026 · Atual", status: "Ativo", active: true, role: "Médico · servidor público", org: "Hospital Municipal Luiz Gonzaga · 24h semanais", description: "Urgência e emergência: avaliação, estratificação de risco, diagnóstico e manejo de pacientes em diferentes níveis de complexidade." },
  { period: "2024 · 2026", status: "Concluído", role: "Diretor Acadêmico", org: "ABMAR", description: "Coordenação das atividades científicas e formativas: cursos, congressos e jornadas." },
  { period: "2024 · 2025", status: "Concluído", role: "Coordenador Regional SE-1", org: "DENEM", description: "Articulação política e formativa das escolas médicas do Rio de Janeiro e Espírito Santo." },
  { period: "2023 · 2026", status: "Concluído", role: "Presidente", org: "DCE · Universidade de Vassouras", description: "Representação dos estudantes junto à administração universitária e em órgãos colegiados." }
];

export function RolesScreen() {
  return (
    <section id="atuacao" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--container-gutter)" }}>
      <SectionHeading number="03" label="Atuação profissional" title="Vínculos, cargos e responsabilidades" />
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 1,
        background: "rgba(25,28,19,.13)", marginTop: "var(--space-10)",
        border: "1px solid rgba(25,28,19,.13)"
      }}>
        {roles.map((r, i) => (
          <RoleCard key={r.role + i} {...r} span={roles.length % 2 === 1 && i === roles.length - 1 ? "1 / -1" : undefined} />
        ))}
      </div>
    </section>
  );
}
