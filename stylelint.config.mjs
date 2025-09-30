/** @type {import('stylelint').Config} */

const designTokenValueMap = {
  "/color/": ["/var/", "unset", "initial", "inherit", "transparent"],
  "font-size": ["/var/", "unset", "initial", "inherit"],
  "font-weight": ["/var/", "unset", "initial", "inherit"],
  "box-shadow": ["/var/", "unset", "initial", "inherit"],
  "line-height": ["/var/", "unset", "initial", "inherit"],
  "border-radius": ["/var/", "unset", "initial", "inherit"],
  "margin": ["/var/", "unset", "initial", "inherit", "auto", "0"],
  "padding": ["/var/", "unset", "initial", "inherit", "0"],
  "gap": ["/var/", "unset", "initial", "inherit", "0"],
  "z-index": ["/var/", "unset", "initial", "inherit"],
};

export default {
  extends: ["stylelint-config-standard"],
  plugins: [
    "@stylistic/stylelint-plugin",
    "stylelint-plugin-use-baseline",
  ],
  rules: {
    "declaration-property-value-allowed-list": [
      designTokenValueMap,
      {
        message: (property, value) =>
          `Unexpected value "${value}" for property "${property}". Please use design tokens defined in the foundation layer.`,
      },
    ],
    "import-notation": "string",
    "comment-empty-line-before": null,
    "plugin/use-baseline": [true, { available: "newly" }],
    'selector-class-pattern': [
      // BEM pattern: block[__element][--modifier] or --modifier (standalone)
      '^([a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?|--[a-z0-9]+(-[a-z0-9]+)*)$',
      {
        resolveNestedSelectors: true,
        message: function expected(selectorValue) {
          return `Expected class selector "${selectorValue}" to match BEM CSS pattern or standalone modifier pattern.
      Valid patterns:
      - .block
      - .block__element
      - .block--modifier
      - .block__element--modifier
      - .--modifier (standalone)
      Selector validation tool: https://regexr.com/3apms`;
        },
      },
    ],
  }
};
