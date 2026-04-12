import { mount } from "@vue/test-utils";
import { MLi } from "./index";
import { describe, expect, it } from "vitest";

describe("MLi", () => {
  it("renders correctly with basic cases", () => {
    const wrapper = mount(MLi, {
      slots: { default: "List item" },
    });
    expect((wrapper.element as HTMLElement).tagName.toLowerCase()).toBe("li");
    expect(wrapper.classes()).toContain("m-li");
    expect(wrapper.text()).toBe("List item");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<li class="m-li">List item</li>"`);
  });
});
