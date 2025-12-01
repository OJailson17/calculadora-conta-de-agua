"use client";

import { useBillContext } from "@/context/BillContext";
import { CalculationResult } from "./CalculationResult";
import { HomeForm } from "./Form/HomeForm";
import AdSense from "./Adsense";

export const MainContent = () => {
  const { billPrice } = useBillContext();

  return (
    <div className="relative flex max-w-[1600px] flex-col items-start justify-start gap-7 sm:flex-row">
      <HomeForm />
      <CalculationResult totalPrice={billPrice} />

      {/* Ad div */}
      <div className="absolute right-0 hidden h-full max-h-96 w-full max-w-64 flex-col gap-4 min-[1350px]:flex">
        <AdSense addSlot="5679799137" className="h-full w-full bg-red-200" />
      </div>
    </div>
  );
};
