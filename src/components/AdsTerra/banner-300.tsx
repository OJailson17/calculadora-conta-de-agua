"use client";

import { useEffect } from "react";

export const AdsTerra300 = () => {
  useEffect(() => {
    (window as any).atOptions = {
      key: "2646cabd8215a7e47242cd86ff09f019",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    const script = document.createElement("script");
    script.src = `//www.highperformanceformat.com/2646cabd8215a7e47242cd86ff09f019/invoke.js`;
    script.async = true;
    document
      .getElementById(`container-2646cabd8215a7e47242cd86ff09f019`)
      ?.appendChild(script);
  }, []);

  return <div id="container-2646cabd8215a7e47242cd86ff09f019"></div>;
};
