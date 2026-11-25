import { describe, expect, it } from "vitest";
import { MLi } from "./index";
import { render } from "vitest-browser-react";

describe("MLi", () => {
  it("renders a list item with the m-li class", async () => {
    const screen = await render(<ul><MLi className="custom">Item</MLi></ul>);
    await expect.element(screen.getByRole("listitem")).toHaveClass("m-li", "custom");
  });
});
