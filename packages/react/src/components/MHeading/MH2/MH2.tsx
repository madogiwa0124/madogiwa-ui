import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MH2Props = ComponentProps<"h2">;

export const MH2 = ({ className, ...props }: MH2Props) => (
  <h2 className={clsx("m-h2", className)} {...props} />
);
