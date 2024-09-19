import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021, // Add this for modern JS syntax support
      sourceType: "module", // Necessary if you're using ES modules (e.g., `import/export`)
    },
    plugins: {
      react: react, // Define the react plugin
    },
    rules: {
      // Add your custom rules here
      "react/react-in-jsx-scope": "off", // Disable the rule for React 17+
      "react/prop-types": "off", // Optionally turn off prop-types if you're using TypeScript
    },
  },
  js.configs.recommended, // Add the recommended JS config
  react.configs.flat.recommended, // Add the recommended React config
];
