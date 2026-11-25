import { describe, expect, it, vi } from "vitest";
import { MInput } from "./index";
import { render } from "vitest-browser-react";
import { useState } from "react";

const ControlledInput = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <MInput aria-label="Name" value={value} onChange={(event) => { setValue(event.target.value); }} />
      <output>{value}</output>
    </>
  );
};

describe("MInput", () => {
  it("renders a text input with the m-input class", async () => {
    const screen = await render(<MInput aria-label="Name" />);
    const input = screen.getByRole("textbox", { name: "Name" });
    await expect.element(input).toHaveAttribute("class", "m-input");
    await expect.element(input).not.toHaveAttribute("aria-invalid");
  });

  it("adds the modifier classes", async () => {
    const screen = await render(<MInput aria-label="Name" block transition />);
    await expect.element(screen.getByRole("textbox")).toHaveClass("--block", "--transition");
  });

  it("marks the input invalid when error is set", async () => {
    const screen = await render(<MInput aria-label="Name" error />);
    const input = screen.getByRole("textbox");
    await expect.element(input).toHaveClass("--error");
    await expect.element(input).toHaveAttribute("aria-invalid", "true");
  });

  it("passes the type through to the input", async () => {
    const screen = await render(<MInput aria-label="Email" type="email" />);
    await expect.element(screen.getByRole("textbox", { name: "Email" })).toHaveAttribute("type", "email");
  });

  it("reflects the value held by the parent when used controlled", async () => {
    const screen = await render(<ControlledInput />);
    await screen.getByRole("textbox", { name: "Name" }).fill("Madogiwa");
    await expect.element(screen.getByRole("status")).toHaveTextContent("Madogiwa");
  });

  it("calls onChange when used uncontrolled", async () => {
    const onChange = vi.fn();
    const screen = await render(<MInput aria-label="Name" defaultValue="Hi" onChange={onChange} />);
    const input = screen.getByRole("textbox");
    await expect.element(input).toHaveValue("Hi");
    await input.fill("Hello");
    expect(onChange).toHaveBeenCalled();
  });
});
