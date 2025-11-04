---
title: "Madogiwa UI Components Documentation"
description: "Auto-generated documentation from Storybook stories for AI context"
generated: true
generated_at: 2025-11-04T12:49:17.990Z
---

# Madogiwa UI Components Documentation

This documentation is automatically generated from Storybook stories for AI context and reference.

## Accordion

### Overview

The Accordion component provides expandable/collapsible content sections using native HTML elements for optimal accessibility and semantic structure.

### Usage

Use accordions to organize content into expandable sections that help users focus on specific information while maintaining a clean interface. Ideal for FAQs, documentation sections, or any content that benefits from progressive disclosure. They work well when you need to present multiple topics in a compact space.

### Example code

```html
<details class="m-accordion --transition">
  <summary class="m-accordion__summary">What is Madogiwa UI?</summary>
  <div class="m-accordion__content">
    <p>Madogiwa UI is a modern CSS framework leveraging cutting-edge CSS features.</p>
  </div>
</details>

<details class="m-accordion --outline --transition">
  <summary class="m-accordion__summary">How do I get started?</summary>
  <div class="m-accordion__content">
    <p>Install the package and import the CSS in your project.</p>
  </div>
</details>
```

### Elements

| Name | Description |
| ---- | ----------- |
| .m-accordion__summary | Clickable header element that toggles accordion state |
| .m-accordion__content | Expandable content area that contains accordion body |

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-accordion | .--transition | Enables smooth animations for expand/collapse transitions |
| .m-accordion | .--outline | Adds border styling and padding around the accordion |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --accordion-summary-padding | var(--spacing-3) 0 var(--spacing-3) 0 | Padding for the accordion summary/header |
| --accordion-summary-font-weight | var(--font-weight-bold) | Font weight of the summary text |
| --accordion-summary-icon-gap | var(--spacing-2) | Gap between icon and summary text |
| --accordion-summary-icon-size | 0.6rem | Size of the expand/collapse icon |
| --accordion-summary-icon-color | var(--color-text) | Color of the expand/collapse icon |
| --accordion-summary-icon-clip-path | polygon(0 0, 100% 50%, 0 100%) | Shape of the expand/collapse icon |
| --accordion-summary-icon-open-transform | rotate(90deg) | Transform applied to icon when open |
| --accordion-content-padding | 0 var(--spacing-3) var(--spacing-3) var(--spacing-3) | Padding for the accordion content area |
| --accordion-outline-border | 1px solid var(--color-border) | Border style for outline variant |
| --accordion-outline-border-radius | var(--radius-md) | Border radius for outline variant |
| --accordion-outline-padding | 0 var(--spacing-2) 0 var(--spacing-2) | Padding for outline variant |
| --accordion-transition-time | 0.2s | Duration of expand/collapse animations |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Use semantic HTML structure with `<details>` and `<summary>` elements
- Consider motion preferences when using the transition modifier
- Ensure accordion content is accessible when expanded

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Uses native details and summary elements for optimal screen reader support
- Keyboard navigation is handled natively by the browser
- Focus management follows standard HTML behavior without additional JavaScript
- Consider motion preferences when using the transition modifier

---

## Alert

### Overview

The Alert component provides contextual feedback messages to users about system status, user actions, or important information with various visual styles and interactive features.

### Usage

Use alerts to communicate important information that requires user attention but doesn't interrupt workflow. Perfect for success confirmations, error messages, warnings, or informational updates. Alerts are non-modal and can be dismissed manually or automatically after a set time.

### Example code

```html
<!-- Basic alert -->
<div class="m-alert" role="alert">
  <div class="m-alert__content">This is a default alert message.</div>
</div>

<!-- Alert with icon and actions -->
<div class="m-alert --primary" role="alert">
  <div class="m-alert__icons">✓</div>
  <div class="m-alert__content">Operation completed successfully!</div>
  <div class="m-alert__actions">
    <button class="m-button">View Details</button>
  </div>
</div>

<!-- Auto-dismiss alert with progress -->
<div class="m-alert --warning --with-progress" role="alert" data-auto-dismiss="5s">
  <div class="m-alert__icons">⚠️</div>
  <div class="m-alert__content">This alert will disappear in 5 seconds.</div>
</div>
```

### Elements

| Name | Description |
| ---- | ----------- |
| .m-alert__icons | Container for alert icons or status indicators |
| .m-alert__content | Main content area containing the alert message |
| .m-alert__actions | Action area for buttons like dismiss or additional actions |

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-alert | .--primary | Primary alert style with brand colors |
| .m-alert | .--secondary | Secondary alert style |
| .m-alert | .--tertiary | Tertiary alert style with subtle appearance |
| .m-alert | .--danger | Danger alert for errors and critical issues |
| .m-alert | .--warning | Warning alert for caution messages |
| .m-alert | .--with-progress | Show progress bar for auto dismiss |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --alert-bg-color | var(--color-default) | Background color for default alert |
| --alert-text-color | var(--color-text) | Text color for default alert |
| --alert-border-color | var(--color-border) | Border color for default alert |
| --alert-border | 1px solid var(--color-border) | Border style |
| --alert-padding | var(--spacing-2) | Internal padding |
| --alert-item-gap | var(--spacing-2) | Gap between alert elements |
| --alert-icon-size | 1rem | Size of icons |
| --alert-primary-bg-color | var(--color-primary) | Primary variant background |
| --alert-primary-text-color | var(--color-text-light) | Primary variant text color |
| --alert-primary-border-color | var(--color-primary) | Primary variant border color |
| --alert-secondary-bg-color | var(--color-secondary) | Secondary variant background |
| --alert-secondary-text-color | var(--color-text-light) | Secondary variant text color |
| --alert-secondary-border-color | var(--color-secondary) | Secondary variant border color |
| --alert-tertiary-bg-color | var(--color-tertiary) | Tertiary variant background |
| --alert-tertiary-text-color | var(--color-text) | Tertiary variant text color |
| --alert-tertiary-border-color | var(--color-tertiary) | Tertiary variant border color |
| --alert-danger-bg-color | var(--color-danger) | Danger variant background |
| --alert-danger-text-color | var(--color-text) | Danger variant text color |
| --alert-danger-border-color | var(--color-danger) | Danger variant border color |
| --alert-warning-bg-color | var(--color-warning) | Warning variant background |
| --alert-warning-text-color | var(--color-text) | Warning variant text color |
| --alert-warning-border-color | var(--color-warning) | Warning variant border color |
| --alert-auto-dismiss-duration | 5s | Default auto dismiss duration |
| --alert-auto-dismiss-fade-duration | 0.3s | Fade out animation duration |
| --alert-auto-dismiss-progress-bg-color | rgb(from var(--color-white) r g b / 40%) | Progress bar background color |
| --alert-auto-dismiss-progress-height | 4px | Progress bar height |

### Data Attributes

| Target | Attribute | Values | Description |
| ------ | --------- | ------ | ----------- |
| .m-alert | data-auto-dismiss | "3s", "5s", "10s", "0s" | Set auto-dismiss duration (0s disables) |

