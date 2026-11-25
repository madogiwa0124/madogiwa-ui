import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MCardFooterProps = ComponentProps<"div">;

export const MCardFooter = ({ className, ...props }: MCardFooterProps) => (
  <div className={clsx("m-card__footer", className)} {...props} />
);
