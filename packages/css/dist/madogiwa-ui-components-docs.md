---
title: "Madogiwa UI Components Documentation"
description: "Auto-generated documentation from Storybook stories for AI context"
generated: true
generated_at: 2025-10-25T12:05:26.163Z
---

# Madogiwa UI Components Documentation

This documentation is automatically generated from Storybook stories for AI context and reference.

## Accordion

### Overview

The Accordion component provides expandable/collapsible content sections using the native HTML `<details>` and `<summary>` elements, ensuring optimal accessibility and semantic structure.

### Usage

Use accordions to organize content into expandable sections, helping users focus on specific information while maintaining a clean interface. Perfect for FAQs, documentation sections, or any content that benefits from progressive disclosure.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-accordion | .--transition | Enables smooth animations for expand/collapse transitions |
| .m-accordion | .--outline | Adds border styling and padding around the accordion |

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --accordion-summary-padding | var(--spacing-3) 0 | Padding for the accordion summary/header |
| --accordion-summary-font-weight | var(--font-weight-bold) | Font weight of the summary text |
| --accordion-summary-icon-gap | var(--spacing-2) | Gap between icon and summary text |
| --accordion-summary-icon-size | 0.6rem | Size of the expand/collapse icon |
| --accordion-summary-icon-color | var(--color-text) | Color of the expand/collapse icon |
| --accordion-summary-icon-clip-path | polygon(0 0, 100% 50%, 0 100%) | Shape of the expand/collapse icon (triangle) |
| --accordion-summary-icon-open-transform | rotate(90deg) | Transform applied to icon when accordion is open |
| --accordion-content-padding | 0 var(--spacing-3) var(--spacing-3) var(--spacing-3) | Padding for the accordion content area |
| --accordion-outline-border | 1px solid var(--color-border) | Border style for outline variant |
| --accordion-outline-border-radius | var(--radius-md) | Border radius for outline variant |
| --accordion-outline-padding | 0 var(--spacing-2) | Padding for outline variant |
| --accordion-transition-time | 0.2s | Duration of expand/collapse animations |

### Accessibility

- Uses native `<details>` and `<summary>` elements for optimal screen reader support
- Includes proper ARIA relationships between summary and content
- Keyboard navigation is handled natively by the browser
- Focus management follows standard HTML behavior

---

## Alert

### Overview

The Alert component provides contextual feedback messages to users about system status, user actions, or important information. It supports various visual styles, icons, actions, and auto-dismiss functionality.

### Usage

Use alerts to communicate important information that requires user attention but doesn't interrupt their workflow. Alerts are non-modal and can be dismissed by user action or automatically after a set time.

**Common use cases:**
- Success confirmations after form submissions
- Error messages for validation or system issues
- Warning notifications about potential problems
- Informational messages about system changes

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-alert | .--primary | Primary alert style with brand colors |
| .m-alert | .--secondary | Secondary alert style |
| .m-alert | .--tertiary | Tertiary alert style with subtle appearance |
| .m-alert | .--danger | Danger alert for errors and critical issues |
| .m-alert | .--warning | Warning alert for caution messages |
| .m-alert | .--auto-dismiss | Enable auto dismiss functionality |
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
| --alert-secondary-bg-color | var(--color-secondary) | Secondary variant background |
| --alert-tertiary-bg-color | var(--color-tertiary) | Tertiary variant background |
| --alert-danger-bg-color | var(--color-danger) | Danger variant background |
| --alert-warning-bg-color | var(--color-warning) | Warning variant background |
| --alert-auto-dismiss-duration | 5s | Default auto dismiss duration |
| --alert-auto-dismiss-fade-duration | 0.3s | Fade out animation duration |
| --alert-auto-dismiss-progress-bg-color | rgb(from var(--color-white) r g b / 40%) | Progress bar background color |
| --alert-auto-dismiss-progress-height | 4px | Progress bar height |

### Accessibility