### Caution

- Use `role="alert"` for screen reader announcements
- Ensure sufficient color contrast for all variants
- Consider motion preferences when using auto-dismiss animations
- Provide alternative ways to dismiss alerts for accessibility
- Ensure sufficient color contrast ratios for all variants
- Auto dismiss can be controlled or disabled for users who need more time
- Icons should include appropriate semantic meaning through context

---

## Badge

### Overview

The Badge component displays small pieces of information, status indicators, or labels with various visual styles and interactive capabilities.

### Usage

Use badges to display status information, show counts or quantities, label or categorize content, create interactive tags or filters, or highlight important information. Perfect for notification counters, status indicators, category tags, interactive filters, and feature highlights.

### Example code

```html
<!-- Basic usage -->
<div class="m-badge">Default Badge</div>
<div class="m-badge --primary">Primary Badge</div>
<div class="m-badge --secondary --outline">Secondary Outline</div>

<!-- Small rounded badge for counts -->
<div class="m-badge --danger --small --rounded">3</div>

<!-- Interactive badges -->
<button class="m-badge --primary --transition">Interactive Badge</button>
<a href="#" class="m-badge --tertiary --transition">Link Badge</a>

<!-- Disabled state -->
<button class="m-badge --primary" disabled>Disabled Badge</button>
```

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-badge | .--primary | Primary brand color styling |
| .m-badge | .--secondary | Secondary color styling |
| .m-badge | .--tertiary | Tertiary subtle color styling |
| .m-badge | .--danger | Danger/error color styling |
| .m-badge | .--warning | Warning/caution color styling |
| .m-badge | .--outline | Transparent background with colored border |
| .m-badge | .--small | Smaller size variant |
| .m-badge | .--rounded | Fully rounded (pill-shaped) |
| .m-badge | .--transition | Enable hover/focus transitions |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --badge-padding | var(--spacing-1) var(--spacing-2) | Internal padding |
| --badge-item-gap | var(--spacing-2) | Gap between badge elements |
| --badge-border-color | var(--color-border) | Default border color |
| --badge-border | 1px solid var(--badge-border-color) | Border style |
| --badge-border-radius | var(--radius-sm) | Border radius |
| --badge-bg-color | var(--color-default) | Background color |
| --badge-hover-filter | brightness(0.9) | Hover effect filter |
| --badge-disabled-opacity | 0.65 | Opacity when disabled |
| --badge-transition-duration | 0.2s | Transition duration |
| --badge-transition-timing | ease | Transition timing function |
| --badge-small-font-size | var(--text-xs) | Font size for small variant |
| --badge-primary-color | var(--color-primary) | Primary variant background |
| --badge-primary-text-color | var(--color-text-light) | Primary variant text color |
| --badge-primary-border-color | var(--badge-primary-color) | Primary variant border color |
| --badge-secondary-color | var(--color-secondary) | Secondary variant background |
| --badge-secondary-text-color | var(--color-text-light) | Secondary variant text color |
| --badge-secondary-border-color | var(--badge-secondary-color) | Secondary variant border color |
| --badge-tertiary-color | var(--color-tertiary) | Tertiary variant background |
| --badge-tertiary-text-color | var(--color-text-light) | Tertiary variant text color |
| --badge-tertiary-border-color | var(--badge-tertiary-color) | Tertiary variant border color |
| --badge-danger-color | var(--color-danger) | Danger variant background |
| --badge-danger-text-color | var(--color-text-light) | Danger variant text color |
| --badge-danger-border-color | var(--badge-danger-color) | Danger variant border color |
| --badge-warning-color | var(--color-warning) | Warning variant background |
| --badge-warning-text-color | var(--color-text-dark) | Warning variant text color |
| --badge-warning-border-color | var(--badge-warning-color) | Warning variant border color |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Ensure sufficient color contrast for readability
- Use interactive badges (buttons/links) sparingly to avoid UI clutter
- Consider motion preferences when using the transition modifier

---

## Button

### Overview

The Button component provides interactive elements for user actions with various styling options and states. It implements BEM + CSS Nesting pattern with the m- prefix for Madogiwa UI.

### Usage

Use buttons for triggering actions, submitting forms, or navigating within your application. Select appropriate variants to establish visual hierarchy and communicate action importance. Primary buttons should be used for main actions, secondary for supporting actions, and tertiary for subtle interactions.

### Example code

```html
<button class="m-btn">Default Button</button>
<button class="m-btn --primary">Primary Button</button>
<button class="m-btn --secondary --outline">Secondary Outline</button>
<button class="m-btn --tertiary --transition">Tertiary with Transition</button>
<button class="m-btn --block">Full Width Button</button>
<button class="m-btn --primary --rounded --icon-only">🔍</button>
```

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-btn | .--primary | Apply primary color variant for main actions |
| .m-btn | .--secondary | Apply secondary color variant for secondary actions |
| .m-btn | .--tertiary | Apply tertiary color variant for subtle actions |
| .m-btn | .--outline | Apply outline style with transparent background |
| .m-btn | .--block | Make button full width (display: block) |
| .m-btn | .--rounded | Apply fully rounded corners using --radius-full |
| .m-btn | .--icon-only | Reduce padding for icon-only buttons |
| .m-btn | .--transition | Enable smooth hover/focus transitions |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-btn | --btn-color-default | var(--color-default) | Default variant background color |
| .m-btn | --btn-color-primary | var(--color-primary) | Primary variant background color |
| .m-btn | --btn-color-secondary | var(--color-secondary) | Secondary variant background color |
| .m-btn | --btn-color-tertiary | var(--color-tertiary) | Tertiary variant background color |
| .m-btn | --btn-text-color-default | var(--color-text) | Default variant text color |
| .m-btn | --btn-text-color-primary | var(--color-text-light) | Primary variant text color |
| .m-btn | --btn-text-color-secondary | var(--color-text-light) | Secondary variant text color |
| .m-btn | --btn-text-color-tertiary | var(--color-text) | Tertiary variant text color |
| .m-btn | --btn-outline-text-color-default | color(from var(--btn-color-default) srgb calc(r * 0.5) calc(g * 0.5) calc(b * 0.5)) | Outline default variant text color |
| .m-btn | --btn-outline-text-color-primary | color(from var(--btn-color-primary) srgb calc(r * 0.5) calc(g * 0.5) calc(b * 0.5)) | Outline primary variant text color |
| .m-btn | --btn-outline-text-color-secondary | color(from var(--btn-color-secondary) srgb calc(r * 0.5) calc(g * 0.5) calc(b * 0.5)) | Outline secondary variant text color |
| .m-btn | --btn-outline-text-color-tertiary | color(from var(--btn-color-tertiary) srgb calc(r * 0.55) calc(g * 0.55) calc(b * 0.55)) | Outline tertiary variant text color |
| .m-btn | --btn-darker-brightness | 90% | Darker brightness filter value |
| .m-btn | --btn-lighter-brightness | 110% | Hover brightness filter value |
| .m-btn | --btn-disabled-opacity | 0.65 | Disabled state opacity |
| .m-btn | --btn-padding-x | var(--spacing-6) | Horizontal padding |
| .m-btn | --btn-padding-y | var(--spacing-2) | Vertical padding |
| .m-btn | --btn-box-shadow | var(--shadow-sm) | Button shadow |
| .m-btn | --btn-border-radius | var(--radius-md) | Default border radius |
| .m-btn | --btn-rounded-border-radius | var(--radius-full) | Rounded modifier border radius |
| .m-btn | --btn-border-width | var(--border-width) | Border width |
| .m-btn | --btn-active-transform | translateY(1px) | Active state transform |
| .m-btn | --btn-transition-duration | 0.2s | Transition animation duration |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Use --transition modifier selectively to respect user motion preferences
- Icon-only buttons require proper accessible labels or aria-label attributes
- Ensure sufficient color contrast for outline variants in your color scheme
- Block buttons should be used sparingly to maintain visual hierarchy

