import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: [
      ...nextCoreWebVitals,
      ...compat.extends("plugin:tailwindcss/recommended"),
      ...compat.extends("prettier"),
      ...compat.extends("plugin:security/recommended-legacy"),
    ],

    rules: {
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/enforces-shorthand": "off",
      "tailwindcss/no-unnecessary-arbitrary-value": "off",
      "tailwindcss/migration-from-tailwind-2": "off",
      "no-unused-vars": "off",
    },
  },
]);
