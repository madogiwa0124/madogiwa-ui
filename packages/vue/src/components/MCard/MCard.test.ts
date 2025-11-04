import { mount } from "@vue/test-utils";
import { MCard } from "./index";
import { describe, expect, it } from "vitest";

describe("MCard", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(MCard, {
      slots: {
        default: "Card content",
      },
    });
    expect(wrapper.classes()).toContain("m-card");
    expect(wrapper.text()).toBe("Card content");
  });

  it("applies floating modifier", () => {
    const wrapper = mount(MCard, {
      props: {
        floating: true,
      },
    });
    expect(wrapper.classes()).toContain("--floating");
  });

  it("renders with named slots (auto-wrap pattern)", () => {
    const wrapper = mount(MCard, {
      slots: {
        default: "Card content",
        actions: "<button>Action</button>",
      },
    });
    expect(wrapper.classes()).toContain("m-card");
    expect(wrapper.find(".m-card__content").exists()).toBe(true);
    expect(wrapper.find(".m-card__actions").exists()).toBe(true);
    expect(wrapper.text()).toContain("Card content");
  });
});
