import { mount } from "@vue/test-utils";
import { MAlertActions } from "./index";
import { describe, expect, it } from "vitest";

describe("MAlertActions", () => {
  it("renders correctly", () => {
    const wrapper = mount(MAlertActions, {
      slots: {
        default: "<button>Dismiss</button>",
      },
    });
    expect(wrapper.classes()).toContain("m-alert__actions");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="m-alert__actions"><button>Dismiss</button></div>"`);
  });
});
