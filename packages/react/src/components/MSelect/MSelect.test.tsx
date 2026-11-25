import { describe, expect, it, vi } from "vitest";
import { MSelect } from "./index";
import { render } from "vitest-browser-react";

const options = (
  <>
    <option value="vue">Vue</option>
    <option value="react">React</option>
  </>
);

describe("MSelect", () => {
  it("renders a select with the m-select class and its options", async () => {
    const screen = await render(<MSelect aria-label="Framework">{options}</MSelect>);
    const select = screen.getByRole("combobox", { name: "Framework" });
    await expect.element(select).toHaveAttribute("class", "m-select");
    await expect.element(select).toHaveValue("vue");
  });

  it("marks the select invalid when error is set", async () => {
    const screen = await render(<MSelect aria-label="Framework" error>{options}</MSelect>);
    const select = screen.getByRole("combobox");
    await expect.element(select).toHaveClass("--error");
    await expect.element(select).toHaveAttribute("aria-invalid", "true");
  });

  it("calls onChange with the selected value", async () => {
    const onChange = vi.fn<(value: string) => void>();
    const screen = await render(
      <MSelect aria-label="Framework" onChange={(event) => { onChange(event.target.value); }}>{options}</MSelect>,
    );
    await screen.getByRole("combobox").selectOptions("react");
    expect(onChange).toHaveBeenCalledWith("react");
  });
});
