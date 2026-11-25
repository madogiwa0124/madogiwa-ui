import { describe, expect, it } from "vitest";
import { MP } from "./index";
import { render } from "vitest-browser-react";

describe("MP", () => {
  it("renders a paragraph with the m-p class", async () => {
    const screen = await render(<MP className="custom">Text</MP>);
    await expect.element(screen.getByText("Text")).toHaveClass("m-p", "custom");
  });
});
