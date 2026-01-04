---
applyTo: 'packages/css/**/*'
---

# `@madogiwa-ui/css` Guide

## Directory Structure

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

## Architecture

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

### Dark Mode Support

Madogiwa UI components automatically adapt to dark mode using the `:root[data-theme="dark"]` CSS selector.
Semantic colors adjust accordingly to maintain accessibility and visual consistency.

If automatic adjustments are insufficient, use custom CSS variables to override colors for specific components. Define custom CSS variables for dark mode explicitly and apply them within the `:root[data-theme="dark"]` CSS selector.

```css
.m-component {
  --component-text-color: var(--color-text-default);
  --component-text-dark-color: var(--color-text-inverse);
  --component-bg-color: var(--color-bg-default);
  --component-dark-bg-color: var(--color-bg-dark);
}

/* Dark mode */
:root[data-theme="dark"] .m-component {
  --component-text-color: var(--component-text-dark-color);
  --component-bg-color: var(--component-dark-bg-color);
}
```

## Accessibility

**For basic guidelines, see the corresponding [A11y Guideline](../prompts/a11y.prompt.md).**

## Storybook-Driven Development

**For basic guidelines, see the corresponding [Storybook Documentation](../skills/css-story-book/SKILL.md).**


## Review Guidelines

**For css features review guidelines, see the corresponding [CSS Review Guidelines](../skills/css-review/SKILL.md).**
