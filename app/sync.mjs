// Copies ../Daydream.html into dist/index.html for the desktop build.
// Swaps the Google Fonts links for the bundled copies in dist/fonts so the app works offline.
import { readFile, writeFile } from "node:fs/promises";

const src = new URL("../Daydream.html", import.meta.url);
const out = new URL("./dist/index.html", import.meta.url);

let html = await readFile(src, "utf8");
html = html
  .replace(/<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\s*/, "")
  .replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^"]*">/, '<link rel="stylesheet" href="fonts/fonts.css">')
  .replace(/<meta name="claude:[^>]*>\s*/g, "");

if (html.includes("fonts.googleapis.com")) throw new Error("Daydream.html still references Google Fonts; update sync.mjs");
await writeFile(out, html);
console.log("dist/index.html updated from Daydream.html");