- Uses `role="alert"` for screen reader announcements
- Supports keyboard navigation for interactive elements
- Color variants include sufficient contrast ratios
- Auto dismiss can be controlled or disabled for users who need more time
- Icons include appropriate semantic meaning through context

---

## Badge

### Overview

The Badge component displays small pieces of information, status indicators, or labels. It supports various visual styles, sizes, and can be interactive when used as buttons or links.

### Usage

Use badges to:
- Display status information (online, offline, new, etc.)
- Show counts or quantities (notifications, items)
- Label or categorize content
- Create interactive tags or filters
- Highlight important information

**Common use cases:**
- Notification counters
- Status indicators
- Category tags
- Interactive filters
- Feature highlights

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
| --badge-item-gap | var(--spacing-2) | Gap between badge elements (icon + text) |
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
| --badge-secondary-color | var(--color-secondary) | Secondary variant background |
| --badge-tertiary-color | var(--color-tertiary) | Tertiary variant background |
| --badge-danger-color | var(--color-danger) | Danger variant background |
| --badge-warning-color | var(--color-warning) | Warning variant background |

### Accessibility

- Supports keyboard navigation when used as button or link
- Color variants maintain sufficient contrast ratios
- Disabled state is properly conveyed to screen readers
- Semantic HTML elements (button, a) provide appropriate roles
- Icon badges include proper text alternatives when needed

---

## Button

### Overview

Flexible button component implementing BEM + CSS Nesting pattern with m- prefix for Madogiwa UI. Supports multiple design system variants, interactive states, and layout modifiers for comprehensive user interface needs.

### Usage

Use buttons for primary actions, form submissions, navigation triggers, and interactive elements. Apply appropriate variants to establish visual hierarchy and provide clear user feedback. Consider accessibility requirements when implementing icon-only buttons and ensure sufficient color contrast for all variants.

### Modifiers

Describe **all modifiers** defined in this component.

| Target | Name | Description |
| ------ | ---- | ----------- |
| .m-btn | .--primary | Apply primary color variant |
| .m-btn | .--secondary | Apply secondary color variant |
| .m-btn | .--tertiary | Apply tertiary color variant |
| .m-btn | .--outline | Apply outline style with transparent background |
| .m-btn | .--block | Make button full width (display: block) |
| .m-btn | .--rounded | Apply fully rounded corners |
| .m-btn | .--icon-only | Reduce padding for icon-only buttons |
| .m-btn | .--transition | Enable smooth hover/focus transitions |

### CSS Variables

Describe **all CSS variables** defined in this component.

| Name | Default | Description |
| ---- | ------- | ----------- |
| --btn-color-default | var(--color-default) | Default variant background color |
| --btn-color-primary | var(--color-primary) | Primary variant background color |
| --btn-color-secondary | var(--color-secondary) | Secondary variant background color |
| --btn-color-tertiary | var(--color-tertiary) | Tertiary variant background color |
| --btn-text-color-default | var(--color-text) | Default variant text color |
| --btn-text-color-primary | var(--color-text-light) | Primary variant text color |
| --btn-text-color-secondary | var(--color-text-light) | Secondary variant text color |
| --btn-text-color-tertiary | var(--color-text) | Tertiary variant text color |
| --btn-outline-text-color-default | color(from var(--btn-color-default) srgb calc(r * 0.5) calc(g * 0.5) calc(b * 0.5)) | Outline default variant text color |
| --btn-outline-text-color-primary | color(from var(--btn-color-primary) srgb calc(r * 0.5) calc(g * 0.5) calc(b * 0.5)) | Outline primary variant text color |
| --btn-outline-text-color-secondary | color(from var(--btn-color-secondary) srgb calc(r * 0.5) calc(g * 0.5) calc(b * 0.5)) | Outline secondary variant text color |
| --btn-outline-text-color-tertiary | color(from var(--btn-color-tertiary) srgb calc(r * 0.55) calc(g * 0.55) calc(b * 0.55)) | Outline tertiary variant text color |
| --btn-darker-brightness | 90% | Darker brightness filter value |
| --btn-lighter-brightness | 110% | Hover brightness filter value |
| --btn-disabled-opacity | 0.65 | Disabled state opacity |
| --btn-padding-x | var(--spacing-6) | Horizontal padding |
| --btn-padding-y | var(--spacing-2) | Vertical padding |
| --btn-box-shadow | var(--shadow-sm) | Button shadow |
| --btn-border-radius | var(--radius-md) | Default border radius |
| --btn-rounded-border-radius | var(--radius-full) | Rounded modifier border radius |
| --btn-border-width | var(--border-width) | Border width |
| --btn-active-transform | translateY(1px) | Active state transform |
| --btn-transition-duration | 0.2s | Transition animation duration |

