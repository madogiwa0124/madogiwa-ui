import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MOlProps = ComponentProps<"ol"> & {
  none?: boolean;
  inline?: boolean;
};

export const MOl = ({ none = false, inline = false, className, ...props }: MOlProps) => (
  <ol className={clsx("m-ol", none && "--none", inline && "--inline", className)} {...props} />
);