---

## Card

### Overview

The Card component provides a flexible container for content with optional images, shadows, and various styling options following a clean, minimal design approach.

### Usage

Use cards to display content in organized, digestible sections and group related information together. Perfect for product showcases, article previews, profile cards, feature highlights, or dashboard widgets.

### Example code

```html
<div class="m-card">
  <img class="m-card__image" src="image.jpg" alt="Card image">
  <div class="m-card__content">
    <h3>Card Title</h3>
    <p>Card content goes here with relevant information.</p>
  </div>
  <div class="m-card__actions">
    <button class="m-btn">Cancel</button>
    <button class="m-btn --primary">Confirm</button>
  </div>
</div>

<div class="m-card --floating">
  <div class="m-card__content">
    <h3>Floating Card</h3>
    <p>This card has an elevated shadow effect.</p>
  </div>
</div>
```

### Elements

| Name | Description |
| ---- | ----------- |
| .m-card__image | Card image element with responsive sizing and proper aspect ratio |
| .m-card__content | Main content area with proper padding for text and media |
| .m-card__actions | Action area with flex layout for buttons and controls |

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-card | .--floating | Adds elevated shadow effect with hover interaction |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --card-floating-shadow | var(--shadow-sm) | Shadow for floating card variant |
| --card-radius | var(--radius-md) | Border radius of the card |
| --card-bg-color | var(--color-white) | Background color |
| --card-border-color | var(--color-border) | Border color |
| --card-content-padding | var(--spacing-2) | Padding for card content area |
| --card-actions-padding | var(--spacing-1) | Padding for card actions area |
| --card-actions-item-gap | var(--spacing-1) | Gap between action items |
| --card-actions-justify | flex-end | Horizontal alignment of action items |
| --card-actions-border-top | initial | Top border for card actions area |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Ensure sufficient contrast between text and background for readability
- Use meaningful alt text for images to enhance accessibility
- Consider loading performance when using multiple image cards

---

## Checkbox

### Overview

The Checkbox component provides a custom-styled checkbox input that maintains accessibility while offering visual consistency across different browsers and platforms.

### Usage

Use checkboxes for multi-select options where users can choose multiple items, boolean settings and preferences, accepting terms and conditions, or toggling feature states. Checkboxes are ideal when users need to make independent yes/no decisions for multiple options.

### Example code

```html
<input type="checkbox" class="m-checkbox" id="example" name="example" value="example-value">
<label for="example">Example checkbox</label>

<input type="checkbox" class="m-checkbox" id="checked" name="checked" value="checked-value" checked>
<label for="checked">Pre-checked checkbox</label>

<input type="checkbox" class="m-checkbox" id="disabled" name="disabled" value="disabled-value" disabled>
<label for="disabled">Disabled checkbox</label>
```

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

This component does not have modifiers - styling is handled through states.

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-checkbox | --checkbox-size | 1em | Size of the checkbox |
| .m-checkbox | --checkbox-border-color | var(--color-dark) | Border color |
| .m-checkbox | --checkbox-mark-border | 2px solid transparent | Border style for the checkmark |
| .m-checkbox | --checkbox-mark-position-top | 0 | Top position of the checkmark |
| .m-checkbox | --checkbox-mark-position-left | 20% | Left position of the checkmark |
| .m-checkbox | --checkbox-bg-color | var(--color-light) | Background color |
| .m-checkbox | --checkbox-border-radius | 0.2em | Border radius |
| .m-checkbox | --checkbox-lighter-brightness | 150% | Brightness on hover/focus |
| .m-checkbox | --checkbox-disabled-opacity | 0.65 | Opacity when disabled |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Ensure sufficient contrast between checkbox and background for visibility
- Use clear and concise labels for better usability
- Maintain consistent sizing and spacing in forms
- Test across different browsers for consistent appearance
- Always associate labels with inputs for accessibility

---

## Dialog

### Overview

The Dialog component provides a modal dialog using the native HTML `<dialog>` element. It supports backdrop blur effects, smooth transitions, and flexible content layout with header, content, and footer sections.

### Usage

Use dialogs for confirmation prompts requiring user decision, important notifications that need immediate attention, form inputs that should be completed before continuing, or warning messages about destructive actions. Perfect for delete confirmations, settings panels, login forms, error messages, and multi-step workflows.

### Example code

```html
<dialog class="m-dialog --transition --backdrop-blur">
  <div class="m-dialog__content">
    <h2>Confirm Action</h2>
    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    <div class="m-dialog__actions">
      <button class="m-button --secondary">Cancel</button>
      <button class="m-button --danger">Delete</button>
    </div>
  </div>
</dialog>
```


**⚠️ JavaScript Required**

opening and closing the dialog requires using the HTMLDialogElement API:


```js
const dialog = document.querySelector('dialog.m-dialog');
// To open the dialog
dialog.showModal();
// To close the dialog
dialog.close();
```

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-dialog | .--backdrop-blur | Enables backdrop blur effect behind the dialog |
| .m-dialog | .--transition | Enables smooth open/close transition animations |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --dialog-bg-color | var(--color-bg-light) | Dialog background color |
| --dialog-zindex | var(--zindex-modal) | Z-index for dialog stacking |
| --dialog-padding | var(--spacing-3) | Internal padding of the dialog |
| --dialog-border-radius | var(--radius-sm) | Border radius of the dialog |
| --dialog-box-shadow | var(--shadow-lg) | Box shadow around the dialog |
| --dialog-content-gap | var(--spacing-2) | Gap between content elements |
| --dialog-backdrop-bg-color | var(--color-overlay) | Backdrop overlay color |
| --dialog-backdrop-blur | blur(4px) | Backdrop blur filter strength |
| --dialog-transition-duration | 0.2s | Duration of transition animations |
| --dialog-transition-transform-start | translateY(20%) | Initial transform for transition |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Use HTMLDialogElement API to open/close dialogs properly
- Always provide a way to close the dialog (close button or cancel action)
- Consider the user's workflow when using dialogs
- Avoid nested dialogs as they can confuse users
- Test keyboard navigation and screen reader compatibility

