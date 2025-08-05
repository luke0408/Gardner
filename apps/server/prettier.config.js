import baseConfig from "../../prettier.config"

module.exports = {
  ...baseConfig,

  // PLUG-IN CONFIGURATIONS
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@luke0408/gardner-api(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ["decorators-legacy", "typescript"],
};
