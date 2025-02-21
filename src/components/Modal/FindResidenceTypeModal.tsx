"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";

import { IoClose } from "react-icons/io5";

import { LINKS } from "@/utils/constants";

import alternativeBillImage from "@/assets/fatura-residencia-simultanea.png";

export const FindResidenceTypeModal = () => {
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
          Você pode encontrar o tipo de imóvel na sua conta nas áreas circuladas
          em vermelho. No exemplo abaixo onde o tipo de imóvel é{" "}
          <strong>“Residencial Normal”</strong>, aparece na conta como{" "}
          <strong>“RES-001”</strong> ou <strong>“Residencial Normal”</strong>.
        </p>

        <Link
          href={LINKS.billImage}
          target="_blank"
          aria-label="Imagem da conta de água"
          className="w-full text-secondary hover:underline"
        >
          <div className="flex w-full flex-col items-center justify-center rounded-md border-2 border-secondary">
            <p className="font-medium">Conta de água entrega simultânea</p>

            <Image
              src={alternativeBillImage}
              width={337}
              height={306}
              alt="Imagem da conta de água com o tipo de imóvel destacado"
              className="mt-12"
            />
          </div>
        </Link>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
