import * as React from "react";

/**
 * Número em serifa com rótulo em mono. Usado em fileira de três, sob um fio.
 * @startingPoint section="Conteúdo" subtitle="Fileira de indicadores" viewport="700x150"
 */
export interface MetricStatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  tone?: "light" | "dark";
}
export function MetricStat(props: MetricStatProps): JSX.Element;
