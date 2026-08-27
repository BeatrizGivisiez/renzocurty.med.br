import * as React from "react";

/**
 * Foto com véu de proteção e legenda ancorada na base.
 * @startingPoint section="Mídia" subtitle="Foto com véu e legenda" viewport="700x400"
 */
export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: React.ReactNode;
  body?: React.ReactNode;
  /** Linha de crédito ou integrantes, sob um fio. */
  meta?: React.ReactNode;
  height?: number;
  objectPosition?: string;
  /** Véu mais forte, começando no topo — use quando houver texto longo. */
  strong?: boolean;
}
export function ImageCard(props: ImageCardProps): JSX.Element;
