'use client';

import * as Dialog from '@radix-ui/react-dialog';

import { IoClose } from 'react-icons/io5';
import { FindConsumeBillModal } from './FindConsumeBillModal';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useConsumeModal } from '@/context/ConsumeModalContext';

import { ToastContainer, toast } from 'react-toastify';

const ConsumeModalSchema = z.object({
	hydrometerValue: z.number({ message: 'Campo obrigatório' }).int().min(0),
	lastMonthValue: z.number({ message: 'Campo obrigatório' }).int().min(0),
});

type ConsumeModalFormProps = z.infer<typeof ConsumeModalSchema>;

export const ConsumeModal = () => {
	const { onCloseModal } = useConsumeModal();

	const {
		handleSubmit,
		register,
		reset,
		setError,
		formState: { errors },
	} = useForm<ConsumeModalFormProps>({
		resolver: zodResolver(ConsumeModalSchema),
	});

	const onCalculateConsume = (data: ConsumeModalFormProps) => {
		const { hydrometerValue, lastMonthValue } = data;

		// show error if last month value is greater than hydrometer value
		if (lastMonthValue > hydrometerValue) {
			toast(
				'Valor da leitura deve ser igual ou menor que o valor do hidrômetro',
				{
					type: 'error',
					position: 'top-center',
				},
			);
			setError('lastMonthValue', {
				message:
					'Valor da leitura deve ser igual ou menor que o valor do hidrômetro',
				type: 'min',
			});
			return;
		}

		const consume = hydrometerValue - lastMonthValue;

		localStorage.setItem('@cca:consume', consume.toString());

		reset();
		onCloseModal();
	};

	return (
		<>
			<ToastContainer />
			<Dialog.Portal>
				<Dialog.Overlay className='fixed inset-0 bg-black/50' />

				<Dialog.Content
					onOpenAutoFocus={e => e.preventDefault()}
					className='rounded-md overflow-y-auto py-4 px-2 sm:px-6 bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[450px] flex flex-col items-center justify-center gap-5'
				>
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

					<form
						onSubmit={handleSubmit(onCalculateConsume)}
						className='flex flex-col items-center justify-center gap-8'
					>
						<div>
							<p>
								Insira o valor contido no seu hidrômetro.{' '}
								<strong>Apenas os números pretos</strong>
							</p>
							<div className='w-full'>
								<input
									type='number'
									placeholder='Ex: 140 ou 0140'
									className='w-full mt-1 h-12 py-3 px-2 border-2 border-black/70 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-none'
									{...register('hydrometerValue', {
										valueAsNumber: true,
									})}
									style={errors.hydrometerValue ? { borderColor: 'red' } : {}}
									autoFocus={false}
								/>
								<span className='text-error text-sm'>
									{errors.hydrometerValue?.message}
								</span>
							</div>
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
							<div className='w-full'>
								<input
									type='number'
									placeholder='Ex: 135'
									className='w-full mt-1 h-12 py-3 px-2 border-2 border-black/70 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-none'
									{...register('lastMonthValue', {
										valueAsNumber: true,
									})}
									style={errors.lastMonthValue ? { borderColor: 'red' } : {}}
								/>
								<span className='text-error text-sm'>
									{errors.hydrometerValue?.message}
								</span>
							</div>
						</div>

						{/* <Dialog.Close asChild> */}
						<button
							type='button'
							onClick={handleSubmit(onCalculateConsume)}
							className='w-full mx-auto h-12 p-2 font-bold bg-secondary rounded-md text-white sm:mx-0'
						>
							Salvar Consumo
						</button>
						{/* </Dialog.Close> */}
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</>
	);
};
