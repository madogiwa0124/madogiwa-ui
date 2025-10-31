## `@madogiwa-ui/css` Guide

### Directory Structure

FLOCSS inspired structure:

```sh
root
├── dist // Compiled CSS files
├── plugins // For build tools
├── src
│   ├── components
│   │   └── button.css
│   ├── foundation
│   ├── layouts
│   ├── utils
│   └── main.css // Entry point
└── stories // Storybook stories
    ├── components
    │   └── Button
    │       └── Button.stories.ts // Story for src/components/button.css
    ├── foundation
    ├── layouts
    └── utils
```

### CSS Layer System (`src/main.css`)

```css
@layer base, layout, components, utils, overrides;
```

- **base**: Reset CSS + foundation styles
- **layout**: Container, columns system
- **components**: UI components (buttons, forms, etc.)
- **utils**: Utility classes
- **overrides**: User customization layer

### BEM + CSS Nesting Pattern

All classes use `m-` prefix with BEM methodology:

```css
.m-[component] {
  /* CSS variables at top */
  --component-property: value;

  /* Base styles */
  property: value;

  /* Element styles with nesting */
  .m-[component]__element {
    /* Modifier variants for Element */
    &.--modifier {
    }
  }

  /* Modifier variants */
  &.--variant {
  }
  &.--state {
  }

  /* Conditional transitions */
  &.--transition {
    transition: property duration ease;
  }

  /*
    Data attribute variants

    In cases where you want to specify CSS variables or properties directly from the markup, it is recommended to use data attributes instead of modifiers.

    Example:

    .m-[component] {
      --component-property: value;
      property: var(--component-property);

      &[data-example="value"] {
        --component-property: value;
      }
    }
  */
  &[data-example="value"] {
  }
}
```

Madogiwa UI provides optional CSS transitions for interactive components, considering users with visual sensitivities and motion preferences. You can enable or disable transitions using the `--transition` modifier class.

### CSS Variables System

CSS variables are designed with consideration for Tailwind CSS compatibility based on the following default CSS variables:

refs: https://tailwindcss.com/docs/theme

Madogiwa UI's custom CSS variables are robustly designed using `@property` for enhanced type safety and validation.

```css
@property --font-family-base {
  syntax: "*";
  initial-value: system-ui, -apple-system, sans-serif;
  inherits: true;
}
```

### Optional Transition

Madogiwa UI provides optional CSS transitions for interactive components, considering users with visual sensitivities and motion preferences. You can enable or disable transitions using the `--transition` modifier class.

```html
<button class="m-btn --primary --transition">Primary Button</button>
```

## Aceessibility

**For basic guidelines, see the corresponding [A11y Guideline](./a11y.prompt.md).**

## Storybook-Driven Development

**For basic guidelines, see the corresponding [Storybook Documentation](./storybook.prompt.md).**

