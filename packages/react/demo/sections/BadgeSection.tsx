import { MBadge, MH2, MH3 } from "../../src";
import type { CSSProperties } from "react";

const row: CSSProperties = { display: "flex", gap: "var(--spacing-2)", flexWrap: "wrap", alignItems: "center" };

export const BadgeSection = () => (
  <>
    <MH2>MBadge</MH2>
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-4)" }}>
      <div>
        <MH3>Basic Badges</MH3>
        <div style={row}>
          <MBadge>Default</MBadge>
          <MBadge variant="primary">Primary</MBadge>
          <MBadge variant="secondary">Secondary</MBadge>
          <MBadge variant="tertiary">Tertiary</MBadge>
          <MBadge variant="danger">Danger</MBadge>
          <MBadge variant="warning">Warning</MBadge>
        </div>
      </div>
      <div>
        <MH3>Outline Badges</MH3>
        <div style={row}>
          <MBadge outline>Default</MBadge>
          <MBadge variant="primary" outline>Primary</MBadge>
          <MBadge variant="secondary" outline>Secondary</MBadge>
        </div>
      </div>
      <div>
        <MH3>Small & Rounded Badges</MH3>
        <div style={row}>
          <MBadge small>Small</MBadge>
          <MBadge rounded>Rounded</MBadge>
          <MBadge variant="danger" small rounded>5</MBadge>
          <MBadge variant="primary" small rounded>99+</MBadge>
          <MBadge as="button" type="button" variant="primary" small rounded aria-label="Remove">
            <span className="icon">×</span>
          </MBadge>
        </div>
      </div>
      <div>
        <MH3>Interactive Badges</MH3>
        <div style={row}>
          <MBadge as="button" type="button" variant="primary" transition>Button Badge</MBadge>
          <MBadge as="a" href="#" variant="secondary" transition>Link Badge</MBadge>
        </div>
      </div>
    </div>
  </>
);
