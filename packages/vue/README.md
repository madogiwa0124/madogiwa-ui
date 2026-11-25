# @madogiwa-ui/vue

⚠️ Currently under development ⚠️

Pure CSS framework leveraging cutting-edge CSS features.

## 📦 Installation

```bash
npm install @madogiwa-ui/css @madogiwa-ui/vue
# or
pnpm add @madogiwa-ui/css @madogiwa-ui/vue
# or
yarn add @madogiwa-ui/css @madogiwa-ui/vue
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
import { MBtn, MContainer, MH1 } from "@madogiwa-ui/vue";
</script>

<template>
  <MH1>
    Madogiwa UI - Vue
  </MH1>
  <MContainer>
    <MBtn variant="primary">
      Primary Button
    </MBtn>
  </MContainer>
</template>
```

## 🏗️ Architecture

[Architecture Documentation](../../.claude/rules/vue.md)

## 💻 Development

```bash
# Install dependencies
pnpm install
# Start development server
pnpm dev
```

For development, `index.html`, `index.ts`, and `demo/App.vue` are provided.

Since `@madogiwa-ui/css` is imported in `index.ts`, you can use Madogiwa UI components by modifying `demo/App.vue`.

```vue
<script setup lang="ts">
import { MBtn } from "@madogiwa-ui/vue";
</script>
<template>
  <MBtn variant="primary">
    Primary Button
  </MBtn>
</template>
```

### Testing Strategy

Vitest (browser mode) is used for unit testing. You can run the tests with the following command:

```sh
pnpm test
```
