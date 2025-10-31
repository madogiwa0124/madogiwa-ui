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
  - [Markdown](https://github.com/madogiwa0124/madogiwa-ui/blob/main/packages/css/dist/madogiwa-ui-components-docs.md)

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

[Architecture Documentation](../../.github/prompts/css.prompt.md)

## 🌐 Browser Support

**Baseline Newly available**

## 💻 Development

```sh
# Launch Storybook
pnpm run css storybook

# Run Storybook tests
pnpm run css storybook:test

# Run CSS package unit tests
pnpm run test

# Build CSS package
pnpm run css build

# Build CSS docs
pnpm run css build:docs
```
