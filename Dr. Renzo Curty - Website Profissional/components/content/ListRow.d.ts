import * as React from "react";

/**
 * Linha de lista numerada separada por fio: formação, publicações, passos, frentes.
 * @startingPoint section="Conteúdo" subtitle="Lista numerada com fios" viewport="700x260"
 */
export interface ListRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "01", "2024", ou o ano do registro. */
  index: string;
  title: React.ReactNode;
  /** Metadado alinhado à direita: ano, instituição, volume. */
  meta?: string;
  description?: React.ReactNode;
  tone?: "light" | "dark";
  /** Fecha a lista com fio inferior. */
  last?: boolean;
}
export function ListRow(props: ListRowProps): JSX.Element;
