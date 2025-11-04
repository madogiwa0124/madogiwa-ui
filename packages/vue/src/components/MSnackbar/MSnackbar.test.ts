import { mount } from "@vue/test-utils";
import { MSnackbar } from "./index";
import { describe, expect, it, vi } from "vitest";

describe("MSnackbar", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(MSnackbar, {
      slots: {
        default: "Snackbar message",
        actions: "Snackbar action",
      },
    });
    expect(wrapper.classes()).toContain("m-snackbar");
    expect(wrapper.attributes("popover")).toBe("manual");
    expect(wrapper.text()).toBe("Snackbar messageSnackbar action");
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div popover="manual" class="m-snackbar">
        <div class="m-snackbar__body">Snackbar message<div class="m-snackbar__actions">Snackbar action</div>
        </div>
      </div>"
    `);
  });

  it("applies transition modifier", () => {
    const wrapper = mount(MSnackbar, {
      props: {
        transition: true,
      },
    });
    expect(wrapper.classes()).toContain("--transition");
  });

  it("applies position modifiers", () => {
    const wrapper = mount(MSnackbar, {
      props: {
        position: "right-bottom",
      },
    });
    expect(wrapper.classes()).toContain("--right-bottom");
  });

  it("calls showPopover when open prop is true", async () => {
    const wrapper = mount(MSnackbar, {
      props: {
        open: false,
      },
      attachTo: document.body,
    });

    const snackbar = wrapper.element as HTMLDivElement & { showPopover: () => void };
    const showPopoverSpy = vi.spyOn(snackbar, "showPopover");

    await wrapper.setProps({ open: true });
    expect(showPopoverSpy).toHaveBeenCalled();

    wrapper.unmount();
  });

  it("calls hidePopover when open prop changes to false", async () => {
    const wrapper = mount(MSnackbar, {
      props: {
        open: true,
      },
      attachTo: document.body,
    });

    const snackbar = wrapper.element as HTMLDivElement & { hidePopover: () => void };
    const hidePopoverSpy = vi.spyOn(snackbar, "hidePopover");

    await wrapper.setProps({ open: false });
    expect(hidePopoverSpy).toHaveBeenCalled();

    wrapper.unmount();
  });

  it("renders with named slots (auto-wrap pattern)", () => {
    const wrapper = mount(MSnackbar, {
      props: {
        open: false,
      },
      slots: {
        default: "Snackbar notification",
        actions: "<button>Dismiss</button>",
      },
    });
    expect(wrapper.classes()).toContain("m-snackbar");
    expect(wrapper.find(".m-snackbar__body").exists()).toBe(true);
    expect(wrapper.find(".m-snackbar__actions").exists()).toBe(true);
    expect(wrapper.text()).toContain("Snackbar notification");
  });
});