---

## Heading

### Overview

The Heading component provides semantically correct heading elements (h1-h6) with consistent typography and spacing. Each heading level follows a clear visual hierarchy while maintaining proper semantic structure for accessibility.

### Usage

Use headings to:
- Create document structure and hierarchy
- Improve content organization and readability
- Provide landmarks for screen readers and assistive technologies
- Establish visual emphasis and content flow
- Support SEO through proper semantic markup

**Common use cases:**
- Page titles and main headings (h1)
- Section headings and subheadings (h2-h3)
- Component titles and labels (h4-h6)
- Article and blog post structure
- Navigation landmarks

### Heading Levels

| Level | Component | Usage |
| ----- | ------- | ----- |
| 1 | .m-h1 | Page titles, main headings |
| 2 | .m-h2 | Major section headings |
| 3 | .m-h3 | Subsection headings |
| 4 | .m-h4 | Minor headings, component titles |
| 5 | .m-h5 | Small headings, labels |
| 6 | .m-h6 | Smallest headings, captions |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --h1-font-size | var(--text-3xl) | Font size for h1 headings (largest) |
| --h1-font-weight | var(--font-weight-bold) | Font weight for h1 headings |
| --h1-line-height | var(--text-3xl--line-height) | Line height for h1 headings |
| --h1-margin | 0 0 var(--spacing-4) 0 | Margin for h1 headings |
| --h2-font-size | var(--text-2xl) | Font size for h2 headings |
| --h2-font-weight | var(--font-weight-bold) | Font weight for h2 headings |
| --h2-line-height | var(--text-2xl--line-height) | Line height for h2 headings |
| --h2-margin | 0 0 var(--spacing-4) 0 | Margin for h2 headings |
| --h3-font-size | var(--text-xl) | Font size for h3 headings |
| --h3-font-weight | var(--font-weight-bold) | Font weight for h3 headings |
| --h3-line-height | var(--text-xl--line-height) | Line height for h3 headings |
| --h3-margin | 0 0 var(--spacing-4) 0 | Margin for h3 headings |
| --h4-font-size | var(--text-lg) | Font size for h4 headings |
| --h4-font-weight | var(--font-weight-medium) | Font weight for h4 headings |
| --h4-line-height | var(--text-lg--line-height) | Line height for h4 headings |
| --h4-margin | 0 0 var(--spacing-2) 0 | Margin for h4 headings (smaller than h1-h3) |
| --h5-font-size | var(--text-base) | Font size for h5 headings |
| --h5-font-weight | var(--font-weight-medium) | Font weight for h5 headings |
| --h5-line-height | var(--text-base--line-height) | Line height for h5 headings |
| --h5-margin | 0 0 var(--spacing-2) 0 | Margin for h5 headings (smaller than h1-h3) |
| --h6-font-size | var(--text-base) | Font size for h6 headings |
| --h6-font-weight | var(--font-weight-medium) | Font weight for h6 headings |
| --h6-line-height | var(--text-base--line-height) | Line height for h6 headings |
| --h6-margin | 0 0 var(--spacing-2) 0 | Margin for h6 headings (smaller than h1-h3) |

### Caution

- Use only one h1 per page for the main title
- Don't skip heading levels (h1 → h3 without h2)
- Ensure headings are descriptive and meaningful

---

## Input

### Overview

The Input component provides a styled form input element with various type support and validation states.

### Usage

Use Input components for collecting user data in forms. Perfect for text input, email addresses, passwords, numbers, dates, and file uploads with proper validation feedback and responsive behavior.

### Example code

```html
<!-- Basic text input -->
<input class="m-input" type="text" placeholder="Enter your name">

<!-- Block input with transition -->
<input class="m-input --block --transition" type="email" placeholder="Enter your email" required>

<!-- Error state input -->
<input class="m-input --error" type="password" placeholder="Enter password">

<!-- Disabled input -->
<input class="m-input" type="text" value="Read only value" disabled>
```

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-input | .--block | Makes the input element display as block-level with full width |
| .m-input | .--error | Applies error styling with danger border color |
| .m-input | .--transition | Enables smooth transitions for border color and opacity |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --input-border-radius | var(--radius-sm) | Border radius of the input element |
| --input-border-color | var(--color-border) | Default border color |
| --input-border | 1px solid var(--input-border-color) | Complete border specification |
| --input-bg-color | initial | Background color of the input |
| --input-placeholder-color | var(--color-text-muted) | Color of placeholder text |
| --input-hover-opacity | 0.8 | Opacity on hover and focus states |
| --input-hover-border-color | var(--color-border) | Border color on hover and focus |
| --input-disabled-opacity | 0.65 | Opacity when disabled |
| --input-disabled-color | var(--color-text-muted) | Text color when disabled |
| --input-invalid-border-color | var(--color-danger) | Border color for invalid/error states |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Use proper input types for better user experience and validation
- Ensure sufficient color contrast for accessibility
- Consider motion preferences when using the transition modifier
- Provide clear validation feedback and error messages

---

## Label

### Overview

The Label component provides accessible and consistent labeling for form elements. It ensures proper association between labels and form controls, supporting screen readers and improving usability for all users.

### Usage

Use labels to provide accessible and consistent labeling for form elements. Essential for screen readers and improving usability for all users. Perfect for form field identification, required field indicators, and associating labels with form controls.

### Example code

```html
<!-- Basic label -->
<label class="m-label" for="username">Username</label>
<input class="m-input" type="text" id="username">

<!-- Required field label -->
<label class="m-label --required" for="email">Email Address</label>
<input class="m-input" type="email" id="email" required>

<!-- Disabled label -->
<label class="m-label --disabled" for="disabled-field">Disabled Field</label>
<input class="m-input" type="text" id="disabled-field" disabled>
```

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-label | .--required | Adds required indicator (asterisk) after the label text |
| .m-label | .--disabled | Applies disabled styling (reduced opacity and cursor change) |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --label-display | block | Display behavior of the label |
| --label-font-weight | var(--font-weight-medium) | Font weight for label text |
| --label-required-icon-content | "*" | Content for the required indicator |
| --label-required-icon-size | 1em | Font size for the required indicator |
| --label-required-icon-color | var(--color-danger) | Color of the required indicator |
| --label-disabled-opacity | 0.6 | Opacity value when label is disabled |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Always associate labels with form controls using `for` attribute
- Ensure unique ID values for proper form element association
- Avoid using labels for non-form elements
- Do not rely solely on visual cues for required fields
- Keep label text concise and descriptive

---

## Link

### Overview

The Link component provides a styled anchor element with proper semantic behavior and visual feedback. It supports various states including hover, active, and visited with smooth color transitions.

### Usage

Use Link components for navigation between pages or sections, external links, and interactive text elements. The component automatically handles different link states and provides appropriate visual feedback for user interactions.

### Example code

