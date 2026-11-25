import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MNavbarItemsProps = ComponentProps<"ul">;

export const MNavbarItems = ({ className, ...props }: MNavbarItemsProps) => (
  <ul className={clsx("m-navbar__items", className)} {...props} />
);
