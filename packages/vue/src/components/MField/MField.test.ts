import { flushPromises, mount } from "@vue/test-utils";
import { defineComponent, h, ref } from "vue";
import { describe, expect, it } from "vitest";
import { MField, MFieldError, MFieldHelp } from "./index";
import { MInput } from "../MInput";
import { MLabel } from "../MLabel";
import { MSelect } from "../MSelect";
import { MTextarea } from "../MTextarea";

const createForm = (options: { id?: string; help?: boolean; error?: string } = {}) => {
  const showHelp = ref(options.help ?? true);
  const error = ref(options.error ?? "");
  const Form = defineComponent({
    render: () => h(MField, options.id === undefined ? null : { id: options.id }, () => [
      h(MLabel, null, () => "Email"),
      h(MInput, { type: "email" }),
      showHelp.value ? h(MFieldHelp, null, () => "We never share your email.") : undefined,
      h(MFieldError, null, () => error.value),
    ]),
  });
  return { wrapper: mount(Form, { attachTo: document.body }), showHelp, error };
};

describe("MField", () => {
  it("renders correctly with basic cases", () => {
    const wrapper = mount(MField, {
      props: { id: "email" },
      slots: { default: "Content" },
    });
    expect(wrapper.classes()).toContain("m-field");
    expect(wrapper.attributes("id")).toBeUndefined();
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="m-field">Content</div>"`);
  });

  it("associates the label with the control using a generated id", async () => {
    const { wrapper } = createForm();
    await flushPromises();
    const label = wrapper.get("label");
    const input = wrapper.get("input");
    expect(input.attributes("id")).toBeTruthy();
    expect(label.attributes("for")).toBe(input.attributes("id"));
    wrapper.unmount();
  });

  it("uses the id prop for the control and derives the other ids from it", async () => {
    const { wrapper } = createForm({ id: "email", error: "Enter a valid email address." });
    await flushPromises();
    expect(wrapper.get("label").attributes("for")).toBe("email");
    expect(wrapper.get("input").attributes("id")).toBe("email");
    expect(wrapper.get(".m-field__help").attributes("id")).toBe("email-help");
    expect(wrapper.get(".m-field__error").attributes("id")).toBe("email-error");
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div class="m-field"><label for="email" class="m-label">Email</label><input id="email" type="email" class="m-input --error" aria-invalid="true" aria-describedby="email-error email-help">
        <div id="email-help" class="m-field__help">We never share your email.</div>
        <div id="email-error" class="m-field__error" aria-live="polite">Enter a valid email address.</div>
      </div>"
    `);
    wrapper.unmount();
  });

  it("references the help text only while it is rendered", async () => {
    const { wrapper, showHelp } = createForm({ id: "email" });
    await flushPromises();
    expect(wrapper.get("input").attributes("aria-describedby")).toBe("email-help");

    showHelp.value = false;
    await flushPromises();
    expect(wrapper.get("input").attributes("aria-describedby")).toBeUndefined();
    wrapper.unmount();
  });

  it("marks the control as invalid only while the error message has content", async () => {
    const { wrapper, error } = createForm({ id: "email", help: false });
    await flushPromises();
    const input = wrapper.get("input");
    expect(input.attributes("aria-invalid")).toBeUndefined();
    expect(input.attributes("aria-describedby")).toBeUndefined();
    expect(input.classes()).not.toContain("--error");
    expect(wrapper.find(".m-field__error").exists()).toBe(true);

    error.value = "Enter a valid email address.";
    await flushPromises();
    expect(input.attributes("aria-invalid")).toBe("true");
    expect(input.attributes("aria-describedby")).toBe("email-error");
    expect(input.classes()).toContain("--error");

    error.value = "  ";
    await flushPromises();
    expect(input.attributes("aria-invalid")).toBeUndefined();
    expect(input.attributes("aria-describedby")).toBeUndefined();
    wrapper.unmount();
  });

  it("generates unique ids for each field", () => {
    const Form = defineComponent({
      render: () => [
        h(MField, null, () => h(MInput)),
        h(MField, null, () => h(MInput)),
      ],
    });
    const wrapper = mount(Form);
    const [first, second] = wrapper.findAll("input");
    expect(first?.attributes("id")).toBeTruthy();
    expect(first?.attributes("id")).not.toBe(second?.attributes("id"));
  });

  it("wires MTextarea and MSelect in the same way as MInput", async () => {
    const Form = defineComponent({
      render: () => [
        h(MField, { id: "message" }, () => [h(MTextarea), h(MFieldError, null, () => "Required")]),
        h(MField, { id: "country" }, () => [h(MSelect), h(MFieldError, null, () => "Required")]),
      ],
    });
    const wrapper = mount(Form, { attachTo: document.body });
    await flushPromises();
    for (const [selector, id] of [["textarea", "message"], ["select", "country"]] as const) {
      const control = wrapper.get(selector);
      expect(control.attributes("id")).toBe(id);
      expect(control.attributes("aria-invalid")).toBe("true");
      expect(control.attributes("aria-describedby")).toBe(`${id}-error`);
      expect(control.classes()).toContain("--error");
    }
    wrapper.unmount();
  });
});
