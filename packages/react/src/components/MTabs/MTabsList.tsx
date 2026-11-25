import type { ComponentProps, KeyboardEvent } from "react";
import { clsx } from "clsx";

export type MTabsListProps = ComponentProps<"div">;

const nextTabIndex = (key: string, current: number, length: number): number | undefined => {
  switch (key) {
    case "ArrowRight": {
      return (current + 1) % length;
    }
    case "ArrowLeft": {
      return (current - 1 + length) % length;
    }
    case "Home": {
      return 0;
    }
    case "End": {
      return length - 1;
    }
    default: {
      return undefined;
    }
  }
};

// NOTE: Arrow keys only move focus (manual activation in the WAI-ARIA tabs pattern); the tab is activated by Enter/Space on the focused button.
// Automatic activation would fire the consumer's onClick on every arrow key, which is costly when switching tabs navigates or fetches data.
export const MTabsList = ({ className, onKeyDown, ...props }: MTabsListProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;
    const tabs = [...event.currentTarget.querySelectorAll<HTMLElement>("[role=\"tab\"]:not(:disabled)")];
    const current = tabs.indexOf(document.activeElement as HTMLElement);
    if (current === -1) return;
    const next = nextTabIndex(event.key, current, tabs.length);
    if (next === undefined) return;
    event.preventDefault();
    tabs[next]?.focus();
  };

  return <div className={clsx("m-tabs__list", className)} role="tablist" onKeyDown={handleKeyDown} {...props} />;
};
