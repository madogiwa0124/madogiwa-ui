import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MLabelProps = ComponentProps<"label"> & {
  required?: boolean;
  disabled?: boolean;
};

export const MLabel = ({ required = false, disabled = false, className, ...props }: MLabelProps) => (
  <label
    className={clsx("m-label", required && "--required", disabled && "--disabled", className)}
    {...props}
  />
);
