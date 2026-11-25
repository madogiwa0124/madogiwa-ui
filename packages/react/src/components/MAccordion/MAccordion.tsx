import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MAccordionProps = ComponentProps<"details"> & {
  transition?: boolean;
  outline?: boolean;
};

export const MAccordion = ({ transition = false, outline = false, className, ...props }: MAccordionProps) => (
  <details className={clsx("m-accordion", transition && "--transition", outline && "--outline", className)} {...props} />
);
