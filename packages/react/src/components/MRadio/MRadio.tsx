import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MRadioProps = Omit<ComponentProps<"input">, "type">;

export const MRadio = ({ className, ...props }: MRadioProps) => (
  <input type="radio" className={clsx("m-radio", className)} {...props} />
);
