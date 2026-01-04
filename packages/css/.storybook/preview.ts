import type {Preview } from "@storybook/html";
import "../src/main.css";
import { withThemeByBackground } from "./decorators/withThemeByBackground";


const preview: Preview = {
  decorators: [withThemeByBackground],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
