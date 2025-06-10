import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

/**
 * Todo:
 *  ファイル名の命名規則を設定
 *  Prettierの設定を追加(別ファイル)
 */

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        // 変数・定数
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          leadingUnderscore: "allow",
        },
        // 関数・メソッド・コンポーネント
        {
          selector: ["function", "method"],
          format: ["camelCase", "PascalCase"],
        },
        // クラス・型
        {
          selector: ["class", "typeLike"],
          format: ["PascalCase"],
        },
      ],
    },
  }
);