```html
<!-- Basic internal link -->
<a class="m-link" href="/about">About Us</a>

<!-- External link -->
<a class="m-link" href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example.com</a>

<!-- Email link -->
<a class="m-link" href="mailto:contact@example.com">Contact Us</a>

<!-- Link within text -->
<p>Please read our <a class="m-link" href="/terms">Terms of Service</a> before continuing.</p>
```

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

This component has no modifiers.

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --link-color | var(--color-secondary) | Default link color |
| --link-color-hover | rgb(from var(--link-color) r g b / 80%) | Color on hover state |
| --link-color-active | rgb(from var(--link-color) r g b / 50%) | Color on active state |
| --link-color-visited | rgb(from var(--link-color) calc(r * 0.6) calc(g * 0.6) calc(b * 0.6)) | Color for visited links |
| --link-text-decoration | underline | Text decoration style |
| --link-underline-offset | 0.2em | Offset for underline decoration |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Use appropriate `rel` attributes for external links (e.g., `noopener noreferrer`)
- Ensure sufficient color contrast for accessibility
- Test link visibility in different states (hover, active, visited)
- Provide meaningful link text that describes the destination

---

## Navbar

### Overview

The Navbar component provides responsive navigation with mobile-first design. It features flexible hamburger menu variants and comprehensive customization options.

### Usage

Use the navbar for primary site navigation, brand/logo display, action buttons, responsive mobile menu patterns, and multi-level navigation structures. Perfect for creating responsive navigation experiences.

### Example code

```html
<!-- Basic navbar -->
<nav class="m-navbar">
  <a href="/" class="m-navbar__title">Brand</a>
  <ul class="m-navbar__items">
    <li class="m-navbar__item"><a href="/about">About</a></li>
    <li class="m-navbar__item"><a href="/services">Services</a></li>
    <li class="m-navbar__item --end"><a href="/contact">Contact</a></li>
  </ul>
</nav>

<!-- Responsive navbar with hamburger menu -->
<nav class="m-navbar --transition --mobile-side-menu">
  <a href="/" class="m-navbar__title">Brand</a>
  <div class="m-navbar__hamburger">
    <button class="m-navbar__hamburger-menu" aria-expanded="false"></button>
  </div>
  <ul class="m-navbar__items">
    <li class="m-navbar__item"><a href="/about">About</a></li>
    <li class="m-navbar__item"><a href="/services">Services</a></li>
    <li class="m-navbar__item"><button class="m-button --primary">Sign Up</button></li>
  </ul>
</nav>
```

**⚠️ JavaScript Required**

Hamburger menu requires JavaScript for `aria-expanded` control:

```js
const hamburgerMenu = document.querySelector(".m-navbar__hamburger-menu");
hamburgerMenu.addEventListener("click", () => {
  const isExpanded = hamburgerMenu.getAttribute("aria-expanded") === "true";
  hamburgerMenu.setAttribute("aria-expanded", String(!isExpanded));
});
```

### Elements

| Name | Description |
| ---- | ----------- |
| .m-navbar__title | Brand/logo area with link styling |
| .m-navbar__items | Main navigation container |
| .m-navbar__item | Individual navigation link or button container |
| .m-navbar__hamburger | Mobile hamburger button container |
| .m-navbar__hamburger-menu | Hamburger menu toggle button |

### Modifiers

| Target | Name | Description |
| ------ | ---- | ----------- |
| .m-navbar | .--transition | Enables smooth animations for menu transitions |
| .m-navbar | .--hover-hamburger-menu | **Experimental**: CSS-only hover menu activation |
| .m-navbar | .--mobile-float-menu | Dropdown-style floating menu (no backdrop) |
| .m-navbar | .--mobile-side-menu | Drawer-style right side menu (with backdrop) |
| .m-navbar | .--mobile-side-menu .--slide-left | Drawer-style left side menu (with backdrop) |
| .m-navbar__item | .--end | Aligns item to the end of the navigation (right in LTR) |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --navbar-bg-color | var(--color-bg-light) | Background color of the navbar |
| --navbar-min-height | 56px | Minimum height of the navbar |
| --navbar-item-padding | var(--spacing-2) var(--spacing-3) | Padding for navbar items |
| --navbar-item-gap | var(--spacing-2) | Gap between items with content |
| --navbar-item-text-color | var(--color-text) | Text color for navigation items |
| --navbar-item-hover-bg-color | var(--color-primary) | Background color on item hover |
| --navbar-item-hover-text-color | var(--color-text-light) | Text color on item hover |
| --navbar-hamburger-icon-content | "☰" | Hamburger menu icon content |
| --navbar-hamburger-icon-close-content | "×" | Close menu icon content |
| --navbar-hamburger-icon-size | 1.5rem | Size of hamburger menu icons |
| --navbar-hamburger-icon-padding | 0 var(--spacing-2) | Padding for hamburger icon |
| --navbar-hamburger-icon-color | var(--color-text) | Color of hamburger icon |
| --navbar-hamburger-icon-hover-bg-color | color(from var(--navbar-bg-color) srgb calc(r * 0.8) calc(g * 0.8) calc(b * 0.8)) | Hover background for icon |
| --navbar-hamburger-icon-border-radius | var(--radius-sm) | Border radius for hamburger icon |
| --navbar-hamburger-menu-size | 2.5rem | Size of hamburger menu button |
| --navbar-hamburger-menu-bg-color | var(--color-bg-light) | Background of mobile menu |
| --navbar-hamburger-menu-border | 2px solid var(--color-bg-light) | Border for hamburger menu |
| --navbar-hamburger-menu-border-radius | 0 0 var(--radius-sm) var(--radius-sm) | Border radius for menu |
| --navbar-hamburger-menu-box-shadow | var(--shadow-md) | Box shadow for menu |
| --navbar-hamburger-menu-item-separate-border | 1px solid var(--color-bg-light) | Border between menu items |
| --navbar-base-zindex | var(--zindex-navbar) | Base z-index for navbar layering |
| --navbar-backdrop-zindex | calc(var(--navbar-base-zindex) + 1) | Z-index for backdrop |
| --navbar-menu-zindex | calc(var(--navbar-backdrop-zindex) + 1) | Z-index for menu items |
| --navbar-hamburger-menu-zindex | calc(var(--navbar-menu-zindex) + 1) | Z-index for hamburger menu button |
| --navbar-hamburger-menu-slidein-transition | 0.25s ease-in-out | Slide-in animation duration |
| --navbar-hamburger-menu-hover-item-transition | 0.3s ease-in-out | Item hover transition |
| --navbar-hamburger-float-menu-position-right | var(--spacing-2) | Right position for float menu |
| --navbar-hamburger-side-menu-close-x-position | var(--spacing-3) | Horizontal position of close button in side menu |
| --navbar-hamburger-side-menu-close-y-position | var(--spacing-2) | Vertical position of close button in side menu |
| --navbar-hamburger-side-menu-max-width | 80vw | Maximum width for side menu |
| --navbar-hamburger-side-menu-min-width | 40vw | Minimum width for side menu |
| --navbar-hamburger-side-menu-backdrop-color | var(--color-overlay) | Backdrop color for side menu |
| --navbar-hamburger-side-menu-backdrop-filter | blur(2px) | Backdrop filter effect |

