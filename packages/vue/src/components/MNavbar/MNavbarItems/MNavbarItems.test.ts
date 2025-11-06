import { mount } from "@vue/test-utils";
import { MNavbarItems } from "./index";
import { describe, expect, it } from "vitest";

describe("MNavbarItems", () => {
  it("renders correctly with basic cases", () => {
    const wrapper = mount(MNavbarItems, {
      slots: {
        default: "<li>Navbar Item</li>",
      },
    });
    expect(wrapper.classes()).toContain("m-navbar__items");
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<ul class="m-navbar__items">
        <li>Navbar Item</li>
      </ul>"
    `);
  });
});
