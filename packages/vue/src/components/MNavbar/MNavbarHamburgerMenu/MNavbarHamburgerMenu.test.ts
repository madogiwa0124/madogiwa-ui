import { mount } from "@vue/test-utils";
import { MNavbarHamburgerMenu } from "./index";
import { describe, expect, it } from "vitest";

describe("MNavbarHamburgerMenu", () => {
  it("renders correctly with basic cases", () => {
    const wrapper = mount(MNavbarHamburgerMenu);
    expect(wrapper.classes()).toContain("m-navbar__hamburger-menu");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<button type="button" class="m-navbar__hamburger-menu" aria-label="Open menu" aria-expanded="false"></button>"`);
  });

  it("applies showMenu prop correctly", () => {
    const wrapper = mount(MNavbarHamburgerMenu, {
      props: {
        showMenu: true,
      },
    });
    expect(wrapper.classes()).toContain("m-navbar__hamburger-menu");
    expect(wrapper.attributes("aria-expanded")).toBe("true");
  });

  it("emits showMenu event on click", async () => {
    const wrapper = mount(MNavbarHamburgerMenu, {
      props: { showMenu: false },
    });
    await wrapper.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("showMenu");
    expect(wrapper.emitted("showMenu")?.[0]).toEqual([true]);
    await wrapper.trigger("click");
    expect(wrapper.emitted("showMenu")?.[1]).toEqual([false]);
  });

  it("toggle showMenu state on multiple clicks", async () => {
    const wrapper = mount(MNavbarHamburgerMenu, {
      props: { showMenu: false },
    });
    await wrapper.trigger("click");
    expect(wrapper.attributes("aria-expanded")).toBe("true");
    expect(wrapper.attributes("aria-label")).toBe("Close menu");
    await wrapper.trigger("click");
    expect(wrapper.attributes("aria-expanded")).toBe("false");
    expect(wrapper.attributes("aria-label")).toBe("Open menu");
  });

  it("syncs internal state when showMenu prop changes", async () => {
    const wrapper = mount(MNavbarHamburgerMenu, {
      props: { showMenu: false },
    });
    expect(wrapper.attributes("aria-expanded")).toBe("false");

    // Update prop from parent (simulating external state change)
    await wrapper.setProps({ showMenu: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.attributes("aria-expanded")).toBe("true");
    expect(wrapper.attributes("aria-label")).toBe("Close menu");

    // Update prop back to false
    await wrapper.setProps({ showMenu: false });
    await wrapper.vm.$nextTick();
    expect(wrapper.attributes("aria-expanded")).toBe("false");
    expect(wrapper.attributes("aria-label")).toBe("Open menu");
  });
});