### Caution

- Use --transition modifier selectively to respect user motion preferences.
- Icon-only buttons require proper accessible labels or aria-label attributes.
- Ensure sufficient color contrast for outline variants in your color scheme.
- Block buttons should be used sparingly to maintain visual hierarchy.

---

## Card

### Overview

The Card component provides a flexible container for content with optional images, shadows, and various styling options. It follows a clean, minimal design approach suitable for displaying grouped information.

### Usage

Use cards to:
- Display content in organized, digestible sections
- Group related information together
- Create product showcases or feature highlights
- Present articles, blog posts, or media content
- Build dashboard widgets or information panels

**Common use cases:**
- Product cards in e-commerce
- Article previews in blogs
- Profile cards for team members
- Feature highlights on landing pages
- Dashboard widgets and metrics

### Elements

| Name | Description |
| ------- | ----------- |
| .m-card__image | Card image element with responsive sizing |
| .m-card__content | Content area with proper padding |
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

### Caution
- Ensure sufficient contrast between text and background for readability
- Use meaningful alt text for images to enhance accessibility

---

## Checkbox

### Overview

The Checkbox component provides a custom-styled checkbox input that maintains accessibility while offering visual consistency. It supports various states including checked, disabled, and hover effects.

### Usage

Use checkboxes for:
- Multi-select options where users can choose multiple items
- Boolean settings and preferences
- Terms and conditions acceptance
- Feature toggles and permissions
- Form controls requiring true/false selection

**Common use cases:**
- Settings panels with multiple options
- Multi-select lists and filters
- Form agreements and consents
- Feature enable/disable controls
- Task lists with completion states

### CSS Variables

| Name | Default | Description |
| ---- | ------- | ----------- |
| --checkbox-size | 1.2em | Size of the checkbox |
| --checkbox-border-color | var(--color-dark) | Border color |
| --checkbox-bg-color | var(--color-light) | Background color |
| --checkbox-border-radius | 0.2em | Border radius |
| --checkbox-lighter-brightness | 150% | Brightness on hover/focus |
| --checkbox-disabled-opacity | 0.65 | Opacity when disabled |

### States

- **Default**: Unchecked state with border styling
- **Checked**: Shows checkmark with primary background color
- **Disabled**: Reduced opacity and disabled cursor
- **Hover/Focus**: Brightness filter for visual feedback

### Caution
- Ensure sufficient contrast between checkbox and background for visibility
- Use clear and concise labels for better usability
- Maintain consistent sizing and spacing in forms
- Avoid using checkboxes for single binary choices (use switches instead)
- Test across different browsers for consistent appearance

---

## Dialog

### Overview

The Dialog component provides a modal dialog using the native HTML `<dialog>` element. It supports backdrop blur effects, smooth transitions, and flexible content layout with header, content, and footer sections.

### Usage

Use dialogs for:
- Confirmation prompts requiring user decision
- Important notifications that need immediate attention
- Form inputs that should be completed before continuing
- Warning messages about destructive actions
- Information displays that overlay the main content

**Common use cases:**
- Delete confirmation dialogs
- Settings and preference panels
- Login and registration forms
- Error messages and alerts
- Image galleries and media viewers
- Multi-step workflows

