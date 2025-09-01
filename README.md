# Madogiwa UI

⚠️ Currently under development ⚠️

**A flexible, accessible, next-generation UI framework leveraging cutting-edge CSS features**

## 🎯 Concept

Madogiwa UI is a UI library that aims to actively leverage the latest CSS features:

- **🚀 Modern CSS Features**: Actively utilize cutting-edge features like CSS `@property`, CSS Nesting, logical properties, and more
- **🎨 CSS Variables System**: Systematic design tokens enabling flexible customization
- **♿ WCAG A Compliance**: Prioritizing accessibility while respecting browser-native functionality
- **🔄 Tailwind CSS Compatible**: Adopting Tailwind CSS-compatible Reset CSS (Preflight) and color palette
- **📱 Newly Baseline Support**: Sustainable design supporting the latest Web standards specifications

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

### Design Token
```
├── foundation/
│   └── variables/
│       ├── colors/
│       │   ├── primitive.css    # Base color palette
│       │   └── semantic.css     # Semantic colors
│       ├── spacing.css          # Spacing system
│       ├── typography.css       # Typography
│       ├── border.css          # Border & border-radius
│       ├── shadow.css          # Shadow system
│       └── zindex.css          # Z-index management
```

### Package Structure

```
madogiwa-ui/
└── packages/
    └── css/
        └── src/
            ├── styles/
            │   ├── foundation/     # Design tokens
            │   ├── layouts/        # Layout
            │   ├── components/     # UI components
            │   └── utils/          # Utilities
            └── stories/            # Storybook
```

## 🚀 Development

### Setup

```sh
pnpm i
pnpm run setup
```

### CSS Development

```sh
# Launch Storybook
pnpm run css storybook

# Run Storybook tests
pnpm run css storybook:test

# Run Playwright E2E tests
pnpm run css test:e2e
```

### Lint & Code Quality

Static analysis and code formatting using ESLint:

```sh
pnpm run lint
```

### 🧪 Testing Strategy

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
