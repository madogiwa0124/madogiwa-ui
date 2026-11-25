import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MTabsProps = ComponentProps<"div"> & {
  transition?: boolean;
  scrollhint?: boolean;
};

export const MTabs = ({ transition = false, scrollhint = false, className, ...props }: MTabsProps) => (
  <div className={clsx("m-tabs", transition && "--transition", scrollhint && "--scrollhint", className)} {...props} />
);
