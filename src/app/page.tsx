import { MainContent } from '@/components/MainContent';
import { BillContextProvider } from '@/context/BillContext';
import { ConsumeModalContextProvider } from '@/context/ConsumeModalContext';
import { LINKS } from '@/utils/constants';
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
				<Link
					target='_blank'
					aria-label='Site da Embasa'
					href={LINKS.embasa}
					className='text-secondary font-bold hover:underline'
				>
					Empresa Baiana de Águas e Saneamento S.A (Embasa)
				</Link>
				. Se seu imóvel não é na Bahia ou o saneamento básico não é realizado
				pela Embasa, esses cálculos não funcionam pra você.
			</p>

			<p>Para calcular corretamente o valor, preencha o formulário abaixo:</p>

			<ConsumeModalContextProvider>
				<BillContextProvider>
					<MainContent />
				</BillContextProvider>
			</ConsumeModalContextProvider>

			<p className='text-sm'>*Tarifas atualizadas em Dez/2024</p>
			<Link
				href={LINKS.taxes}
				target='_blank'
				aria-label='Consultar tabela de tarifas'
				className='text-sm w-max font-medium text-secondary hover:underline'
			>
				Consultar Tabela
			</Link>

			<p>
				Essa aplicação não possui nenhum vínculo com a Embasa. Apenas utiliza os
				dados contidos no{' '}
				<Link
					href={LINKS.embasa}
					target='_blank'
					aria-label='Site da Embasa'
					className='text-secondary hover:underline'
				>
					site da empresa
				</Link>{' '}
				para realizar os cálculos.
			</p>
		</main>
	);
}
