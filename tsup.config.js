import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  tsconfig: "tsconfig.json",
  minify: "terser",
  // dts: true,
  skipNodeModulesBundle: true,
  noExternal: [],
  terserOptions: {
    ecma: 2015,
    sourceMap: true,
  },
  platform: "node",
  format: ["cjs", "esm"],
  dts: true,
});
