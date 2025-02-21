"use client";

import { useBillContext } from "@/context/BillContext";
import { CalculationResult } from "./CalculationResult";
import { HomeForm } from "./Form/HomeForm";

export const MainContent = () => {
  const { billPrice } = useBillContext();

  return (
    <div className="flex flex-col items-start justify-start gap-7 sm:flex-row">
      <HomeForm />
      <CalculationResult totalPrice={billPrice} />
    </div>
  );
};
