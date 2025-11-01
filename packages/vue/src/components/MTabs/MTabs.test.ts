import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MTabs } from "./index";

describe("MTabs", () => {
  it("renders base container", () => {
    const wrapper = mount(MTabs, {
      slots: { default: "" },
    });
    expect(wrapper.classes()).toContain("m-tabs");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="m-tabs"></div>"`);
  });

  it("applies transition and scrollhint modifiers", () => {
    const wrapper = mount(MTabs, {
      props: {
        transition: true,
        scrollhint: true,
      },
      slots: { default: "" },
    });
    expect(wrapper.classes()).toContain("m-tabs");
    expect(wrapper.classes()).toContain("--transition");
    expect(wrapper.classes()).toContain("--scrollhint");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="m-tabs --transition --scrollhint"></div>"`);
  });
});
