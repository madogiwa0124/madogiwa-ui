import { mount } from "@vue/test-utils";
import { MNavbarTitle } from "./index";
import { describe, expect, it } from "vitest";

describe("MNavbarTitle", () => {
  it("renders correctly with basic cases", () => {
    const wrapper = mount(MNavbarTitle, {
      slots: {
        default: "Navbar Title",
      },
    });
    expect(wrapper.classes()).toContain("m-navbar__title");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<span class="m-navbar__title">Navbar Title</span>"`);
  });

  it("renders as a link when isLink prop is true", () => {
    const wrapper = mount(MNavbarTitle, {
      props: {
        href: "#",
      },
    });
    expect(wrapper.classes()).toContain("m-navbar__title");
    const element = wrapper.element as HTMLElement;
    expect(element.tagName).toBe("A");
    expect(element.getAttribute("href")).toBe("#");
  });
});
