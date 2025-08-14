import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";

const meta: Meta = {
  title: "Components/Tabs",
  tags: ["autodocs"],
  argTypes: {
    transition: {
      control: { type: "boolean" },
      description: "Enable transition effects on tab hover.",
    },
    scrollhint: {
      control: { type: "boolean" },
      description: "Enable scroll hint effects on tab list.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Tab component. Navigation element for switching between multiple content areas. Supports active state, disabled state, and hover effects, with transition options to control animation effects.\n\n**Note**: This component provides only styling. Accessibility features such as aria-controls, aria-selected, and dynamic tabindex value changes based on active state require separate JavaScript implementation.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const nav = document.createElement("nav");
    nav.className = "tabs";
    if (args["transition"]) nav.classList.add("--transition");
    if (args["scrollhint"]) nav.classList.add("--scrollhint");
    nav.innerHTML = `
      <div class="tabs__list" role="tablist">
        <button class="tabs__item --active" role="tab" aria-selected="true" aria-controls="panel-1" tabindex="0">Active Tab</button>
        <button class="tabs__item" role="tab" aria-selected="false" aria-controls="panel-2" tabindex="-1">Tab 2</button>
        <button class="tabs__item" role="tab" aria-selected="false" aria-controls="panel-3" tabindex="-1">Tab 3</button>
        <button class="tabs__item" role="tab" aria-selected="false" aria-controls="panel-4" tabindex="-1" disabled>Disabled</button>
      </div>
    `;
    container.appendChild(nav);
    const buildPanel = (id: string) => {
      const panel = document.createElement("div");
      panel.id = id;
      panel.role = "tabpanel";
      return panel;
    };
    container.appendChild(buildPanel("panel-1"));
    container.appendChild(buildPanel("panel-2"));
    container.appendChild(buildPanel("panel-3"));
    container.appendChild(buildPanel("panel-4"));
    return container;
  },
  args: {
    transition: false,
    scrollhint: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLElement;
    const tabs = canvas.querySelector(".tabs") as HTMLElement;
    const activeTab = tabs.querySelector(
      ".tabs__item.--active",
    ) as HTMLButtonElement;
    const tab = tabs.querySelector(
      ".tabs__item:not(.--active)",
    ) as HTMLButtonElement;
    const disabledTab = tabs.querySelector(
      ".tabs__item[disabled]",
    ) as HTMLButtonElement;
    expect(canvas).not.toBeNull();
    expect(tabs).not.toBeNull();
    expect(tabs.querySelectorAll(".tabs__item").length).toBe(4);
    expect(tabs).toHaveClass("tabs");
    expect(tab).toHaveTextContent("Tab 2");
    expect(tab).toHaveAttribute("aria-selected", "false");
    expect(tab).toHaveAttribute("tabindex", "-1");
    expect(activeTab).toHaveTextContent("Active Tab");
    expect(activeTab).toHaveAttribute("aria-selected", "true");
    expect(activeTab).toHaveAttribute("tabindex", "0");
    expect(disabledTab).toHaveTextContent("Disabled");
    expect(disabledTab).toBeDisabled();
    expect(disabledTab).toHaveAttribute("aria-selected", "false");
    expect(disabledTab).toHaveAttribute("tabindex", "-1");
  },
};
