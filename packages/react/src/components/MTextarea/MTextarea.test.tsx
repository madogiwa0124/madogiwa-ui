import { describe, expect, it } from "vitest";
import { MTextarea } from "./index";
import { render } from "vitest-browser-react";

describe("MTextarea", () => {
  it("renders a textarea with the m-textarea class", async () => {
    const screen = await render(<MTextarea aria-label="Message" />);
    const textarea = screen.getByRole("textbox", { name: "Message" });
    await expect.element(textarea).toHaveAttribute("class", "m-textarea");
    await expect.element(textarea).not.toHaveAttribute("aria-invalid");
  });

  it("adds the modifier classes and marks it invalid when error is set", async () => {
    const screen = await render(<MTextarea aria-label="Message" block error autoFit />);
    const textarea = screen.getByRole("textbox");
    await expect.element(textarea).toHaveClass("--block", "--error", "--auto-fit");
    await expect.element(textarea).toHaveAttribute("aria-invalid", "true");
  });

  it("accepts typed text when used uncontrolled", async () => {
    const screen = await render(<MTextarea aria-label="Message" defaultValue="Hi" />);
    const textarea = screen.getByRole("textbox");
    await textarea.fill("Hello");
    await expect.element(textarea).toHaveValue("Hello");
  });
});
