import js from "@eslint/js"; // Todo: js 코드 삭제 후 같이 삭제
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import unicorn from "eslint-plugin-unicorn";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  // 무시할 패턴 설정
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/coverage/**",
      "**/public/**",
      "eslint.config.js",
    ],
  },

  // 기본 JS 규칙
  js.configs.recommended,

  // TypeScript ESLint 규칙
  {
    plugins: { "@typescript-eslint": tseslint },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": "off",
    },
  },

  // Unicorn 규칙
  {
    plugins: { unicorn },
    rules: {
      ...unicorn.configs.recommended.rules,
      "unicorn/prevent-abbreviations": "off",
      "unicorn/no-null": "off",
      "unicorn/prefer-query-selector": "off",
      "unicorn/better-regex": "off",
      "unicorn/no-useless-undefined": "off",
    },
  },

  // import / unused / 정렬 규칙
  {
    plugins: {
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",

      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];
