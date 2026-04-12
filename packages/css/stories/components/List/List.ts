export interface ListProperties {
  items?: string[];
  none?: boolean;
  inline?: boolean;
}

export const createOl = (props: ListProperties = {}): HTMLOListElement => {
  const { items = ["Item 1", "Item 2", "Item 3"], none = false, inline = false } = props;

  const ol = document.createElement("ol");
  ol.classList.add("m-ol");

  if (none) ol.classList.add("--none");
  if (inline) ol.classList.add("--inline");

  for (const item of items) {
    const li = document.createElement("li");
    li.classList.add("m-li");
    li.textContent = item;
    ol.append(li);
  }

  return ol;
};

export const createUl = (props: ListProperties = {}): HTMLUListElement => {
  const { items = ["Item 1", "Item 2", "Item 3"], none = false, inline = false } = props;

  const ul = document.createElement("ul");
  ul.classList.add("m-ul");

  if (none) ul.classList.add("--none");
  if (inline) ul.classList.add("--inline");

  for (const item of items) {
    const li = document.createElement("li");
    li.classList.add("m-li");
    li.textContent = item;
    ul.append(li);
  }

  return ul;
};
