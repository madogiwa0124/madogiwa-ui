import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MTabsList } from "./index";

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
