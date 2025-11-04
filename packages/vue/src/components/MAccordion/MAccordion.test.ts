import { mount } from "@vue/test-utils";
import { MAccordion } from "./index";
import { describe, expect, it } from "vitest";

describe("MAccordion", () => {
  it("renders correctly with basic usage", () => {
    const wrapper = mount(MAccordion, {
      slots: {
        summary: "Title",
        default: "Content",
      },
    });
    expect(wrapper.classes()).toContain("m-accordion");
    expect(wrapper.text()).toContain("Title");
    expect(wrapper.text()).toContain("Content");
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<details class="m-accordion">
        <summary class="m-accordion__summary">Title</summary>
        <div class="m-accordion__content">Content</div>
      </details>"
    `);
  });

  it("applies transition modifier", () => {
    const wrapper = mount(MAccordion, {
      props: {
        transition: true,
      },
    });
    expect(wrapper.classes()).toContain("--transition");
  });

  it("applies outline modifier", () => {
    const wrapper = mount(MAccordion, {
      props: {
        outline: true,
      },
    });
    expect(wrapper.classes()).toContain("--outline");
  });

  it("renders summary and content with named slots (auto-wrap pattern)", () => {
    const wrapper = mount(MAccordion, {
      slots: {
        summary: "Question Title",
        default: "Answer content here",
      },
    });
    expect(wrapper.classes()).toContain("m-accordion");
    expect(wrapper.find(".m-accordion__summary").exists()).toBe(true);
    expect(wrapper.find(".m-accordion__content").exists()).toBe(true);
    expect(wrapper.find(".m-accordion__summary").text()).toBe("Question Title");
    expect(wrapper.find(".m-accordion__content").text()).toBe("Answer content here");
  });
});
