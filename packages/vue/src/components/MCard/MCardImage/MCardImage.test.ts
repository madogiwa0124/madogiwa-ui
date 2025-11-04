import { mount } from "@vue/test-utils";
import { MCardImage } from "./index";
import { describe, expect, it } from "vitest";

describe("MCardImage", () => {
  it("renders correctly with src and alt", () => {
    const wrapper = mount(MCardImage, {
      props: {
        src: "/image.jpg",
        alt: "Test image",
      },
    });
    expect(wrapper.classes()).toContain("m-card__image");
    expect(wrapper.attributes("src")).toBe("/image.jpg");
    expect(wrapper.attributes("alt")).toBe("Test image");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<img class="m-card__image" src="/image.jpg" alt="Test image">"`);
  });
});
