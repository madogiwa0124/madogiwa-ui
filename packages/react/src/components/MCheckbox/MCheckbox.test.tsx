import { describe, expect, it, vi } from "vitest";
import { MCheckbox } from "./index";
import { render } from "vitest-browser-react";
import { useId, useState } from "react";

const ControlledCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <MCheckbox
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
        }}
        aria-label="Subscribe"
      />
      <output role="status">{checked ? "on" : "off"}</output>
    </>
  );
};

const LabelledCheckbox = () => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Accept terms</label>
      <MCheckbox id={id} />
    </>
  );
};

describe("MCheckbox", () => {
  it("renders a checkbox with the m-checkbox class", async () => {
    const screen = await render(<MCheckbox aria-label="Subscribe" className="custom" />);
    const checkbox = screen.getByRole("checkbox", { name: "Subscribe" });
    await expect.element(checkbox).toHaveClass("m-checkbox", "custom");
    await expect.element(checkbox).toHaveAttribute("type", "checkbox");
  });

  it("toggles by itself when used uncontrolled", async () => {
    const screen = await render(<MCheckbox aria-label="Subscribe" />);
    const checkbox = screen.getByRole("checkbox");
    await expect.element(checkbox).not.toBeChecked();
    await checkbox.click();
    await expect.element(checkbox).toBeChecked();
  });

  it("starts checked with defaultChecked", async () => {
    const screen = await render(<MCheckbox aria-label="Subscribe" defaultChecked />);
    await expect.element(screen.getByRole("checkbox")).toBeChecked();
  });

  it("calls onChange with the new checked state", async () => {
    const onChange = vi.fn();
    const screen = await render(<MCheckbox aria-label="Subscribe" onChange={onChange} />);
    await screen.getByRole("checkbox").click();
    expect(onChange).toHaveBeenCalledOnce();
  });

  it("reflects the state held by the parent when used controlled", async () => {
    const screen = await render(<ControlledCheckbox />);
    await expect.element(screen.getByRole("status")).toHaveTextContent("off");
    await screen.getByRole("checkbox", { name: "Subscribe" }).click();
    await expect.element(screen.getByRole("checkbox")).toBeChecked();
    await expect.element(screen.getByRole("status")).toHaveTextContent("on");
  });

  it("can be labelled with a label element", async () => {
    const screen = await render(<LabelledCheckbox />);
    await screen.getByText("Accept terms").click();
    await expect.element(screen.getByRole("checkbox", { name: "Accept terms" })).toBeChecked();
  });
});
