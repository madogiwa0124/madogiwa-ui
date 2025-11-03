import { mount } from "@vue/test-utils";
import { MSelect } from "./index";
import { describe, expect, it } from "vitest";

describe("MSelect", () => {
  it("renders correctly with basic props", () => {
    const wrapper = mount(MSelect, {
      props: {
        modelValue: "option1",
      },
      slots: {
        default: `
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        `,
      },
    });
    expect(wrapper.classes()).toContain("m-select");
    expect((wrapper.element as HTMLElement).tagName).toBe("SELECT");
  });

  it("applies error modifier correctly", () => {
    const wrapper = mount(MSelect, {
      props: {
        error: true,
      },
    });
    expect(wrapper.classes()).toContain("--error");
  });

  it("updates v-model on change", async () => {
    let modelValue = "option1";
    const wrapper = mount(MSelect, {
      props: {
        "modelValue": "option1",
        "onUpdate:modelValue": (e: string | number | undefined): void => {
          if (e !== undefined) {
            modelValue = String(e);
          }
        },
      },
      slots: {
        default: `
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        `,
      },
    });
    await wrapper.setValue("option2");
    expect(modelValue).toBe("option2");
  });
});
