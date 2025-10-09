/* eslint-disable no-console */
import type { Plugin } from "vite";
import { globSync, readFileSync, writeFileSync } from "node:fs";

const isProduction = process.env["NODE_ENV"] === "production";

type SnippetItem = {
  scope?: string;
  prefix: string;
  body: string;
  description: string;
};

const buildSnippetItem = ({ descriptionPrefix, className, scope, placeholders }: {
  descriptionPrefix: string;
  className: string;
  scope: string;
  placeholders: string[];
}) => {
  const name = className.slice(1);
  const prefix = className;
  let body = className;
  // NOTE: We might need to create placeholders for each modifier length here
  // Currently, only one placeholder is created when there are multiple modifiers, so once you select one, you can't select other modifiers
  // Example) `.m-btn.--primary.--large` → `.m-btn${1|.--primary,.--large|}${2|.--primary,.--large|}` might be more user-friendly?
  if (placeholders.length > 0) body += `\${1|${placeholders.join(",")}|}`;
  const description = `${descriptionPrefix} ${className}`;
  return { scope, name, prefix, body, description };
};

// NOTE: This function collects all modifiers for each base class.
// e.g., for input [".m-btn", ".m-btn.--primary", ".m-btn.--large"],
// it returns: { ".m-btn": { modifiers: [".--primary", ".--large"] } }
type Modifiers = { [name: string]: { modifiers: Set<string> } };
const collectModifiers = (classNames: string[]): Modifiers => {
  const classWithModifiers: Modifiers = {};
  for (const fullClassName of classNames) {
    const [baseClass, ...modifiers] = fullClassName.split(/(?=\.--)/);
    if (!baseClass) continue;
    classWithModifiers[baseClass] ??= { modifiers: new Set<string>() };
    if (modifiers.length > 0) for (const m of modifiers) classWithModifiers[baseClass].modifiers.add(m);
  }
  return classWithModifiers;
};

// NOTE: exported for testing
export const buildSnippets = ({ descriptionPrefix, classRegex, cssContent, initScope }: {
  descriptionPrefix: string;
  classRegex: RegExp;
  cssContent: string;
  initScope: string;
}) => {
  const snippets: { [name: string]: SnippetItem }[] = [];
  const classNames = new Set<string>();
  let match;
  while ((match = classRegex.exec(cssContent)) !== null) classNames.add(match[0]);
  const snippetSource = collectModifiers([...classNames]);
  for (const className of Object.keys(snippetSource)) {
    const modifiers = snippetSource[className]?.modifiers ?? [];
    const snippetItem = buildSnippetItem({ descriptionPrefix, className, scope: initScope, placeholders: [...modifiers] });
    const { name, scope, prefix, body, description } = snippetItem;
    snippets.push({ [name]: { scope, prefix, body, description } });
  }
  return snippets;
};

export const outputCssSnippetFilePlugin = (
  { scope, targetSelectorRegexp, snippetFileName, descriptionPrefix }: {
    scope: string;
    targetSelectorRegexp: string;
    snippetFileName: string;
    descriptionPrefix: string;
  },
): Plugin => {
  return {
    name: "output-css-snippet-file",
    closeBundle() {
      if (isProduction) {
        try {
          const files = globSync("dist/*.css");
          if (files.length === 0) {
            console.info("No CSS files found to create snippet.");
            return;
          }

          const classRegex = new RegExp(targetSelectorRegexp, "g");
          const snippets: { [name: string]: SnippetItem }[] = [];
          for (const file of files) {
            const cssContent = readFileSync(file, "utf8");
            snippets.push(...buildSnippets({ descriptionPrefix, classRegex, cssContent, initScope: scope }));
          }
          if (snippets.length > 0) {
            writeFileSync(snippetFileName, JSON.stringify(Object.assign({}, ...snippets), null, 2));
            console.info(`CSS snippet file created: ${snippetFileName}`);
          }
        } catch (error) {
          console.error("Error creating CSS snippet file:", error);
        }
      }
    },
  };
};
