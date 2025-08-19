export interface RadioProperties {
  name?: string;
  value?: string;
  id?: string;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface LabelProperties {
  text: string;
  htmlFor: string;
  cursor?: string;
  userSelect?: string;
}

export function createRadio(props: RadioProperties = {}): HTMLInputElement {
  const {
    name = "radio",
    value = "radio",
    id,
    checked = false,
    disabled = false,
    className = "radio",
  } = props;

  const radio = document.createElement("input");
  radio.type = "radio";
  radio.className = className;
  radio.name = name;
  radio.value = value;
  radio.checked = checked;
  radio.disabled = disabled;

  if (id) {
    radio.id = id;
  }

  return radio;
}

export function createLabel(props: LabelProperties): HTMLLabelElement {
  const { text, htmlFor, cursor = "pointer", userSelect = "none" } = props;

  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.textContent = text;
  label.style.cursor = cursor;
  label.style.userSelect = userSelect;

  return label;
}

export function createRadioWithLabel(
  radioProperties: RadioProperties & { id: string },
  labelText: string,
): HTMLDivElement {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.gap = "0.5rem";

  const radio = createRadio(radioProperties);
  const label = createLabel({
    text: labelText,
    htmlFor: radioProperties.id,
  });

  container.append(radio);
  container.append(label);

  return container;
}
