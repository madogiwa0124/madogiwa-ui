import { mount } from "@vue/test-utils";
import { MAlert } from "./index";
import { describe, expect, it } from "vitest";

describe("MAlert", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(MAlert, {
      slots: {
        default: "Alert message",
      },
    });
    expect(wrapper.classes()).toContain("m-alert");
    expect(wrapper.attributes("role")).toBe("alert");
    expect(wrapper.text()).toBe("Alert message");
  });

  it("applies variant modifiers", () => {
    const wrapper = mount(MAlert, {
      props: {
        variant: "primary",
      },
    });
    expect(wrapper.classes()).toContain("--primary");
  });

  it("applies with-progress modifier", () => {
    const wrapper = mount(MAlert, {
      props: {
        withProgress: true,
      },
    });
    expect(wrapper.classes()).toContain("--with-progress");
  });

  it("applies data-auto-dismiss attribute", () => {
    const wrapper = mount(MAlert, {
      props: {
        autoDismiss: "5s",
      },
    });
    expect(wrapper.attributes("data-auto-dismiss")).toBe("5s");
  });

  it("renders with named slots (auto-wrap pattern)", () => {
    const wrapper = mount(MAlert, {
      props: {
        variant: "primary",
      },
      slots: {
        icons: "ℹ️",
        default: "Alert message",
        actions: "<button>Action</button>",
      },
    });
    expect(wrapper.classes()).toContain("m-alert");
    expect(wrapper.find(".m-alert__icons").exists()).toBe(true);
    expect(wrapper.find(".m-alert__content").exists()).toBe(true);
    expect(wrapper.find(".m-alert__actions").exists()).toBe(true);
    expect(wrapper.text()).toContain("Alert message");
  });
});
