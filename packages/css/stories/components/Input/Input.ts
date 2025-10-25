export interface InputProperties {
  placeholder?: string;
  inputType?: "text" | "email" | "password" | "number" | "date" | "color" | "file";
  block?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  value?: string;
  accept?: string;
  transition?: boolean;
  onInput?: (value: string) => void;
}

export const createInput = (
  props: InputProperties = {},
): HTMLInputElement => {
  const input = document.createElement("input");
  input.classList.add("m-input");

  // Apply modifiers
  if (props.block) input.classList.add("--block");
  if (props.error) input.classList.add("--error");
  if (props.transition) input.classList.add("--transition");

  // Set attributes
  if (props.placeholder) input.placeholder = props.placeholder;
  if (props.inputType) input.type = props.inputType;
  if (props.disabled) input.disabled = props.disabled;
  if (props.required) input.required = props.required;
  if (props.value) input.value = props.value;
  if (props.accept) input.accept = props.accept;

  // Add event listener
  if (props.onInput) {
    input.addEventListener("input", (event) => {
      const target = event.target as HTMLInputElement;
      if (props.onInput) {
        props.onInput(target.value);
      }
    });
  }

  return input;
};
