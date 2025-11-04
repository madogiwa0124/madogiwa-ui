import { mount } from "@vue/test-utils";
import { MAlertIcons } from "./index";
import { describe, expect, it } from "vitest";

describe("MAlertIcons", () => {
  it("renders correctly", () => {
    const wrapper = mount(MAlertIcons, {
      slots: {
        default: "✓",
      },
    });
    expect(wrapper.classes()).toContain("m-alert__icons");
    expect(wrapper.text()).toBe("✓");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="m-alert__icons">✓</div>"`);
  });
});
