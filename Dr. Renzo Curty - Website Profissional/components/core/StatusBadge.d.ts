import * as React from "react";

/**
 * Selo de situação com ponto: vínculo ativo ou encerrado.
 * @startingPoint section="Core" subtitle="Ativo e encerrado" viewport="700x120"
 */
export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** Ativo recebe fundo translúcido claro e ponto verde-claro. */
  active?: boolean;
  onDark?: boolean;
}
export function StatusBadge(props: StatusBadgeProps): JSX.Element;
