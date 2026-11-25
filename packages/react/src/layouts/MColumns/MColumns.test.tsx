import { describe, expect, it } from "vitest";
import { MColumns } from "./index";
import { render } from "vitest-browser-react";

describe("MColumns", () => {
  it("renders columns without the length attribute by default", async () => {
    const screen = await render(<MColumns data-testid="columns" />);
    const columns = screen.getByTestId("columns");
    await expect.element(columns).toHaveAttribute("class", "m-columns");
    await expect.element(columns).not.toHaveAttribute("data-columns-length");
  });

  it("sets the columns length and modifier classes", async () => {
    const screen = await render(<MColumns columnsLength={3} autoFit noGap alignRows data-testid="columns" />);
    const columns = screen.getByTestId("columns");
    await expect.element(columns).toHaveClass("--auto-fit", "--no-gap", "--align-rows");
    await expect.element(columns).toHaveAttribute("data-columns-length", "3");
  });
});
