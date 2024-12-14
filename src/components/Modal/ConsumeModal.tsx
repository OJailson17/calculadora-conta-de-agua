'use client';

import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';

import { IoClose } from 'react-icons/io5';
import { FindConsumeBillModal } from './FindConsumeBillModal';

export const ConsumeModal = () => {
	return (
		<Dialog.Portal>
			<Dialog.Overlay className='fixed inset-0 bg-black/50' />

			<Dialog.Content className='rounded-md overflow-y-auto py-4 px-2 sm:px-6 bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[450px] flex flex-col items-center justify-center gap-5'>
				<div className='w-full relative text-center'>
					<Dialog.Title className='font-bold text-lg'>
						Leitura do Hidrômetro
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
					Para encontrar o seu consumo até o momento. Preencha o formulário
					abaixo inserindo os número contidos no seu hidrômetro e o valor da
					leitura do último mês.
				</p>

				<form className='flex flex-col items-center justify-center gap-8'>
					<div>
						<p>
							Insira o valor contido no seu hidrômetro.{' '}
							<strong>Apenas os números pretos</strong>
						</p>
						<input
							type='number'
							placeholder='Ex: 140 ou 0140'
							className='w-full mt-1 max-w-96 h-12 py-3 px-2 border-2 border-black/70 rounded-md'
						/>
					</div>

					<div>
						<Dialog.Root>
							<p>
								Valor da leitura do último mês.{' '}
								<Dialog.Trigger className='text-secondary cursor-pointer hover:underline'>
									<span>Saiba onde encontrar.</span>
								</Dialog.Trigger>
							</p>

							<FindConsumeBillModal />
						</Dialog.Root>
						<input
							type='number'
							placeholder='Ex: 135'
							className='w-full mt-1 max-w-96 h-12 py-3 px-2 border-2 border-black/70 rounded-md'
						/>
					</div>

					<Dialog.Close asChild>
						<button className='w-full max-w-96 mx-auto h-12 p-2 font-bold bg-secondary rounded-md text-white sm:mx-0'>
							Salvar
						</button>
					</Dialog.Close>
				</form>
			</Dialog.Content>
		</Dialog.Portal>
	);
};
