import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MLinkProps = ComponentProps<"a">;

export const MLink = ({ className, ...props }: MLinkProps) => (
  <a className={clsx("m-link", className)} {...props} />
);
