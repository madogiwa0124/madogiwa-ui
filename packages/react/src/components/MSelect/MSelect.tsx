import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MSelectProps = ComponentProps<"select"> & {
  error?: boolean;
};

export const MSelect = ({ error = false, className, ...props }: MSelectProps) => (
  <select className={clsx("m-select", error && "--error", className)} aria-invalid={error || undefined} {...props} />
);
