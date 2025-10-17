export interface LinkProperties {
  text?: string;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  onClick?: (event: Event) => void;
}

export const createLink = (
  props: LinkProperties = {},
): HTMLAnchorElement => {
  const link = document.createElement("a");
  link.classList.add("m-link");

  // Set attributes
  if (props.text) link.textContent = props.text;
  if (props.href) link.href = props.href;
  if (props.target) link.target = props.target;
  if (props.rel) link.rel = props.rel;

  // Add event listener
  if (props.onClick) {
    link.addEventListener("click", (event) => {
      if (props.onClick) {
        props.onClick(event);
      }
    });
  }

  return link;
};
