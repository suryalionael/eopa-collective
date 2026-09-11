import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    // Source resources, not application code — see docs/ARCHITECTURE.md.
    ignores: [
      "out/**",
      ".next/**",
      "node_modules/**",
      "Website Design/**",
      "Content/**",
      "Pictures/**",
      "Logo/**",
    ],
  },
];

export default eslintConfig;
