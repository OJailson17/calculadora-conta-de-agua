"use client";

import { useBillContext } from "@/context/BillContext";
import { CalculationResult } from "./CalculationResult";
import { HomeForm } from "./Form/HomeForm";
// import { AdsTerra300 } from "./AdsTerra/banner-300";

export const MainContent = () => {
  const { billPrice } = useBillContext();

  return (
    <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="flex w-full flex-col lg:col-span-7 rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100">
        <HomeForm />
      </div>
      
      <div className="sticky top-8 flex w-full flex-col lg:col-span-5 rounded-2xl bg-gradient-to-br from-primary to-blue-900 p-8 shadow-lg text-white">
        <CalculationResult totalPrice={billPrice} />
      </div>

      {/* Ad div */}
      {/* <div className="hidden h-full max-h-96 w-full max-w-64 flex-col gap-4 min-[1350px]:flex">
        <AdsTerra300 />
      </div> */}
    </div>
  );
};
