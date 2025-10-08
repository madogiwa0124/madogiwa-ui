/* eslint-disable no-console */
import type { Plugin } from "vite";
import { globSync, readFileSync, writeFileSync } from "node:fs";

const isProduction = process.env["NODE_ENV"] === "production";

/*
TODO: Include modifiers in prefix and make them selectable with choices.

Example:
```css
.m-btn.--primary { ... }
.m-btn.--secondary { ... }
```
output:
**before**
```json
{
  "m-btn.--primary": {
    "prefix": ".m-btn.--primary",
    "body": ".m-btn.--primary",
    "description": "Madogiwa UI class .m-btn.--primary"
  }
},
{
  "m-btn.--secondary": {
    "prefix": ".m-btn.--secondary",
    "body": ".m-btn.--secondary",
    "description": "Madogiwa UI class .m-btn.--secondary"
  }
},
```

**after**
```json
{
  "m-btn": {
    "prefix": ".m-btn",
    "body": ".m-btn ${1|--primary,--secondary|}",
    "description": "Madogiwa UI class .m-btn"
  }
}
```
*/
export const outputCssSnippetFilePlugin = (
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

          console.info(`CSS snippet file created: ${snippetFileName}`);
          if (files.length === 0) {
            console.info("No CSS files found to create snippet.");
          }
        } catch (error) {
          console.error("Error creating CSS snippet file:", error);
        }
      }
    },
  };
};
