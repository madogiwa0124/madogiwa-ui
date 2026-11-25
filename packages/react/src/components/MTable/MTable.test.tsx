import { describe, expect, it } from "vitest";
import { MTable } from "./index";
import { render } from "vitest-browser-react";

const rows = (
  <tbody>
    <tr>
      <td>Cell</td>
    </tr>
  </tbody>
);

describe("MTable", () => {
  it("renders a table with the m-table class", async () => {
    const screen = await render(<MTable>{rows}</MTable>);
    await expect.element(screen.getByRole("table")).toHaveAttribute("class", "m-table");
  });

  it("adds the modifier classes", async () => {
    const screen = await render(<MTable stripe bordered hoverable fullWidth transition>{rows}</MTable>);
    await expect.element(screen.getByRole("table")).toHaveClass("--stripe", "--bordered", "--hoverable", "--full-width", "--transition");
  });
});
