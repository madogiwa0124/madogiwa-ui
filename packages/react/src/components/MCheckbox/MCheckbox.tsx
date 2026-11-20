import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MCheckboxProps = Omit<ComponentProps<"input">, "type">;

export const MCheckbox = ({ className, ...props }: MCheckboxProps) => (
  <input type="checkbox" className={clsx("m-checkbox", className)} {...props} />
);
