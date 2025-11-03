import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MLabel } from "./index";

describe("MLabel", () => {
  it("renders label with m-label class and slot", () => {
    const wrapper = mount(MLabel, {
      slots: { default: "Hello" },
    });
    expect(wrapper.classes()).toContain("m-label");
    expect(wrapper.text()).toBe("Hello");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<label class="m-label">Hello</label>"`);
  });
});
