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
      className="flex flex-col gap-12"
      onSubmit={handleSubmit(onCalculateBill)}
    >
      {/* Consumption */}
      <div className="flex flex-col gap-2">
        <Dialog.Root open={isModalOpen} onOpenChange={onModalState}>
          <p>
            Volume de água consumido em m³.
            <Dialog.Trigger className="cursor-pointer text-secondary hover:underline">
              <span> Saiba como encontrar.</span>
            </Dialog.Trigger>
          </p>

          <ConsumeModal />
        </Dialog.Root>
        <div className="flex w-full items-end justify-start gap-2">
          <div className="relative w-full max-w-96">
            <input
              type="number"
              placeholder="Ex: 10"
              className="h-12 w-full rounded-md border-2 border-black/70 px-2 py-3 focus:border-none focus:outline-none focus:ring-2 focus:ring-secondary"
              {...register("consumption", {
                valueAsNumber: true,
              })}
              style={errors.consumption ? { borderColor: "red" } : {}}
            />
            <span className="absolute -bottom-5 left-0 w-full text-sm text-error">
              {errors.consumption?.message}
            </span>
          </div>
          <span className="hidden lg:inline-block">m³</span>
        </div>
      </div>

      {/* Residence type */}
      <div className="flex max-w-96 flex-col gap-2">
        <Dialog.Root>
          <p>
            Tipo de imóvel.
            <Dialog.Trigger className="cursor-pointer text-secondary hover:underline">
              <span>Saiba onde encontrar.</span>
            </Dialog.Trigger>
          </p>
          <FindResidenceTypeModal />
        </Dialog.Root>

        <ResidenceTypeSelect control={control} errors={errors} />
      </div>

      {/* sewage */}
      <div className="flex w-full max-w-96 flex-col gap-7">
        <p>
          Seu imóvel está ligada ao serviço de esgotamento sanitário da Embasa?
        </p>

        <div className="flex items-center justify-start gap-7">
          <div>
            <input
              type="radio"
              id="yes"
              className="mr-1 focus:outline-none focus:ring-2 focus:ring-secondary"
              value="true"
              {...register("sewage")}
            />
            <label htmlFor="yes">Sim</label>
          </div>
          <div>
            <input
              type="radio"
              id="no"
              value="false"
              {...register("sewage")}
              className="mr-1 focus:outline-none focus:ring-2 focus:ring-secondary"
              defaultChecked
            />
            <label htmlFor="no">Não</label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mx-auto h-12 w-full max-w-96 rounded-md bg-secondary p-2 font-bold text-white focus:outline-none focus:ring-2 focus:ring-black sm:mx-0"
      >
        Calcular
      </button>
    </form>
  );
};
