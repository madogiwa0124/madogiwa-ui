import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MInputProps = ComponentProps<"input"> & {
  block?: boolean;
  error?: boolean;
  transition?: boolean;
};

// NOTE: aria-invalid is set before the spread so that consumers can still override it (ex: aria-invalid="grammar").
export const MInput = ({ block = false, error = false, transition = false, className, ...props }: MInputProps) => (
  <input
    className={clsx("m-input", block && "--block", error && "--error", transition && "--transition", className)}
    aria-invalid={error || undefined}
    {...props}
  />
);
