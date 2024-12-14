import { CalculationResult } from '@/components/CalculationResult';
import { HomeForm } from '@/components/Form/HomeForm';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='w-full px-4 flex flex-col gap-7 mt-9 mb-24 sm:px-8 max-w-[1200px]'>
			<p>
				Calcule o valor atual da sua conta de água baseado no seu consumo até
				agora. Mas lembre-se que os valores podem sofrer alterações até a data
				da próxima leitura.
			</p>

			<p>
				<span className='font-bold text-error'>Atenção:</span> Os cálculos são
				baseados nas tarifas da conta de água da{' '}
				<Link href={'/'} className='text-secondary font-bold'>
					Empresa Baiana de Águas e Saneamento S.A (Embasa)
				</Link>
				. Se seu imóvel não é na Bahia ou o saneamento básico não é realizado
				pela Embasa, esses cálculos não funcionam pra você.
			</p>

			<p>Para calcular corretamente o valor, preencha o formulário abaixo:</p>

			<div className='flex flex-col gap-7 items-start justify-start sm:flex-row'>
				<HomeForm />
				<CalculationResult />
			</div>

			<p className='text-sm'>*Tarifas atualizadas em Dez/2024</p>
			<Link href={'/'} className='text-sm w-max font-medium text-secondary'>
				Consultar Tabela
			</Link>

			<p>
				Essa aplicação não possui nenhum vínculo com a Embasa. Apenas utiliza os
				dados contidos no{' '}
				<Link href={'/'} className='text-secondary'>
					site da empresa
				</Link>{' '}
				para realizar os cálculos.
			</p>
		</main>
	);
}
