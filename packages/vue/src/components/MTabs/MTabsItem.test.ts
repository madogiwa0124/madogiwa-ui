import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MTabsItem } from "./index";

describe("MTabsItem", () => {
  it("renders inactive tab with correct aria/tabindex", () => {
    const wrapper = mount(MTabsItem, {
      slots: { default: "Tab" },
    });
    expect(wrapper.classes()).toContain("m-tabs__item");
    expect(wrapper.classes()).not.toContain("--active");
    expect(wrapper.attributes("role")).toBe("tab");
    expect(wrapper.attributes("aria-selected")).toBe("false");
    expect(wrapper.attributes("tabindex")).toBe("-1");
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<button type="button" class="m-tabs__item" role="tab" aria-selected="false" tabindex="-1">Tab</button>"`,
    );
  });

  it("renders active tab with correct aria/tabindex and modifier", () => {
    const wrapper = mount(MTabsItem, {
      props: { active: true },
      slots: { default: "Active" },
    });
    expect(wrapper.classes()).toContain("m-tabs__item");
    expect(wrapper.classes()).toContain("--active");
    expect(wrapper.attributes("aria-selected")).toBe("true");
    expect(wrapper.attributes("tabindex")).toBe("0");
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<button type="button" class="m-tabs__item --active" role="tab" aria-selected="true" tabindex="0">Active</button>"`,
    );
  });

  it("emitted click event when clicked", async () => {
    const wrapper = mount(MTabsItem, {
      slots: { default: "Clickable" },
    });
    const item = wrapper.find(".m-tabs__item");
    await item.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
    expect(wrapper.emitted("click")).toHaveLength(1);
  });
});
