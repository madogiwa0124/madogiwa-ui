import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MCardProps = ComponentProps<"div"> & {
  floating?: boolean;
};

export const MCard = ({ className, floating = false, ...props }: MCardProps) => (
  <div className={clsx("m-card", floating && "--floating", className)} {...props} />
);
