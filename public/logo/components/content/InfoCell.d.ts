import * as React from "react";

/**
 * Célula de dado factual dentro de uma faixa de informação (dias, local, telefone).
 * @startingPoint section="Conteúdo" subtitle="Faixa de dados do ambulatório" viewport="700x160"
 */
export interface InfoCellProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  sub?: React.ReactNode;
  tone?: "light" | "dark";
  /** Fio à direita; desligar na última célula da fileira. */
  divider?: boolean;
}
export function InfoCell(props: InfoCellProps): JSX.Element;
