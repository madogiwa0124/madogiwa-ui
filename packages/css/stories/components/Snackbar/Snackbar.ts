export interface SnackbarProperties {
  message: string;
  position?: "default" | "right-top" | "right-bottom" | "left-top";
  transition?: boolean;
  actions?: Array<{
    text: string;
    ariaLabel?: string;
    onClick?: () => void;
  }>;
  id?: string;
}

export const createSnackbar = (
  props: SnackbarProperties,
): HTMLElement => {
  const container = document.createElement("div");

  // Create trigger button
  const button = document.createElement("button");
  button.classList.add("m-btn", "--primary");
  button.textContent = "Show Snackbar";
  button.setAttribute("popovertarget", props.id ?? "snackbar");

  // Create snackbar
  const snackbar = document.createElement("div");
  snackbar.classList.add("m-snackbar");
  snackbar.popover = "manual";
  snackbar.id = props.id ?? "snackbar";
  snackbar.setAttribute("role", "alert");

  // Add modifiers
  if (props.transition) snackbar.classList.add("--transition");
  if (props.position && props.position !== "default") {
    snackbar.classList.add(`--${props.position}`);
  }

  // Create snackbar body
  const body = document.createElement("div");
  body.classList.add("m-snackbar__body");

  // Create content
  const content = document.createElement("div");
  content.classList.add("m-snackbar__content");
  const messageSpan = document.createElement("span");
  messageSpan.textContent = props.message;
  content.append(messageSpan);

  // Create actions
  const actionsContainer = document.createElement("div");
  actionsContainer.classList.add("m-snackbar__actions");

  if (props.actions) {
    for (const action of props.actions) {
      const actionButton = document.createElement("button");
      actionButton.textContent = action.text;
      actionButton.setAttribute("popovertarget", props.id ?? "snackbar");
      if (action.ariaLabel) actionButton.setAttribute("aria-label", action.ariaLabel);

      if (action.onClick) {
        actionButton.addEventListener("click", action.onClick);
      }

      actionsContainer.append(actionButton);
    }
  } else {
    // Default actions
    const okButton = document.createElement("button");
    okButton.textContent = "OK";
    okButton.setAttribute("popovertarget", props.id ?? "snackbar");

    const closeButton = document.createElement("button");
    closeButton.textContent = "×";
    closeButton.setAttribute("aria-label", "Close snackbar");
    closeButton.setAttribute("popovertarget", props.id ?? "snackbar");

    actionsContainer.append(okButton, closeButton);
  }

  body.append(content, actionsContainer);
  snackbar.append(body);

  container.append(button, snackbar);
  return container;
};
