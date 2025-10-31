import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import MH4 from "./MH4.vue";
describe("MH4", () => {
  it("renders h4 with m-h4 class and slot", () => {
    const wrapper = mount(MH4, {
      slots: { default: "Heading 4" },
    });
    expect(wrapper.classes()).toContain("m-h4");
    expect(wrapper.text()).toBe("Heading 4");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<h4 class="m-h4">Heading 4</h4>"`);
  });
});
