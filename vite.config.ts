import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  base: "http://localhost:8080/api/v1/online",
  server: {
    origin: "http://3.34.81.239:8080/api/v1/online",
  },
});
