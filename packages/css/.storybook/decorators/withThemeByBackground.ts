import type { Decorator, StoryContext } from "@storybook/html";

export const withThemeByBackground: Decorator = (story, context: StoryContext) => {
  const background = context.globals.backgrounds?.value;
  const thema: "dark" | "light" = background === "dark" ? "dark" : "light";

  const rootEl = document.documentElement;
  rootEl.dataset.theme = thema;
  return story();
}
