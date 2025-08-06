import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

import eslintPluginImport from "eslint-plugin-import";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginTestingLibrary from "eslint-plugin-testing-library";
import eslintPluginJestDom from "eslint-plugin-jest-dom";
import eslintPluginTailwind from "eslint-plugin-tailwindcss";
import eslintPluginVitest from "eslint-plugin-vitest";
import eslintPluginCheckFile from "eslint-plugin-check-file";

import baseConfig from "../../eslint.config.js";

export default [
  // Base JS configuration
  ...baseConfig,

  // TypeScript + React + Additional Plugins
  {
    files: ["**/*.{ts,tsx}"],
    extends: [reactHooks.configs["recommended-latest"]],
    settings: {
      react: { version: "detect" },
      "import/resolver": { typescript: {} },
    },
    plugins: {
      import: eslintPluginImport,
      react: eslintPluginReact,
      "jsx-a11y": eslintPluginJsxA11y,
      prettier: eslintPluginPrettier,
      "testing-library": eslintPluginTestingLibrary,
      "jest-dom": eslintPluginJestDom,
      tailwindcss: eslintPluginTailwind,
      vitest: eslintPluginVitest,
      "check-file": eslintPluginCheckFile,
    },
    rules: {
      // Path restrictions (feature isolation + unidirectional imports)
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            { target: "./src/features", from: "./src/app" },
            {
              target: [
                "./src/components",
                "./src/hooks",
                "./src/lib",
                "./src/types",
                "./src/utils",
              ],
              from: ["./src/features", "./src/app"],
            },
          ],
        },
      ],
      "import/no-cycle": "error",
      "linebreak-style": ["error", "unix"],
      "react/prop-types": "off",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/default": "off",
      "import/no-named-as-default-member": "off",
      "import/no-named-as-default": "off",
      "react/react-in-jsx-scope": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/explicit-function-return-type": ["off"],
      "@typescript-eslint/explicit-module-boundary-types": ["off"],
      "@typescript-eslint/no-empty-function": ["off"],
      "@typescript-eslint/no-explicit-any": ["off"],
      "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      "check-file/filename-naming-convention": [
        "error",
        { "**/*.{ts,tsx}": "KEBAB_CASE" },
        { ignoreMiddleExtensions: true },
      ],
    },
  },

  // Folder naming convention (non-test)
  {
    files: ["src/**/!(__tests__)/*"],
    plugins: { "check-file": eslintPluginCheckFile },
    rules: {
      "check-file/folder-naming-convention": [
        "error",
        { "**/*": "KEBAB_CASE" },
      ],
    },
  },
];
