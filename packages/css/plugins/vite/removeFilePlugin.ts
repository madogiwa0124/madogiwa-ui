/* eslint-disable no-console */
import type { Plugin } from "vite";
import { globSync, rmSync } from "node:fs";

const isProduction = process.env["NODE_ENV"] === "production";

export const removeFilePlugin = (glob: string, silent: boolean = false): Plugin => {
  return {
    name: "remove-file",
    closeBundle() {
      if (isProduction) {
        try {
          const files = globSync(glob);
          for (const file of files) {
            rmSync(file, { force: true });
            if (!silent) console.info(`Removed file: ${file}`);
          }
          if (files.length === 0 && !silent) {
            console.info(`No files matched pattern: ${glob}`);
          }
        } catch (error) {
          console.error(`Error removing files with pattern ${glob}:`, error);
        }
      }
    },
  };
};
