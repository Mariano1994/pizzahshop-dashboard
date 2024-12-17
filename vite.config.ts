import path from "node:path";
import { defineConfig } from "vite";
import { UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import type {InlineConfig} from 'vitest'


// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  //Vitest Configurations
  test: {
    globals: true
  }
} as UserConfig & {
  test: InlineConfig
});
