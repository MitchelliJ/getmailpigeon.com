const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

const header = fs.readFileSync(path.join(root, "src/partials/header.html"), "utf8").trimEnd();
const footer = fs
  .readFileSync(path.join(root, "src/partials/footer.html"), "utf8")
  .trimEnd()
  .replace("{{YEAR}}", new Date().getFullYear());

const pages = [
  { src: "src/pages/index.html", out: "index.html" },
  { src: "src/pages/privacystatement.html", out: "privacystatement/index.html" },
  { src: "src/pages/termsofservice.html", out: "termsofservice/index.html" },
];

for (const { src, out } of pages) {
  const html = fs
    .readFileSync(path.join(root, src), "utf8")
    .replace("{{HEADER}}", header)
    .replace("{{FOOTER}}", footer);
  fs.writeFileSync(path.join(root, out), html);
}
