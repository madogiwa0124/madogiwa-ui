import { mount } from "@vue/test-utils";
import { MCardActions } from "./index";
import { describe, expect, it } from "vitest";

describe("MCardActions", () => {
  it("renders correctly", () => {
    const wrapper = mount(MCardActions, {
      slots: {
        default: "<button>Action</button>",
      },
    });
    expect(wrapper.classes()).toContain("m-card__actions");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="m-card__actions"><button>Action</button></div>"`);
  });
});
