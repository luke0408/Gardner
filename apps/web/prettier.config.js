import baseConfig from "../../prettier.config.js";

export default {
  ...baseConfig,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^react",
    "<THIRD_PARTY_MODULES>",
    "^@/",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
};
