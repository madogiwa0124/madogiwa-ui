import { mount } from "@vue/test-utils";
import { MNavbarHamburger } from "./index";
import { describe, expect, it } from "vitest";

describe("MNavbarHamburger", () => {
  it("renders correctly with basic cases", () => {
    const wrapper = mount(MNavbarHamburger, {
      slots: {
        default: "MNavbar Hamburger",
      },
    });
    expect(wrapper.classes()).toContain("m-navbar__hamburger");
    expect(wrapper.text()).toBe("MNavbar Hamburger");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="m-navbar__hamburger">MNavbar Hamburger</div>"`);
  });
});
