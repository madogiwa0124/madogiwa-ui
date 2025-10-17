export interface ParagraphProperties {
  text?: string;
}

export const createParagraph = (
  props: ParagraphProperties = {},
): HTMLParagraphElement => {
  const { text = "Paragraph text" } = props;

  const paragraph = document.createElement("p");
  paragraph.classList.add("m-p");

  if (text) paragraph.textContent = text;

  return paragraph;
};
