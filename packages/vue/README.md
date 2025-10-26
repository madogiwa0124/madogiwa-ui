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

## Architecture

## 🏗️ Architecture

### Directory Structure

The directory structure under src follows the directory structure of @madogiwa-ui/css to make the target elements easy to understand.
The directory name adopts the UpperCamelCase of the root class name of the target CSS element. (ex: `.m-button` → `.MButton`)
The element directory collocates the component body, entry point, and test code.

```sh
packages/vue/
├── dist/
└── src/
    ├── components/
    │   └── MButton/
    │       ├── index.ts
    │       ├── MButton.vue
    │       └── MButton.test.ts
    ├── layouts/
    │   └── MContainer/
    │       ├── index.ts
    │       ├── MContainer.vue
    │       └── MContainer.test.ts
    ├── index.ts
    └── types/
```

### Component Design

Each component is designed to be a thin wrapper around the corresponding CSS class, passing props as class modifiers or data attributes.

```vue
<script setup lang="ts">
const { modifier, dataAttribute = 1} = defineProps<{
  modifier?: string;
  dataAttribute?: number;
}>();
</script>
<template>
  <element :class="[
    'm-element',
    { '--modifier': modifier },
    { 'data-attribute': dataAttribute }
  ]">
    <slot />
  </element>
</template>
```

For elements that have sub-elements, create a Component representing the Element, and apply the corresponding CSS class within that.

```sh
  components/
    └── MBlock/
        ├── index.ts
        ├── MBlock.vue
        ├── MBlock.test.ts
        └── MElement/
            ├── index.ts
            ├── MElement.vue
            └── MElement.test.ts
```

```vue
<!-- App.vue -->
<script setup lang="ts">
import MBlock from "./MBlock";
import MElement from "./MElement";
</script>
<template>
  <MBlock>
    <MElement>
      <slot />
    </MElement>
  </MBlock>
</template>
```

## 💻 Development

```bash
# Install dependencies
pnpm install
pnpm dev
```

開発用にrootディレクトリに`index.html`と`index.ts`と`App.vue`を用意しています。

index.tsで`@madogiwa-ui/css`をimportしているので`App.vue`を修正することでMadogiwa UIのコンポーネントを使用できます。

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

Vitest(browser mode)を利用したユニットテスト環境を用意しています。以下のコマンドでテストを実行できます。

```sh
pnpm test
```

各コンポーネントの動作確認を行い、期待される出力が得られることを検証します。
snapshotテストは`toMatchInlineSnapshot`を利用してコンポーネントのHTML出力を検証してください。

```ts
import { mount } from "@vue/test-utils";
import MButton from "./MButton.vue";
import { describe, expect, it } from "vitest";

describe("MButton", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(MButton, {
      slots: {
        default: "Click Me",
      },
    });
    expect(wrapper.classes()).toContain("m-btn");
    expect(wrapper.text()).toBe("Click Me");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<button data-v-15066eb7="" class="m-btn">Click Me</button>"`);
  });
});
```
