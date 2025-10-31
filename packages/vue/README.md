# @madogiwa-ui/vue

⚠️ Currently under development ⚠️

Pure CSS framework leveraging cutting-edge CSS features.

## 📦 Installation

```bash
npm install @medogiwa-ui/css @madogiwa-ui/vue
# or
pnpm add @medogiwa-ui/css @madogiwa-ui/vue
# or
yarn add @medogiwa-ui/css @madogiwa-ui/vue
```

## 📕 Documentation

* [Storybook](https://madogiwa0124.github.io/madogiwa-ui/storybook/css/)
  - [Markdown](https://github.com/madogiwa0124/madogiwa-ui/blob/main/packages/css/dist/madogiwa-ui-components-docs.md)

## 🚀 Quick Start

import `@madogiwa-ui/css` in your main entry file, and use components in your Vue files.

```javascript
import "@madogiwa-ui/css";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
```

Then, you can use Madogiwa UI components like below:

```vue
<script setup lang="ts">
import { MButton, MHeading, MContainer } from "@madogiwa-ui/vue";
</script>

<template>
  <MHeading level="1">
    Madogiwa UI - Vue
  </MHeading>
  <MContainer>
    <MButton variant="primary">
      Primary Button
    </MButton>
  </MContainer>
</template>
```

## 🏗️ Architecture

[Architecture Documentation](../../.github/prompts/vue.prompt.md)

## 💻 Development

```bash
# Install dependencies
pnpm install
# Start development server
pnpm dev
```

For development, `index.html`, `index.ts`, and `App.vue` are provided in the root directory.

Since `@madogiwa-ui/css` is imported in `index.ts`, you can use Madogiwa UI components by modifying `App.vue`.

```vue
<script setup lang="ts">
import { MButton } from "@madogiwa-ui/vue";
</script>
<template>
  <MButton variant="primary">
    Primary Button
  </MButton>
</template>
```

### Testing Strategy

Vitest (browser mode) is used for unit testing. You can run the tests with the following command:

```sh
pnpm test
```
