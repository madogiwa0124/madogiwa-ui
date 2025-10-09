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
      *{};
      body{};
      :root{};
      .m-btn{};
      .m-btn.--primary{};
      .m-btn.--secondary{};
      .m-btn.--outline.--default{};
      .m-accordion[open]{};
      .m-accordion.--transition .m-accordion__summary{};
      .m-navbar__item.--end{};
  `;
    const descriptionPrefix = "Madogiwa UI class";
    const initScope = "html,javascript,typescript,vue,haml,erb,css,scss,sass,less,stylus";
    const snippets = buildSnippets({ descriptionPrefix, classRegex, cssContent, initScope });
    await t.test("should extract class names and build snippets", () => {
      const expected = [
        {
          "m-btn": {
            scope: "html,javascript,typescript,vue,haml,erb,css,scss,sass,less,stylus",
            prefix: ".m-btn",
            body: ".m-btn${1|.--primary,.--secondary,.--outline,.--default|}",
            description: "Madogiwa UI class .m-btn",
          },
        },
        {
          "m-accordion": {
            scope: "html,javascript,typescript,vue,haml,erb,css,scss,sass,less,stylus",
            prefix: ".m-accordion",
            body: ".m-accordion${1|.--transition|}",
            description: "Madogiwa UI class .m-accordion",
          },
        },
        {
          "m-accordion__summary": {
            scope: "html,javascript,typescript,vue,haml,erb,css,scss,sass,less,stylus",
            prefix: ".m-accordion__summary",
            body: ".m-accordion__summary",
            description: "Madogiwa UI class .m-accordion__summary",
          },
        },
        {
          "m-navbar__item": {
            scope: "html,javascript,typescript,vue,haml,erb,css,scss,sass,less,stylus",
            prefix: ".m-navbar__item",
            body: ".m-navbar__item${1|.--end|}",
            description: "Madogiwa UI class .m-navbar__item",
          },
        },
      ];
      t.assert.deepStrictEqual(snippets, expected);
    });
  });
});
