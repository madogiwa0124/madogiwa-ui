import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MAlertActionsProps = ComponentProps<"div">;

export const MAlertActions = ({ className, ...props }: MAlertActionsProps) => (
  <div className={clsx("m-alert__actions", className)} {...props} />
);
