import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import ts from "typescript-eslint";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import stylistic from '@stylistic/eslint-plugin'
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";

const ignoredFiles = [
  "eslint.config.js",
  "**/*/vite-env.d.ts",
  "**/.storybook/**",
  "**/storybook-static/**",
  "**/dist/**",
  "**/node_modules/**",
  "docs/**",
];

const jsRules = {
  "no-duplicate-imports": "error",
  "no-console": "warn",
  "no-var": "error",
  "prefer-const": "error",
  "no-useless-concat": "error",
  "no-promise-executor-return": "error",
  "require-atomic-updates": "error",
  "sort-imports": [
    "error",
    {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
    },
  ],
}

const tsRules = {
  "@typescript-eslint/no-import-type-side-effects": "error",
  "@typescript-eslint/prefer-nullish-coalescing": "error",
  "@typescript-eslint/prefer-optional-chain": "error",
  "@typescript-eslint/consistent-type-imports": ["error", {
    prefer: "type-imports"
  }],
  "@typescript-eslint/no-unused-vars": [
    "warn",
    {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_",
    },
  ],
}

const unicornRules = {
  "unicorn/no-null": "off",
  "unicorn/prefer-dom-node-text-content": "error",
  "unicorn/prefer-query-selector": "error",
  "unicorn/filename-case": [
    "error",
    {
      cases: {
        camelCase: true,
        pascalCase: true,
      },
    },
  ],
  "unicorn/prevent-abbreviations": [
    "error",
    {
      allowList: {
        "args": true,
        "props": true,
        "ref": true,
        "refs": true,
        "param": true,
        "params": true,
        "el": true,
        "elem": true,
      },
    },
  ],
}

export default defineConfig([
  globalIgnores(ignoredFiles),
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    extends: [
      js.configs.recommended,
      ts.configs.strictTypeChecked,
      unicorn.configs.recommended,
      stylistic.configs.customize({
        indent: 2,
        quotes: "double",
        semi: true,
        braceStyle: "1tbs",
      })
    ],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        parser: ts.parser,
        sourceType: "module",
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...jsRules,
      ...tsRules,
      ...unicornRules,
    },
  },
  {
    files: ["*.vue", "**/*.vue"],
    extends: [
      js.configs.recommended,
      ts.configs.strictTypeChecked,
      unicorn.configs.recommended,
      stylistic.configs.customize({
        indent: 2,
        quotes: "double",
        semi: true,
        braceStyle: "1tbs",
      }),
      ...vue.configs["flat/recommended"],
    ],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 2022,
        parser: ts.parser,
        sourceType: "module",
        projectService: true,
        tsconfigRootDir: `${import.meta.dirname}/packages/vue`,
        extraFileExtensions: [".vue"],
        disallowAutomaticSingleRunInference: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...jsRules,
      ...tsRules,
      ...unicornRules,
      "vue/block-lang": ["error", { script: { lang: "ts" } }],
      "vue/component-api-style": ["error", ["script-setup"]],
      // NOTE: The style block is prohibited because it is managed by `@madogiwa-ui/css`.
      "vue/no-restricted-block": ["error", "style"],
      "vue/block-order": ["error", { order: [["script", "template"], "style"] }],
      "vue/max-attributes-per-line": [
        "error",
        {
          singleline: { max: 6 },
          multiline: { max: 1 },
        },
      ],
      "vue/max-lines-per-block": [
        "error",
        {
          style: 50,
          template: 50,
          script: 50,
          skipBlankLines: true,
        },
      ],
      "@typescript-eslint/no-redundant-type-constituents": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "unicorn/prevent-abbreviations": [
        "error",
        {
          "replacements": {
            "btn": false,
          }
        }
      ]
    },
  },
  {
    files: ["**/MHeading/**/*", "**/MParagraph/**/*"],
    rules: {
      // NOTE: MHeading wraps components such as `h1` and `p`, so we disable it because we use file names such as `MH1` and `MP`.
      "unicorn/filename-case": "off",
    },
  },
]);
