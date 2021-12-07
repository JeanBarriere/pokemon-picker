import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export function Image ({ src, ...props }: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  return (
    <img src={src} {...props} />
  )
}