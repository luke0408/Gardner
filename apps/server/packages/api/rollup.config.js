import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  input: `${__dirname}/../../src/api/index.ts`,
  output: {
    dir: `${__dirname}/lib`,
    format: "esm",
    entryFileNames: "[name].mjs",
    sourcemap: true,
  },
  plugins: [
    typescript({
      tsconfig: `${__dirname}/tsconfig.json`,
      module: "ESNext",
      target: "ESNext",
    }),
    terser({
      format: {
        comments: "some",
        beautify: true,
        ecma: "2020",
      },
      compress: false,
      mangle: false,
      module: true,
    }),
  ],
};