### Elements

| Name | Description |
| ---- | ----------- |
| .m-dialog__header | Dialog header section for titles and close buttons |
| .m-dialog__content | Main content area for text, forms, or other elements |
| .m-dialog__footer | Footer section for action buttons |

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
| --dialog-content-gap | var(--spacing-2) | Gap between header, content, and footer |
| --dialog-backdrop-bg-color | var(--color-overlay) | Backdrop overlay color |
| --dialog-backdrop-blur | blur(4px) | Backdrop blur filter strength |
| --dialog-transition-duration | 0.2s | Duration of transition animations |
| --dialog-transition-transform-start | translateY(20%) | Initial transform for transition |

### Caution

- **Use [HTMLDialogElement API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement) to open/close dialogs.**
- Always provide a way to close the dialog (close button or cancel action)
- Consider the user's workflow when using dialogs
- Avoid nested dialogs as they can confuse user
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

The Input component provides a styled form input element with various type support and validation states. It supports all standard HTML input types and includes visual feedback for different states.

### Usage

Use Input components for collecting user data in forms. The component automatically handles focus states, validation feedback, and responsive behavior. It can be used standalone or within form layouts for various data collection scenarios.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-input | .--block | Makes the input element display as block-level with full width |
| .m-input | .--error | Applies error styling with danger border color |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-input | --input-border-radius | var(--radius-sm) | Border radius of the input element |
| .m-input | --input-border-color | var(--color-border) | Default border color |
| .m-input | --input-border | 1px solid var(--input-border-color) | Complete border specification |
| .m-input | --input-bg-color | initial | Background color of the input |
| .m-input | --input-placeholder-color | var(--color-text-muted) | Color of placeholder text |
| .m-input | --input-hover-opacity | 0.8 | Opacity on hover and focus states |
| .m-input | --input-disabled-opacity | 0.65 | Opacity when disabled |
| .m-input | --input-disabled-color | var(--color-text-muted) | Text color when disabled |
| .m-input | --input-invalid-border-color | var(--color-danger) | Border color for invalid/error states |

### Caution

- The component relies on CSS custom properties for theming
- Validation states (invalid, error) should be properly managed in forms
- File inputs may require additional styling for different browsers
- Color inputs have limited styling options due to browser constraints

---

## Label

### Overview

The Label component provides accessible and consistent labeling for form elements. It ensures proper association between labels and form controls, supporting screen readers and improving usability for all users.

### Usage

Use labels for:
- Form input identification and description
- Accessible form design and compliance
- Clear user guidance and instruction
- Required field indication
- Form field grouping and organization

**Common use cases:**
- Text inputs, textareas, and select elements
- Checkbox and radio button groups
- File upload controls
- Form sections and fieldsets
- Required field indicators

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
| --label-spacing-bottom | var(--spacing-1) | Bottom margin when not last child |
| --label-required-icon-content | "*" | Content for the required indicator |
| --label-required-icon-size | 1em | Font size for the required indicator |
| --label-required-icon-color | var(--color-danger) | Color of the required indicator |
| --label-disabled-opacity | 0.6 | Opacity value when label is disabled |

### Caution
- Avoid using labels without associated form controls
- Do not use labels for non-form elements
- Ensure unique htmlFor values for proper association
- Avoid excessive label text length
- Do not rely solely on visual cues for required fields

---

## Link

### Overview

The Link component provides a styled anchor element with proper semantic behavior and visual feedback. It supports various states including hover, active, and visited with smooth color transitions.

### Usage

Use Link components for navigation between pages or sections, external links, and interactive text elements. The component automatically handles different link states and provides appropriate visual feedback for user interactions.

### Modifiers

