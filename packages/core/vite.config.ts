import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "MistUI",
      fileName: "mist-ui",
      formats: ["es"],
    },
  },
});