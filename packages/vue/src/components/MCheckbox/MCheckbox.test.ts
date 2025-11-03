import { mount } from "@vue/test-utils";
import { MCheckbox } from "./index";
import { describe, expect, it } from "vitest";

describe("MCheckbox", () => {
  it("renders correctly with basic props", () => {
    const wrapper = mount(MCheckbox, {
      props: {
        modelValue: false,
      },
    });
    expect(wrapper.classes()).toContain("m-checkbox");
    expect(wrapper.attributes("type")).toBe("checkbox");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<input type="checkbox" class="m-checkbox">"`);
  });

  it("updates v-model on change", async () => {
    let modelValue = false;
    const wrapper = mount(MCheckbox, {
      props: {
        "modelValue": false,
        "onUpdate:modelValue": (e: boolean | undefined): void => {
          if (e !== undefined) {
            modelValue = e;
          }
        },
      },
    });
    await wrapper.setValue(true);
    expect(modelValue).toBe(true);
  });

  it("handles disabled state", () => {
    const wrapper = mount(MCheckbox, {
      props: {
        disabled: true,
      },
    });
    expect(wrapper.attributes("disabled")).toBeDefined();
  });
});