No specific modifiers are defined for this component.

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-link | --link-color | var(--color-secondary) | Default link color |
| .m-link | --link-color-hover | rgb(from var(--link-color) r g b / 80%) | Color on hover state |
| .m-link | --link-color-active | rgb(from var(--link-color) r g b / 50%) | Color on active state |
| .m-link | --link-color-visited | rgb(from var(--link-color) r g b / 120%) | Color for visited links |
| .m-link | --link-text-decoration | underline | Text decoration style |
| .m-link | --link-underline-offset | 0.2em | Offset for underline decoration |

### Caution

- The component uses CSS relative color syntax (rgb from) which requires modern browser support
- Visited link styling may not work in some testing environments
- External links should include appropriate rel attributes for security
- Color contrast should be verified when customizing link colors

---

## Navbar

### Overview

The Navbar component provides responsive navigation with mobile-first design. It features flexible hamburger menu variants and comprehensive customization options.

### Usage

Use the navbar for:
- Primary site navigation
- Brand/logo display
- Action buttons (login, signup, etc.)
- Responsive mobile menu patterns
- Multi-level navigation structures

**⚠️ Need JavaScript**

The opening and closing of the hamburger menu on mobile must be controlled via JavaScript by the value of `.m-navbar__hamburger-menu[aria-expanded]`.

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
| --navbar-hamburger-menu-slidein-transition | 0.1s ease-in-out | Slide-in animation duration |
| --navbar-hamburger-menu-hover-item-transition | 0.3s ease-in-out | Item hover transition |
| --navbar-hamburger-float-menu-position-right | var(--spacing-2) | Right position for float menu |
| --navbar-hamburger-side-menu-close-x-position | var(--spacing-3) | Horizontal position of close button in side menu |
| --navbar-hamburger-side-menu-close-y-position | var(--spacing-2) | Vertical position of close button in side menu |
| --navbar-hamburger-side-menu-max-width | 80vw | Maximum width for side menu |
| --navbar-hamburger-side-menu-min-width | 40vw | Minimum width for side menu |
| --navbar-hamburger-side-menu-backdrop-color | var(--color-overlay) | Backdrop color for side menu |
| --navbar-hamburger-side-menu-backdrop-filter | blur(2px) | Backdrop filter effect |

### Caution
- Ensure sufficient contrast between text and background for readability
- Use meaningful alt text for icons to enhance accessibility
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

### Modifiers

No specific modifiers are defined for this component.

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-radio | --radio-size | 1.2em | Size of the radio button |
| .m-radio | --radio-border-color | var(--color-dark) | Border color of the radio button |
| .m-radio | --radio-bg-color | var(--color-light) | Background color when unchecked |
| .m-radio | --radio-lighter-brightness | 150% | Brightness for hover/focus states |
| .m-radio | --radio-disabled-opacity | 0.65 | Opacity when disabled |

### Caution

- Radio buttons with the same name attribute form an exclusive group
- Proper labeling is essential for accessibility
- The checked state uses ::after pseudo-element for the indicator
- Disabled state prevents interaction while maintaining visual feedback
- User-select property may not be supported in all browsers

---

## Select

### Overview

The Select component provides a customizable dropdown selection interface with support for grouping, separators, and modern styling. It enhances the native select element with improved visual design.

### Usage

Use Select components for choosing from a list of options, category selection, and form inputs requiring single or multiple selections. The component supports option grouping and visual separators for better organization.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-select | .--error | Applies error styling with danger border color |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-select | --select-padding | var(--spacing-3) | Internal padding for the select element |
| .m-select | --select-checkmark-gap | var(--spacing-4) | Gap for checkmark indicator |
| .m-select | --select-bg-color | var(--color-bg-light) | Background color of the select |
| .m-select | --select-border-color | var(--color-border) | Default border color |
| .m-select | --select-border | 2px solid var(--select-border-color) | Complete border specification |
| .m-select | --select-border-radius | var(--radius-sm) | Border radius of the select |
| .m-select | --select-invalid-border-color | var(--color-danger) | Border color for invalid state |
| .m-select | --select-hover-opacity | 0.8 | Opacity on hover state |
| .m-select | --select-disabled-opacity | 0.65 | Opacity when disabled |

