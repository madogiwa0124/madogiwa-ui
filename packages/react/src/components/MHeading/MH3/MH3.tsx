import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MH3Props = ComponentProps<"h3">;

export const MH3 = ({ className, ...props }: MH3Props) => (
  <h3 className={clsx("m-h3", className)} {...props} />
);
