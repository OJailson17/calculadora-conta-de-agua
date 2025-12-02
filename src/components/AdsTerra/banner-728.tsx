"use client";

import { useEffect } from "react";

export const AdsTerra728 = () => {
  useEffect(() => {
    (window as any).atOptions = {
      key: "f392fbd273c8862c1bb01a096db3ed68",
      format: "iframe",
      height: 90,
      width: 728,
      params: {},
    };

    const script = document.createElement("script");
    script.src = `//www.highperformanceformat.com/f392fbd273c8862c1bb01a096db3ed68/invoke.js`;
    script.async = true;
    document
      .getElementById(`container-f392fbd273c8862c1bb01a096db3ed68`)
      ?.appendChild(script);
  }, []);

  return <div id="container-f392fbd273c8862c1bb01a096db3ed68"></div>;
};
