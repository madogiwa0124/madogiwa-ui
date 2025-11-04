import { mount } from "@vue/test-utils";
import { MSnackbarBody } from "./index";
import { describe, expect, it } from "vitest";

describe("MSnackbarBody", () => {
  it("renders correctly", () => {
    const wrapper = mount(MSnackbarBody, {
      slots: {
        default: "Body content",
      },
    });
    expect(wrapper.classes()).toContain("m-snackbar__body");
    expect(wrapper.text()).toBe("Body content");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="m-snackbar__body">Body content</div>"`);
  });
});
