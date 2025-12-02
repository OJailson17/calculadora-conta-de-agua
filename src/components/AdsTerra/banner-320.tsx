"use client";

import { useEffect } from "react";

export const AdsTerra320 = () => {
  useEffect(() => {
    (window as any).atOptions = {
      key: "b51938cf20b7f7685063413e3ed391f3",
      format: "iframe",
      height: 50,
      width: 320,
      params: {},
    };

    const script = document.createElement("script");
    script.src = `//www.highperformanceformat.com/b51938cf20b7f7685063413e3ed391f3/invoke.js`;
    script.async = true;
    document
      .getElementById(`container-b51938cf20b7f7685063413e3ed391f3`)
      ?.appendChild(script);
  }, []);

  return <div id="container-b51938cf20b7f7685063413e3ed391f3"></div>;
};
