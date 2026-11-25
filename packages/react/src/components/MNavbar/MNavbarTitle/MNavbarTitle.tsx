import type { ComponentProps, ElementType } from "react";
import { clsx } from "clsx";

export type MNavbarTitleProps = Omit<ComponentProps<"a">, "ref">;

// NOTE: Without href an <a> is not a link for assistive technologies, so the title falls back to a <span>.
// The element is widened to ElementType because the anchor props are typed for HTMLAnchorElement (see MBadge).
export const MNavbarTitle = ({ href, className, ...props }: MNavbarTitleProps) => {
  const Element = (href ? "a" : "span") as ElementType;
  return <Element href={href} className={clsx("m-navbar__title", className)} {...props} />;
};
