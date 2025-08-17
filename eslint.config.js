import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import ts from "typescript-eslint";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import stylistic from '@stylistic/eslint-plugin'

const ignoredFiles = [
  "eslint.config.js",
  "**/*/vite-env.d.ts",
  "**/dist/**",
  "**/node_modules/**"
];

export default defineConfig([
  globalIgnores(ignoredFiles),
  js.configs.recommended,
  ...ts.configs.strictTypeChecked,
  unicorn.configs.recommended,
  stylistic.configs.customize({
    indent: 2,
    quotes: "double",
    semi: true,
  }),
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        parser: ts.parser,
        sourceType: "module",
        project: ["./tsconfig.json"],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    rules: {
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
    },
  },
]);
