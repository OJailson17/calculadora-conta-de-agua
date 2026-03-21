"use client";

import { useEffect, useRef, useState } from "react";
// import { AdsTerraNativeBanner1 } from "./AdsTerra/native-banner-1";

export const CalculationResult = ({ totalPrice }: { totalPrice: number }) => {
  const [isScreenReady, setIsScreenReady] = useState(false);
  const myRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (totalPrice > 0 && myRef.current) {
      myRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    setIsScreenReady(false);

    setTimeout(() => {
      setIsScreenReady(true);
    }, 500);
  }, [totalPrice]);

  return (
    <div
      id="#result"
      ref={myRef}
      className="flex flex-col items-center justify-center gap-6 text-center"
    >
      <div className="flex h-12 items-center justify-center rounded-full bg-white/20 px-6 backdrop-blur-sm">
        <p className="text-sm font-medium uppercase tracking-widest text-white/90">
          Total Estimado
        </p>
      </div>

      <div className="flex flex-col items-center gap-2">
        {isScreenReady ? (
          <p className="text-5xl font-extrabold tracking-tight sm:text-6xl text-white drop-shadow-sm">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(totalPrice)}
          </p>
        ) : (
          <p className="text-5xl font-extrabold tracking-tight sm:text-6xl text-white/70 animate-pulse">
            R$ ---
          </p>
        )}
      </div>

      <div className="mt-4 rounded-xl bg-black/10 p-4 border border-white/10">
        <p className="text-sm text-white/80 leading-relaxed">
          Este valor é uma estimativa e não inclui taxas extras, multas, ou juros 
          adicionais que possam ser cobrados na fatura oficial.
        </p>
      </div>

      {/* <AdsTerraNativeBanner1 /> */}
    </div>
  );
};
