'use client';

import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import Link from 'next/link';

import { IoClose } from 'react-icons/io5';

import alternativeBill from '@/assets/fatura-consumo-simultanea.png';

export const FindConsumeBillModal = () => {
	return (
		<Dialog.Portal>
			<Dialog.Overlay className='fixed inset-0 bg-black/50' />

			<Dialog.Content className='rounded-md overflow-y-auto py-4 px-2 sm:px-6 bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[450px] flex flex-col items-center justify-center gap-5'>
				<div className='w-full relative text-center'>
					<Dialog.Title className='font-bold text-lg'>
						Tipo de Imóvel
					</Dialog.Title>
					<Dialog.Close asChild>
						<IoClose
							size={24}
							fill='gray'
							className='absolute cursor-pointer right-2 top-1'
						/>
					</Dialog.Close>
				</div>
				<Dialog.Description hidden />

				<p>
					Você pode encontrar a leitura do último mês na sua conta de água. O
					valor está descrito como <strong>“Leitura Atual”</strong> e fica na
					parte de cima da fatura.
				</p>

				<Link href={'/'} className='w-full hover:underline text-secondary'>
					<div className='w-full flex items-center justify-center flex-col rounded-md border-2 border-secondary'>
						<p className='font-medium'>Conta de água entrega simultânea</p>

						<Image
							src={alternativeBill}
							width={311}
							height={112}
							alt=''
							className='mt-12'
						/>
					</div>
				</Link>
			</Dialog.Content>
		</Dialog.Portal>
	);
};
