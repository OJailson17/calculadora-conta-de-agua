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
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />

      <Dialog.Content className="fixed left-1/2 top-1/2 flex w-[90%] max-w-[450px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5 overflow-y-auto rounded-md bg-white px-2 py-4 sm:px-6">
        <div className="relative w-full text-center">
          <Dialog.Title className="text-lg font-bold">
            Tipo de Imóvel
          </Dialog.Title>
          <Dialog.Close asChild>
            <IoClose
              size={24}
              fill="gray"
              className="absolute right-2 top-1 cursor-pointer"
            />
          </Dialog.Close>
        </div>
        <Dialog.Description hidden />

        <p>
          Você pode encontrar a leitura do último mês na sua conta de água. O
          valor está descrito como <strong>“Leitura Atual”</strong> e fica na
          parte de cima da fatura.
        </p>

        <Link
          href={LINKS.billImage}
          target="_blank"
          aria-label="Ver a imagem da fatura"
          className="w-full text-secondary hover:underline"
        >
          <div className="flex w-full flex-col items-center justify-center rounded-md border-2 border-secondary">
            <p className="font-medium">Conta de água entrega simultânea</p>

            <Image
              src={alternativeBill}
              width={311}
              height={112}
              alt="Imagem de uma conta de água com a leitura atual destacada"
              className="mt-12"
            />
          </div>
        </Link>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
