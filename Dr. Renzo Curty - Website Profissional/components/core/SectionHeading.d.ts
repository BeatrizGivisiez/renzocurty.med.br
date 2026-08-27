import * as React from "react";

/**
 * Cabeçalho de seção: rótulo numerado, título em serifa e texto de apoio ao lado.
 * @startingPoint section="Core" subtitle="Rótulo, título e lead" viewport="700x220"
 */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  number?: string;
  label?: string;
  title: React.ReactNode;
  /** Parágrafo curto à direita do título. Omitir deixa o título em largura total. */
  lead?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "start" | "end";
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
