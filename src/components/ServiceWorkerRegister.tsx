"use client";

import { useEffect } from "react";

const DEV_SW = true;

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const isLocal =
      location.hostname === "localhost" ||
      location.hostname === "127.0.0.1" ||
      location.hostname === "[::1]";

    if (isLocal && !DEV_SW) return;

    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .then((registration) => {
        if (registration.waiting) {
          registration.waiting.postMessage({ type: "SKIP_WAITING" });
        }
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (!newWorker) return;

          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              newWorker.postMessage({ type: "SKIP_WAITING" });
            }
          });
        });
      })
      .catch((err) => {
        console.error("[SW] Registration failed:", err);
      });
  }, []);

  return null;
}
