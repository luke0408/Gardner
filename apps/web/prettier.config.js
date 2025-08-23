import baseConfig from "../../prettier.config.js";
import pluginSortImports from "@ianvs/prettier-plugin-sort-imports";

export default {
  ...baseConfig,
  plugins: [pluginSortImports],
  importOrder: [
    "^react",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/",
    "^[./]",
  ],
};
