import { MAlert, MAlertActions, MAlertContent, MAlertIcons, MBtn, MH2 } from "../../src";

export const AlertSection = () => (
  <>
    <MH2>MAlert</MH2>
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-4)" }}>
      <MAlert variant="primary">
        <MAlertIcons>ℹ️</MAlertIcons>
        <MAlertContent>This is an informational alert message.</MAlertContent>
        <MAlertActions>
          <MBtn variant="primary">Take Action</MBtn>
        </MAlertActions>
      </MAlert>
      <MAlert variant="warning">
        <MAlertIcons>⚠️</MAlertIcons>
        <MAlertContent>This is a warning alert message.</MAlertContent>
      </MAlert>
      <MAlert variant="danger" autoDismiss="5s" withProgress>
        <MAlertIcons>❌</MAlertIcons>
        <MAlertContent>This is a danger alert message.</MAlertContent>
      </MAlert>
    </div>
  </>
);
