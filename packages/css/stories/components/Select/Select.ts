export interface SelectProperties {
  options?: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  optgroups?: Array<{
    label: string;
    options: Array<{
      value: string;
      label: string;
      disabled?: boolean;
    }>;
  }>;
  separators?: number[];
  value?: string;
  disabled?: boolean;
  required?: boolean;
  multiple?: boolean;
  id?: string;
  name?: string;
  onChange?: (value: string | string[]) => void;
}

export const createSelect = (
  props: SelectProperties = {},
): HTMLSelectElement => {
  const select = document.createElement("select");
  select.classList.add("m-select");

  // Set attributes
  if (props.disabled) select.disabled = props.disabled;
  if (props.required) select.required = props.required;
  if (props.multiple) select.multiple = props.multiple;
  if (props.id) select.id = props.id;
  if (props.name) select.name = props.name;

  // Create options
  if (props.options) {
    for (const [index, option] of props.options.entries()) {
      // Add separator if specified
      if (props.separators?.includes(index)) {
        const separator = document.createElement("hr");
        select.append(separator);
      }

      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.textContent = option.label;
      if (option.disabled) optionElement.disabled = option.disabled;
      if (props.value === option.value) optionElement.selected = true;

      select.append(optionElement);
    }
  }

  // Create optgroups
  if (props.optgroups) {
    for (const group of props.optgroups) {
      const optgroup = document.createElement("optgroup");
      optgroup.label = group.label;

      for (const option of group.options) {
        const optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        if (option.disabled) optionElement.disabled = option.disabled;
        if (props.value === option.value) optionElement.selected = true;

        optgroup.append(optionElement);
      }

      select.append(optgroup);
    }
  }

  // Add event listener
  if (props.onChange) {
    select.addEventListener("change", () => {
      if (props.onChange) {
        if (props.multiple) {
          const selectedValues = [...select.selectedOptions].map(option => option.value);
          props.onChange(selectedValues);
        } else {
          props.onChange(select.value);
        }
      }
    });
  }

  return select;
};