### Data Attributes

| Target | Attribute | Values | Description |
| ------ | --------- | ------ | ----------- |
| .m-navbar__hamburger-menu | aria-expanded | "true", "false" | Controls hamburger menu open/close state |

### Caution

- JavaScript is required for hamburger menu functionality
- Ensure sufficient color contrast for accessibility
- Test keyboard navigation and screen reader compatibility
- Consider motion preferences when using transition animations
- Optimize close button position for different screen sizes
- **Close Button Position**: The close button position in side menus can be optimized by dynamically adjusting `--navbar-hamburger-side-menu-close-x-position`, `--navbar-hamburger-side-menu-close-y-position` based on menu width using JavaScript for better user experience

---

## Paragraph

### Overview

The Paragraph component provides a styled paragraph element with consistent spacing and typography. It ensures proper text flow and readability with automatic spacing management between paragraphs.

### Usage

Use Paragraph components for body text, descriptions, and any multi-sentence content that needs proper spacing and typography. The component automatically handles spacing between consecutive paragraphs and maintains consistent text styling.

### Elements

| Name | Description |
| ---- | ----------- |
| .m-p | The main paragraph element with automatic spacing and typography |

### Modifiers

No specific modifiers are defined for this component.

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-p | margin-top | var(--spacing-0) | Top margin for paragraph spacing |
| .m-p | margin-bottom | var(--spacing-4) | Bottom margin for paragraph spacing |

### Data Attributes

No specific data attributes are defined for this component.

### Caution

- The component uses spacing variables that should be defined in the design system
- Top margin is set to zero to prevent double spacing at the beginning of content
- Bottom margin provides consistent spacing between paragraphs

---

## Radio

### Overview

The Radio component provides a circular selection input for exclusive choices within a group. It offers clear visual feedback and smooth interactions for single-choice scenarios.

### Usage

Use Radio components for mutually exclusive options, preference selection, and form inputs where only one choice is allowed. Group related radio buttons with the same name attribute for proper behavior.

### Example code

```html
<!-- Basic radio buttons group -->
<div>
  <label>
    <input type="radio" class="m-radio" name="size" value="small" checked>
    Small
  </label>
  <label>
    <input type="radio" class="m-radio" name="size" value="medium">
    Medium
  </label>
  <label>
    <input type="radio" class="m-radio" name="size" value="large">
    Large
  </label>
</div>

<!-- Disabled radio button -->
<label>
  <input type="radio" class="m-radio" name="color" value="red" disabled>
  Red (Not available)
</label>
```

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

This component has no modifiers.

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --radio-size | 1em | Size of the radio button |
| --radio-border-color | var(--color-dark) | Border color of the radio button |
| --radio-bg-color | var(--color-light) | Background color when unchecked |
| --radio-lighter-brightness | 150% | Brightness for hover/focus states |
| --radio-disabled-opacity | 0.65 | Opacity when disabled |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Radio buttons with the same `name` attribute form an exclusive group
- Always provide labels for accessibility compliance
- Test keyboard navigation and screen reader compatibility
- Ensure sufficient contrast for the checked indicator

---

## Select

### Overview

The Select component provides a customizable dropdown selection interface with support for grouping, separators, and modern styling. It enhances the native select element with improved visual design.

### Usage

Use Select components for choosing from a list of options, category selection, and form inputs requiring single or multiple selections. The component supports option grouping and visual separators for better organization.

### Example code

```html
<!-- Basic select -->
<select class="m-select">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>

<!-- Select with option groups -->
<select class="m-select">
  <optgroup label="Group 1">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
  </optgroup>
</select>

<!-- Disabled select -->
<select class="m-select" disabled>
  <option value="option1">Option 1</option>
</select>
```

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-select | .--error | Applies error styling with danger border color |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --select-padding | var(--spacing-3) | Internal padding for the select element |
| --select-checkmark-gap | var(--spacing-4) | Gap for checkmark indicator |
| --select-bg-color | initial | Background color of the select |
| --select-border-color | var(--color-border) | Default border color |
| --select-hover-border-color | var(--color-border) | Border color on hover |
| --select-border | 2px solid var(--select-border-color) | Complete border specification |
| --select-border-radius | var(--radius-sm) | Border radius of the select |
| --select-invalid-border-color | var(--color-danger) | Border color for invalid state |
| --select-hover-opacity | 0.8 | Opacity on hover state |
| --select-disabled-opacity | 0.65 | Opacity when disabled |
| --select-optgroup-bg-color | var(--select-bg-color) | Background color for optgroup elements (inherited from select) |
| --select-optgroup-font-weight | var(--font-weight-bold) | Font weight for optgroup labels |
| --select-option-bg-color | var(--select-bg-color) | Background color for option elements (inherited from select) |
| --select-option-padding | var(--spacing-2) | Padding for option elements |
| --select-option-checked-bg-color | var(--color-tertiary) | Background color for checked options |
| --select-option-checked-text-color | var(--color-text) | Text color for checked options |
| --select-option-hover-darker-rate | 0.9 | Darkness rate for option hover state |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Modern customizable select features require Chrome support (experimental)
- Always provide labels for accessibility compliance
- Test across different browsers for consistent behavior
- Consider fallback styling for unsupported browsers

---

## Snackbar

### Overview

The Snackbar component provides temporary notification messages that appear at the bottom of the screen. It uses the Popover API for modern, accessible overlay behavior with customizable positioning and transitions.

### Usage

Use Snackbars for brief confirmations, error messages, and status updates that don't require immediate user action. Ideal for form submission feedback, connection status, and non-critical notifications.

### Example code

```html
<!-- Basic snackbar -->
<div class="m-snackbar" popover>
  <div class="m-snackbar__body">
    <div class="m-snackbar__content">Message sent successfully!</div>
    <div class="m-snackbar__actions">
      <button popovertarget="snackbar-1" popovertargetaction="hide">Close</button>
    </div>
  </div>
</div>

<!-- Positioned snackbar with transition -->
<div class="m-snackbar --right-top --transition" popover>
  <div class="m-snackbar__body">
    <div class="m-snackbar__content">Changes saved automatically</div>
  </div>
</div>
```

### Elements

