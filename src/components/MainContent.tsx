"use client";

import { useBillContext } from "@/context/BillContext";
import { CalculationResult } from "./CalculationResult";
import { HomeForm } from "./Form/HomeForm";
import { AdsTerra300 } from "./AdsTerra/banner-300";

export const MainContent = () => {
  const { billPrice } = useBillContext();

  return (
    <div className="flex max-w-[1600px] flex-col items-start justify-start gap-7 sm:flex-row">
      <HomeForm />
      <CalculationResult totalPrice={billPrice} />

      {/* Ad div */}
      <div className="hidden h-full max-h-96 w-full max-w-64 flex-col gap-4 min-[1350px]:flex">
        <AdsTerra300 />
      </div>
    </div>
  );
};
