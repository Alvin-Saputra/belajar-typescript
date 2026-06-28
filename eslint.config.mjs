import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser } 
  },
  tseslint.configs.recommended,
  // Tambahkan objek ini di paling bawah untuk menimpa aturan bawaan
  {
    rules: {
      // Mematikan aturan unused-vars dari TypeScript
      "@typescript-eslint/no-unused-vars": "off",
      
      // Opsional: Mematikan aturan unused-vars dari JavaScript bawaan 
      // (berjaga-jaga jika file .js kamu juga kena error serupa)
      "no-unused-vars": "off",
      "prefer-const": "off"
    }
  }
]);