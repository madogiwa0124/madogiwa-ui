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

  it("closes menu when clicking outside when closeOutsideClick is true", async () => {
    const wrapper = mount(MNavbar, {
      props: {
        mobileMenuVariant: "side",
        id: "test-navbar",
        closeOutsideClick: true,
      },
      slots: {
        items: "<li>Item 1</li>",
      },
      attachTo: document.body,
    });

    // Open the menu by clicking hamburger button
    const hamburgerButton = wrapper.find(".m-navbar__hamburger-menu");
    await hamburgerButton.trigger("click");
    await wrapper.vm.$nextTick();
    expect(hamburgerButton.attributes("aria-expanded")).toBe("true");

    // Wait for the setTimeout to complete (click listener registration)
    await new Promise((resolve) => {
      setTimeout(resolve, 10);
    });

    // Click outside (on document body, not on menu items or hamburger)
    const outsideElement = document.createElement("div");
    document.body.append(outsideElement);
    const clickEvent = new MouseEvent("click", { bubbles: true, cancelable: true });
    outsideElement.dispatchEvent(clickEvent);
    await wrapper.vm.$nextTick();

    // Menu should be closed
    expect(hamburgerButton.attributes("aria-expanded")).toBe("false");

    outsideElement.remove();
    wrapper.unmount();
  });

  it("does not close menu when clicking outside when closeOutsideClick is false", async () => {
    const wrapper = mount(MNavbar, {
      props: {
        mobileMenuVariant: "side",
        id: "test-navbar-no-close",
        closeOutsideClick: false,
      },
      slots: {
        items: "<li>Item 1</li>",
      },
      attachTo: document.body,
    });

    // Open the menu by clicking hamburger button
    const hamburgerButton = wrapper.find(".m-navbar__hamburger-menu");
    await hamburgerButton.trigger("click");
    await wrapper.vm.$nextTick();
    expect(hamburgerButton.attributes("aria-expanded")).toBe("true");

    // Wait for the setTimeout to complete (would register listener if enabled)
    await new Promise((resolve) => {
      setTimeout(resolve, 10);
    });

    // Click outside
    const outsideElement = document.createElement("div");
    document.body.append(outsideElement);
    const clickEvent = new MouseEvent("click", { bubbles: true, cancelable: true });
    outsideElement.dispatchEvent(clickEvent);
    await wrapper.vm.$nextTick();

    // Menu should still be open
    expect(hamburgerButton.attributes("aria-expanded")).toBe("true");

    outsideElement.remove();
    wrapper.unmount();
  });
});
