import { dirname } from "path";
import { fileURLToPath } from "url";
import { eslintrc } from "@eslint/eslintrc";
import configNextJs from "eslint-config-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { FlatCompat } = eslintrc;
const compat = new FlatCompat();

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "warn"
    }
  }
];

export default eslintConfig;
