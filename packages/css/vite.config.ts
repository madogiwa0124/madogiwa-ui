import { defineConfig } from "vite";
import postcssPresetEnv from "postcss-preset-env";
import { outputCssSnippetFilePlugin } from "./plugins/vite/outputCssSnippetFilePlugin"; 
import  { removeFilePlugin } from "./plugins/vite/removeFilePlugin"

export default defineConfig({
  plugins: [
    outputCssSnippetFilePlugin({
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
