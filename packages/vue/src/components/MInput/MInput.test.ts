import { mount } from "@vue/test-utils";
import { MInput } from "./index";
import { describe, expect, it } from "vitest";

describe("MInput", () => {
  it("renders correctly with basic props", () => {
    const wrapper = mount(MInput, {
      props: {
        modelValue: "",
        placeholder: "Enter text",
      },
    });
    expect(wrapper.classes()).toContain("m-input");
    expect(wrapper.attributes("type")).toBe("text");
    expect(wrapper.attributes("placeholder")).toBe("Enter text");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<input type="text" class="m-input" placeholder="Enter text">"`);
  });

  it("applies modifiers correctly", () => {
    const wrapper = mount(MInput, {
      props: {
        block: true,
        error: true,
        transition: true,
      },
    });
    expect(wrapper.classes()).toContain("--block");
    expect(wrapper.classes()).toContain("--error");
    expect(wrapper.classes()).toContain("--transition");
  });

  it("updates v-model on input", async () => {
    let modelValue = "";
    const wrapper = mount(MInput, {
      props: {
        "modelValue": "",
        "onUpdate:modelValue": (e: string | number | undefined): void => {
          if (e !== undefined) {
            modelValue = String(e);
          }
        },
      },
    });
    await wrapper.setValue("test value");
    expect(modelValue).toBe("test value");
  });

  it("supports different input types", () => {
    const wrapper = mount(MInput, {
      props: {
        type: "email",
      },
    });
    expect(wrapper.attributes("type")).toBe("email");
  });
});
