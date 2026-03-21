import Link from "next/link";

import { BillContextProvider } from "@/context/BillContext";
import { ConsumeModalContextProvider } from "@/context/ConsumeModalContext";
import { Footer } from "@/components/Footer";
import { MainContent } from "@/components/MainContent";

import { LINKS } from "@/utils/constants";

export default function Home() {
  return (
    <>
      <main className="mx-auto mb-24 mt-12 flex w-full max-w-[1200px] flex-col gap-10 px-4 sm:px-8">
        <section className="flex w-full flex-col gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-lg text-slate-700">
            Calcule o valor atual da sua conta de água baseado no seu consumo
            até agora. Mas lembre-se que os valores podem sofrer alterações até
            a data da próxima leitura.
          </p>

          <p className="rounded-lg border border-red-100 bg-red-50 p-4 text-slate-700">
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
            realizado pela Embasa, esses cálculos não funcionam pra você.
          </p>

          <p className="mt-2 text-lg font-medium text-slate-800">
            Para calcular corretamente o valor, preencha o formulário abaixo:
          </p>
        </section>
        <ConsumeModalContextProvider>
          <BillContextProvider>
            <MainContent />
          </BillContextProvider>
        </ConsumeModalContextProvider>

        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-medium text-slate-500">
            *Tarifas atualizadas em Mar/2026
          </p>
          <Link
            href={LINKS.taxes}
            target="_blank"
            aria-label="Consultar tabela de tarifas"
            className="w-max text-sm font-semibold text-secondary transition-colors hover:text-primary hover:underline"
          >
            Consultar Tabela de Tarifas Oficial
          </Link>

          <div className="my-2 h-px w-full bg-slate-100" />

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
            <span className="ml-2 inline-block">
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
