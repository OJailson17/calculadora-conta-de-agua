import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import waterDrop from '@/assets/water-drop.svg';

import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { LINKS } from '@/utils/constants';

const inter = Inter({
	subsets: ['latin'],
	variable: '--inter',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Calculadora de Conta de Água - Bahia',
	description: 'Calcule o valor da sua conta de água',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<body className={`${inter.className} antialiased bg-white`}>
				<header className='bg-primary w-full px-4 py-8 flex items-center justify-between sm:px-8'>
					<Link
						href={'/'}
						aria-label='Ir para a página inicial'
						className='flex items-center justify-center gap-3 w-full sm:w-max focus:border-none'
					>
						<Image
							alt='Ícone de uma gota de água'
							src={waterDrop}
							width={48}
							height={48}
							className='hidden sm:block'
						/>
						<h1 className='font-bold text-2xl text-center text-white'>
							Calculadora de Conta de Água{' '}
							<span className='hidden sm:inline-block'>-</span> Bahia
						</h1>
					</Link>

					<Link
						target='_blank'
						aria-label='Ir para o Github'
						href={LINKS.appGithub}
						className='hidden sm:block'
					>
						<FaGithub size={32} fill='white' />
					</Link>
				</header>
				{children}

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
								href={LINKS.appGithub}
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
								<span className='sm:max-xl:hidden hover:underline'>
									LinkedIn
								</span>
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
			</body>
		</html>
	);
}
