import { readdirSync } from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";

const projectDir = resolve(__dirname, "projects");
const projectPages = readdirSync(projectDir)
  .filter((file) => file.endsWith(".html"))
  .reduce((entries, file) => {
    const name = file.replace(".html", "");
    entries[`projects/${name}`] = resolve(projectDir, file);
    return entries;
  }, {});

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        services: resolve(__dirname, "services.html"),
        work: resolve(__dirname, "work.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        ...projectPages,
      },
    },
  },
});
