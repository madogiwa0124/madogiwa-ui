import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MH6Props = ComponentProps<"h6">;

export const MH6 = ({ className, ...props }: MH6Props) => (
  <h6 className={clsx("m-h6", className)} {...props} />
);
