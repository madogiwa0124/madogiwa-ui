import { mount } from "@vue/test-utils";
import { MTable } from "./index";
import { describe, expect, it } from "vitest";

describe("MTable", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(MTable, {
      slots: {
        default: `
          <thead>
            <tr><th>Header</th></tr>
          </thead>
          <tbody>
            <tr><td>Cell</td></tr>
          </tbody>
        `,
      },
    });
    expect(wrapper.classes()).toContain("m-table");
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<table class="m-table">
        <thead>
          <tr>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell</td>
          </tr>
        </tbody>
      </table>"
    `);
  });

  it("applies all modifiers correctly", () => {
    const wrapper = mount(MTable, {
      props: {
        stripe: true,
        bordered: true,
        hoverable: true,
        transition: true,
        fullWidth: true,
      },
      slots: {
        default: `
          <tbody>
            <tr><td>Cell</td></tr>
          </tbody>
        `,
      },
    });
    expect(wrapper.classes()).toContain("m-table");
    expect(wrapper.classes()).toContain("--stripe");
    expect(wrapper.classes()).toContain("--bordered");
    expect(wrapper.classes()).toContain("--hoverable");
    expect(wrapper.classes()).toContain("--transition");
    expect(wrapper.classes()).toContain("--full-width");
  });
});
