import { MTabs, MTabsItem, MTabsList } from "./index";
import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";

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

const renderTabs = async (onClick = vi.fn()) => render(
  <MTabsList aria-label="Components">
    <MTabsItem active onClick={onClick}>Buttons</MTabsItem>
    <MTabsItem onClick={onClick}>Links</MTabsItem>
    <MTabsItem disabled onClick={onClick}>Cards</MTabsItem>
    <MTabsItem onClick={onClick}>Modals</MTabsItem>
  </MTabsList>,
);

describe("MTabsList keyboard navigation", () => {
  it("moves focus to the next tab with ArrowRight and skips disabled tabs", async () => {
    const screen = await renderTabs();
    screen.getByRole("tab", { name: "Buttons" }).element().focus();
    await userEvent.keyboard("{ArrowRight}");
    await expect.element(screen.getByRole("tab", { name: "Links" })).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    await expect.element(screen.getByRole("tab", { name: "Modals" })).toHaveFocus();
  });

  it("wraps around at both ends", async () => {
    const screen = await renderTabs();
    screen.getByRole("tab", { name: "Buttons" }).element().focus();
    await userEvent.keyboard("{ArrowLeft}");
    await expect.element(screen.getByRole("tab", { name: "Modals" })).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    await expect.element(screen.getByRole("tab", { name: "Buttons" })).toHaveFocus();
  });

  it("moves focus to the first and last tabs with Home and End", async () => {
    const screen = await renderTabs();
    screen.getByRole("tab", { name: "Links" }).element().focus();
    await userEvent.keyboard("{End}");
    await expect.element(screen.getByRole("tab", { name: "Modals" })).toHaveFocus();
    await userEvent.keyboard("{Home}");
    await expect.element(screen.getByRole("tab", { name: "Buttons" })).toHaveFocus();
  });

  it("does not activate tabs while moving focus, but activates the focused tab with Enter", async () => {
    const onClick = vi.fn();
    const screen = await renderTabs(onClick);
    screen.getByRole("tab", { name: "Buttons" }).element().focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(onClick).not.toHaveBeenCalled();
    await userEvent.keyboard("{Enter}");
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("still calls the consumer's onKeyDown", async () => {
    const onKeyDown = vi.fn();
    const screen = await render(
      <MTabsList aria-label="Components" onKeyDown={onKeyDown}>
        <MTabsItem active>Buttons</MTabsItem>
      </MTabsList>,
    );
    screen.getByRole("tab").element().focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(onKeyDown).toHaveBeenCalledOnce();
  });
});
