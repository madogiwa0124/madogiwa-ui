import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import MH3 from "./MH3.vue";
describe("MH3", () => {
  it("renders h3 with m-h3 class and slot", () => {
    const wrapper = mount(MH3, {
      slots: { default: "Heading 3" },
    });
    expect(wrapper.classes()).toContain("m-h3");
    expect(wrapper.text()).toBe("Heading 3");
  });
});
