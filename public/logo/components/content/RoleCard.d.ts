import * as React from "react";

/**
 * Card de vínculo profissional. Vínculo ativo vira campo verde musgo cheio; encerrado fica creme.
 * @startingPoint section="Conteúdo" subtitle="Vínculo ativo e encerrado" viewport="700x330"
 */
export interface RoleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ex. "2026 · Atual" — ponto médio, nunca travessão. */
  period: string;
  status?: string;
  /** Ativa o campo verde cheio. É o único destaque de cor da seção. */
  active?: boolean;
  role: string;
  org: string;
  description: string;
  /** Passe "1 / -1" para o card órfão de uma grade ímpar ocupar as duas colunas. */
  span?: string;
}
export function RoleCard(props: RoleCardProps): JSX.Element;
