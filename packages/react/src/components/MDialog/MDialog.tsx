import { type ComponentProps, useEffect, useRef } from "react";
import { clsx } from "clsx";

// NOTE: The native `open` attribute shows the dialog as non-modal, so it is replaced with an `open` prop that drives showModal()/close().
// `ref` is omitted until the component needs to share its dialog element with the consumer, which requires merging refs.
export type MDialogProps = Omit<ComponentProps<"dialog">, "open" | "ref"> & {
  open?: boolean;
  backdropBlur?: boolean;
  transition?: boolean;
};

export const MDialog = ({ open = false, backdropBlur = false, transition = false, className, ...props }: MDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className={clsx("m-dialog", backdropBlur && "--backdrop-blur", transition && "--transition", className)}
      {...props}
    />
  );
};
