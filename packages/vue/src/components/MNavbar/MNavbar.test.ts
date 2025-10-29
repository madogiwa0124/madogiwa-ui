import { mount } from "@vue/test-utils";
import { MNavbar, MNavbarHamburger } from "./index";
import { describe, expect, it } from "vitest";

describe("MNavbar", () => {
  it("renders correctly with basic cases", () => {
    const wrapper = mount(MNavbar, {
      slots: {
        title: "<span>Navbar Title</span>",
        items: "<li>Item 1</li><li>Item 2</li>",
      },
      props: {
        mobileMenuVariant: "float",
        transition: true,
      },
    });
    expect(wrapper.classes()).toContain("m-navbar");
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<nav id="m-navbar" class="m-navbar --mobile-float-menu --transition"><span>Navbar Title</span>
        <ul class="m-navbar__items">
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        <div class="m-navbar__hamburger"><button type="button" class="m-navbar__hamburger-menu" aria-label="Open menu" aria-expanded="false" aria-controls="m-navbar"></button></div>
      </nav>"
    `);
  });

  it("does not render hamburger when mobileMenuVariant is null", () => {
    const wrapper = mount(MNavbar, {
      props: {
        mobileMenuVariant: null,
      },
    });
    expect(wrapper.findComponent(MNavbarHamburger).exists()).toBe(false);
  });

  it("mobileMenuClass computed property works correctly", async () => {
    const wrapper = mount(MNavbar, {
      props: {
        mobileMenuVariant: "side-left",
      },
    });
    expect(wrapper.classes()).toContain("--mobile-side-menu");
    expect(wrapper.classes()).toContain("--slide-left");

    await wrapper.setProps({ mobileMenuVariant: "side" });
    await wrapper.vm.$nextTick();
    expect(wrapper.classes()).toContain("--mobile-side-menu");
    expect(wrapper.classes()).not.toContain("--mobile-float-menu");
    expect(wrapper.classes()).not.toContain("--slide-left");
  });
});
