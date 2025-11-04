import { mount } from "@vue/test-utils";
import { MSnackbarActions } from "./index";
import { describe, expect, it } from "vitest";

describe("MSnackbarActions", () => {
  it("renders correctly", () => {
    const wrapper = mount(MSnackbarActions, {
      slots: {
        default: "<button>Close</button>",
      },
    });
    expect(wrapper.classes()).toContain("m-snackbar__actions");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="m-snackbar__actions"><button>Close</button></div>"`);
  });
});
