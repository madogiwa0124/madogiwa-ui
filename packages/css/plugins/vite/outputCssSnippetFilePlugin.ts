/* eslint-disable no-console */
import type { Plugin } from "vite";
import { globSync, readFileSync, writeFileSync } from "node:fs";

type SnippetItem = {
  scope: string;
  prefix: string;
  body: string;
  description: string;
};

// NOTE: We might need to create placeholders for each modifier length here
// Currently, only one placeholder is created when there are multiple modifiers, so once you select one, you can't select other modifiers
// Example) `.m-btn.--primary.--large` → `.m-btn${2|.--primary,.--large|}${3|.--primary,.--large|}` might be more user-friendly?
const ZERO_WIDTH_SPACE = "\u200B" as const;
const PLACEHOLDER_INDEX_BASE = 1 as const;
const buildSnippetItem = ({ description, initBody, initPrefix, scope, placeholders }: {
  description: string;
  initPrefix: string;
  scope: string;
  initBody: string;
  placeholders: Set<string>[];
}): SnippetItem => {
  let body: string = initBody;
  for (const [index, placeholder] of placeholders.entries()) {
    const indexOffset = String(index + PLACEHOLDER_INDEX_BASE);
    // NOTE: Add a blank character at the beginning so that elements or modifiers can be left empty when not needed
    if (placeholder.size > 0) body += `\${${indexOffset}|${[ZERO_WIDTH_SPACE, ...placeholder].join(",")}|}`;
  }
  return { scope, prefix: initPrefix, body, description };
};

// NOTE: This function collects all elements and modifiers for each base class.
// e.g., for input [".m-btn", ".m-btn.--primary", ".m-btn.--large", ".m-card", ".m-card__img", ".m-card.--shadow"],
// it returns: { ".m-btn": { elements: [], modifiers: [".--primary", ".--large"] }, ".m-card": { elements: ["__img"], modifiers: [".--shadow"] } }
type BEMClassStructure = { [block: string]: { elements: Set<string>; modifiers: Set<string> } };
const parseBEMClasses = (classNames: Set<string>): BEMClassStructure => {
  const bemClassStructures: BEMClassStructure = {};
  for (const fullClassName of classNames) {
    try {
      const { block, elements, modifiers } = extractBEMParts(fullClassName);
      bemClassStructures[block] ??= { elements: new Set<string>(), modifiers: new Set<string>() };
      for (const elm of elements) bemClassStructures[block].elements.add(elm);
      for (const mdf of modifiers) bemClassStructures[block].modifiers.add(mdf);
    } catch (error) {
      console.warn(error);
      continue;
    }
  }
  return bemClassStructures;
};

class InvalidBEMClassError extends Error {
  constructor(className: string) {
    super(`Invalid BEM class name: ${className}`);
    this.name = "InvalidBEMClassError";
  }
}
const MODIFIER_PATTERN = /(?=\.--)/;
const ELEMENT_PATTERN = /(?=__)/;
const extractBEMParts = (className: string, modifiersPattern = MODIFIER_PATTERN, elementsPattern = ELEMENT_PATTERN) => {
  const [blockElement = "", ...modifiers] = className.split(modifiersPattern);
  const [block = "", ...elements] = blockElement.split(elementsPattern);
  if (!block) throw new InvalidBEMClassError(className);
  return {
    block,
    elements: elements.filter(Boolean),
    modifiers: modifiers.filter(Boolean),
  };
};

// NOTE: Transform the structure to be used for snippet generation
// { ".m-btn": { elements: [], modifiers: [".--primary", ".--large"] }
// → { "m-btn": { prefix: "m-btn", initBody: ".m-btn", placeholders: [[], [".--primary", ".--large"]] } }
type SnippetSource = { [name: string]: { prefix: string; initBody: string; placeholders: Set<string>[]; description: string } };
const transformBemClassesToSnippetSource = (bemClassStructures: BEMClassStructure, descriptionPrefix: string): SnippetSource => {
  const snippetSource = Object.fromEntries(
    Object.entries(bemClassStructures).map(([block, structure]) => {
      const snippetName = block.slice(1); // Remove the leading dot from the block name
      return [
        snippetName,
        {
          initBody: block,
          prefix: block,
          placeholders: [structure.elements, structure.modifiers],
          description: `${descriptionPrefix} ${block}`,
        },
      ];
    }),
  );
  return snippetSource;
};

