import { describe, expect, it } from "vitest";
import { MToggle } from "./index";
import { render } from "vitest-browser-react";

describe("MToggle", () => {
  it("renders a checkbox with the m-toggle class", async () => {
    const screen = await render(<MToggle aria-label="Notifications" className="custom" />);
    const toggle = screen.getByRole("checkbox", { name: "Notifications" });
    await expect.element(toggle).toHaveClass("m-toggle", "custom");
    await expect.element(toggle).toHaveAttribute("type", "checkbox");
  });

  it("toggles when clicked", async () => {
    const screen = await render(<MToggle aria-label="Notifications" />);
    const toggle = screen.getByRole("checkbox");
    await toggle.click();
    await expect.element(toggle).toBeChecked();
  });
});