### Caution

- Modern customizable select features require Chrome support
- Multiple select styling not supported
- Accessibility requires proper labeling
- Custom styling may not work in all browsers

---

## Snackbar

### Overview

The Snackbar component provides temporary notification messages that appear at the bottom of the screen. It uses the Popover API for modern, accessible overlay behavior with customizable positioning and transitions.

### Usage

Use Snackbars for brief confirmations, error messages, and status updates that don't require immediate user action. They automatically dismiss or can be manually closed by users. Ideal for form submission feedback, connection status, and non-critical notifications.

### Elements

| Name | Description |
| ---- | ----------- |
| .m-snackbar | The main container element with fixed positioning |
| .m-snackbar__body | Content wrapper with flex layout for message and actions |
| .m-snackbar__content | Container for the notification message |
| .m-snackbar__actions | Container for action buttons (OK, Close, etc.) |

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-snackbar | .--transition | Enables smooth fade-in/out animations |
| .m-snackbar | .--right-bottom | Positions snackbar at bottom-right corner |
| .m-snackbar | .--left-top | Positions snackbar at top-left corner |
| .m-snackbar | .--right-top | Positions snackbar at top-right corner |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-snackbar | --snackbar-position-x | var(--spacing-4) | Horizontal distance from screen edge |
| .m-snackbar | --snackbar-position-y | var(--spacing-4) | Vertical distance from screen edge |
| .m-snackbar | --snackbar-zindex | var(--zindex-snackbar) | Z-index for proper layering |
| .m-snackbar | --snackbar-margin-for-small-screens | var(--spacing-2) | Margin on mobile devices |
| .m-snackbar | --snackbar-bg-color | var(--color-primary) | Background color of the snackbar |
| .m-snackbar | --snackbar-text-color | var(--color-text-light) | Text color for message content |
| .m-snackbar | --snackbar-border-radius | var(--radius-sm) | Border radius for rounded corners |
| .m-snackbar | --snackbar-box-shadow | var(--shadow-md) | Drop shadow for elevation |
| .m-snackbar | --snackbar-inner-spacing | var(--spacing-3) | Internal padding and gaps |
| .m-snackbar | --snackbar-action-spacing | var(--spacing-2) | Spacing between action buttons |
| .m-snackbar | --snackbar-transition-duration | 0.2s | Animation timing for transitions |

### Caution

- Requires modern browser support for Popover API
- Z-index variables must be properly configured for layering
- Mobile responsiveness handled through CSS media queries
- Starting-style animations require recent browser versions
- Position modifiers affect responsive behavior on small screens

---

## Tabs

### Overview

The Tabs component provides a navigation interface for switching between multiple content areas. It supports active states, disabled states, and hover effects with optional transition animations and scroll hints.

### Usage

Use Tabs for organizing content into separate views that users can switch between. Ideal for settings panels, product information sections, and any interface requiring content categorization. The component handles keyboard navigation and screen reader compatibility.

### Elements

| Name | Description |
| ---- | ----------- |
| .m-tabs | The main container element for the tab navigation |
| .m-tabs__list | Container for tab items with scrollable overflow |
| .m-tabs__item | Individual tab button elements |

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-tabs | .--transition | Enables smooth hover transition effects |
| .m-tabs | .--scrollhint | Shows visual scroll indicators when content overflows |
| .m-tabs__item | .--active | Marks the currently selected tab |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-tabs | --tabs-default-border | 1px solid var(--color-border) | Border style for the tab list |
| .m-tabs | --tabs-scrollbar-color | rgb(from var(--color-primary) r g b / 50%) transparent | Scrollbar color scheme |
| .m-tabs | --tabs-item-padding | var(--spacing-2) var(--spacing-4) | Internal padding for tab items |
| .m-tabs | --tabs-active-item-border-color | var(--color-primary) | Border color for active tabs |
| .m-tabs | --tabs-active-item-border | 2px solid transparent | Border specification for active state |
| .m-tabs | --tabs-active-item-filter | brightness(0.95) | Visual filter for active tabs |
| .m-tabs | --tabs-hover-item-filter | brightness(0.95) | Visual filter for hover state |
| .m-tabs | --tabs-disabled-item-filter | brightness(0.65) | Visual filter for disabled tabs |
| .m-tabs | --tabs-hover-transition | 0.3s ease | Transition timing for hover effects |
| .m-tabs | --tabs-item-background-color | var(--color-bg-light) | Background color for tab items |

