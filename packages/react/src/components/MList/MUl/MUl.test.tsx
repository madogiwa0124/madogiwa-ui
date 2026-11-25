import { describe, expect, it } from "vitest";
import { MLi } from "../MLi";
import { MUl } from "./index";
import { render } from "vitest-browser-react";

describe("MUl", () => {
  it("renders a list with the m-ul class", async () => {
    const screen = await render(<MUl><MLi>Item</MLi></MUl>);
    await expect.element(screen.getByRole("list")).toHaveAttribute("class", "m-ul");
  });

  it("adds the none and inline modifier classes", async () => {
    const screen = await render(<MUl none inline><MLi>Item</MLi></MUl>);
    await expect.element(screen.getByRole("list")).toHaveClass("m-ul", "--none", "--inline");
  });
});
