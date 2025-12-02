"use client";

import { useEffect, useRef, useState } from "react";
import AdSense from "./Adsense";
import { AdsTerra300 } from "./AdsTerra/banner-300";

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
      className="flex flex-col items-center justify-center gap-8"
    >
      <p className="text-2xl font-medium">Valor atual da conta</p>

      {isScreenReady ? (
        <p className="text-[48px] font-bold">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalPrice)}
        </p>
      ) : (
        <p className="text-[48px] font-bold">calculando...</p>
      )}

      <p className="text-sm">
        Valor não inclui taxas, multas ou juros adicionais que podem ser
        cobrados
      </p>

      <AdsTerra300 />
    </div>
  );
};
