import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MPProps = ComponentProps<"p">;

export const MP = ({ className, ...props }: MPProps) => (
  <p className={clsx("m-p", className)} {...props} />
);
