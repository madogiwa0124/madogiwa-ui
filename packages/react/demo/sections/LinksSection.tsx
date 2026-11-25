import { MH2, MLink } from "../../src";

export const LinksSection = () => (
  <>
    <MH2>Links</MH2>
    <div style={{ display: "flex", gap: "var(--spacing-2)", flexWrap: "wrap" }}>
      <MLink href="#">Sample Link</MLink>
    </div>
  </>
);
