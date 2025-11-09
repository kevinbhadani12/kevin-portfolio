import { copyFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  copyFileSync(
    resolve(__dirname, "client/404.html"),
    resolve(__dirname, "dist/404.html")
  );
  console.log("✅ Copied 404.html to dist/");
} catch (error) {
  console.error("❌ Failed to copy 404.html:", error.message);
  process.exit(1);
}
