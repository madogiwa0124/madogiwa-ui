import { mount } from "@vue/test-utils";
import { MColumns } from "./index";
import { describe, expect, it } from "vitest";

describe("MColumns", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(MColumns, {
      slots: {
        default: "<div>Column 1</div><div>Column 2</div>",
      },
    });
    expect(wrapper.classes()).toContain("m-columns");
    expect(wrapper.html()).toContain("Column 1");
    expect(wrapper.html()).toContain("Column 2");
  });

  it("applies data-columns-length attribute", () => {
    const wrapper = mount(MColumns, {
      props: {
        columnsLength: 6,
      },
    });
    expect(wrapper.attributes("data-columns-length")).toBe("6");
  });

  it("applies auto-fit modifier", () => {
    const wrapper = mount(MColumns, {
      props: {
        autoFit: true,
      },
    });
    expect(wrapper.classes()).toContain("--auto-fit");
  });

  it("applies no-gap modifier", () => {
    const wrapper = mount(MColumns, {
      props: {
        noGap: true,
      },
    });
    expect(wrapper.classes()).toContain("--no-gap");
  });

  it("applies align-rows modifier", () => {
    const wrapper = mount(MColumns, {
      props: {
        alignRows: true,
      },
    });
    expect(wrapper.classes()).toContain("--align-rows");
  });

  it("applies all modifiers together", () => {
    const wrapper = mount(MColumns, {
      props: {
        columnsLength: 4,
        autoFit: true,
        noGap: true,
        alignRows: true,
      },
    });
    expect(wrapper.classes()).toContain("m-columns");
    expect(wrapper.classes()).toContain("--auto-fit");
    expect(wrapper.classes()).toContain("--no-gap");
    expect(wrapper.classes()).toContain("--align-rows");
    expect(wrapper.attributes("data-columns-length")).toBe("4");
  });
});
