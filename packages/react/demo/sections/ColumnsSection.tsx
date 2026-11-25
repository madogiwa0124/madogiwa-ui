import { MCard, MCardContent, MColumns, MH2, MH3, MP } from "../../src";
import type { CSSProperties } from "react";

const cell = (background: string, light: boolean): CSSProperties => ({
  background,
  padding: "var(--spacing-2)",
  textAlign: "center",
  ...(light && { color: "var(--color-text-light)" }),
});

// NOTE: CSSProperties has no index signature for custom properties, so the custom property object is asserted.
const autoFitStyle = { "--columns-auto-fit-min": "200px" } as CSSProperties;

export const ColumnsSection = () => (
  <>
    <MH2>MColumns</MH2>
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-6)" }}>
      <div>
        <MH3>12-Column Grid</MH3>
        <MColumns columnsLength={12}>
          <div data-col-size="6" style={cell("var(--color-primary)", true)}>6 columns</div>
          <div data-col-size="6" style={cell("var(--color-secondary)", true)}>6 columns</div>
          <div data-col-size="4" style={cell("var(--color-tertiary)", false)}>4 columns</div>
          <div data-col-size="4" style={cell("var(--color-tertiary)", false)}>4 columns</div>
          <div data-col-size="4" style={cell("var(--color-tertiary)", false)}>4 columns</div>
        </MColumns>
      </div>
      <div>
        <MH3>No Gap</MH3>
        <MColumns columnsLength={3} noGap>
          <div style={cell("var(--color-primary)", true)}>Column 1</div>
          <div style={cell("var(--color-secondary)", true)}>Column 2</div>
          <div style={cell("var(--color-tertiary)", false)}>Column 3</div>
        </MColumns>
      </div>
      <div>
        <MH3>Auto Fit (Responsive)</MH3>
        <MP>Resize the browser window to see columns automatically adjust.</MP>
        <MColumns autoFit style={autoFitStyle}>
          {[1, 2, 3].map(number => (
            <MCard key={number}>
              <MCardContent>{`Auto-fit Card ${String(number)}`}</MCardContent>
            </MCard>
          ))}
        </MColumns>
      </div>
    </div>
  </>
);
