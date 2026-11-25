import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MAlertIconsProps = ComponentProps<"div">;

export const MAlertIcons = ({ className, ...props }: MAlertIconsProps) => (
  <div className={clsx("m-alert__icons", className)} {...props} />
);
