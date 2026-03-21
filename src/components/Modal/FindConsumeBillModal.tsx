"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";

import { IoClose } from "react-icons/io5";
import { LINKS } from "@/utils/constants";

import alternativeBill from "@/assets/fatura-consumo-simultanea.png";

export const FindConsumeBillModal = () => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-all" />

      <Dialog.Content className="fixed left-1/2 top-1/2 flex w-[90%] max-w-[480px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-6 overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <div className="relative w-full text-center">
          <Dialog.Title className="text-lg font-bold">
            Leitura do último mês
          </Dialog.Title>
          <Dialog.Close asChild>
            <IoClose
              size={28}
              className="absolute right-0 top-0 cursor-pointer text-slate-400 transition-colors hover:text-slate-600"
            />
          </Dialog.Close>
        </div>
        <Dialog.Description hidden />

        <p>
          Você pode encontrar a leitura do último mês na sua conta de água. O
          valor está descrito como <strong>“Leitura Atual”</strong> e fica
          abaixo do QR code de nota fiscal.
        </p>

        <Link
          href={LINKS.billImage}
          target="_blank"
          aria-label="Ver a imagem da fatura"
          className="w-full transition-transform hover:scale-[1.02] active:scale-100"
        >
          <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm transition-colors hover:border-secondary/50">
            <p className="w-full bg-slate-100 py-3 text-center text-sm font-semibold text-slate-700">
              Conta de água entrega simultânea
            </p>

            <Image
              src={alternativeBill}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Imagem de uma conta de água com a leitura atual destacada"
              className="mt-4"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Link>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