| Name | Description |
| ---- | ----------- |
| .m-snackbar__body | Content wrapper with flex layout for message and actions |
| .m-snackbar__actions | Container for action buttons (OK, Close, etc.) |

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-snackbar | .--transition | Enables smooth fade-in/out animations |
| .m-snackbar | .--right-bottom | Positions snackbar at bottom-right corner |
| .m-snackbar | .--left-top | Positions snackbar at top-left corner |
| .m-snackbar | .--right-top | Positions snackbar at top-right corner |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --snackbar-position-x | var(--spacing-4) | Horizontal distance from screen edge |
| --snackbar-position-y | var(--spacing-4) | Vertical distance from screen edge |
| --snackbar-zindex | var(--zindex-snackbar) | Z-index for proper layering |
| --snackbar-margin-for-small-screens | var(--spacing-2) | Margin on mobile devices |
| --snackbar-bg-color | var(--color-primary) | Background color of the snackbar |
| --snackbar-text-color | var(--color-text-light) | Text color for message content |
| --snackbar-border-radius | var(--radius-sm) | Border radius for rounded corners |
| --snackbar-box-shadow | var(--shadow-md) | Drop shadow for elevation |
| --snackbar-inner-spacing | var(--spacing-3) | Internal padding and gaps |
| --snackbar-action-spacing | var(--spacing-2) | Spacing between action buttons |
| --snackbar-transition-duration | 0.2s | Animation timing for transitions |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Requires modern browser support for Popover API
- Use lpopoverm attribute for proper accessibility behavior
- Test across different screen sizes for responsive positioning
- Consider motion preferences when using transition animations

---

## Tabs

### Overview

The Tabs component provides a navigation interface for switching between multiple content areas. It supports active states, disabled states, and hover effects with optional transition animations and scroll hints.

### Usage

Use Tabs for organizing content into separate views that users can switch between. Ideal for settings panels, product information sections, and any interface requiring content categorization.

### Example code

```html
<!-- Basic tabs -->\n<div class="m-tabs">\n  <div class="m-tabs__list" role="tablist">\n    <button class="m-tabs__item --active" role="tab" aria-selected="true">Tab 1</button>\n    <button class="m-tabs__item" role="tab">Tab 2</button>\n    <button class="m-tabs__item" role="tab">Tab 3</button>\n  </div>\n</div>\n\n<!-- Tabs with transitions and scroll hints -->\n<div class="m-tabs --transition --scrollhint">\n  <div class="m-tabs__list" role="tablist">\n    <button class="m-tabs__item --active" role="tab">Dashboard</button>\n    <button class="m-tabs__item" role="tab">Analytics</button>\n    <button class="m-tabs__item" role="tab" disabled>Settings</button>\n  </div>\n</div>
```

### Elements

| Name | Description |
| ---- | ----------- |
| .m-tabs__list | Container for tab items with scrollable overflow |
| .m-tabs__item | Individual tab button elements |

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-tabs | .--transition | Enables smooth hover transition effects |
| .m-tabs | .--scrollhint | Shows visual scroll indicators when content overflows |
| .m-tabs__item | .--active | Marks the currently selected tab |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --tabs-default-border | 1px solid var(--color-border) | Border style for the tab list |
| --tabs-scrollbar-color | rgb(from var(--color-primary) r g b / 50%) transparent | Scrollbar color scheme |
| --tabs-item-padding | var(--spacing-2) var(--spacing-4) | Internal padding for tab items |
| --tabs-active-item-border-color | var(--color-primary) | Border color for active tabs |
| --tabs-active-item-border | 2px solid transparent | Border specification for active state |
| --tabs-active-item-filter | brightness(0.95) | Visual filter for active tabs |
| --tabs-active-item-color | var(--color-primary) | Text color for active tabs |
| --tabs-hover-item-filter | brightness(0.95) | Visual filter for hover state |
| --tabs-disabled-item-filter | brightness(0.65) | Visual filter for disabled tabs |
| --tabs-hover-transition | 0.3s ease | Transition timing for hover effects |
| --tabs-item-background-color | var(--color-bg-light) | Background color for tab items |

### Data Attributes

This component does not use data attributes for styling or behavior.標準的なARIA属性を使用します。

### Caution

- JavaScript implementation required for tab switching functionality
- Proper ARIA attributes (`aria-controls`, `aria-selected`, `tabindex`) must be managed dynamically
- Scroll hints use advanced CSS features that may not work in older browsers
- Test keyboard navigation and screen reader compatibility

---

## Textarea

### Overview

The Textarea component provides a multi-line text input element with various styling options and responsive behavior. It supports automatic content sizing and proper validation states for enhanced user experience.

### Usage

Use Textarea components for collecting longer text input such as comments, descriptions, messages, and feedback. Perfect for forms requiring multi-line text input with proper validation and accessibility support.

### Example code

```html
<!-- Basic textarea -->
<textarea class="m-textarea" placeholder="Enter your message..."></textarea>

<!-- Block textarea with auto-fit -->
<textarea class="m-textarea --block --auto-fit" rows="4" placeholder="Type your feedback here..."></textarea>

<!-- Error state textarea -->
<textarea class="m-textarea --error" placeholder="This field has an error"></textarea>

<!-- Disabled textarea -->
<textarea class="m-textarea" disabled>This textarea is disabled</textarea>
```

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-textarea | .--block | Makes the textarea display as block-level with full width |
| .m-textarea | .--error | Applies error styling with danger border color |
| .m-textarea | .--auto-fit | Enables automatic height adjustment based on content |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --textarea-border-radius | var(--radius-sm) | Border radius of the textarea element |
| --textarea-border-color | var(--color-border) | Default border color |
| --textarea-border | 1px solid var(--textarea-border-color) | Complete border specification |
| --textarea-bg-color | initial | Background color of the textarea |
| --textarea-placeholder-color | var(--color-text-muted) | Color of placeholder text |
| --textarea-hover-opacity | 0.8 | Opacity on hover and focus states |
| --textarea-hover-border-color | var(--color-border) | Border color on hover and focus |
| --textarea-disabled-opacity | 0.65 | Opacity when disabled |
| --textarea-disabled-color | var(--color-text-muted) | Text color when disabled |
| --textarea-invalid-border-color | var(--color-danger) | Border color for invalid/error states |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- The auto-fit modifier uses `field-sizing` property with limited browser support
- Always provide labels for accessibility compliance
- Test validation states for proper error messaging
- Consider content length limits for better user experience

---

## Toggle

### Overview

The Toggle component provides a switch-style checkbox input with smooth animations and visual feedback. It offers an intuitive on/off control for boolean settings.

### Usage

Use Toggle components for binary choices, settings toggles, and feature enable/disable controls. Perfect for on/off settings, preferences, and boolean state controls with clear visual feedback.

### Example code

```html
<!-- Basic toggle -->
<label>
  <input type="checkbox" class="m-toggle">
  Enable notifications
</label>

<!-- Checked toggle -->
<label>
  <input type="checkbox" class="m-toggle" checked>
  Dark mode enabled
</label>

<!-- Disabled toggle -->
<label>
  <input type="checkbox" class="m-toggle" disabled>
  Feature unavailable
</label>
```

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

This component has no modifiers.

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --toggle-size | 1.2em | Size of the toggle switch |
| --toggle-transition | 0.1s ease | Animation timing for state changes |
| --toggle-width | calc(var(--toggle-size) * 1.8) | Width of the toggle track |
| --toggle-checked-translate-x | calc(var(--toggle-size) * 0.8) | Translation distance when checked |
| --toggle-bg-color | var(--color-dark) | Background color when unchecked |
| --toggle-bg-color-checked | var(--color-primary) | Background color when checked |
| --toggle-button-color | var(--color-light) | Color of the sliding button |
| --toggle-button-scale | 0.8 | Scale factor for the button |
| --toggle-lighter-brightness | 150% | Brightness for hover/focus states |
| --toggle-disabled-opacity | 0.5 | Opacity when disabled |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Always provide labels for accessibility compliance
- Ensure sufficient color contrast between states
- Test keyboard navigation and screen reader compatibility
- Consider motion preferences for transition animations

