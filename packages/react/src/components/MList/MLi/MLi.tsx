import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MLiProps = ComponentProps<"li">;

export const MLi = ({ className, ...props }: MLiProps) => (
  <li className={clsx("m-li", className)} {...props} />
);
