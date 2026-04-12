import { mount } from "@vue/test-utils";
import { MUl } from "./index";
import { describe, expect, it } from "vitest";

describe("MUl", () => {
  it("renders correctly with basic cases", () => {
    const wrapper = mount(MUl, {
      slots: { default: "<li>Item 1</li>" },
    });
    expect((wrapper.element as HTMLElement).tagName.toLowerCase()).toBe("ul");
    expect(wrapper.classes()).toContain("m-ul");
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<ul class="m-ul">
        <li>Item 1</li>
      </ul>"
    `);
  });

  it("applies --none modifier", () => {
    const wrapper = mount(MUl, { props: { none: true } });
    expect(wrapper.classes()).toContain("--none");
  });

  it("applies --inline modifier", () => {
    const wrapper = mount(MUl, { props: { inline: true } });
    expect(wrapper.classes()).toContain("--inline");
  });
});
