import { type BuildEnvironmentOptions, defineConfig } from "vite";
import postcssPresetEnv from "postcss-preset-env";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

const plugins = (mode: string) => {
  if (mode === "demo") return [vue()];

  return [
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
  ];
};

const build = (mode: string): BuildEnvironmentOptions => {
  if (mode === "demo") {
    return {
      outDir: "dist/demo",
      emptyOutDir: false,
      rollupOptions: {
        input: "./index.html",
      },
    };
  }

  return {
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
  };
};

export default defineConfig(({ mode }) => ({
  plugins: [
    ...plugins(mode),
  ],
  build: build(mode),
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv(),
      ],
    },
  },
}));
