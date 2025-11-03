import { mount } from "@vue/test-utils";
import { MTextarea } from "./index";
import { describe, expect, it } from "vitest";

describe("MTextarea", () => {
  it("renders correctly with basic props", () => {
    const wrapper = mount(MTextarea, {
      props: {
        modelValue: "",
        placeholder: "Enter your message",
      },
    });
    expect(wrapper.classes()).toContain("m-textarea");
    expect(wrapper.attributes("placeholder")).toBe("Enter your message");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<textarea class="m-textarea" placeholder="Enter your message"></textarea>"`);
  });

  it("applies modifiers correctly", () => {
    const wrapper = mount(MTextarea, {
      props: {
        block: true,
        error: true,
        autoFit: true,
      },
    });
    expect(wrapper.classes()).toContain("--block");
    expect(wrapper.classes()).toContain("--error");
    expect(wrapper.classes()).toContain("--auto-fit");
  });

  it("updates v-model on input", async () => {
    let modelValue = "";
    const wrapper = mount(MTextarea, {
      props: {
        "modelValue": "",
        "onUpdate:modelValue": (e: string | undefined): void => {
          if (e !== undefined) {
            modelValue = e;
          }
        },
      },
    });
    await wrapper.setValue("test message");
    expect(modelValue).toBe("test message");
  });
});
