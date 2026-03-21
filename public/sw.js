const CACHE_NAME = "calculadora-agua-v0.2.4";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Assets to pre-cache on install (app shell)
const PRECACHE_ASSETS = [
  "/",
  "/site.webmanifest",
  "/favicon.svg",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/apple-touch-icon.png",
];

// Install: pre-cache the app shell and dynamically generated Next.js assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(PRECACHE_ASSETS);

      try {
        // Fetch the HTML to find dynamically generated Next.js assets
        const response = await fetch("/");
        if (response.ok) {
          const html = await response.text();
          const assetUrls = [];

          // Find CSS, JS, and Media from Next.js static folder
          const regex = /(?:href|src)="(\/_next\/static\/[^"]+)"/g;
          for (const match of html.matchAll(regex)) {
            assetUrls.push(match[1]);
          }

          // Find Next.js images
          const imgRegex = /(?:href|src)="(\/_next\/image\?[^"]+)"/g;
          for (const match of html.matchAll(imgRegex)) {
            assetUrls.push(match[1].replace(/&amp;/g, "&"));
          }

          if (assetUrls.length > 0) {
            // Deduplicate to avoid fetching the same resource twice
            const uniqueUrls = [...new Set(assetUrls)].filter(
              (url) => !url.includes("google-analytics"),
            );

            // Cache them without failing the whole install if one fails
            await Promise.allSettled(
              uniqueUrls.map((url) =>
                fetch(url).then((res) => {
                  if (res.ok) cache.put(url, res);
                }),
              ),
            );
          }
        }
      } catch (err) {
        console.error("Failed to parse and cache Next.js assets", err);
      }

      self.skipWaiting();
    })(),
  );
});

// Activate: clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

// Fetch: stale-while-revalidate for same-origin; network-only for cross-origin
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Skip chrome-extension and non-http(s) requests
  if (!url.protocol.startsWith("http")) return;

  // Cross-origin requests (e.g. Google Fonts, Analytics): network-only
  if (url.origin !== self.location.origin) return;

  // Ignore development, HMR and Next.js internal API requests
  if (
    url.pathname.startsWith("/_next/webpack-hmr") ||
    url.pathname.includes("hot-update.") ||
    url.pathname.includes("__nextjs_original-stack-frame") ||
    url.searchParams.has("_rsc")
  ) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache
        .match(request, {
          ignoreSearch: request.mode === "navigate",
          ignoreVary: true,
        })
        .then((cached) => {
          const networkFetch = fetch(request)
            .then((response) => {
              // Cache successful same-origin responses
              if (response.ok) {
                cache.put(request, response.clone());
              }
              return response;
            })
            .catch(() => {
              // Return cached version if network fails
              if (cached) return cached;
              // Fallback to the root page for navigation requests
              if (request.mode === "navigate") {
                return cache.match("/", { ignoreVary: true });
              }
            });

          // Return cached immediately if available, fetch in background (stale-while-revalidate)
          return cached || networkFetch;
        }),
    ),
  );
});
