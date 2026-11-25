import { type ComponentProps, useEffect, useRef } from "react";
import { clsx } from "clsx";

export type MSnackbarPosition = "right-bottom" | "left-top" | "right-top";

// NOTE: popover is fixed to "manual" so that the snackbar is shown and hidden only through the open prop, not by light dismiss.
export type MSnackbarProps = Omit<ComponentProps<"div">, "popover" | "ref"> & {
  open?: boolean;
  transition?: boolean;
  position?: MSnackbarPosition;
};

export const MSnackbar = ({ open = false, transition = false, position, className, ...props }: MSnackbarProps) => {
  const snackbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const snackbar = snackbarRef.current;
    if (!snackbar) return;
    // NOTE: showPopover()/hidePopover() throw in some browsers when the popover is already in the requested state, and StrictMode runs effects twice.
    const isShowing = snackbar.matches(":popover-open");
    if (open && !isShowing) snackbar.showPopover();
    if (!open && isShowing) snackbar.hidePopover();
  }, [open]);

  return (
    <div
      ref={snackbarRef}
      popover="manual"
      className={clsx("m-snackbar", transition && "--transition", position && `--${position}`, className)}
      {...props}
    />
  );
};
