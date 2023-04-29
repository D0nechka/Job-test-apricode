module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    "react/react-in-jsx-scope": "off",
    "indent": ["error", 4],
    "key-spacing": ["error"],
    "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
    "no-trailing-spaces": ["error", { "ignoreComments": true }],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "max-len": ["error", { "code": 120 }],
    "object-shorthand": ["error"],
    "array-bracket-spacing":["error","always"],
    "object-curly-spacing":["error","always"],
    "@typescript-eslint/no-var-requires": "off",
    "comma-dangle": ["error", {
      "objects": "always"
    }],
    "quotes": [
      "error",
      "single"
    ],
    "semi": ["error"]
  },
}
