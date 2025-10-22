/* eslint-disable no-console */
import type { Plugin } from "vite";
import { globSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

interface SoutputStoryDocumentPluginOptions {
  outputPath?: string;
  storiesPattern?: string;
  frontMatter?: Record<string, unknown>;
}

interface ComponentDocument {
  title: string;
  description: string;
  filePath: string;
}

export const outputStoryDocumentPlugin = (options: SoutputStoryDocumentPluginOptions = {}): Plugin => {
  const {
    outputPath = "docs/components-ai-context.md",
    storiesPattern = "stories/**/*.stories.@(js|ts)",
    frontMatter = {
      title: "Madogiwa UI Components Documentation",
      description: "Auto-generated documentation from Storybook stories for AI context",
      generated: true,
    },
  } = options;

  return {
    name: "output-storybook-docs",
    writeBundle: () => {
      try {
        const storyFiles = globSync(storiesPattern, { cwd: process.cwd() });
        const componentDocuments: ComponentDocument[] = [];

        // 各Storyファイルを解析
        for (const filePath of storyFiles) {
          const content = readFileSync(filePath, "utf8");
          const document_ = extractDocumentation(content, filePath);
          if (document_) {
            componentDocuments.push(document_);
          }
        }

        const mdContent = generateMarkdown(componentDocuments, frontMatter);
        const mdContentKbytes = (Buffer.byteLength(mdContent, "utf8") / 1024).toFixed(2);
        const outputDirectory = path.dirname(outputPath);
        mkdirSync(outputDirectory, { recursive: true });
        writeFileSync(outputPath, mdContent, "utf8");

        console.log(`CSS Story documentation created: ${outputPath} (${String(componentDocuments.length)} components, ${mdContentKbytes} KB)`);
      } catch (error) {
        console.error("❌ Failed to generate CSS Story documentation:", error);
      }
    },
  };
};

const COMPONENT_TITLE_REGEX = /title:\s*["']([^"']+)["']/;
const COMPONENT_DESCRIPTION_REGEX
  = /parameters:\s*{[^}]*docs:\s*{[^}]*description:\s*{[^}]*component:\s*[`"']([^`"'\\]*(?:\\.[^`"'\\]*)*)[`"']/s;
const extractDocumentation = (
  content: string,
  filePath: string,
  componentTitleRegex = COMPONENT_TITLE_REGEX,
  componentDescriptionRegex = COMPONENT_DESCRIPTION_REGEX,
): ComponentDocument | null => {
  try {
    const title = content.match(componentTitleRegex)?.[1];
    const description = content.match(componentDescriptionRegex)?.[1];

    if (title && description) {
      return {
        title,
        description: description.trim(),
        filePath,
      };
    }

    return null;
  } catch (error) {
    console.warn(`⚠️ Failed to parse ${filePath}:`, error);
    return null;
  }
};

const generateMarkdown = (documents: ComponentDocument[], frontMatter: Record<string, unknown>): string => {
  const frontMatterSection = Object.entries(frontMatter)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join("\n");

  const componentsSection = documents
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((document) => {
      const componentName = document.title.replace("Components/", "");
      return `## ${componentName}\n\n${document.description}\n\n---\n`;
    }).join("\n");

  return buildStorybookDocumentMarkdown(
    frontMatterSection,
    componentsSection,
    new Date(),
  );
};

const buildStorybookDocumentMarkdown = (
  frontMatterSection: string,
  componentsSection: string,
  timeStamp: Date,
) => `---
${frontMatterSection}
generated_at: ${timeStamp.toISOString()}
---

# Madogiwa UI Components Documentation

This documentation is automatically generated from Storybook stories for AI context and reference.

${componentsSection}
## Usage Notes

- This documentation is auto-generated from \`parameters.docs.description.component\` in Storybook stories
- For the most up-to-date information, refer to the actual Storybook stories
- Generated at: ${timeStamp.toLocaleString()}
`;
