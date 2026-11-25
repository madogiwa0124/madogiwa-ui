import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MAlertContentProps = ComponentProps<"div">;

export const MAlertContent = ({ className, ...props }: MAlertContentProps) => (
  <div className={clsx("m-alert__content", className)} {...props} />
);
