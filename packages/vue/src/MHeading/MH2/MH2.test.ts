import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import MH2 from "./MH2.vue";
describe("MH2", () => {
  it("renders h2 with m-h2 class and slot", () => {
    const wrapper = mount(MH2, {
      slots: { default: "Heading 2" },
    });
    expect(wrapper.classes()).toContain("m-h2");
    expect(wrapper.text()).toBe("Heading 2");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<h2 class="m-h2">Heading 2</h2>"`);
  });
});
