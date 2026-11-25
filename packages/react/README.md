# @madogiwa-ui/react

⚠️ Currently under development ⚠️

React components for [@madogiwa-ui/css](https://www.npmjs.com/package/@madogiwa-ui/css), a pure CSS framework leveraging cutting-edge CSS features.

## 📦 Installation

```bash
npm install @madogiwa-ui/css @madogiwa-ui/react
# or
pnpm add @madogiwa-ui/css @madogiwa-ui/react
# or
yarn add @madogiwa-ui/css @madogiwa-ui/react
```

## 📕 Documentation

* [Storybook](https://madogiwa0124.github.io/madogiwa-ui/storybook/css/)
  - [Markdown](https://github.com/madogiwa0124/madogiwa-ui/blob/main/packages/css/dist/madogiwa-ui-components-docs.md)

## 🚀 Quick Start

Import `@madogiwa-ui/css` in your entry file:

```tsx
import "@madogiwa-ui/css";
import { App } from "./App";
import { createRoot } from "react-dom/client";

createRoot(document.querySelector("#root")!).render(<App />);
```

Then use the components. They accept the props of the native element they render (`onClick`, `aria-*`, ...), and blocks with elements are composed as `children`:

```tsx
import { MBtn, MCard, MCardContent, MCardFooter, MContainer, MH1 } from "@madogiwa-ui/react";

export const App = () => (
  <MContainer padding>
    <MH1>Madogiwa UI - React</MH1>
    <MCard>
      <MCardContent>Hello!</MCardContent>
      <MCardFooter>
        <MBtn variant="primary" onClick={() => alert("clicked")}>Primary Button</MBtn>
      </MCardFooter>
    </MCard>
  </MContainer>
);
```

Form controls work both controlled (`value` / `checked` + `onChange`) and uncontrolled (`defaultValue` / `defaultChecked`), like native inputs.

`MDialog` and `MSnackbar` are controlled by `open`. When `MDialog` is closed by the browser (Escape key, `<form method="dialog">`), set your state back to `false` in `onClose`; otherwise the next `open={true}` is not a change and the dialog does not reopen:

```tsx
const [open, setOpen] = useState(false);

<MBtn onClick={() => setOpen(true)}>Open</MBtn>
<MDialog open={open} onClose={() => setOpen(false)}>...</MDialog>
```

The bundle is marked with `"use client"`, so the components can be imported from React Server Components (ex: the Next.js App Router).

## 🏗️ Architecture

[Architecture Documentation](../../.claude/rules/react.md)

## 💻 Development

```bash
# Install dependencies
pnpm install
# Start the demo app (demo/App.tsx)
pnpm dev
```

`index.tsx` imports `@madogiwa-ui/css` and renders `demo/App.tsx`, which shows every component with one tab per section (`demo/sections/`).

### Testing Strategy

Vitest (browser mode) with `vitest-browser-react` is used for unit testing:

```sh
pnpm test
```
