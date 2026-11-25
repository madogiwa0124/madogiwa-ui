import { describe, expect, it, vi } from "vitest";
import { MBtn } from "./index";
import { render } from "vitest-browser-react";

describe("MBtn", () => {
  it("renders a button with the m-btn class and its children", async () => {
    const screen = await render(<MBtn>Click Me</MBtn>);
    await expect
      .element(screen.getByRole("button", { name: "Click Me" }))
      .toHaveClass("m-btn");
  });

  it("adds the variant and outline modifier classes", async () => {
    const screen = await render(
      <MBtn variant="primary" outline>
        Click Me
      </MBtn>,
    );
    await expect
      .element(screen.getByRole("button"))
      .toHaveClass("m-btn", "--primary", "--outline");
  });

  it("adds the block, rounded, icon-only and transition modifier classes", async () => {
    const screen = await render(
      <MBtn block rounded iconOnly transition>
        Icon
      </MBtn>,
    );
    await expect
      .element(screen.getByRole("button"))
      .toHaveClass("--block", "--rounded", "--icon-only", "--transition");
  });

  it("does not add modifier classes when props are omitted", async () => {
    const screen = await render(<MBtn>Click Me</MBtn>);
    await expect
      .element(screen.getByRole("button"))
      .toHaveAttribute("class", "m-btn");
  });

  it("defaults the type attribute to button", async () => {
    const screen = await render(<MBtn>Click Me</MBtn>);
    await expect
      .element(screen.getByRole("button"))
      .toHaveAttribute("type", "button");
  });

  it("allows overriding the type attribute", async () => {
    const screen = await render(<MBtn type="submit">Click Me</MBtn>);
    await expect
      .element(screen.getByRole("button"))
      .toHaveAttribute("type", "submit");
  });

  it("keeps the className passed by the consumer", async () => {
    const screen = await render(<MBtn className="custom-class">Click Me</MBtn>);
    await expect
      .element(screen.getByRole("button"))
      .toHaveClass("m-btn", "custom-class");
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    const screen = await render(<MBtn onClick={onClick}>Click Me</MBtn>);
    await screen.getByRole("button").click();
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("passes native attributes such as disabled through to the button", async () => {
    const screen = await render(<MBtn disabled>Click Me</MBtn>);
    await expect.element(screen.getByRole("button")).toBeDisabled();
  });
});
