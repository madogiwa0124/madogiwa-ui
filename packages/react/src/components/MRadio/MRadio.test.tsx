import { describe, expect, it } from "vitest";
import { MRadio } from "./index";
import { render } from "vitest-browser-react";

describe("MRadio", () => {
  it("renders a radio with the m-radio class", async () => {
    const screen = await render(<MRadio aria-label="Vue" className="custom" />);
    const radio = screen.getByRole("radio", { name: "Vue" });
    await expect.element(radio).toHaveClass("m-radio", "custom");
    await expect.element(radio).toHaveAttribute("type", "radio");
  });

  it("checks only one radio in the same group", async () => {
    const screen = await render(
      <>
        <MRadio name="framework" value="vue" aria-label="Vue" defaultChecked />
        <MRadio name="framework" value="react" aria-label="React" />
      </>,
    );
    await screen.getByRole("radio", { name: "React" }).click();
    await expect.element(screen.getByRole("radio", { name: "React" })).toBeChecked();
    await expect.element(screen.getByRole("radio", { name: "Vue" })).not.toBeChecked();
  });
});
