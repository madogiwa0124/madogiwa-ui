import { mount } from "@vue/test-utils";
import { MNavbarItem } from "./index";
import { describe, expect, it } from "vitest";

describe("MNavbarItem", () => {
  it("renders correctly with basic cases", () => {
    const wrapper = mount(MNavbarItem, {
      slots: {
        default: "<a href='#'>Item</a>",
      },
    });
    expect(wrapper.classes()).toContain("m-navbar__item");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<li class="m-navbar__item"><a href="#">Item</a></li>"`);
  });

  it("applies end prop correctly", () => {
    const wrapper = mount(MNavbarItem, {
      props: {
        end: true,
      },
    });
    expect(wrapper.classes()).toContain("m-navbar__item");
    expect(wrapper.classes()).toContain("--end");
  });
});
