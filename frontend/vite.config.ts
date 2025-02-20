// vite.config.ts
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  plugins: [TanStackRouterVite({ autoCodeSplitting: true }), viteReact()],
  resolve: {
    alias: {
      // needs to be process.cwd() instead of __dirname to get it to work in the Docker container
      "@components": path.resolve(process.cwd(), "src/components"),
      "@backend": path.resolve(process.cwd(), "src/backend"),
    },
  },
});