---

## Foundation/Variables

### Overview

The Variables system provides a comprehensive collection of design tokens that form the foundation of Madogiwa UI. These variables are organized into categories including colors, spacing, typography, shadows, and corner radius.

### Usage

Design tokens are CSS custom properties that maintain consistent visual design across your application. They can be referenced in CSS using `var()` syntax and are organized into semantic categories for easy maintenance.

### Sort Modes

- **Natural**: Prioritizes size variants (xs→sm→md→lg→xl) for intuitive size progression
- **Numeric**: Prioritizes numeric values (1→2→10) for numerical order

### CSS Variables Categories

#### Primitive Colors
Base color values used as building blocks for semantic colors.

#### Semantic Colors
Context-aware colors that convey meaning (primary, success, error, etc.).

#### Spacing
Consistent spacing values for margins, padding, and layout gaps.

#### Typography
Font families, sizes, weights, and line heights for text styling.

#### Shadows
Box shadow values for elevation and depth effects.

#### Corner
Border radius values for consistent rounded corners.

#### Breakpoints
Media query breakpoints for responsive design implementation.

### Caution

- Color contrast may vary in Storybook examples
- Use semantic colors instead of primitive colors when possible
- Breakpoints are defined using rem units for better accessibility

---

## Layouts/Columns

### Overview

The Columns component provides a powerful 12-column grid system based on CSS Grid with responsive behavior and subgrid support.

### Usage

Use Columns for responsive grid layouts, card grids, dashboard widgets, and complex layouts requiring precise content alignment. Perfect for organizing content with consistent spacing and automatic responsive adjustments.

### Example code

```html
<!-- Basic 12-column grid -->
<div class="m-columns">
  <div data-col-size="4">Item 1</div>
  <div data-col-size="4">Item 2</div>
  <div data-col-size="4">Item 3</div>
</div>

<!-- Auto-fit responsive columns -->
<div class="m-columns --auto-fit" style="--columns-auto-fit-min: 200px;">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

<!-- Subgrid alignment for card layouts -->
<div class="m-columns --align-rows">
  <div class="m-card" data-col-size="4" data-subgrid-rows="3">
    <img class="m-card__image" src="image.jpg" alt="">
    <div class="m-card__content"><h3>Title</h3><p>Content</p></div>
    <div class="m-card__actions"><button>Action</button></div>
  </div>
</div>
```

### Elements

This component has no child elements - it's a single-level component that acts as a container for grid items.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-columns | .--auto-fit | Enables auto-fit behavior for responsive column sizing |
| .m-columns | .--no-gap | Removes spacing between columns |
| .m-columns | .--align-rows | Enables alignment of nested content using subgrid rows |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --columns-gap | var(--spacing-2) | Gap between columns |
| --columns-length-default | 12 | Default number of columns |
| --columns-length | var(--columns-length-default) | Active number of columns |
| --columns-length-xl | round(down, calc(var(--columns-length-default) * 0.750)) | Columns for XL breakpoint (9) |
| --columns-length-lg | round(down, calc(var(--columns-length-default) * 0.500)) | Columns for large breakpoint (6) |
| --columns-length-md | round(down, calc(var(--columns-length-default) * 0.250)) | Columns for medium breakpoint (3) |
| --columns-length-sm | round(down, calc(var(--columns-length-default) * 0.125)) | Columns for small breakpoint (1) |
| --columns-default-col-size | 1 | Default column span for items |
| --columns-col-size | var(--columns-default-col-size) | Active column span for items |
| --columns-subgrid-gap | 0 | Gap for subgrid items |
| --columns-auto-fit-min | 0 | Minimum size for auto-fit columns |

### Data Attributes

| Target | Attribute | Values | Description |
| ------ | --------- | ------ | ----------- |
| .m-columns | data-columns-length | 1-12 | Override default column count |
| .m-columns > * | data-col-size | 1-12 | Specify how many columns this item spans |
| .m-columns > * | data-subgrid-rows | 1-6 | Number of subgrid rows to span (with --align-rows) |

### Caution

- Ensure column spans don't exceed total columns to avoid layout issues
- CSS Subgrid has limited browser support - test across target browsers
- The --align-rows modifier changes child display to subgrid, which may conflict with flex layouts
- Use container queries when available for better responsive behavior

---

## Layouts/Container

### Overview

The Container component provides responsive layout constraints with predefined breakpoints and automatic centering.

### Usage

Use Container to constrain content width and center it horizontally. Perfect for main content areas, article layouts, and ensuring optimal reading widths across different screen sizes.

### Example code

```html
<!-- Basic container -->
<div class="m-container">
  <p>Your content here</p>
</div>

<!-- Container with responsive padding -->
<div class="m-container --padding">
  <article>Article content with automatic padding</article>
</div>

<!-- Container without centering -->
<div class="m-container --no-centering">
  <nav>Navigation content aligned to start</nav>
</div>
```

### Elements

This component has no child elements - it's a single-level component.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-container | .--padding | Enables responsive padding that increases with screen size |
| .m-container | .--no-centering | Disables horizontal centering (margin-inline: 0) |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --container-2xl-max-width | var(--media-2xl-max-width) | Maximum width for 2XL breakpoint |
| --container-xl-max-width | var(--media-xl-max-width) | Maximum width for XL breakpoint |
| --container-lg-max-width | var(--media-lg-max-width) | Maximum width for large breakpoint |
| --container-md-max-width | var(--media-md-max-width) | Maximum width for medium breakpoint |
| --container-sm-max-width | var(--media-sm-max-width) | Maximum width for small breakpoint |
| --container-default-padding | 0 var(--spacing-2) | Default padding for mobile |
| --container-sm-padding | 0 var(--spacing-3) | Padding for small breakpoint |
| --container-md-padding | 0 var(--spacing-4) | Padding for medium breakpoint |
| --container-lg-padding | 0 var(--spacing-5) | Padding for large breakpoint |
| --container-xl-padding | 0 var(--spacing-6) | Padding for XL breakpoint |
| --container-2xl-padding | 0 var(--spacing-7) | Padding for 2XL breakpoint |

### Data Attributes

This component does not use data attributes for styling or behavior.

### Caution

- Container uses logical properties (margin-inline) for better internationalization
- Responsive breakpoints are managed through CSS custom media queries
- Padding modifier provides different spacing at each breakpoint
- Consider content hierarchy when nesting containers

---

## Usage Notes

- This documentation is auto-generated from `parameters.docs.description.component` in Storybook stories
- For the most up-to-date information, refer to the actual Storybook stories
- Generated at: 11/4/2025, 12:49:17 PM
