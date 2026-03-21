import { Footer } from "@/components/Footer";
import { LINKS } from "@/utils/constants";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Sobre() {
  return (
    <>
      <main className="mx-auto mb-24 mt-12 flex w-full max-w-[1200px] flex-col gap-10 px-4 sm:px-8">
        <section className="flex w-full flex-col gap-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              Sobre os Cálculos
            </h2>
            <Link
              href="/"
              className="flex w-max items-center justify-center rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
          </div>

          <div className="flex flex-col gap-6 text-lg leading-relaxed text-slate-700">
            <p>
              O cálculo da sua conta de água é feito de forma{" "}
              <strong>progressiva</strong>, o que significa que o valor que você
              paga pela água aumenta à medida que você consome mais.
            </p>

            <p>
              O seu consumo total é dividido em{" "}
              <strong>faixas de consumo</strong>:
            </p>

            <ul className="ml-4 flex list-disc flex-col gap-5 pl-4 marker:text-primary">
              <li className="pl-1">
                <strong>A primeira faixa de consumo (até 6m³):</strong> Possui
                um valor mínimo fixo. Mesmo que você consuma menos que isso,
                esse é o valor básico cobrado para manter o serviço e a
                infraestrutura funcionando.
              </li>
              <li className="pl-1">
                <strong>
                  As próximas faixas de consumo (7 a 10m³, 11 a 15m³, 16 a 20m³,
                  etc.):
                </strong>{" "}
                A água que ultrapassa o limite da faixa anterior é cobrada em
                novas faixas. A cada nova faixa atingida, o custo da água fica
                um pouco mais alto:
              </li>

              <li>
                <strong className="text-slate-900">Exemplo:</strong> Se você
                possui uma{" "}
                <strong className="text-slate-900">Residência Normal</strong> e
                consumiu <strong>12m³</strong> de água, o cálculo será:
                <ul className="mt-3 flex flex-col gap-2 rounded-xl border border-slate-100 bg-slate-50 p-2 text-base">
                  <li className="flex items-center gap-2">
                    <strong>1ª Faixa:</strong> 6m³ = R$ 43,23
                  </li>
                  <li className="flex items-center gap-2">
                    <strong>2ª Faixa:</strong> 4m³ x R$ 1,71 = R$ 6,84
                  </li>
                  <li className="flex items-center gap-2">
                    <strong>3ª Faixa:</strong> 2m³ x R$ 12,10 = R$ 24,20
                  </li>
                  <li className="mt-2 flex items-center gap-2 border-t border-slate-200 pt-3">
                    <strong className="text-secondary">
                      Total (sem taxa de esgoto):
                    </strong>{" "}
                    R$ 43,23 + R$ 6,84 + R$ 24,20 = R$ 74,27
                  </li>
                </ul>
              </li>
              <li className="pl-1">
                Algo que também influencia no valor é o tipo de
                estabelecimento/residência. Os valores fixos cobrados para uma{" "}
                <strong>Residência Normal</strong>, são diferentes dos cobrados
                para um estabelecimento <strong>Comercial</strong>.
              </li>
            </ul>

            <p>
              Ao final, o sistema soma o valor calculado em cada uma dessas
              faixas para chegar ao valor total do consumo de água.
            </p>

            <p>
              Além da água, se a sua residência possui rede de esgoto, é cobrada
              uma taxa adicional. Essa taxa corresponde a <strong>80%</strong>{" "}
              do valor total da água consumida. A calculadora adiciona esse
              valor automaticamente caso você indique que possui o serviço de
              coleta de esgoto.
            </p>

            <p>
              Todos os valores, limites e taxas utilizados nesta ferramenta são
              retirados da{" "}
              <Link
                href={LINKS.taxes}
                target="_blank"
                className="font-medium text-secondary transition-colors hover:underline"
              >
                tabela de tarifas oficial
              </Link>
              . A aplicação apenas automatiza essa divisão por faixas para
              facilitar a sua vida!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
