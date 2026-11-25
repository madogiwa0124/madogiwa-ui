import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MTableProps = ComponentProps<"table"> & {
  stripe?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  fullWidth?: boolean;
  transition?: boolean;
};

export const MTable = ({
  stripe = false,
  bordered = false,
  hoverable = false,
  fullWidth = false,
  transition = false,
  className,
  ...props
}: MTableProps) => (
  <table
    className={clsx(
      "m-table",
      stripe && "--stripe",
      bordered && "--bordered",
      hoverable && "--hoverable",
      fullWidth && "--full-width",
      transition && "--transition",
      className,
    )}
    {...props}
  />
);
