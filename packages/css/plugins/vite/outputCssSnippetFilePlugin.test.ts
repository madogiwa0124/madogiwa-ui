import { type TestContext, describe, test } from "node:test";
// workaround for `Error [ERR_MODULE_NOT_FOUND]: Cannot find module` in Node.js v22 Test
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { buildSnippets } from "./outputCssSnippetFilePlugin.ts";

void describe("outputCssSnippetFilePlugin", () => {
  void test("buildSnippets", async (t: TestContext) => {
    const targetSelectorRegexp = `\\.m-([a-zA-Z0-9_-]+(?:__[a-zA-Z0-9_-]+)?)(?:\\.--[a-zA-Z0-9_-]+)*(?=[\\s,{])`;
    const classRegex = new RegExp(targetSelectorRegexp, "g");
    const cssContent = `
      :root {
        --color-primary: #3498db;
        --color-secondary: #2ecc71;
      };
      :root {
        --spacing: 2px;
        .--modifier { color: red; }
      };
      *{};
      body{};
      :root{};
      .m-btn{};
      .m-btn.--primary{
        --color: var(--color-primary);
      };
      .m-btn.--secondary{};
      .m-btn.--outline.--default{};
      .m-accordion[open]{};
      .m-accordion.--transition .m-accordion__summary{};
      .m-navbar__item.--end{};
      .m-card{}
      .m-card__content{}
      .m-card__image{}
  `;
    const descriptionPrefix = "Madogiwa UI";
    const initScope = "html,javascript,typescript,vue,haml,erb,css,scss,sass,less,stylus";
    const snippets = buildSnippets({ descriptionPrefix, classRegex, cssContent, initScope, outputRootCSSVariables: true });
    await t.test("should extract class names and build snippets", () => {
      const expected = [
        {
          "m-btn": {
            scope: "html,javascript,typescript,vue,haml,erb,css,scss,sass,less,stylus",
            prefix: ".m-btn",
            body: ".m-btn${2|​,.--primary,.--secondary,.--outline,.--default|}",
            description: "Madogiwa UI class .m-btn",
          },
        },
        {
          "m-accordion": {
            scope: "html,javascript,typescript,vue,haml,erb,css,scss,sass,less,stylus",
            prefix: ".m-accordion",
            body: ".m-accordion${1|​,__summary|}${2|​,.--transition|}",
            description: "Madogiwa UI class .m-accordion",
          },
        },
        {
          "m-navbar": {
            scope: "html,javascript,typescript,vue,haml,erb,css,scss,sass,less,stylus",
            prefix: ".m-navbar",
            body: ".m-navbar${1|​,__item|}${2|​,.--end|}",
            description: "Madogiwa UI class .m-navbar",
          },
        },
        {
          "m-card": {
            scope: "html,javascript,typescript,vue,haml,erb,css,scss,sass,less,stylus",
            prefix: ".m-card",
            body: ".m-card${1|​,__content,__image|}",
            description: "Madogiwa UI class .m-card",
          },
        },
        {
          "--color-primary": {
            scope: "css",
            prefix: "--color-primary",
            body: "--color-primary",
            description: "Madogiwa UI CSS variable --color-primary",
          },
        },
        {
          "--color-secondary": {
            scope: "css",
            prefix: "--color-secondary",
            body: "--color-secondary",
            description: "Madogiwa UI CSS variable --color-secondary",
          },
        },
        {
          "--spacing": {
            scope: "css",
            prefix: "--spacing",
            body: "--spacing",
            description: "Madogiwa UI CSS variable --spacing",
          },
        },
      ];
      t.assert.deepStrictEqual(snippets, expected);
    });
  });
});
