export interface LinkProps {
  text?: string;
  href?: string;
  newTab?: boolean;
  className?: string;
  onClick?: (event: MouseEvent) => void;
}

export const createLink = (props: LinkProps = {}): HTMLElement => {
  const {
    text = "Link",
    href = "#",
    newTab = false,
    className = "",
    onClick = null,
  } = props;

  const link = document.createElement("a");
  link.textContent = text;
  link.href = href;

  if (newTab) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  link.classList.add("link");

  if (className) {
    link.classList.add(className);
  }

  if (onClick && typeof onClick === "function") {
    link.addEventListener("click", (e) => {
      // Don't call preventDefault - controllable through callback
      onClick(e);
    });
  }

  return link;
};

export const styleAsLink = (
  element: HTMLElement,
  props: LinkProps = {},
): HTMLElement => {
  const { className = "" } = props;

  element.className = "";

  element.classList.add("link");

  if (className) {
    element.classList.add(className);
  }

  return element;
};
