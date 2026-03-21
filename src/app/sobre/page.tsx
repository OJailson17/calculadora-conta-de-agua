import { Footer } from "@/components/Footer";
import { LINKS } from "@/utils/constants";
import Link from "next/link";

export default function Sobre() {
  return (
    <>
      <main className="mb-24 mt-9 flex w-full flex-col gap-7 px-4 sm:px-8">
        <section className="flex w-full max-w-[1200px] flex-col gap-7">
          <h2 className="text-2xl font-bold text-primary">Sobre os Cálculos</h2>

          <div className="flex flex-col gap-4 text-justify">
            <p>
              O cálculo da sua conta de água é feito de forma{" "}
              <strong>progressiva</strong>, o que significa que o valor que você
              paga pela água aumenta à medida que você consome mais.
            </p>

            <p>
              O seu consumo total é dividido em{" "}
              <strong>faixas de consumo</strong>:
            </p>

            <ul className="ml-6 flex list-disc flex-col gap-2">
              <li>
                <strong>A primeira faixa de consumo (até 6m³):</strong> Possui
                um valor mínimo fixo. Mesmo que você consuma menos que isso,
                esse é o valor básico cobrado para manter o serviço e a
                infraestrutura funcionando.
              </li>
              <li>
                <strong>
                  As próximas faixas de consumo (7 a 10m³, 11 a 15m³, 16 a 20m³,
                  etc.):
                </strong>{" "}
                A água que ultrapassa o limite da faixa anterior é cobrada em
                novas faixas. A cada nova faixa atingida, o custo da água fica
                um pouco mais alto:
              </li>

              <li>
                <strong>Exemplo:</strong> Se você possui uma{" "}
                <strong>Residência Normal</strong> e consumiu{" "}
                <strong>12m³</strong> de água, o cálculo será:
                <ul>
                  <li>
                    <strong>1ª Faixa:</strong> 6m³ = R$ 43,23
                  </li>
                  <li>
                    <strong>2ª Faixa:</strong> 4m³ x R$ 1,71 = R$ 6,84
                  </li>
                  <li>
                    <strong>3ª Faixa:</strong> 2m³ x R$ 12,10 = R$ 24,20
                  </li>
                  <li>
                    <strong>Total (sem taxa de esgoto):</strong> R$ 43,23 + R$
                    6,84 + R$ 24,20 = R$ 74,27
                  </li>
                </ul>
              </li>
              <li>
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
                className="text-primary hover:underline"
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
