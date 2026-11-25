import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MToggleProps = Omit<ComponentProps<"input">, "type">;

export const MToggle = ({ className, ...props }: MToggleProps) => (
  <input type="checkbox" role="switch" className={clsx("m-toggle", className)} {...props} />
);
