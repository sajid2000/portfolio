/** @type {import("eslint").Linter.Config} */
module.exports = {
    plugins: ["import"],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:tailwindcss/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:astro/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        sourceType: "module",
        ecmaVersion: "latest",
    },
    overrides: [
        {
            files: ["*.astro"],
            parser: "astro-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
            },
            rules: {
                "tailwindcss/no-custom-classname": 0,
                /************************* plugin import ************************/
                "import/named": 0,
                "import/no-unresolved": 0,
                "import/extensions": [
                    "error",
                    "never",
                    {
                        svg: "always",
                        astro: "always",
                        jpg: "always",
                    },
                ],
                "import/order": [
                    "error",
                    {
                        groups: ["builtin", "external", "internal"],
                        pathGroups: [
                            {
                                pattern: "@/**",
                                group: "internal",
                                position: "after",
                            },
                        ],
                        "newlines-between": "always",
                        alphabetize: {
                            order: "asc",
                            caseInsensitive: true,
                        },
                    },
                ],
            },
        },
    ],
}
