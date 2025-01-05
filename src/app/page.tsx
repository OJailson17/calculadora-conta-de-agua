import { MainContent } from '@/components/MainContent';
import { BillContextProvider } from '@/context/BillContext';
import { ConsumeModalContextProvider } from '@/context/ConsumeModalContext';
import { LINKS } from '@/utils/constants';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Home() {
	return (
		<>
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
					Essa aplicação não possui nenhum vínculo com a Embasa. Apenas utiliza
					os dados contidos no{' '}
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

			<footer className='bg-primary px-4 text-white py-5 flex flex-col items-start justify-center gap-9 sm:flex-row sm:justify-between sm:gap-0 sm:px-8 sm:items-end'>
				{/* links */}
				<div className='w-full flex flex-col gap-3 items-start justify-center text-sm text-white'>
					<Link
						target='_blank'
						aria-label='Site pessoal'
						href={LINKS.personalWebsite}
						className='hover:underline'
					>
						Site Pessoal
					</Link>
					<Link
						target='_blank'
						aria-label='Site da Embasa'
						href={LINKS.embasa}
						className='hover:underline'
					>
						Site da Embasa
					</Link>
					<Link
						target='_blank'
						aria-label='Tabela de tarifas'
						href={LINKS.taxes}
						className='hover:underline'
					>
						Tabela de Tarifas
					</Link>
				</div>

				{/* Contact */}
				<div className='w-full flex flex-col gap-6 order-1 sm:order-3 sm:items-end'>
					<p>
						<span className='font-bold sm:max-xl:hidden'>
							Encontrou algum erro?
						</span>{' '}
						Entre em contato
					</p>

					<div className='flex flex-col items-start justify-center gap-6 sm:flex-row sm:justify-start'>
						<Link
							href={LINKS.personalGithub}
							target='_blank'
							aria-label='Github Pessoal'
							className='flex items-center justify-center gap-2'
						>
							<FaGithub size={18} />
							<span className='sm:max-xl:hidden hover:underline'>Github</span>
						</Link>
						<Link
							href={LINKS.personalInstagram}
							target='_blank'
							aria-label='Instagram Pessoal'
							className='flex items-center justify-center gap-2'
						>
							<FaInstagram size={18} />
							<span className='sm:max-xl:hidden hover:underline'>
								Instagram
							</span>
						</Link>
						<Link
							href={LINKS.personalLinkedIn}
							target='_blank'
							aria-label='LinkedIn Pessoal'
							className='flex items-center justify-center gap-2'
						>
							<FaLinkedin size={18} />
							<span className='sm:max-xl:hidden hover:underline'>LinkedIn</span>
						</Link>
					</div>
				</div>

				{/* Copyright */}
				<div className='w-full text-center flex flex-col order-last sm:order-2'>
					<p className='text-center'>
						Desenvolvido por{' '}
						<Link
							target='_blank'
							aria-label='Site pessoal'
							href={LINKS.personalWebsite}
							className='font-bold hover:underline'
						>
							Jailson de Oliveira
						</Link>
					</p>
					<p>&copy; 2024</p>
				</div>
			</footer>
		</>
	);
}
