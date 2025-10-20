export interface TextareaProperties {
  placeholder?: string;
  rows?: number;
  cols?: number;
  block?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  autoFit?: boolean;
  value?: string;
  id?: string;
  name?: string;
  onChange?: (value: string) => void;
}

export const createTextarea = (
  props: TextareaProperties = {},
): HTMLTextAreaElement => {
  const textarea = document.createElement("textarea");
  textarea.classList.add("m-textarea");

  // Apply modifiers
  if (props.block) textarea.classList.add("--block");
  if (props.error) textarea.classList.add("--error");
  if (props.autoFit) textarea.classList.add("--auto-fit");

  // Set attributes
  if (props.placeholder) textarea.placeholder = props.placeholder;
  if (props.rows) textarea.rows = props.rows;
  if (props.cols) textarea.cols = props.cols;
  if (props.disabled) textarea.disabled = props.disabled;
  if (props.required) textarea.required = props.required;
  if (props.value) textarea.value = props.value;
  if (props.id) textarea.id = props.id;
  if (props.name) textarea.name = props.name;

  // Add event listener
  if (props.onChange) {
    textarea.addEventListener("input", (event) => {
      const target = event.target as HTMLTextAreaElement;
      if (props.onChange) {
        props.onChange(target.value);
      }
    });
  }

  return textarea;
};
