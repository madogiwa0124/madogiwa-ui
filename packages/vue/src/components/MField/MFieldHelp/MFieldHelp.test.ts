import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { MFieldHelp } from "./index";

describe("MFieldHelp", () => {
  it("renders correctly with basic cases", () => {
    const wrapper = mount(MFieldHelp, {
      slots: { default: "We never share your email." },
    });
    expect(wrapper.classes()).toContain("m-field__help");
    expect(wrapper.text()).toBe("We never share your email.");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="m-field__help">We never share your email.</div>"`);
  });
});
