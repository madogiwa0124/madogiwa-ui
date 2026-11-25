import type { ComponentProps, ElementType } from "react";
import type { Variant } from "../../types";
import { clsx } from "clsx";

export type MBadgeElement = "span" | "button" | "a";

export type MBadgeProps<T extends MBadgeElement = "span"> = ComponentProps<T> & {
  as?: T;
  variant?: Variant | "danger" | "warning";
  outline?: boolean;
  small?: boolean;
  rounded?: boolean;
  transition?: boolean;
};

// NOTE: The generic keeps the props of the element chosen by `as` (ex: href for "a") type-checked for consumers.
// Inside, TypeScript cannot relate ComponentProps<T> to a specific element, so the element is widened to ElementType.
// A type annotation would not work here: assignment narrows the annotated union back to "span" | "button" | "a".
export const MBadge = <T extends MBadgeElement = "span">({
  as,
  variant,
  outline = false,
  small = false,
  rounded = false,
  transition = false,
  className,
  ...props
}: MBadgeProps<T>) => {
  const Element = (as ?? "span") as ElementType;
  return (
    <Element
      className={clsx(
        "m-badge",
        variant && `--${variant}`,
        outline && "--outline",
        small && "--small",
        rounded && "--rounded",
        transition && "--transition",
        className,
      )}
      {...props}
    />
  );
};
