import type { ComponentProps } from "react";
import type { StatusVariant } from "../../types";
import { clsx } from "clsx";

export type MAlertAutoDismiss = "0s" | "3s" | "5s" | "10s";

export type MAlertProps = ComponentProps<"div"> & {
  variant?: StatusVariant;
  withProgress?: boolean;
  autoDismiss?: MAlertAutoDismiss;
};

export const MAlert = ({ variant, withProgress = false, autoDismiss, className, ...props }: MAlertProps) => (
  <div
    className={clsx("m-alert", variant && `--${variant}`, withProgress && "--with-progress", className)}
    role="alert"
    data-auto-dismiss={autoDismiss}
    {...props}
  />
);
