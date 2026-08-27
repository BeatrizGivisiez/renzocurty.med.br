import * as React from "react";

/**
 * Campo de texto do formulário de contato. Existe só na variante sobre verde escuro.
 * @startingPoint section="Formulário" subtitle="Campo simples e área de texto" viewport="700x220"
 */
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
}
export function TextField(props: TextFieldProps): JSX.Element;
