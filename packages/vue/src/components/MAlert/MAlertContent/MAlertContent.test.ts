import { mount } from "@vue/test-utils";
import { MAlertContent } from "./index";
import { describe, expect, it } from "vitest";

describe("MAlertContent", () => {
  it("renders correctly", () => {
    const wrapper = mount(MAlertContent, {
      slots: {
        default: "Alert content",
      },
    });
    expect(wrapper.classes()).toContain("m-alert__content");
    expect(wrapper.text()).toBe("Alert content");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="m-alert__content">Alert content</div>"`);
  });
});
