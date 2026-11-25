import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MSnackbarBodyProps = ComponentProps<"div">;

export const MSnackbarBody = ({ className, ...props }: MSnackbarBodyProps) => (
  <div className={clsx("m-snackbar__body", className)} {...props} />
);
