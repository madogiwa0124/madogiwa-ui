import { mount } from "@vue/test-utils";
import { MAccordionSummary } from "./index";
import { describe, expect, it } from "vitest";

describe("MAccordionSummary", () => {
  it("renders correctly", () => {
    const wrapper = mount(MAccordionSummary, {
      slots: {
        default: "Summary Text",
      },
    });
    expect(wrapper.classes()).toContain("m-accordion__summary");
    expect(wrapper.text()).toBe("Summary Text");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<summary class="m-accordion__summary">Summary Text</summary>"`);
  });
});
