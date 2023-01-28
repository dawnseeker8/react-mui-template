module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "import",
    "react",
    "@typescript-eslint",
    "jest",
    "eslint-plugin-material-ui",
    "eslint-plugin-react-hooks",
    "@typescript-eslint/eslint-plugin",
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "linebreak-style": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "prettier/prettier": [
      "error",
      {
        // Otherwise the rule thinks inner props = outer props
        // But in TypeScript we want to know that a certain prop is defined during render
        // while it can be ommitted from the callsite.
        // Then defaultProps (or default values) will make sure that the prop is defined during render
        allowRequiredDefaults: true,
      },
    ],
    // Can add verbosity to small functions making them harder to grok.
    // Though we have to manually enforce it for function components with default values.
    "react/destructuring-assignment": "off",
    "react/forbid-prop-types": "off", // Too strict, no time for that
    "react/jsx-curly-brace-presence": "off", // broken
    // airbnb is using .jsx
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".tsx"] }],
    // Prefer <React.Fragment> over <>.
    "react/jsx-fragments": ["error", "element"],
    // Enforces premature optimization
    "react/jsx-no-bind": "off",
    // We are a UI library.
    "react/jsx-props-no-spreading": "off",
    // This rule is great for raising people awareness of what a key is and how it works.
    "react/no-array-index-key": "off",
    "react/no-danger": "error",
    "react/no-direct-mutation-state": "error",
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.js", "**/*.spec.js"] },
    ],
    // Not always relevant
    "react/require-default-props": "off",
    "react/sort-prop-types": "error",
    // This depends entirely on what you're doing. There's no universal pattern
    "react/state-in-constructor": "off",
    // stylistic opinion. For conditional assignment we want it outside, otherwise as static
    "react/static-property-placement": "off",

    "no-restricted-syntax": [
      "error",
      {
        message:
          "Do not import default from React. Use a namespace import (import * as React from 'react';) instead.",
        selector:
          'ImportDeclaration[source.value="react"] ImportDefaultSpecifier',
      },
    ],

    // We re-export default in many places, remove when https://github.com/airbnb/javascript/issues/2500 gets resolved
    "no-restricted-exports": "off",
    // Some of these occurences are deliberate and fixing them will break things in repos that use @monorepo dependency
    "import/no-relative-packages": "off",
    // Avoid accidental auto-"fixes" https://github.com/jsx-eslint/eslint-plugin-react/issues/3458
    "react/no-invalid-html-attribute": "off",

    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
  },
};
