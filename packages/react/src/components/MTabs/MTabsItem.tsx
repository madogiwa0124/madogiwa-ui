import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MTabsItemProps = Omit<ComponentProps<"button">, "role"> & {
  active?: boolean;
};

// NOTE: Only the active tab is reachable with Tab (roving tabindex), as the WAI-ARIA tabs pattern expects; MTabsList moves focus between tabs with the arrow keys.
export const MTabsItem = ({ active = false, type = "button", className, ...props }: MTabsItemProps) => (
  <button
    type={type}
    className={clsx("m-tabs__item", active && "--active", className)}
    role="tab"
    aria-selected={active}
    tabIndex={active ? 0 : -1}
    {...props}
  />
);
