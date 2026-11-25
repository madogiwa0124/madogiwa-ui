import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MNavbarItemProps = ComponentProps<"li"> & {
  end?: boolean;
};

export const MNavbarItem = ({ end = false, className, ...props }: MNavbarItemProps) => (
  <li className={clsx("m-navbar__item", end && "--end", className)} {...props} />
);
