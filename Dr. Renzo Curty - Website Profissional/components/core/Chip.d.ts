import * as React from "react";

/**
 * Etiqueta retangular para assuntos e para escolha única em formulário.
 * @startingPoint section="Core" subtitle="Etiqueta e escolha" viewport="700x140"
 */
export interface ChipProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  selected?: boolean;
  onDark?: boolean;
  /** "button" quando é escolha clicável. */
  as?: "span" | "button";
}
export function Chip(props: ChipProps): JSX.Element;
