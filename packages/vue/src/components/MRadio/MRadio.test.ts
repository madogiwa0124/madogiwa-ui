import { mount } from "@vue/test-utils";
import { MRadio } from "./index";
import { describe, expect, it } from "vitest";

describe("MRadio", () => {
  it("renders correctly with basic props", () => {
    const wrapper = mount(MRadio, {
      props: {
        modelValue: "option1",
        value: "option1",
      },
    });
    expect(wrapper.classes()).toContain("m-radio");
    expect(wrapper.attributes("type")).toBe("radio");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<input type="radio" class="m-radio" value="option1">"`);
  });

  it("updates v-model on change", async () => {
    let modelValue: string | number | boolean = "option1";
    const wrapper = mount(MRadio, {
      props: {
        "modelValue": "option1",
        "onUpdate:modelValue": (e: string | number | boolean | undefined): void => {
          if (e !== undefined) {
            modelValue = e;
          }
        },
        "value": "option2",
      },
    });
    await wrapper.setValue("option2");
    expect(modelValue).toBe("option2");
  });

  it("handles disabled state", () => {
    const wrapper = mount(MRadio, {
      props: {
        disabled: true,
      },
    });
    expect(wrapper.attributes("disabled")).toBeDefined();
  });
});
