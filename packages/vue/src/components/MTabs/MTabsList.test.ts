import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { MTabsItem, MTabsList } from "./index";
import { h } from "vue";

describe("MTabsList", () => {
  it("renders list with role=tablist", () => {
    const wrapper = mount(MTabsList, {
      slots: { default: "Tab List" },
    });
    expect(wrapper.classes()).toContain("m-tabs__list");
    expect(wrapper.attributes("role")).toBe("tablist");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="m-tabs__list" role="tablist">Tab List</div>"`);
  });
});

const mountTabs = (onClick: () => void = () => {}) => mount(MTabsList, {
  attachTo: document.body,
  slots: {
    default: () => [
      h(MTabsItem, { active: true, onClick }, () => "Buttons"),
      h(MTabsItem, { onClick }, () => "Links"),
      h(MTabsItem, { disabled: true, onClick }, () => "Cards"),
      h(MTabsItem, { onClick }, () => "Modals"),
    ],
  },
});

const pressOnFocused = async (wrapper: ReturnType<typeof mountTabs>, key: string) => {
  const focused = wrapper.findAll("[role=\"tab\"]").find(tab => tab.element === document.activeElement);
  await focused?.trigger("keydown", { key });
};

const focusedText = () => document.activeElement?.textContent;

describe("MTabsList keyboard navigation", () => {
  it("moves focus to the next tab with ArrowRight and skips disabled tabs", async () => {
    const wrapper = mountTabs();
    (wrapper.findAll("[role=\"tab\"]")[0]?.element as HTMLElement).focus();
    await pressOnFocused(wrapper, "ArrowRight");
    expect(focusedText()).toBe("Links");
    await pressOnFocused(wrapper, "ArrowRight");
    expect(focusedText()).toBe("Modals");
    wrapper.unmount();
  });

  it("wraps around at both ends and supports Home and End", async () => {
    const wrapper = mountTabs();
    (wrapper.findAll("[role=\"tab\"]")[0]?.element as HTMLElement).focus();
    await pressOnFocused(wrapper, "ArrowLeft");
    expect(focusedText()).toBe("Modals");
    await pressOnFocused(wrapper, "ArrowRight");
    expect(focusedText()).toBe("Buttons");
    await pressOnFocused(wrapper, "End");
    expect(focusedText()).toBe("Modals");
    await pressOnFocused(wrapper, "Home");
    expect(focusedText()).toBe("Buttons");
    wrapper.unmount();
  });

  it("does not activate tabs while moving focus", async () => {
    const onClick = vi.fn();
    const wrapper = mountTabs(onClick);
    (wrapper.findAll("[role=\"tab\"]")[0]?.element as HTMLElement).focus();
    await pressOnFocused(wrapper, "ArrowRight");
    expect(onClick).not.toHaveBeenCalled();
    wrapper.unmount();
  });
});
