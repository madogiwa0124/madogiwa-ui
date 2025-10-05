import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";

interface LabelProperties {
  text: string;
}

const meta: Meta<LabelProperties> = {
  title: "Components/Label",
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "example description",
      },
    },
  },
};

export default meta;
type Story = StoryObj<LabelProperties>;

export const Default: Story = {
  render: (args) => {
    const container = document.createElement("div");
    const label = document.createElement("label");
    label.className = "m-label";
    label.textContent = args["text"];
    container.append(label);
    return container;
  },
  args: {
    text: "Label text",
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const label = canvas.querySelector("label") as HTMLLabelElement;

    await expect(label).not.toBeNull();
    await expect(label).toHaveClass("m-label");
  },
};

export const WithInput: Story = {
  render: () => {
    const container = document.createElement("div");
    const label = document.createElement("label");
    label.className = "m-label";
    label.textContent = "Input Label";
    label.setAttribute("for", "input-id");

    const input = document.createElement("input");
    input.className = "m-input";
    input.id = "input-id";
    input.type = "text";
    input.placeholder = "Type here...";

    container.append(label);
    container.append(input);
    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const label = canvas.querySelector("label") as HTMLLabelElement;
    const input = canvas.querySelector("input") as HTMLInputElement;

    await expect(label).not.toBeNull();
    await expect(label).toHaveClass("m-label");
    await expect(input).not.toBeNull();
    await expect(input).toHaveAttribute("type", "text");
    await expect(input).toHaveAttribute("placeholder", "Type here...");

    label.click();
    await expect(document.activeElement).toBe(input);
  },
};
