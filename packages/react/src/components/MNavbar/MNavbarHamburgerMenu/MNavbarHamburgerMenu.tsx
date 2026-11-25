import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MNavbarHamburgerMenuProps = Omit<ComponentProps<"button">, "type" | "children"> & {
  expanded: boolean;
  // NOTE: `| undefined` lets MNavbar forward its own optional labels as is under exactOptionalPropertyTypes.
  openLabel?: string | undefined;
  closeLabel?: string | undefined;
};

export const MNavbarHamburgerMenu = ({
  expanded,
  openLabel = "Open menu",
  closeLabel = "Close menu",
  className,
  ...props
}: MNavbarHamburgerMenuProps) => (
  <button
    type="button"
    className={clsx("m-navbar__hamburger-menu", className)}
    aria-label={expanded ? closeLabel : openLabel}
    aria-expanded={expanded}
    {...props}
  />
);
