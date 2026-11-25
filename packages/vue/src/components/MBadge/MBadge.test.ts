import { mount } from "@vue/test-utils";
import { MBadge } from "./index";
import { describe, expect, it } from "vitest";

describe("MBadge", () => {
  it("renders correctly with default props (span)", () => {
    const wrapper = mount(MBadge, {
      slots: {
        default: "Badge",
      },
    });
    expect(wrapper.classes()).toContain("m-badge");
    expect((wrapper.element as HTMLElement).tagName).toBe("SPAN");
    expect(wrapper.text()).toBe("Badge");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<span class="m-badge">Badge</span>"`);
  });

  it("renders as button when as='button'", () => {
    const wrapper = mount(MBadge, {
      props: {
        as: "button",
      },
      slots: {
        default: "Click me",
      },
    });
    expect((wrapper.element as HTMLElement).tagName).toBe("BUTTON");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<button class="m-badge" type="button">Click me</button>"`);
  });

  it("renders as anchor when as='a'", () => {
    const wrapper = mount(MBadge, {
      props: {
        as: "a",
      },
      slots: {
        default: "Link",
      },
    });
    expect((wrapper.element as HTMLElement).tagName).toBe("A");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<a class="m-badge">Link</a>"`);
  });

  it("applies all modifiers correctly", () => {
    const wrapper = mount(MBadge, {
      props: {
        variant: "primary",
        outline: true,
        small: true,
        rounded: true,
        transition: true,
      },
      slots: {
        default: "Badge",
      },
    });
    expect(wrapper.classes()).toContain("m-badge");
    expect(wrapper.classes()).toContain("--primary");
    expect(wrapper.classes()).toContain("--outline");
    expect(wrapper.classes()).toContain("--small");
    expect(wrapper.classes()).toContain("--rounded");
    expect(wrapper.classes()).toContain("--transition");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<span class="m-badge --primary --outline --small --rounded --transition">Badge</span>"`);
  });

  it("defaults type to button when rendered as a button", () => {
    const wrapper = mount(MBadge, { props: { as: "button" } });
    expect(wrapper.attributes("type")).toBe("button");
  });

  it("lets the consumer override type when rendered as a button", () => {
    const wrapper = mount(MBadge, { props: { as: "button" }, attrs: { type: "submit" } });
    expect(wrapper.attributes("type")).toBe("submit");
  });

  it("does not add type to non-button elements", () => {
    const wrapper = mount(MBadge, { props: { as: "a" } });
    expect(wrapper.attributes("type")).toBeUndefined();
  });
});
