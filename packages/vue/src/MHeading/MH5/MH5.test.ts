import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import MH5 from "./MH5.vue";
describe("MH5", () => {
  it("renders h5 with m-h5 class and slot", () => {
    const wrapper = mount(MH5, {
      slots: { default: "Heading 5" },
    });
    expect(wrapper.classes()).toContain("m-h5");
    expect(wrapper.text()).toBe("Heading 5");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<h5 class="m-h5">Heading 5</h5>"`);
  });
});
