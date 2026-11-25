import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MTabsListProps = ComponentProps<"div">;

export const MTabsList = ({ className, ...props }: MTabsListProps) => (
  <div className={clsx("m-tabs__list", className)} role="tablist" {...props} />
);
