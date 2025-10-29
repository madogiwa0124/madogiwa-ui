import { mount } from "@vue/test-utils";
import MContainer from "./MContainer.vue";
import { describe, expect, it } from "vitest";

describe("MContainer", () => {
  it("renders with basic cases", () => {
    const wrapper = mount(MContainer, {
      slots: { default: "Content" },
    });
    expect(wrapper.classes()).toContain("m-container");
    expect(wrapper.text()).toBe("Content");
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<div class="m-container">Content</div>"`,
    );
  });

  it("applies both modifiers", () => {
    const wrapper = mount(MContainer, {
      props: { padding: true, noCentering: true },
      slots: { default: "Content" },
    });
    expect(wrapper.classes()).toContain("m-container");
    expect(wrapper.classes()).toContain("--padding");
    expect(wrapper.classes()).toContain("--no-centering");
  });
});
