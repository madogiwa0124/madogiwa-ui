import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MAccordionContentProps = ComponentProps<"div">;

export const MAccordionContent = ({ className, ...props }: MAccordionContentProps) => (
  <div className={clsx("m-accordion__content", className)} {...props} />
);
