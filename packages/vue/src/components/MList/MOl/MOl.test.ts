import { mount } from "@vue/test-utils";
import { MOl } from "./index";
import { describe, expect, it } from "vitest";

describe("MOl", () => {
  it("renders correctly with basic cases", () => {
    const wrapper = mount(MOl, {
      slots: { default: "<li>Item 1</li>" },
    });
    expect((wrapper.element as HTMLElement).tagName.toLowerCase()).toBe("ol");
    expect(wrapper.classes()).toContain("m-ol");
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<ol class="m-ol">
        <li>Item 1</li>
      </ol>"
    `);
  });

  it("applies --none modifier", () => {
    const wrapper = mount(MOl, { props: { none: true } });
    expect(wrapper.classes()).toContain("--none");
  });

  it("applies --inline modifier", () => {
    const wrapper = mount(MOl, { props: { inline: true } });
    expect(wrapper.classes()).toContain("--inline");
  });
});
