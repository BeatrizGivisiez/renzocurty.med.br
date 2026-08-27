import * as React from "react";

/**
 * Botão de ação. Sem sombra, sem gradiente, raio de 2px.
 * @startingPoint section="Core" subtitle="Primário, secundário e fantasma" viewport="700x160"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** primary/secondary vivem sobre superfície escura; onLight/ghost sobre creme. */
  variant?: "primary" | "secondary" | "onLight" | "ghost";
  size?: "sm" | "md";
  /** Renderiza como <a> quando presente. */
  href?: string;
  disabled?: boolean;
}
export function Button(props: ButtonProps): JSX.Element;
