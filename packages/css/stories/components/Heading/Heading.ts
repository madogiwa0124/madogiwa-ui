export interface HeadingProperties {
  text?: string;
  level?: number;
  className?: string;
}

export const createHeading = (props: HeadingProperties = {}): HTMLElement => {
  const { text = "Heading", level = 1, className = "" } = props;

  const safeLevel = Math.max(1, Math.min(6, level));

  const heading = document.createElement(`h${safeLevel.toString()}`);
  heading.textContent = text;

  heading.classList.add(`h${safeLevel.toString()}`);

  if (className) {
    heading.classList.add(className);
  }

  return heading;
};

export const styleAsHeading = (
  element: HTMLElement,
  props: HeadingProperties = {},
): HTMLElement => {
  const { level = 1, className = "" } = props;

  const safeLevel = Math.max(1, Math.min(6, level));

  element.className = "";

  element.classList.add(`h${safeLevel.toString()}`);

  if (className) {
    element.classList.add(className);
  }

  return element;
};
