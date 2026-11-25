import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MH5Props = ComponentProps<"h5">;

export const MH5 = ({ className, ...props }: MH5Props) => (
  <h5 className={clsx("m-h5", className)} {...props} />
);
