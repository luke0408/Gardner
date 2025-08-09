
import type { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://api.github.com/graphql": {
        headers: {
          Authorization: `bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
        },
      },
    },
  ],
  documents: "src/**/*.ts",
  generates: {
    "src/api/graphql/index.ts": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
