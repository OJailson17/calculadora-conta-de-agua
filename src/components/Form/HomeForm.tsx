"use client";

import { useEffect } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import { z } from "zod";
import { useForm } from "react-hook-form";

import { FindResidenceTypeModal } from "../Modal/FindResidenceTypeModal";
import { ConsumeModal } from "../Modal/ConsumeModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { calculateBillPrice } from "@/utils/calculateBillPrice";
import { useBillContext } from "@/context/BillContext";
import { useConsumeModal } from "@/context/ConsumeModalContext";
import { ResidenceTypeSelect } from "./ResidenceTypeSelect";
// import { AdsTerra300 } from "../AdsTerra/banner-300";

const RESIDENCE_TYPES = [
  "ResidencialSocial",
  "ResidencialIntermediaria",
  "ResidencialNormalVeraneio",
  "Filantropica",
  "Comercial",
  "ServicosComerciosOutrasAtividadesReduzidas",
  "DerivacoesComerciaisAguaBruta",
  "ConstrucaoIndustrial",
  "Publica",
] as const;

export const formSchema = z.object({
  consumption: z
    .number({
      message: "Campo obrigatório",
      required_error: "Campo obrigatório",
    })
    .min(0, "Valor deve ser igual ou maior que 0")
    .int("Valor não pode ser decimal")
    .default(0),
  residenceType: z.enum(RESIDENCE_TYPES, {
    message: "Campo obrigatório",
    required_error: "Campo obrigatório",
  }),
  sewage: z.enum(["true", "false"]).default("false"),
});

type ConsumptionFormProps = z.infer<typeof formSchema>;

export const HomeForm = () => {
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm<ConsumptionFormProps>({
    resolver: zodResolver(formSchema),
  });

  // Contexts
  const { onSetBillPrice } = useBillContext();
  const { isModalOpen, onModalState } = useConsumeModal();

  // Calculate bill price
  const onCalculateBill = (formData: ConsumptionFormProps) => {
    const { totalPrice } = calculateBillPrice({
      consumption: formData.consumption,
      residence: formData.residenceType,
      sewage: formData.sewage === "true",
    });

    onSetBillPrice(totalPrice);
  };

  // Get local storage consumption
  useEffect(() => {
    const localConsume = Number(localStorage.getItem("@cca:consume"));

    if (!isModalOpen && localConsume.toString()) {
      setValue("consumption", Number(localConsume), { shouldValidate: true });
      localStorage.removeItem("@cca:consume");
    }
  }, [isModalOpen]);

  return (
    <form
      className="flex flex-col gap-10"
      onSubmit={handleSubmit(onCalculateBill)}
    >
      {/* Consumption */}
      <div className="flex flex-col gap-1">
        <Dialog.Root open={isModalOpen} onOpenChange={onModalState}>
          <p className="font-medium text-slate-800">
            Volume de água consumido (em m³)
            <Dialog.Trigger className="ml-2 cursor-pointer font-normal text-secondary hover:underline">
              <span>Saiba como encontrar.</span>
            </Dialog.Trigger>
          </p>

          <ConsumeModal />
        </Dialog.Root>
        <div className="mt-1 flex w-full items-center justify-start gap-3">
          <div className="relative w-full max-w-96">
            <input
              type="number"
              placeholder="Ex: 10"
              className="h-14 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-lg transition-colors focus:border-secondary focus:bg-white focus:outline-none focus:ring-4 focus:ring-secondary/20"
              {...register("consumption", {
                valueAsNumber: true,
              })}
              style={errors.consumption ? { borderColor: "red" } : {}}
            />
            <span className="absolute -bottom-6 left-0 w-full text-sm font-medium text-error">
              {errors.consumption?.message}
            </span>
          </div>
          <span className="hidden font-medium text-slate-500 lg:inline-block">
            m³
          </span>
        </div>
      </div>

      {/* Residence type */}
      <div className="flex max-w-96 flex-col gap-1">
        <Dialog.Root>
          <p className="font-medium text-slate-800">
            Tipo de imóvel
            <Dialog.Trigger className="ml-2 cursor-pointer font-normal text-secondary hover:underline">
              <span>Saiba onde encontrar.</span>
            </Dialog.Trigger>
          </p>
          <FindResidenceTypeModal />
        </Dialog.Root>

        <div className="mt-1">
          <ResidenceTypeSelect control={control} errors={errors} />
        </div>
      </div>

      {/* sewage */}
      <div className="flex w-full max-w-[420px] flex-col gap-4">
        <p className="font-medium leading-snug text-slate-800">
          Seu imóvel está ligado ao serviço de esgotamento sanitário da Embasa?
        </p>

        <div className="flex items-center justify-start gap-8">
          <label className="group flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              id="yes"
              className="h-5 w-5 cursor-pointer accent-secondary focus:ring-2 focus:ring-secondary/50 group-hover:accent-primary"
              value="true"
              {...register("sewage")}
            />
            <span className="font-medium text-slate-700">Sim</span>
          </label>
          <label className="group flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              id="no"
              value="false"
              {...register("sewage")}
              className="h-5 w-5 cursor-pointer accent-secondary focus:ring-2 focus:ring-secondary/50 group-hover:accent-primary"
              defaultChecked
            />
            <span className="font-medium text-slate-700">Não</span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="mx-auto mt-4 h-14 w-full max-w-96 rounded-lg bg-secondary text-lg font-bold text-white transition-all hover:bg-primary hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-secondary/30 active:scale-[0.98] sm:mx-0"
      >
        Realizar Cálculo
      </button>

      {/* <AdsTerra300 /> */}
    </form>
  );
};
