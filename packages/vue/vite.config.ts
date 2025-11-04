import { type BuildEnvironmentOptions, defineConfig } from "vite";
import postcssPresetEnv from "postcss-preset-env";
import vue from "@vitejs/plugin-vue";
import dts from "unplugin-dts/vite";

const plugins = (mode: string) => {
  if (mode === "demo") return [vue()];

  return [
    vue(),
    dts({
      processor: "vue",
      tsconfigPath: "./tsconfig.json",
      outDirs: "dist/types",
      insertTypesEntry: true,
      bundleTypes: true,
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

const base = (mode: string) => {
  // NOTE: In demo mode, the hosting is assumed to be in a subdirectory, so the base is set to "./" to prevent broken links
  return mode === "demo" ? "./" : "/";
};

export default defineConfig(({ mode }) => ({
  base: base(mode),
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
