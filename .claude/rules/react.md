---
paths:
  - "packages/react/**/*"
applyTo: "packages/react/**/*"
---

# `@madogiwa-ui/react` Guide

`@madogiwa-ui/vue` is a reference for *which* CSS classes each component wraps, not for *how* the component is written. Follow React conventions ([react.dev](https://react.dev/)) for API design and implementation.

## Directory Structure

Same mapping rule as `@madogiwa-ui/vue`: the directory follows the CSS file name in UpperCamelCase, the component follows the root class name (ex: `button.css` for `.m-btn` -> `MButton/MBtn.tsx`). The component body, entry point, and test code are collocated.

```sh
packages/react/
├── demo/
│   └── App.tsx
└── src/
    ├── components/
    │   └── MButton/
    │       ├── index.ts // export { MBtn } from "./MBtn";
    │       ├── MBtn.tsx
    │       └── MBtn.test.tsx
    ├── layouts/
    ├── index.ts // exports all components and types
    └── types/
```

## Component Design

Each component is a thin wrapper around the corresponding CSS class.

- Define components as arrow functions (see [typescript.md](./typescript.md)) and use named exports only.
- Extend the native element's props with `ComponentProps<"element">` and spread the rest onto the element, so that event handlers, `aria-*`, `type`, and `ref` work without extra code. In React 19, `ref` is a regular prop; do not use `forwardRef`.
  - Components that hold their own ref to the element (ex: `MDialog`, `MSnackbar`) omit `ref` from their props until merging it with the consumer's ref is needed.
- Default `type` to `"button"` on every `<button>` (including `as="button"`), before the spread so that consumers can override it.
- Merge the consumer's `className` with the component's own classes using `clsx`; never overwrite it.
- Map modifiers to props (`variant` -> `--primary`, `outline` -> `--outline`).

```tsx
import type { ComponentProps } from "react";
import type { Variant } from "../../types";
import { clsx } from "clsx";

type MBtnProps = ComponentProps<"button"> & {
  variant?: Variant;
  outline?: boolean;
};

export const MBtn = ({ variant, outline = false, className, ...props }: MBtnProps) => (
  <button
    className={clsx("m-btn", variant && `--${variant}`, outline && "--outline", className)}
    {...props}
  />
);
```

### Composition (instead of slots)

- Default slot -> `children`.
- Named slots -> sub components the consumer composes as `children` (ex: `<MCard><MCardImage /><MCardContent /></MCard>`). Use a prop that takes a `ReactNode` only when the position is fixed by the markup and the content is small (ex: an icon).
- Do not wrap `children` in sub elements implicitly; let the consumer compose the structure.
- Exception: when the CSS relies on a fixed structure and the block needs refs to its elements, the block renders them itself and takes the varying parts as props (ex: `MNavbar` takes `title` and wraps `children` in `MNavbarItems`, because `navbar.css` expects title -> items -> hamburger and the outside-click handling needs refs to the items and the hamburger). Leave a NOTE explaining why.

### Form Controls

Support both controlled (`value` / `checked` + `onChange`) and uncontrolled (`defaultValue` / `defaultChecked`) usage, as native elements do. Spreading the native props is usually enough; avoid duplicating the value in internal state.

### State and Effects

- Keep state minimal and derive values during render. Use `useEffect` only to synchronize with systems outside React (ex: calling `showModal()` on `<dialog>`, listening to `document` events). See [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect).
- Keep state in the block that owns it and pass it to its elements as props (ex: `MNavbar` owns the menu state and passes `expanded` to `MNavbarHamburgerMenu`). Introduce Context and a custom hook (`useXxx`) only when consumers compose elements that need the block's state.
- Extract reusable effect logic into a custom hook collocated in the component directory (ex: `MNavbar/useCloseOutsideClick.ts`), which owns the whole lifecycle including the cleanup.
- Components that open native UI (`<dialog>`, popover) stay controlled: sync the `open` prop to the DOM API in an effect, skip the call when the element is already in the requested state (StrictMode runs effects twice), and report native closes through the corresponding event prop (ex: `onClose`).
- Reset state that depends on a prop while rendering instead of in an effect (see [Adjusting some state when a prop changes](https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes)).
- Follow the [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks); `eslint-plugin-react-hooks` enforces them.

## Testing

Vitest (browser mode) + `vitest-browser-react` is used for unit testing.

Test behavior from the user's point of view: find elements by role or text, then assert on classes, attributes, and interactions. Name each test after what it verifies.

```tsx
import { describe, expect, it, vi } from "vitest";
import { MBtn } from "./index";
import { render } from "vitest-browser-react";

describe("MBtn", () => {
  it("renders a button with the m-btn class", async () => {
    const screen = await render(<MBtn>Click Me</MBtn>);
    await expect.element(screen.getByRole("button", { name: "Click Me" })).toHaveClass("m-btn");
  });

  it("adds modifier classes from props", async () => {
    const screen = await render(<MBtn variant="primary" outline>Click Me</MBtn>);
    await expect.element(screen.getByRole("button")).toHaveClass("m-btn", "--primary", "--outline");
  });

  it("keeps the className passed by the consumer", async () => {
    const screen = await render(<MBtn className="custom">Click Me</MBtn>);
    await expect.element(screen.getByRole("button")).toHaveClass("m-btn", "custom");
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    const screen = await render(<MBtn onClick={onClick}>Click Me</MBtn>);
    await screen.getByRole("button").click();
    expect(onClick).toHaveBeenCalledOnce();
  });
});
```

## Types

Put reusable types under `src/types` and export them from `src/index.ts`, for the same reason as `@madogiwa-ui/vue` (relative paths in the bundled `dist/types/index.d.ts`). Export each component's props type (ex: `MBtnProps`) as well, so consumers can wrap the components.

## Accessibility

**For basic guidelines, see the corresponding [A11y Guideline](../skills/a11y/SKILL.md).**

For React-specific notes, see the [React documentation on accessibility-related DOM props](https://react.dev/reference/react-dom/components/common).

## Client Components

The package is bundled into a single file whose first line is `"use client";` (set as `output.banner` in `vite.config.ts`), because the bundle imports hooks that the `react-server` build of React does not export. Do not add `"use client"` to individual files; bundling drops per-file directives.
