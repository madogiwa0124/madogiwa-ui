# `@madogiwa-ui/vue` Guide

## Directory Structure

The directory structure under src follows the directory structure of `@madogiwa-ui/css` to make the target elements easy to understand. For example, the component for `.m-block` in `components/block-name` directory -> `MBlcok` component in `components/MBlock` directory.

However, in cases where the block name and the file name do not match (for example, when `button.css` targets `.m-btn`), use the CSS file name as the directory name and use the block name for the component name. For example: `button.css` (for `.m-btn`) -> `MButton/MBtn.vue`.

The directory name adopts the UpperCamelCase of the root class name of the target CSS element. (ex: `.m-btn` -> `.MButton`)
The element directory collocates the component body, entry point, and test code.

```sh
packages/vue/
├── dist/
└── src/
    ├── components/
    │   ├── MBlock/
    │   │   ├── index.ts // exports MBlock component
    │   │   ├── MBlock.vue // component body
    │   │   └── MBlock.test.ts // unit test
    │   └── MButton/
    │       ├── index.ts
    │       ├── MBtn.vue
    │       └── MBtn.test.ts
    ├── layouts/
    │   └── MContainer/
    │       ├── index.ts
    │       ├── MContainer.vue
    │       └── MContainer.test.ts
    ├── index.ts // exports all components
    └── types/
```

## Component Design

Components are designed following the [official Vue.js style guide](https://vuejs.org/style-guide/).

Each component is designed to be a thin wrapper around the corresponding CSS class, passing props as class modifiers or data attributes.

```vue
<!-- NOTE: use script setup style -->
<script setup lang="ts">
const { modifier, dataAttribute = 1} = defineProps<{
  modifier?: string;
  dataAttribute?: number;
}>();
</script>
<template>
  <element
    class="m-element"
    :class="[
    { '--modifier': modifier }
    ]"
    :data-attribute="dataAttribute"
  >
    <slot />
  </element>
</template>
```

Each component is exported in the index.ts in the same directory,

```ts
import { default as MElement }  from "./MElement.vue";
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
import { MBlock, MElement } from "index.ts";
</script>
<template>
  <MBlock>
    <MElement>
      <slot />
    </MElement>
  </MBlock>
</template>
```

## Testing

Vitest (browser mode) + Vue Test Utils is used for unit testing.

Each component's behavior is verified to ensure it produces the expected output.

For all components, implement tests including snapshots of basic usage cases, and if there is any logic within the Component, tests for that logic as well.

For components that only add CSS classes, basic usage case snapshot tests are sufficient.

```ts
import { mount } from "@vue/test-utils";
import { MButton } from "./index";
import { describe, expect, it } from "vitest";

describe("MButton", () => {
  it("renders correctly with basic cases", () => {
    const wrapper = mount(MButton, {
      props: {
        variant: "primary",
      },
      slots: {
        default: "Click Me",
      },
    });
    expect(wrapper.classes()).toContain("m-btn");
    expect(wrapper.text()).toBe("Click Me");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<button class="m-btn">Click Me</button>"`);
  });

  it("applies modifier class when variant prop is set", () => {
    const wrapper = mount(MButton, {
      props: {
        variant: "secondary",
      },
    });
    expect(wrapper.classes()).toContain("--secondary");
  });

  it("emits click event when clicked", async () => {
    const wrapper = mount(MButton);
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });
});
```

## Accessibility

**For basic guidelines, see the corresponding [A11y Guideline](./a11y.prompt.md).**

For Vue-specific accessibility best practices, refer to the [official Vue.js documentation](https://vuejs.org/guide/best-practices/accessibility.html#accessibility).

## Performance

For Vue-specific performance best practices, refer to the [official Vue.js documentation](https://vuejs.org/guide/best-practices/performance.html).

## Security

For Vue-specific security best practices, refer to the [official Vue.js documentation](https://vuejs.org/guide/best-practices/security.html).

