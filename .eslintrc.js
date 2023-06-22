module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:compat/recommended", // Lints browser compatibility
    "plugin:react-hooks/recommended",
    "plugin:security/recommended",
    "plugin:styled-components-a11y/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "simple-import-sort",
    "better-styled-components",
    "@typescript-eslint",
    "deprecate",
    "security",
    "styled-components-a11y",
    "jsx-a11y",
    "prettier",
    "react",
    "react-hooks",
  ],
  rules: {
    // In react 17 importing react is not mandatory in jsx files (only for storybook)
    "react/react-in-jsx-scope": 0,
    // In react 17 importing react is not mandatory in jsx files (only for storybook)
    "react/jsx-uses-react": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "better-styled-components/sort-declarations-alphabetically": "error",
    "simple-import-sort/sort": [
      "error",
      {
        groups: [["^@?\\w"], ["^[^.]"], ["^\\."], ["^\\u0000"]],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {
    JSX: true,
  },
};
