import type { ComponentProps } from "react";
import type { Variant } from "../../types";
import { clsx } from "clsx";

export type MBtnProps = ComponentProps<"button"> & {
  variant?: Variant;
  outline?: boolean;
  block?: boolean;
  rounded?: boolean;
  iconOnly?: boolean;
  transition?: boolean;
};

export const MBtn = ({
  variant,
  outline = false,
  block = false,
  rounded = false,
  iconOnly = false,
  transition = false,
  className,
  type = "button",
  ...props
}: MBtnProps) => (
  <button
    className={clsx(
      "m-btn",
      variant && `--${variant}`,
      outline && "--outline",
      block && "--block",
      rounded && "--rounded",
      iconOnly && "--icon-only",
      transition && "--transition",
      className,
    )}
    type={type}
    {...props}
  />
);
