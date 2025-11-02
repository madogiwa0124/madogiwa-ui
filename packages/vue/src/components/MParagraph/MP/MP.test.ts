import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MP } from "./index";

describe("MP", () => {
  it("renders p with m-p class and slot", () => {
    const wrapper = mount(MP, {
      slots: { default: "Hello" },
    });
    expect(wrapper.classes()).toContain("m-p");
    expect(wrapper.text()).toBe("Hello");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<p class="m-p">Hello</p>"`);
  });
});
