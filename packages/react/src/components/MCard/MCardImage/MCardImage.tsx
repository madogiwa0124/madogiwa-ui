import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MCardImageProps = Omit<ComponentProps<"img">, "src" | "alt"> & {
  src: string;
  alt: string;
};

export const MCardImage = ({ className, src, alt, ...props }: MCardImageProps) => (
  <img className={clsx("m-card__image", className)} src={src} alt={alt} {...props} />
);
