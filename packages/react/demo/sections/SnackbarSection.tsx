import { MBtn, MH2, MH3, MP, MSnackbar, MSnackbarActions, MSnackbarBody } from "../../src";
import { useState } from "react";

export const SnackbarSection = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  return (
    <>
      <MH2>MSnackbar (Popover API)</MH2>
      <MP>Snackbar component uses the modern Popover API for temporary notifications at screen edges.</MP>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-3)", marginTop: "var(--spacing-4)" }}>
        <div>
          <MH3>Position: Left Bottom (Default)</MH3>
          <MBtn variant="primary" onClick={() => { setSnackbarOpen(true); }}>Show Snackbar</MBtn>
        </div>
      </div>
      <MSnackbar open={snackbarOpen} transition>
        <MSnackbarBody>
          This is a snackbar notification.
          <MSnackbarActions>
            <MBtn variant="secondary" iconOnly rounded aria-label="Close" onClick={() => { setSnackbarOpen(false); }}>
              <span className="icon">×</span>
            </MBtn>
          </MSnackbarActions>
        </MSnackbarBody>
      </MSnackbar>
    </>
  );
};
