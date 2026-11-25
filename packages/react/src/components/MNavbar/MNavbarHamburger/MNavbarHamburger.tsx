import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MNavbarHamburgerProps = ComponentProps<"div">;

export const MNavbarHamburger = ({ className, ...props }: MNavbarHamburgerProps) => (
  <div className={clsx("m-navbar__hamburger", className)} {...props} />
);
