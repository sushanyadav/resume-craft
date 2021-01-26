module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: ["prettier/react", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": 0,
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
