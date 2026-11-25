import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MSnackbarActionsProps = ComponentProps<"div">;

export const MSnackbarActions = ({ className, ...props }: MSnackbarActionsProps) => (
  <div className={clsx("m-snackbar__actions", className)} {...props} />
);
