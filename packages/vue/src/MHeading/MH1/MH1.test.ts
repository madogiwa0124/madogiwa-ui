import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import MH1 from "./MH1.vue";
describe("MH1", () => {
  it("renders h1 with m-h1 class and slot", () => {
    const wrapper = mount(MH1, {
      slots: { default: "Heading 1" },
    });
    expect(wrapper.classes()).toContain("m-h1");
    expect(wrapper.text()).toBe("Heading 1");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<h1 class="m-h1">Heading 1</h1>"`);
  });
});
