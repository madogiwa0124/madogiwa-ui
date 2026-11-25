import { MTabs, MTabsItem, MTabsList } from "./index";
import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";

describe("MTabs", () => {
  it("renders the tabs container with modifier classes", async () => {
    const screen = await render(<MTabs transition scrollhint data-testid="tabs" />);
    await expect.element(screen.getByTestId("tabs")).toHaveClass("m-tabs", "--transition", "--scrollhint");
  });

  it("renders a tablist with the m-tabs__list class", async () => {
    const screen = await render(<MTabsList aria-label="Components" />);
    await expect.element(screen.getByRole("tablist", { name: "Components" })).toHaveClass("m-tabs__list");
  });
});

describe("MTabsItem", () => {
  it("marks the active tab as selected and focusable", async () => {
    const screen = await render(
      <MTabsList aria-label="Components">
        <MTabsItem active>Buttons</MTabsItem>
        <MTabsItem>Links</MTabsItem>
      </MTabsList>,
    );
    const active = screen.getByRole("tab", { name: "Buttons" });
    await expect.element(active).toHaveClass("m-tabs__item", "--active");
    await expect.element(active).toHaveAttribute("aria-selected", "true");
    await expect.element(active).toHaveAttribute("tabindex", "0");
  });

  it("keeps inactive tabs unselected and out of the tab order", async () => {
    const screen = await render(<MTabsList aria-label="Components"><MTabsItem>Links</MTabsItem></MTabsList>);
    const inactive = screen.getByRole("tab", { name: "Links" });
    await expect.element(inactive).not.toHaveClass("--active");
    await expect.element(inactive).toHaveAttribute("aria-selected", "false");
    await expect.element(inactive).toHaveAttribute("tabindex", "-1");
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    const screen = await render(<MTabsList aria-label="Components"><MTabsItem onClick={onClick}>Links</MTabsItem></MTabsList>);
    await screen.getByRole("tab").click();
    expect(onClick).toHaveBeenCalledOnce();
  });
});
