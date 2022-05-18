import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
  root: "./src",
  base: "/firebolt-creator/",
  publicDir: "public",
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    VitePWA({
      manifest: { 
        name: "Name of your app",
        short_name: "Short name of your app",
        description: "Description of your app",
        theme_color: "#ffffff",
      },
    }),
  ],
  build: {
    outDir: "../dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
