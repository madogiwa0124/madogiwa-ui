import { type Plugin, defineConfig } from "vite";
import postcssPresetEnv from "postcss-preset-env";
import { globSync, rmSync } from "node:fs";

const isProduction = process.env["NODE_ENV"] === "production";

const removeFilePlugin = (glob: string, silent: boolean = false): Plugin => {
  return {
    name: "remove-file",
    closeBundle() {
      if (isProduction) {
        try {
          const files = globSync(glob);
          for (const file of files) {
            rmSync(file, { force: true });
            // eslint-disable-next-line no-console
            if (!silent) console.info(`Removed file: ${file}`);
          }
          if (files.length === 0 && !silent) {
          // eslint-disable-next-line no-console
            console.info(`No files matched pattern: ${glob}`);
          }
        } catch (error) {
        // eslint-disable-next-line no-console
          console.error(`Error removing files with pattern ${glob}:`, error);
        }
      }
    },
  };
};

export default defineConfig({
  plugins: [removeFilePlugin("dist/*.js")],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "main",
      fileName: "madogiwa-ui.min",
      formats: ["es"],
    },
    cssCodeSplit: false,
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv(),
      ],
    },
  },
});
