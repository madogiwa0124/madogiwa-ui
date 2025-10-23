# @madogiwa-ui/css

⚠️ Currently under development ⚠️

Pure CSS framework leveraging cutting-edge CSS features.

## 📦 Installation

```bash
npm install @madogiwa-ui/css
# or
pnpm add @madogiwa-ui/css
# or
yarn add @madogiwa-ui/css
```

## 📕 Documentation

* [Storybook](https://madogiwa0124.github.io/madogiwa-ui/storybook/css/)
  - [Markdown](https://github.com/madogiwa0124/madogiwa-ui/blob/main/packages/css/dist/components-ai-context.md)

## 🚀 Quick Start

### Import in your CSS

```css
@import "@madogiwa-ui/css";
/* Import individual components */
@import "@madogiwa-ui/css/src/components/button.css";
```

### Import in JavaScript/TypeScript

```javascript
import "@madogiwa-ui/css";
/* Import individual components */
import "@madogiwa-ui/css/src/components/button.css";
```

## 🎨 Basic Usage

```html
<!-- Alert Component -->
<div class="m-alert --primary">
  <div class="m-alert__content">Primary alert message</div>
</div>

<!-- Button Component -->
<button class="m-btn --primary">Primary Button</button>

<!-- Container Layout -->
<div class="m-container">
  <p>Responsive container content</p>
</div>
```

## 🔧 Customization

### Override CSS Variables

```css
:root {
  /* Colors */
  --color-primary: #your-brand-color;
  --color-secondary: #your-secondary-color;

  /* Spacing */
  --spacing: 4px;

  /* Typography */
  --font-family-base: "Your Font", sans-serif;
}

.m-btn {
  --btn-color-primary: #your-custom-color;
}
```

## 🔖 CSS Snippets (for VSCode)

To use Madogiwa UI CSS snippets in VS Code, place the `dist/madogiwa-ui.code-snippets` file in your `.vscode` directory (or any snippets directory). This enables you to easily insert Madogiwa UI component classes like `.m-btn` when editing HTML or CSS files, and CSS variables like `--color-primary` when editing CSS files.

## 🏗️ Architecture

### Directory Structure

FLOCSS inspired structure:

```sh
root
├── dist // Compiled CSS files
├── plugins // For build tools
├── src
│   ├── components
│   ├── foundation
│   ├── layouts
│   ├── utils
│   └── main.css // Entry point
└── stories // Storybook stories
    ├── components
    ├── foundation
    ├── layouts
    └── utils
```

### CSS Layer System

```css
@layer base, layout, components, utils, overrides;
```

- **base**: Reset CSS + base styles
- **layout**: Layout components (Container, etc.)
- **components**: UI components
- **utils**: Utility classes
- **overrides**: Customization layer

### CSS Design

We employ BEM-based CSS design while leveraging native CSS Nesting for style scoping.

```css
.prefix-block {
  .prefix-block__element {
  }
  &.--modifier {
  }
}
```

We use `m-` as the prefix for all CSS classes to avoid naming conflicts and ensure consistent component identification.
This prefix system helps maintain clear separation between framework styles and your custom application styles.

### CSS Variables System

CSS variables are designed with consideration for Tailwind CSS compatibility based on the following default CSS variables:

refs: https://tailwindcss.com/docs/theme#default-theme-variable-reference

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

### Focus Visualization

Madogiwa UI implements minimal focus visualization to respect native browser focus indicators across Firefox, Safari, Google Chrome, and other browsers, ensuring optimal accessibility.

We believe that browser-native focus indicators are specifically designed and tested for accessibility compliance.

## 🌐 Browser Support

**Baseline Newly available**

## 💻 Development

```sh
# Launch Storybook
pnpm run css storybook

# Run Storybook tests
pnpm run css storybook:test
```

### Testing Strategy

We use Storybook for Interaction Testing and accessibility checks with the a11y plugin.

```typescript
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(button).toHaveClass("--active");
  },
};
```
