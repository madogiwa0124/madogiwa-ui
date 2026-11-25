import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MTextareaProps = ComponentProps<"textarea"> & {
  block?: boolean;
  error?: boolean;
  autoFit?: boolean;
};

export const MTextarea = ({ block = false, error = false, autoFit = false, className, ...props }: MTextareaProps) => (
  <textarea
    className={clsx("m-textarea", block && "--block", error && "--error", autoFit && "--auto-fit", className)}
    aria-invalid={error || undefined}
    {...props}
  />
);
