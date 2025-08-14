import type { Meta, StoryObj } from "@storybook/html";
import {
  customProperties,
  designTokens,
  createColorElement,
  type Property,
  createSpacingElement,
  createTypographyElement,
  createShadowElement,
  createCornerElement,
} from "./Variables";
import { expect } from "storybook/test";

const meta: Meta = {
  title: "Variables",
  tags: ["autodocs"],
  argTypes: {},
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
type Story = StoryObj;

export const Color: Story = {
  render: (_args) => {
    const rootEl = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootEl ?? document.documentElement);
    for (const property of tokens['color'] ?? []) {
      createAndAppendElements(property, createColorElement, container);
    }
    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLElement;
    const container = canvas.querySelector("div");

    expect(container).not.toBeNull();
  },
};

export const Spacing: Story = {
  render: (_args) => {
    const rootEl = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootEl ?? document.documentElement);
    for (const property of tokens['spacing'] ?? []) {
      createAndAppendElements(property, createSpacingElement, container);
    }
    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLElement;
    const container = canvas.querySelector("div");

    expect(container).not.toBeNull();
  },
};

export const Typography: Story = {
  render: (_args) => {
    const rootEl = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootEl ?? document.documentElement);
    for (const property of tokens['typography'] ?? []) {
      createAndAppendElements(property, createTypographyElement, container);
    }
    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLElement;
    const container = canvas.querySelector("div");

    expect(container).not.toBeNull();
  },
};

export const Shadow: Story = {
  render: (_args) => {
    const rootEl = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootEl ?? document.documentElement);
    for (const property of tokens['shadow'] ?? []) {
      createAndAppendElements(property, createShadowElement, container);
    }
    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLElement;
    const container = canvas.querySelector("div");

    expect(container).not.toBeNull();
    // If shadow tokens exist, verify that child elements are present
  },
};

export const Corner: Story = {
  render: (_args) => {
    const rootEl = document.querySelector<HTMLEmbedElement>("#storybook-root");
    const container = document.createElement("div");
    const tokens = getDesignTokens(rootEl ?? document.documentElement);
    for (const property of tokens['corner'] ?? []) {
      createAndAppendElements(property, createCornerElement, container);
    }
    return container;
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLElement;
    const container = canvas.querySelector("div");

    expect(container).not.toBeNull();
  },
};

const getDesignTokens = (element: HTMLElement): Record<string, Property[]> => {
  const properties = customProperties(element);
  const tokens = designTokens(properties);
  return tokens;
};

const createAndAppendElements = (
  property: Property,
  builder: (property: Property) => HTMLElement,
  appendTo: HTMLElement,
) => {
  const el = builder(property);
  appendTo.appendChild(el);
};
