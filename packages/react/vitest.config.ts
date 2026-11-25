import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // NOTE: Without this, Vite discovers react-dom/client (imported by vitest-browser-react) during the first run and reloads the page mid-run,
  // which fails the test file whose iframe was loading at that moment (seen in CI, where the dependency cache is always cold).
  optimizeDeps: {
    include: ["react", "react-dom", "react-dom/client", "react/jsx-dev-runtime", "vitest-browser-react", "clsx"],
  },
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      // https://vitest.dev/guide/browser/playwright
      instances: [
        { browser: "chromium" },
      ],
      headless: true,
    },
  },
});
