import { createElement, DetailedHTMLProps, HTMLAttributes } from "react";

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export function Header ({ level, children }: HeaderProps) {
  return createElement(`h${level}`, null, children)
}
