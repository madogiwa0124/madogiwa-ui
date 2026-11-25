import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MH4Props = ComponentProps<"h4">;

export const MH4 = ({ className, ...props }: MH4Props) => (
  <h4 className={clsx("m-h4", className)} {...props} />
);
