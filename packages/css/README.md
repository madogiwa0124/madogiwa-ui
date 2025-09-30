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
<div class="alert --primary">
  <div class="alert__content">
    Primary alert message
  </div>
</div>

<!-- Button Component -->
<button class="btn --primary">Primary Button</button>

<!-- Container Layout -->
<div class="container">
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

.btn {
  --btn-color-primary: #your-custom-color
}
```

## 🏗️ Architecture

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
.block {
  .block__element {}
  .--modifier {}
}
```

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
