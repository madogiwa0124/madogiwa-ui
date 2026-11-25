import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MContainerProps = ComponentProps<"div"> & {
  padding?: boolean;
  noCentering?: boolean;
};

export const MContainer = ({ padding = false, noCentering = false, className, ...props }: MContainerProps) => (
  <div className={clsx("m-container", padding && "--padding", noCentering && "--no-centering", className)} {...props} />
);
