import { describe, expect, it } from "vitest";
import { MLi } from "../MLi";
import { MOl } from "./index";
import { render } from "vitest-browser-react";

describe("MOl", () => {
  it("renders a list with the m-ol class", async () => {
    const screen = await render(<MOl><MLi>Item</MLi></MOl>);
    await expect.element(screen.getByRole("list")).toHaveAttribute("class", "m-ol");
  });

  it("adds the none and inline modifier classes", async () => {
    const screen = await render(<MOl none inline><MLi>Item</MLi></MOl>);
    await expect.element(screen.getByRole("list")).toHaveClass("m-ol", "--none", "--inline");
  });
});
