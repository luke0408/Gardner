import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://docs.github.com/public/fpt/schema.docs.graphql": {
        method: "GET",
        handleAsSDL: true,
        headers: {
          "User-Agent": "@luke0408/gardner-api",
        },
      },
    },
  ],
  documents: "src/api/structures/github/queries.ts",
  generates: {
    "src/api/graphql/operations.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typed-document-node"
      ],
      config: {
        useTypeImports: true,
        avoidOptionals: true,
        scalars: {
          URI: "string",
          Date: "string",
          DateTime: "string"
        }
      }
    },
  },
};
export default config;
