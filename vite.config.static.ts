import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: "/kevin-portfolio/", // Repository name for GitHub Pages
  root: path.resolve(__dirname, "client"), // Set root to client directory
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
      "@assets": path.resolve(__dirname, "./attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"), // Output to project root dist folder
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "client/index.html"),
      },
    },
    copyPublicDir: false, // We'll handle 404.html manually
  },
  publicDir: false, // Don't use public dir, we'll copy 404.html manually
});