### Data Attributes

No specific data attributes are defined for this component. Uses standard ARIA attributes for accessibility.

### Caution

- This component provides styling only; JavaScript implementation required for tab switching functionality
- Proper ARIA attributes (aria-controls, aria-selected, tabindex) must be managed dynamically by JavaScript.
- Scroll hints use advanced CSS features that may not work in older browsers
- Background attachment local may have performance implications on some devices

---

## Textarea

### Overview

The Textarea component provides a multi-line text input element with various styling options and responsive behavior. It supports automatic content sizing and proper validation states for enhanced user experience.

### Usage

Use Textarea components for collecting longer text input such as comments, descriptions, messages, and feedback. The component handles various states including validation, disabled, and auto-sizing for optimal user experience across different form scenarios.

### Modifiers

| Target | Name | Description |
|--- | ---- | ----------- |
| .m-textarea | .--block | Makes the textarea display as block-level with full width |
| .m-textarea | .--error | Applies error styling with danger border color |
| .m-textarea | .--auto-fit | Enables automatic height adjustment based on content |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-textarea | --textarea-border-radius | var(--radius-sm) | Border radius of the textarea element |
| .m-textarea | --textarea-border-color | var(--color-border) | Default border color |
| .m-textarea | --textarea-border | 1px solid var(--textarea-border-color) | Complete border specification |
| .m-textarea | --textarea-bg-color | initial | Background color of the textarea |
| .m-textarea | --textarea-placeholder-color | var(--color-text-muted) | Color of placeholder text |
| .m-textarea | --textarea-hover-opacity | 0.8 | Opacity on hover and focus states |
| .m-textarea | --textarea-disabled-opacity | 0.65 | Opacity when disabled |
| .m-textarea | --textarea-disabled-color | var(--color-text-muted) | Text color when disabled |
| .m-textarea | --textarea-invalid-border-color | var(--color-danger) | Border color for invalid/error states |

### Caution

- The auto-fit modifier uses field-sizing property with limited browser support
- Validation states (invalid, error) should be properly managed in forms
- Proper labeling is essential for accessibility

---

## Toggle

### Overview

The Toggle component provides a switch-style checkbox input with smooth animations and visual feedback. It offers an intuitive on/off control for boolean settings.

### Usage

Use Toggle components for binary choices, settings toggles, and feature enable/disable controls. The component provides clear visual state indication and smooth transitions for better user experience.

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-toggle | --toggle-size | 1.2em | Size of the toggle switch |
| .m-toggle | --toggle-transition | 0.1s ease | Animation timing for state changes |
| .m-toggle | --toggle-width | calc(var(--toggle-size) * 1.8) | Width of the toggle track |
| .m-toggle | --toggle-checked-translate-x | calc(var(--toggle-size) * 0.8) | Translation distance when checked |
| .m-toggle | --toggle-bg-color | var(--color-dark) | Background color when unchecked |
| .m-toggle | --toggle-bg-color-checked | var(--color-primary) | Background color when checked |
| .m-toggle | --toggle-button-color | var(--color-light) | Color of the sliding button |
| .m-toggle | --toggle-button-scale | 0.8 | Scale factor for the button |
| .m-toggle | --toggle-lighter-brightness | 150% | Brightness for hover/focus states |
| .m-toggle | --toggle-disabled-opacity | 0.5 | Opacity when disabled |

