import { describe, expect, it } from "vitest";
import { MLink } from "./index";
import { render } from "vitest-browser-react";

describe("MLink", () => {
  it("renders a link with the m-link class and the given href", async () => {
    const screen = await render(<MLink href="/about" className="custom">About</MLink>);
    const link = screen.getByRole("link", { name: "About" });
    await expect.element(link).toHaveClass("m-link", "custom");
    await expect.element(link).toHaveAttribute("href", "/about");
  });
});
