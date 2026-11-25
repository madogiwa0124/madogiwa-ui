import type { ComponentProps } from "react";
import { clsx } from "clsx";

export type MAccordionSummaryProps = ComponentProps<"summary">;

export const MAccordionSummary = ({ className, ...props }: MAccordionSummaryProps) => (
  <summary className={clsx("m-accordion__summary", className)} {...props} />
);
