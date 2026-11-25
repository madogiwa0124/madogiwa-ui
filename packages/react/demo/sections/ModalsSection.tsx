import { MBtn, MDialog, MH2, MH3, MP } from "../../src";
import { useState } from "react";

export const ModalsSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <MH2>Modals</MH2>
      <div style={{ marginBottom: "var(--spacing-6)" }}>
        <MH3>MDialog</MH3>
        <MP>
          <MBtn variant="primary" onClick={() => { setDialogOpen(true); }}>Open Dialog</MBtn>
        </MP>
        <MDialog open={dialogOpen} backdropBlur transition onClose={closeDialog}>
          <div style={{ padding: "var(--spacing-3)" }}>
            <MH3 style={{ marginTop: 0 }}>Dialog Title</MH3>
            <MP>This is a dialog component that can be controlled via props. It includes backdrop blur and smooth transitions.</MP>
            <div style={{ display: "flex", gap: "var(--spacing-2)", justifyContent: "flex-end", marginTop: "var(--spacing-4)" }}>
              <MBtn outline onClick={closeDialog}>Cancel</MBtn>
              <MBtn variant="primary" onClick={closeDialog}>Confirm</MBtn>
            </div>
          </div>
        </MDialog>
      </div>
    </>
  );
};
