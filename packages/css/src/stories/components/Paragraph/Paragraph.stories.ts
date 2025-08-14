import type { Meta, StoryObj } from "@storybook/html";
import { expect } from "storybook/test";

interface ParagraphArgs {
  text: string;
  className: string;
}

const meta: Meta<ParagraphArgs> = {
  title: "Components/Paragraph",
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    className: { control: "text" },
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
type Story = StoryObj<ParagraphArgs>;

const createParagraph = (
  props: { text?: string; className?: string } = {},
): HTMLElement => {
  const { text = "Paragraph text", className = "" } = props;

  const paragraph = document.createElement("p");
  paragraph.textContent = text;

  paragraph.classList.add("paragraph");

  if (className) {
    paragraph.classList.add(className);
  }

  return paragraph;
};

export const Default: Story = {
  render: (args) => {
    return createParagraph(args);
  },
  args: {
    text: "This is sample text. Paragraphs are used to group multiple sentences and display related information together.",
    className: "",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = canvasElement as HTMLElement;
    const paragraph = canvas.querySelector("p") as HTMLParagraphElement;

    expect(paragraph).not.toBeNull();
    expect(paragraph).toHaveTextContent(args.text || "");
    expect(paragraph.tagName.toLowerCase()).toBe("p");
    expect(paragraph).toHaveClass("paragraph");
  },
};

export const MultipleParagraphs: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "0"; // No gap here as spacing is controlled by CSS

    const paragraph1 = createParagraph({
      text: "This is the first paragraph. Appropriate spacing is automatically set between paragraphs.",
    });

    const paragraph2 = createParagraph({
      text: "This is the second paragraph. Appropriate spacing is automatically set between paragraphs.",
    });

    const paragraph3 = createParagraph({
      text: "This is the third paragraph. Appropriate spacing is automatically set between paragraphs.",
    });

    container.appendChild(paragraph1);
    container.appendChild(paragraph2);
    container.appendChild(paragraph3);

    return container;
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLElement;
    const paragraphs = canvas.querySelectorAll("p");

    expect(paragraphs).toHaveLength(3);

    const expectedTexts = [
      "This is the first paragraph. Appropriate spacing is automatically set between paragraphs.",
      "This is the second paragraph. Appropriate spacing is automatically set between paragraphs.",
      "This is the third paragraph. Appropriate spacing is automatically set between paragraphs.",
    ];

    for (const [index, paragraph] of Array.from(paragraphs).entries()) {
      expect(paragraph).not.toBeNull();
      expect(paragraph.tagName.toLowerCase()).toBe("p");
      expect(paragraph).toHaveClass("paragraph");
      const expectedText = expectedTexts[index];
      if (expectedText) {
        expect(paragraph).toHaveTextContent(expectedText);
      }
    }
  },
};
