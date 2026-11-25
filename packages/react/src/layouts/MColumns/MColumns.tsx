import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MColumnsLength = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type MColumnsProps = ComponentProps<"div"> & {
  columnsLength?: MColumnsLength;
  autoFit?: boolean;
  noGap?: boolean;
  alignRows?: boolean;
};

export const MColumns = ({
  columnsLength,
  autoFit = false,
  noGap = false,
  alignRows = false,
  className,
  ...props
}: MColumnsProps) => (
  <div
    className={clsx("m-columns", autoFit && "--auto-fit", noGap && "--no-gap", alignRows && "--align-rows", className)}
    data-columns-length={columnsLength}
    {...props}
  />
);
