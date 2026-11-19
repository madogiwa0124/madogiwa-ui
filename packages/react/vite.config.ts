import { type BuildEnvironmentOptions, defineConfig } from "vite";
import postcssPresetEnv from "postcss-preset-env";
import react from "@vitejs/plugin-react";
import dts from "unplugin-dts/vite";

const plugins = (mode: string) => {
  if (mode === "demo") return [react()];

  return [
    react(),
    dts({
      processor: "ts",
      tsconfigPath: "./tsconfig.json",
      outDirs: "dist/types",
      insertTypesEntry: true,
      bundleTypes: true,
      exclude: ["demo/**", "index.tsx", "src/**/*.test.tsx"],
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
      rolldownOptions: {
        input: "./index.html",
      },
    };
  }

  return {
    lib: {
      entry: "src/index.ts",
      fileName: "madogiwa-ui-react.min",
      formats: ["es"],
    },
    rolldownOptions: {
      // NOTE: Bundling the JSX runtime or clsx would ship a second copy alongside the consumer's, so leave every dependency to the consumer's bundler.
      external: ["react", "react-dom", "react/jsx-runtime", "clsx", "@madogiwa-ui/css"],
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
  plugins: [...plugins(mode)],
  build: build(mode),
  css: {
    postcss: {
      plugins: [postcssPresetEnv()],
    },
  },
}));
