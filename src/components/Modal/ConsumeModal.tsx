"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";

import { FindConsumeBillModal } from "./FindConsumeBillModal";
import { useConsumeModal } from "@/context/ConsumeModalContext";

const ConsumeModalSchema = z.object({
  hydrometerValue: z
    .number({ message: "Campo obrigatório" })
    .int("Valor não pode ser decimal")
    .min(0),
  lastMonthValue: z
    .number({ message: "Campo obrigatório" })
    .int("Valor não pode ser decimal")
    .min(0),
});

type ConsumeModalFormProps = z.infer<typeof ConsumeModalSchema>;

export const ConsumeModal = () => {
  const { onCloseModal } = useConsumeModal();

  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: { errors },
  } = useForm<ConsumeModalFormProps>({
    resolver: zodResolver(ConsumeModalSchema),
  });

  const onCalculateConsume = (data: ConsumeModalFormProps) => {
    const { hydrometerValue, lastMonthValue } = data;

    // show error if last month value is greater than hydrometer value
    if (lastMonthValue > hydrometerValue) {
      setError("lastMonthValue", {
        message:
          "Valor da leitura deve ser igual ou menor que o valor do hidrômetro",
        type: "min",
      });
      return;
    }

    const consume = hydrometerValue - lastMonthValue;

    localStorage.setItem("@cca:consume", consume.toString());

    toast("Valor do consumo salvo com sucesso!", {
      type: "success",
      position: "top-center",
      autoClose: 1000,
    });

    reset();
    onCloseModal();
  };

  return (
    <>
      <ToastContainer />
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        <Dialog.Content
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="fixed left-1/2 top-1/2 flex w-[90%] max-w-[480px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5 overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 shadow-2xl"
        >
          <div className="relative w-full text-center">
            <Dialog.Title className="text-lg font-bold">
              Leitura do Hidrômetro
            </Dialog.Title>
            <Dialog.Close asChild>
              <IoClose
                size={28}
                className="absolute right-0 top-0 cursor-pointer text-slate-400 hover:text-slate-600 transition-colors"
              />
            </Dialog.Close>
          </div>
          <Dialog.Description hidden />

          <p>
            Para encontrar o seu consumo até o momento. Preencha o formulário
            abaixo inserindo os número contidos no seu hidrômetro e o valor da
            leitura do último mês.
          </p>

          <form
            onSubmit={handleSubmit(onCalculateConsume)}
            className="flex w-full flex-col items-start gap-6 mt-2"
          >
            <div>
              <p>
                Insira o valor contido no seu hidrômetro.{" "}
                <strong>Apenas os números pretos</strong>
              </p>
              <div className="w-full">
                <input
                  type="number"
                  placeholder="Ex: 140 ou 0140"
                  className="mt-2 h-14 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-lg transition-colors focus:border-secondary focus:bg-white focus:outline-none focus:ring-4 focus:ring-secondary/20"
                  {...register("hydrometerValue", {
                    valueAsNumber: true,
                  })}
                  style={errors.hydrometerValue ? { borderColor: "red" } : {}}
                  autoFocus={false}
                />
                <span className="text-sm text-error">
                  {errors.hydrometerValue?.message}
                </span>
              </div>
            </div>

            <div>
              <Dialog.Root>
                <p>
                  Valor da leitura do último mês.{" "}
                  <Dialog.Trigger className="cursor-pointer text-secondary hover:underline">
                    <span>Saiba onde encontrar.</span>
                  </Dialog.Trigger>
                </p>

                <FindConsumeBillModal />
              </Dialog.Root>
              <div className="w-full">
                <input
                  type="number"
                  placeholder="Ex: 135"
                  className="mt-2 h-14 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-lg transition-colors focus:border-secondary focus:bg-white focus:outline-none focus:ring-4 focus:ring-secondary/20"
                  {...register("lastMonthValue", {
                    valueAsNumber: true,
                  })}
                  style={errors.lastMonthValue ? { borderColor: "red" } : {}}
                />
                <span className="text-sm text-error">
                  {errors.lastMonthValue?.message}
                </span>
              </div>
            </div>

            {/* <Dialog.Close asChild> */}
            <button
              type="button"
              onClick={handleSubmit(onCalculateConsume)}
              className="mt-2 h-14 w-full rounded-lg bg-secondary text-lg font-bold text-white transition-transform hover:bg-primary active:scale-[0.98] sm:mx-0"
            >
              Salvar Consumo
            </button>
            {/* </Dialog.Close> */}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  );
};
