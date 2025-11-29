import { mount } from "@vue/test-utils";
import { MCardFooter } from "./index";
import { describe, expect, it } from "vitest";

describe("MCardFooter", () => {
  it("renders correctly", () => {
    const wrapper = mount(MCardFooter, {
      slots: {
        default: "<button>Action</button>",
      },
    });
    expect(wrapper.classes()).toContain("m-card__footer");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="m-card__footer"><button>Action</button></div>"`);
  });
});
