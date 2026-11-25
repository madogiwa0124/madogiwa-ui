import { MBtn, MH2 } from "../../src";

export const ButtonsSection = () => (
  <>
    <MH2>MButton</MH2>
    <div style={{ display: "flex", gap: "var(--spacing-2)", flexWrap: "wrap" }}>
      <MBtn variant="primary" rounded outline transition>Primary Button</MBtn>
      <MBtn variant="secondary">Secondary Button</MBtn>
      <MBtn variant="tertiary">Tertiary Button</MBtn>
    </div>
  </>
);
