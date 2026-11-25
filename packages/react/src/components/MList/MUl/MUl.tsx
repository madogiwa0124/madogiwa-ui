import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MUlProps = ComponentProps<"ul"> & {
  none?: boolean;
  inline?: boolean;
};

export const MUl = ({ none = false, inline = false, className, ...props }: MUlProps) => (
  <ul className={clsx("m-ul", none && "--none", inline && "--inline", className)} {...props} />
);
