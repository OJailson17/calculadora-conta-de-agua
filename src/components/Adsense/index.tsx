"use client";
import { useEffect, useRef } from "react";

interface AdsenseProps {
  className?: string;
  addSlot: string;
}

export default function AdSense({ className, addSlot }: AdsenseProps) {
  const insRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // ignore push errors
    }
  }, []);

  return (
    <div className={className} ref={insRef}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6549347220559150"
        data-ad-slot={addSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
