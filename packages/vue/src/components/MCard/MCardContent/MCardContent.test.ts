import { mount } from "@vue/test-utils";
import { MCardContent } from "./index";
import { describe, expect, it } from "vitest";

describe("MCardContent", () => {
  it("renders correctly", () => {
    const wrapper = mount(MCardContent, {
      slots: {
        default: "Card content text",
      },
    });
    expect(wrapper.classes()).toContain("m-card__content");
    expect(wrapper.text()).toBe("Card content text");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="m-card__content">Card content text</div>"`);
  });
});
