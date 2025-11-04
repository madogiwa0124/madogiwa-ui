import { mount } from "@vue/test-utils";
import { MDialog } from "./index";
import { describe, expect, it, vi } from "vitest";

describe("MDialog", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(MDialog, {
      slots: {
        default: "Dialog content",
      },
    });
    expect(wrapper.classes()).toContain("m-dialog");
    expect(wrapper.text()).toBe("Dialog content");
  });

  it("applies backdrop-blur modifier", () => {
    const wrapper = mount(MDialog, {
      props: {
        backdropBlur: true,
      },
    });
    expect(wrapper.classes()).toContain("--backdrop-blur");
  });

  it("applies transition modifier", () => {
    const wrapper = mount(MDialog, {
      props: {
        transition: true,
      },
    });
    expect(wrapper.classes()).toContain("--transition");
  });

  it("calls showModal when open prop is true", async () => {
    const wrapper = mount(MDialog, {
      props: {
        open: false,
      },
      attachTo: document.body,
    });

    const dialog = wrapper.element as HTMLDialogElement;
    const showModalSpy = vi.spyOn(dialog, "showModal");

    await wrapper.setProps({ open: true });
    expect(showModalSpy).toHaveBeenCalled();

    wrapper.unmount();
  });

  it("calls close when open prop changes to false", async () => {
    const wrapper = mount(MDialog, {
      props: {
        open: true,
      },
      attachTo: document.body,
    });

    const dialog = wrapper.element as HTMLDialogElement;
    const closeSpy = vi.spyOn(dialog, "close");

    await wrapper.setProps({ open: false });
    expect(closeSpy).toHaveBeenCalled();

    wrapper.unmount();
  });

  it("emits close event when dialog is closed natively (ESC key)", () => {
    const wrapper = mount(MDialog, {
      props: {
        open: true,
      },
      attachTo: document.body,
    });

    const dialog = wrapper.element as HTMLDialogElement;

    // Trigger native close event (simulating ESC key)
    dialog.dispatchEvent(new Event("close"));

    expect(wrapper.emitted("close")).toHaveLength(1);

    wrapper.unmount();
  });
});
