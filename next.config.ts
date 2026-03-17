import type { NextConfig } from "next";

import fs from "fs";
import path from "node:path";

// Sync Service Worker version with package.json
function syncServiceWorkerVersion() {
  try {
    const packageJsonPath = path.join(process.cwd(), "package.json");
    const swPath = path.join(process.cwd(), "public", "sw.js");

    if (fs.existsSync(packageJsonPath) && fs.existsSync(swPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
      const version = packageJson.version;
      let swContent = fs.readFileSync(swPath, "utf8");

      const newCacheName = `calculadora-agua-v${version}`;
      const updatedContent = swContent.replace(
        /const CACHE_NAME = "[^"]+";/,
        `const CACHE_NAME = "${newCacheName}";`,
      );

      if (swContent !== updatedContent) {
        fs.writeFileSync(swPath, updatedContent);
        console.log(`[SW Sync] Updated CACHE_NAME to ${newCacheName}`);
      }
    }
  } catch (err) {
    console.error("[SW Sync] Failed to sync version:", err);
  }
}

// Run sync on config load
syncServiceWorkerVersion();

const nextConfig: NextConfig = {};

export default nextConfig;
