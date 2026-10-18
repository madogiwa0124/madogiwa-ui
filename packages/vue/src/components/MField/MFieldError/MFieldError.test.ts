import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { MFieldError } from "./index";

describe("MFieldError", () => {
  it("renders correctly with basic cases", () => {
    const wrapper = mount(MFieldError, {
      slots: { default: "Enter a valid email address." },
    });
    expect(wrapper.classes()).toContain("m-field__error");
    expect(wrapper.text()).toBe("Enter a valid email address.");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="m-field__error" aria-live="polite">Enter a valid email address.</div>"`);
  });

  it("is rendered without content so that it works as a live region", () => {
    const wrapper = mount(MFieldError);
    expect(wrapper.find(".m-field__error").exists()).toBe(true);
    expect(wrapper.attributes("aria-live")).toBe("polite");
  });
});
