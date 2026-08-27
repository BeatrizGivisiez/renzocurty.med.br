import * as React from "react";

/**
 * Rótulo numerado que abre cada seção ("04 · Áreas remotas").
 * @startingPoint section="Core" subtitle="Rótulo numerado de seção" viewport="700x120"
 */
export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Número de dois dígitos, ex. "04". */
  number?: string;
  children: React.ReactNode;
  /** dark = sobre superfície verde escura (sálvia); light = sobre creme (marrom). */
  tone?: "light" | "dark";
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
