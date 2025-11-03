import { mount } from "@vue/test-utils";
import { MLink } from "./index";
import { describe, expect, it } from "vitest";

describe("MLink", () => {
  it("renders correctly with basic props", () => {
    const wrapper = mount(MLink, {
      props: {
        href: "/about",
      },
      slots: {
        default: "About Us",
      },
    });
    expect(wrapper.classes()).toContain("m-link");
    expect(wrapper.attributes("href")).toBe("/about");
    expect(wrapper.text()).toBe("About Us");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<a class="m-link" href="/about">About Us</a>"`);
  });

  it("applies external link attributes correctly", () => {
    const wrapper = mount(MLink, {
      props: {
        href: "https://example.com",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      slots: {
        default: "External Link",
      },
    });
    expect(wrapper.attributes("href")).toBe("https://example.com");
    expect(wrapper.attributes("target")).toBe("_blank");
    expect(wrapper.attributes("rel")).toBe("noopener noreferrer");
  });
});
