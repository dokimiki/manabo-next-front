import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
    "airbnb",
    "airbnb-typescript",
    "standard-with-typescript",
    "plugin:react/recommended",
    "prettier",
)), {
    plugins: {
        react: fixupPluginRules(react),
        "unused-imports": unusedImports,
        "react-refresh": reactRefresh,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            project: ["./tsconfig.json"],
        },
    },

    rules: {
        "no-restricted-imports": ["error", {
            patterns: ["../*"],
        }],

        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-uses-react": "off",
        "no-underscore-dangle": "off",
        "react/jsx-props-no-spreading": "off",
        "import/no-extraneous-dependencies": ["off"],
        "react/no-unstable-nested-components": "off",
        "react/jsx-sort-props": "warn",
        "react/require-default-props": "off",
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",

        "import/order": ["error", {
            alphabetize: {
                order: "asc",
            },
        }],

        "unused-imports/no-unused-imports": "error",
        "react-refresh/only-export-components": "warn",
    },
}];