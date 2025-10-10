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

## 🚀 Quick Start

### Import in your CSS

```css
@import '@madogiwa-ui/css';
/* Import individual components */
@import '@madogiwa-ui/css/src/components/button.css';
```

### Import in JavaScript/TypeScript

```javascript
import '@madogiwa-ui/css';
/* Import individual components */
import '@madogiwa-ui/css/src/components/button.css';
```

## 🎨 Basic Usage

```html
<!-- Alert Component -->
<div class="m-alert --primary">
  <div class="m-alert__content">
    Primary alert message
  </div>
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
  --spacing-4: 2rem;

  /* Typography */
  --font-family-base: 'Your Font', sans-serif;
}

.m-btn {
  --btn-color-primary: #your-custom-color
}
```

## 🔖 CSS Class Snippets (for VSCode)

To use Madogiwa UI CSS class snippets in VSCode, place the `dist/madogiwa-ui.code-snippets` file in your `.vscode` directory (or any snippets directory). This will enable you to easily insert Madogiwa UI component classes like `.m-btn` when editing `html` or `css` files.

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
  .prefix-block__element {}
  &.--modifier {}
}
```

We use `m-` as the prefix for all CSS classes to avoid naming conflicts and ensure consistent component identification.
This prefix system helps maintain clear separation between framework styles and your custom application styles.

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
    const button = canvas.getByRole('button');

    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(button).toHaveClass('--active');
  }
};
```
