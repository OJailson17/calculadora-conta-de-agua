import Link from "next/link";

import { BillContextProvider } from "@/context/BillContext";
import { ConsumeModalContextProvider } from "@/context/ConsumeModalContext";
import { Footer } from "@/components/Footer";
import { MainContent } from "@/components/MainContent";

import { LINKS } from "@/utils/constants";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-10 mx-auto mt-12 mb-24 px-4 sm:px-8 w-full max-w-[1200px]">
        <section className="flex flex-col gap-5 bg-white shadow-sm p-4 sm:p-8 border border-slate-100 rounded-2xl w-full">
          <p className="text-slate-700 text-lg">
            Calcule o valor atual da sua conta de água baseado no seu consumo
            até agora. Mas lembre-se que os valores podem sofrer alterações até
            a data da próxima leitura.
          </p>

          <p className="bg-red-50 p-4 border border-red-100 rounded-lg text-slate-700">
            <span className="font-bold text-error">Atenção:</span> Os cálculos
            são baseados nas tarifas da conta de água da{" "}
            <Link
              target="_blank"
              aria-label="Site da Embasa"
              href={LINKS.embasa}
              className="font-bold text-secondary hover:underline"
            >
              Empresa Baiana de Águas e Saneamento S.A (Embasa)
            </Link>
            . Se seu imóvel não é na Bahia ou o saneamento básico não é
            realizado pela Embasa, esses cálculos não são válidos para o seu
            imóvel.
          </p>

          <p className="mt-2 font-medium text-slate-800 text-lg">
            Para calcular corretamente o valor, preencha o formulário abaixo:
          </p>
        </section>
        <ConsumeModalContextProvider>
          <BillContextProvider>
            <MainContent />
          </BillContextProvider>
        </ConsumeModalContextProvider>

        <div className="flex flex-col gap-4 bg-white shadow-sm mt-4 p-4 sm:p-8 border border-slate-100 rounded-2xl">
          <p className="font-medium text-slate-500 text-sm">
            *Tarifas atualizadas em Jul/2026
          </p>
          <Link
            href={LINKS.taxes}
            target="_blank"
            aria-label="Consultar tabela de tarifas"
            className="w-max font-semibold text-secondary hover:text-primary text-sm hover:underline transition-colors"
          >
            Consultar Tabela de Tarifas Oficial
          </Link>

          <div className="bg-slate-100 my-2 w-full h-px" />

          <p className="w-full text-slate-600">
            Essa aplicação não possui nenhum vínculo com a Embasa. Apenas
            utiliza os dados contidos no{" "}
            <Link
              href={LINKS.embasa}
              target="_blank"
              aria-label="Site da Embasa"
              className="font-medium text-secondary hover:underline"
            >
              site da empresa
            </Link>{" "}
            para realizar os cálculos.
            <span className="inline-block ml-2">
              <Link
                href={LINKS.about}
                className="w-max font-medium text-secondary hover:underline"
              >
                Saiba mais sobre os cálculos
              </Link>
            </span>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
