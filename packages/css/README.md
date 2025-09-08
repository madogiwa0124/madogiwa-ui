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

## 🌐 Browser Support

- **Chrome**: Last 3 versions
- **Firefox**: Last 3 versions
- **Safari**: Last 3 versions
- **Edge**: Last 3 versions

**Modern CSS Features Used:**
- CSS Nesting
- CSS `@property`
- `:has()` selector
- Logical properties
- and more