const buildClassSnippets = ({ descriptionPrefix, classRegex, cssContent, initScope }: {
  descriptionPrefix: string;
  classRegex: RegExp;
  cssContent: string;
  initScope: string;
}) => {
  const snippets: { [name: string]: SnippetItem }[] = [];
  const classNames = new Set<string>();
  let match;
  while ((match = classRegex.exec(cssContent)) !== null) classNames.add(match[0]);
  const bemClassStructures = parseBEMClasses(classNames);
  const classSnippetSource = transformBemClassesToSnippetSource(bemClassStructures, `${descriptionPrefix} class`);
  for (const snippetName of Object.keys(classSnippetSource)) {
    if (!classSnippetSource[snippetName]) continue;
    const { initBody, prefix: initPrefix, placeholders, description } = classSnippetSource[snippetName];
    const snippetItem = buildSnippetItem({ description, initBody, initPrefix, scope: initScope, placeholders });
    const { scope, prefix, body } = snippetItem;
    snippets.push({ [snippetName]: { scope, prefix, body, description } });
  }
  return snippets;
};

const CSS_ROOT_REGEXP = /:root\s*\{([^}]*)\}/g;
const CSS_VARIABLE_REGEXP = /(?<!\.)--[a-zA-Z0-9_-]+(?=\s*:)/g;
// NOTE: Since variables do not need placeholders, pass an empty Set array
const CSS_VARIABLE_SNIPPET_PLACEHOLDERS = new Array<Set<string>>();
const buildRootCSSVariableSnippets = ({ descriptionPrefix, variableRegex = CSS_VARIABLE_REGEXP, cssContent, initScope }: {
  descriptionPrefix: string;
  variableRegex?: RegExp;
  cssContent: string;
  initScope: string;
}) => {
  const rootMatch = cssContent.match(CSS_ROOT_REGEXP);
  if (!rootMatch) return [];

  const snippets: { [name: string]: SnippetItem }[] = [];
  let rootCSSVariables = new Set<string>([]);
  for (const match of rootMatch) {
    rootCSSVariables = rootCSSVariables.union(extractCSSVariables(match, variableRegex));
  }
  if (rootCSSVariables.size === 0) return [];

  for (const variableName of rootCSSVariables) {
    const snippetItem = buildSnippetItem({
      description: `${descriptionPrefix} CSS variable ${variableName}`,
      initBody: variableName,
      initPrefix: variableName,
      scope: initScope,
      placeholders: CSS_VARIABLE_SNIPPET_PLACEHOLDERS,
    });
    snippets.push({ [variableName]: snippetItem });
  }
  return snippets;
};

const extractCSSVariables = (cssContent: string, variableRegex: RegExp): Set<string> => {
  const variables = new Set<string>();
  const matches = cssContent.match(variableRegex);
  if (matches) for (const match of matches) variables.add(match);
  return variables;
};

// NOTE: exported for testing
const CSS_VARIABLES_SNIPPET_SCOPE = "css" as const;
export const buildSnippets = ({ descriptionPrefix, classRegex, cssContent, initScope, outputRootCSSVariables }: {
  descriptionPrefix: string;
  classRegex: RegExp;
  cssContent: string;
  initScope: string;
  outputRootCSSVariables: boolean;
}) => {
  const snippets: { [name: string]: SnippetItem }[] = [];
  snippets.push(...buildClassSnippets({ descriptionPrefix, classRegex, cssContent, initScope }));
  if (outputRootCSSVariables) snippets.push(...buildRootCSSVariableSnippets({ descriptionPrefix, cssContent, initScope: CSS_VARIABLES_SNIPPET_SCOPE }));
  return snippets;
};

const isProduction = process.env["NODE_ENV"] === "production";
export const outputCssSnippetFilePlugin = (
  { scope, targetSelectorRegexp, snippetFileName, descriptionPrefix, outputRootCSSVariables = false }: {
    scope: string;
    targetSelectorRegexp: string;
    snippetFileName: string;
    descriptionPrefix: string;
    outputRootCSSVariables?: boolean;
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

          // NOTE: For robustness, we might want to add ReDoS checks, but since this is an internal plugin, it's acceptable
          const classRegex = new RegExp(targetSelectorRegexp, "g");
          const snippets: { [name: string]: SnippetItem }[] = [];
          for (const file of files) {
            const cssContent = readFileSync(file, "utf8");
            snippets.push(...buildSnippets({ descriptionPrefix, classRegex, cssContent, initScope: scope, outputRootCSSVariables }));
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
