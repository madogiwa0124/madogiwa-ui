import { mount } from "@vue/test-utils";
import { MAccordionContent } from "./index";
import { describe, expect, it } from "vitest";

describe("MAccordionContent", () => {
  it("renders correctly", () => {
    const wrapper = mount(MAccordionContent, {
      slots: {
        default: "Content Text",
      },
    });
    expect(wrapper.classes()).toContain("m-accordion__content");
    expect(wrapper.text()).toBe("Content Text");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="m-accordion__content">Content Text</div>"`);
  });
});
