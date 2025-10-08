import { type Plugin, defineConfig } from "vite";
import postcssPresetEnv from "postcss-preset-env";
import { globSync, readFileSync, rmSync, writeFileSync } from "node:fs";

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

const OutputCssSnippetFilePlugin = (
  { scope, targetSelectorRegexp, snippetFileName, descriptionPrefix }: {
    scope: string; targetSelectorRegexp: string; snippetFileName: string; descriptionPrefix: string;
  },
): Plugin => {
  return {
    name: "output-css-snippet-file",
    closeBundle() {
      if (isProduction) {
        try {
          const files = globSync("dist/*.css");
          type SnippetItem = {
            scope?: string;
            prefix: string;
            body: string;
            description: string;
          };
          const snippets: { [name: string]: SnippetItem }[] = [];
          const pushSnippet = ({ name, prefix, body, description }: SnippetItem & { name: string }) => {
            snippets.push({ [name]: { scope, prefix, body, description } });
          };
          const buildSnippetItem = (className: string) => {
            const name = className.slice(1);
            const prefix = className;
            const body = className;
            const description = `${descriptionPrefix} ${className}`;
            return { name, prefix, body, description };
          };
          const classRegex = new RegExp(targetSelectorRegexp, "g");

          for (const file of files) {
            const cssContent = readFileSync(file, "utf8");
            const classNames = new Set<string>();
            let match;
            while ((match = classRegex.exec(cssContent)) !== null) classNames.add(match[0]);
            for (const className of classNames) {
              const snippetItem = buildSnippetItem(className);
              pushSnippet(snippetItem);
            }
          }
          writeFileSync(snippetFileName, JSON.stringify(Object.assign({}, ...snippets), null, 2));
          // eslint-disable-next-line no-console
          console.info(`CSS snippet file created: ${snippetFileName}`);
          if (files.length === 0) {
          // eslint-disable-next-line no-console
            console.info("No CSS files found to create snippet.");
          }
        } catch (error) {
        // eslint-disable-next-line no-console
          console.error("Error creating CSS snippet file:", error);
        }
      }
    },
  };
};

export default defineConfig({
  plugins: [
    OutputCssSnippetFilePlugin({
      scope: "html,javascript,typescript,vue,haml,erb,css,scss,sass,less,stylus",
      /*
        NOTE: Regular expression that matches class names starting with a specific prefix
        - Includes modifier classes starting with `--` and Elements (__)
        - Ends the match before `{` or `,` (to exclude pseudo-classes and descendant selectors)
        - Examples: `.m-btn`, `.m-btn.--primary`, `.m-btn:hover`, `.m-card__image` → `.m-btn`, `.m-btn.--primary`, `.m-card__image`
      */
      targetSelectorRegexp: `\\.m-([a-zA-Z0-9_-]+(?:__[a-zA-Z0-9_-]+)?)(?:\\.--[a-zA-Z0-9_-]+)*(?=[\\s,{])`,
      snippetFileName: "dist/madogiwa-ui.code-snippets",
      descriptionPrefix: "Madogiwa UI class",
    }),
    removeFilePlugin("dist/*.js"),
  ],
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
