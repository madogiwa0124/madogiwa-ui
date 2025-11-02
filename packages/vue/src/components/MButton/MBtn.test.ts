import { mount } from "@vue/test-utils";
import { MBtn as MButton } from "./index";
import { describe, expect, it } from "vitest";

describe("MButton", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(MButton, {
      slots: {
        default: "Click Me",
      },
    });
    expect(wrapper.classes()).toContain("m-btn");
    expect(wrapper.text()).toBe("Click Me");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<button class="m-btn">Click Me</button>"`);
  });

  it("applies all props correctly", () => {
    const wrapper = mount(MButton, {
      props: {
        variant: "primary",
        outline: true,
        block: true,
        rounded: true,
        iconOnly: true,
        transition: true,
      },
      slots: {
        default: "Icon",
      },
    });
    expect(wrapper.classes()).toContain("m-btn");
    expect(wrapper.classes()).toContain("--primary");
    expect(wrapper.classes()).toContain("--outline");
    expect(wrapper.classes()).toContain("--block");
    expect(wrapper.classes()).toContain("--rounded");
    expect(wrapper.classes()).toContain("--icon-only");
    expect(wrapper.classes()).toContain("--transition");
    expect(wrapper.text()).toBe("Icon");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<button class="m-btn --primary --outline --block --rounded --icon-only --transition">Icon</button>"`);
  });
});
