import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MCardContentProps = ComponentProps<"div">;

export const MCardContent = ({ className, ...props }: MCardContentProps) => (
  <div className={clsx("m-card__content", className)} {...props} />
);
