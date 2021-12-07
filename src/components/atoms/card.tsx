import { HTMLProps } from "react";

export function Card ({ children }: HTMLProps<HTMLDivElement>) {
  return (
    <div>
      {children}
    </div>
  )
}