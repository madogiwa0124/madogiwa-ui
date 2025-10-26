import { defineConfig } from "vite";
import postcssPresetEnv from "postcss-preset-env";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    // TODO: all types into a single file.
    // https://github.com/qmhc/unplugin-dts?tab=readme-ov-file#usage
    dts({
      tsconfigPath: "./tsconfig.json",
      outDir: "dist/types",
      include: ["src/**/*.ts", "src/**/*.vue"],
      exclude: ["src/**/*.test.ts"],
      insertTypesEntry: true,
      compilerOptions: {
        declaration: true,
        declarationMap: true,
      },
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "main",
      fileName: "madogiwa-ui-vue.min",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue", "@madogiwa-ui/css"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv(),
      ],
    },
  },
});
