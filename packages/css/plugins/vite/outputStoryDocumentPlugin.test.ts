import { type TestContext, describe, test } from "node:test";
// workaround for `Error [ERR_MODULE_NOT_FOUND]: Cannot find module` in Node.js v22 Test
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { extractDocumentation } from "./outputStoryDocumentPlugin.ts";

void describe("outputStoryDocumentPlugin", () => {
  void test("extractDocumentation", async (t: TestContext) => {
    await t.test("should extract title and description with simple markdown", () => {
      const content = `
        export default {
          title: "Components/Button",
          parameters: {
            docs: {
              description: {
                component: \`
                  ### Overview
                  This is a button component.
                  ### Usage
                  Use it for actions.
                \`,
              },
            },
          },
        };
      `;

      const result = extractDocumentation(content, "Button.stories.ts");
      t.assert.deepStrictEqual(result, {
        title: "Components/Button",
        description: `### Overview
                  This is a button component.
                  ### Usage
                  Use it for actions.`,
        filePath: "Button.stories.ts",
      });
    });

    await t.test("should extract title and description with code blocks", () => {
      const content = `
        export default {
          title: "Components/Badge",
          parameters: {
            docs: {
              description: {
                component: \`
                  ### Overview
                  Badge component for displaying status.

                  ### Usage Example
                  \\\`\\\`\\\`html
                  <div class="m-badge --primary">New</div>
                  <div class="m-badge --danger">Error</div>
                  \\\`\\\`\\\`

                  ### JavaScript Example
                  \\\`\\\`\\\`js
                  const badge = document.createElement('div');
                  badge.className = 'm-badge --primary';
                  badge.textContent = 'Success';
                  \\\`\\\`\\\`

                  ### Notes
                  Use responsibly.
                \`,
              },
            },
          },
        };
      `;

      const result = extractDocumentation(content, "Badge.stories.ts");
      t.assert.ok(result);
      t.assert.strictEqual(result.title, "Components/Badge");
      t.assert.ok(result.description.includes("### Overview"));
      t.assert.ok(result.description.includes("Badge component for displaying status"));
      t.assert.ok(result.description.includes("### Usage Example"));
      t.assert.ok(result.description.includes("```html"));
      t.assert.ok(result.description.includes("m-badge --primary"));
      t.assert.ok(result.description.includes("### JavaScript Example"));
      t.assert.ok(result.description.includes("```js"));
      t.assert.ok(result.description.includes("document.createElement"));
      t.assert.ok(result.description.includes("### Notes"));
    });

    await t.test("should handle double quotes", () => {
      const content = `
        export default {
          title: "Components/Alert",
          parameters: {
            docs: {
              description: {
                component: "Simple alert component with variants.",
              },
            },
          },
        };
      `;

      const result = extractDocumentation(content, "Alert.stories.ts");
      t.assert.deepStrictEqual(result, {
        title: "Components/Alert",
        description: "Simple alert component with variants.",
        filePath: "Alert.stories.ts",
      });
    });

    await t.test("should handle single quotes", () => {
      const content = `
        export default {
          title: 'Components/Card',
          parameters: {
            docs: {
              description: {
                component: 'Card component with header and body.',
              },
            },
          },
        };
      `;

      const result = extractDocumentation(content, "Card.stories.ts");
      t.assert.deepStrictEqual(result, {
        title: "Components/Card",
        description: "Card component with header and body.",
        filePath: "Card.stories.ts",
      });
    });

    await t.test("should handle escaped quotes in template literals", () => {
      const content = `
        export default {
          title: "Components/Input",
          parameters: {
            docs: {
              description: {
                component: \`
                  ### Overview
                  Input component with \\\`placeholder\\\` support.

                  \\\`\\\`\\\`html
                  <input class="m-input" placeholder="Enter text" />
                  \\\`\\\`\\\`

                  Use it for form \\\`input\\\` fields.
                \`,
              },
            },
          },
        };
      `;

      const result = extractDocumentation(content, "Input.stories.ts");
      t.assert.ok(result);
      t.assert.strictEqual(result.title, "Components/Input");
      t.assert.ok(result.description.includes("Input component with `placeholder` support"));
      t.assert.ok(result.description.includes("```html"));
      t.assert.ok(result.description.includes("Use it for form `input` fields"));
    });

    await t.test("should return null if title is missing", () => {
      const content = `
        export default {
          parameters: {
            docs: {
              description: {
                component: "Component without title",
              },
            },
          },
        };
      `;

      const result = extractDocumentation(content, "NoTitle.stories.ts");
      t.assert.strictEqual(result, null);
    });

    await t.test("should return null if description is missing", () => {
      const content = `
        export default {
          title: "Components/NoDesc",
        };
      `;

      const result = extractDocumentation(content, "NoDesc.stories.ts");
      t.assert.strictEqual(result, null);
    });

    await t.test("should return null if parameters structure is missing", () => {
      const content = `
        export default {
          title: "Components/Simple",
          argTypes: {
            label: { control: 'text' }
          }
        };
      `;

      const result = extractDocumentation(content, "Simple.stories.ts");
      t.assert.strictEqual(result, null);
    });
  });
});
