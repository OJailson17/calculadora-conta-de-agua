"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function PrivacyConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("privacy-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("privacy-consent", "true");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md duration-300 animate-in fade-in slide-in-from-bottom-5 sm:left-auto sm:right-4 sm:mx-0">
      <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-xl shadow-black/10 dark:border-gray-800 dark:bg-gray-950">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          aria-label="Fechar"
        >
          <X size={16} />
        </button>

        <div className="space-y-2 pr-6">
          <h3 className="text-lg font-semibold leading-none tracking-tight text-gray-900 dark:text-gray-50">
            Privacidade e Cookies
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Este site utiliza dados de navegação para entender como os usuários
            interagem com nosso conteúdo e melhorar sua experiência.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleAccept}
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900 disabled:pointer-events-none disabled:opacity-50"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}
