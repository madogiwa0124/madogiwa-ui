export interface ToggleProperties {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (checked: boolean) => void;
}

export const createToggle = (
  props: ToggleProperties = {},
): HTMLInputElement => {
  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.classList.add("m-toggle");

  // Set attributes
  if (props.checked) toggle.checked = props.checked;
  if (props.disabled) toggle.disabled = props.disabled;
  if (props.id) toggle.id = props.id;
  if (props.name) toggle.name = props.name;
  if (props.value) toggle.value = props.value;

  // Add event listener
  if (props.onChange) {
    toggle.addEventListener("change", () => {
      if (props.onChange) {
        props.onChange(toggle.checked);
      }
    });
  }

  return toggle;
};
