import path from "node:path";
import { fileURLToPath } from "node:url";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
    baseDirectory: dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    ...fixupConfigRules(compat.extends("airbnb", "airbnb-typescript", "standard-with-typescript", "plugin:react/recommended", "prettier")),
    {
        ignores: [
            "**/*.js",
            ".next/*",
            "out/*",
            "build/*",
            "public/*",
            "node_modules/*",
            "src/api/*",
            "eslint.config.mjs",
            "next-env.d.ts",
            "next.config.js",
            "postcss.config.js",
            "tailwind.config.ts",
        ],
    },
    {
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
            "no-restricted-imports": [
                "error",
                {
                    patterns: ["../*"],
                },
            ],

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
            "no-restricted-syntax": "off",
            "no-plusplus": "off",

            "import/order": [
                "error",
                {
                    alphabetize: {
                        order: "asc",
                    },
                },
            ],

            "unused-imports/no-unused-imports": "error",
            "react-refresh/only-export-components": "warn",
        },
    },
];
