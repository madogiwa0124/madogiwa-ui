import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import MH6 from "./MH6.vue";
describe("MH6", () => {
  it("renders h6 with m-h6 class and slot", () => {
    const wrapper = mount(MH6, {
      slots: { default: "Heading 6" },
    });
    expect(wrapper.classes()).toContain("m-h6");
    expect(wrapper.text()).toBe("Heading 6");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<h6 class="m-h6">Heading 6</h6>"`);
  });
});
