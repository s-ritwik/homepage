import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function copyGithubPagesStaticFiles() {
  const filesToCopy = [
    ["assets", "dist/assets"],
    [".nojekyll", "dist/.nojekyll"],
    ["Research.html", "dist/Research.html"],
    ["Contact.html", "dist/Contact.html"],
  ];

  return {
    name: "copy-github-pages-static-files",
    closeBundle() {
      for (const [from, to] of filesToCopy) {
        const source = resolve(from);
        const destination = resolve(to);

        if (!existsSync(source)) continue;

        mkdirSync(dirname(destination), { recursive: true });
        cpSync(source, destination, { recursive: true });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyGithubPagesStaticFiles()],
  base: "./",
});