### Data Attributes

No specific data attributes are defined for this component.

### Caution

- The component requires proper labeling for accessibility
- Animations depend on CSS transitions and transforms
- Color variables should provide sufficient contrast
- Disabled state prevents interaction but maintains visual clarity

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

The Columns layout component provides a powerful 12-column grid system based on CSS Grid. It offers responsive behavior, flexible item sizing, and advanced features like subgrid support for perfect content alignment.

### Usage

Use the columns layout for:
- Responsive grid layouts with automatic column adjustment
- Card grids with consistent spacing
- Complex layouts requiring precise content alignment (using subgrid)
- Dashboard widgets and content organization
- Form layouts with structured field positioning

**Responsive Design:**
The columns automatically adjust based on screen size:
- XL screens (>1200px): 12 columns
- Large screens (992-1200px): 9 columns
- Medium screens (768-992px): 6 columns
- Small screens (576-768px): 3 columns
- XS screens (<576px): 1 column

### Modifiers

| Target | Name | Description |
| ------ | ---- | ----------- |
| .m-columns | .--no-gap | Removes spacing between columns |
| .m-columns | .--align-rows | Enables alignment of nested content using subgrid rows |
| .m-columns | .--auto-fit | Enables auto-fit behavior for responsive column sizing |

### Data Attributes

| Target | Attribute | Values | Description |
| ------ | --------- | ------ | ----------- |
| .m-columns | data-columns-length | 1-12 | Override default column count |
| .m-columns > * | data-col-size | 1-12 | Specify how many columns this item spans |
| .m-columns > * | data-subgrid-rows | 1-6 | (With --subgrid) Number of subgrid rows to span |

### CSS Variables

| Target | Name | Default | Description |
| ------ | ---- | ------- | ----------- |
| .m-columns | --columns-gap | var(--spacing-2) | Gap between columns |
| .m-columns | --columns-length-default | 12 | Default number of columns |
| .m-columns | --columns-length | var(--columns-length-default) | Active number of columns |
| .m-columns | --columns-length-xl | round(down, calc(12 * 0.750)) | Columns for XL breakpoint (9) |
| .m-columns | --columns-length-lg | round(down, calc(12 * 0.500)) | Columns for large breakpoint (6) |
| .m-columns | --columns-length-md | round(down, calc(12 * 0.250)) | Columns for medium breakpoint (3) |
| .m-columns | --columns-length-sm | round(down, calc(12 * 0.125)) | Columns for small breakpoint (1) |
| .m-columns | --columns-default-col-size | 1 | Default column span for items |
| .m-columns > * | --columns-col-size | var(--columns-default-col-size) | Active column span |
| .m-columns > * | --columns-subgrid-row | 1 | Number of subgrid rows to span |

### Caution

* When using the `data-col-size` attribute, ensure that the sum of column spans in a single row does not exceed the total number of columns (default is 12). Exceeding this may lead to unexpected layout behavior.
* The `.--subgrid` modifier changes the display of m-grid's child elements to subgrid. Therefore, if the child element's display is flex or similar, it may result in an unintended layout.
* CSS Subgrid is not supported in some older browsers, including Internet Explorer and early versions of Edge. Ensure to test across target browsers when using the `.--subgrid` modifier.

---

## Layouts/Container

Container component provides responsive layout constraints with predefined breakpoints.

- **Mobile**: max-width 100%
- **Small**: max-width 576px (>576px)
- **Medium**: max-width 768px (>768px)
- **Large**: max-width 1024px (>1024px)
- **X Large**: max-width 1280px (>1280px)
- **2X Large**: max-width 1536px (>1536px)

The container is centered horizontally and uses logical properties (margin-inline, max-inline-size) for better internationalization support.

---

## Usage Notes

- This documentation is auto-generated from `parameters.docs.description.component` in Storybook stories
- For the most up-to-date information, refer to the actual Storybook stories
- Generated at: 10/25/2025, 12:05:26 PM
