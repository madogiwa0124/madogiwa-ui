import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MH1Props = ComponentProps<"h1">;

export const MH1 = ({ className, ...props }: MH1Props) => (
  <h1 className={clsx("m-h1", className)} {...props} />
);
