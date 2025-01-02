'use client';

import { RiArrowDropDownLine } from 'react-icons/ri';
// import * as Select from '@radix-ui/react-select';
import * as Dialog from '@radix-ui/react-dialog';
import { FindResidenceTypeModal } from '../Modal/FindResidenceTypeModal';
import { ConsumeModal } from '../Modal/ConsumeModal';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from '../ui/select';
import { calculateBillPrice } from '@/utils/calculateBillPrice';
import { useBillContext } from '@/constext/BillContext';
import { redirect, useRouter } from 'next/navigation';

const RESIDENCE_TYPES = [
	'ResidencialSocial',
	'ResidencialIntermediaria',
	'ResidencialNormalVeraneio',
	'Filantropica',
	'Comercial',
	'ServicosComerciosOutrasAtividadesReduzidas',
	'DerivacoesComerciaisAguaBruta',
	'ConstrucaoIndustrial',
	'Publica',
] as const;

const formSchema = z.object({
	consumption: z
		.number({
			message: 'Campo obrigatório',
			required_error: 'Campo obrigatório',
		})
		.min(0, 'Valor deve ser igual ou maior que 0')
		.default(0),
	residenceType: z.enum(RESIDENCE_TYPES).default('ResidencialNormalVeraneio'),
	sewage: z.enum(['true', 'false']).default('false'),
});

type ConsumptionFormProps = z.infer<typeof formSchema>;

export const HomeForm = () => {
	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
	} = useForm<ConsumptionFormProps>({
		resolver: zodResolver(formSchema),
	});

	const { onSetBillPrice } = useBillContext();

	const onCalculateBill = (formData: ConsumptionFormProps) => {
		const { totalPrice } = calculateBillPrice({
			consumption: formData.consumption,
			residence: formData.residenceType,
			sewage: formData.sewage === 'true',
		});

		onSetBillPrice(totalPrice);
	};

	return (
		<form
			className='flex flex-col gap-12'
			onSubmit={handleSubmit(onCalculateBill)}
		>
			{/* Consumption */}

			<div className='flex flex-col gap-2'>
				<Dialog.Root>
					<p>
						Volume de água consumido em m³.
						<Dialog.Trigger className='text-secondary hover:underline cursor-pointer'>
							<span> Saiba como encontrar.</span>
						</Dialog.Trigger>
					</p>

					<ConsumeModal />
				</Dialog.Root>
				<div className='w-full flex items-end justify-start gap-2'>
					<div className='w-full max-w-96 relative'>
						<input
							type='number'
							placeholder='Ex: 10'
							className='w-full h-12 py-3 px-2 border-2 border-black/70 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-none'
							{...register('consumption', {
								valueAsNumber: true,
							})}
							style={errors.consumption ? { borderColor: 'red' } : {}}
						/>
						<span className='w-full text-error text-sm absolute -bottom-5 left-0'>
							{errors.consumption?.message}
						</span>
					</div>
					<span className='hidden lg:inline-block'>m³</span>
				</div>
			</div>

			{/* Residence type */}
			<div className='flex flex-col gap-2 max-w-96'>
				<Dialog.Root>
					<p>
						Tipo de imóvel.
						<Dialog.Trigger className='text-secondary hover:underline cursor-pointer'>
							<span>Saiba onde encontrar.</span>
						</Dialog.Trigger>
					</p>
					<FindResidenceTypeModal />
				</Dialog.Root>

				<Controller
					name='residenceType'
					control={control}
					render={({ field }) => (
						<Select onValueChange={field.onChange} {...field}>
							<SelectTrigger className='w-full h-12 py-3 px-2 border-2 flex items-center justify-between border-black/70 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-none'>
								<SelectValue placeholder={field.value || 'Tipo de Imóvel'} />
								{/* <RiArrowDropDownLine size={24} /> */}
							</SelectTrigger>

							<SelectContent
								side='bottom'
								position='item-aligned'
								align='center'
								className='py-2 px-0 rounded-md bg-zinc-100'
							>
								<SelectGroup>
									<SelectLabel className='font-bold text-primary'>
										Residência
									</SelectLabel>

									<SelectItem
										className='focus:outline-none focus:ring-2 focus:ring-secondary'
										value='ResidencialSocial'
									>
										Residencial Social
									</SelectItem>
									<SelectItem
										className='focus:outline-none focus:ring-2 focus:ring-secondary'
										value='ResidencialIntermediaria'
									>
										Residencial Intermediária
									</SelectItem>
									<SelectItem
										className='focus:outline-none focus:ring-2 focus:ring-secondary'
										value='ResidencialNormalVeraneio'
									>
										Residencial Normal / Veraneio
									</SelectItem>
									<SelectItem
										className='focus:outline-none focus:ring-2 focus:ring-secondary'
										value='Filantropica'
									>
										Filantrópica
									</SelectItem>
								</SelectGroup>

								<SelectSeparator className='h-px my-2 bg-black' />

								<SelectGroup>
									<SelectLabel className='font-bold text-primary'>
										Comércio e Indústrias
									</SelectLabel>
									<SelectItem
										className='focus:outline-none focus:ring-2 focus:ring-secondary'
										value='Comercial'
									>
										Comercial
									</SelectItem>
									<SelectItem
										className='focus:outline-none focus:ring-2 focus:ring-secondary'
										value='ServicosComerciosOutrasAtividadesReduzidas'
									>
										Serviços / Comércios / Outras Atividades Reduzidas
									</SelectItem>
									<SelectItem
										className='focus:outline-none focus:ring-2 focus:ring-secondary'
										value='DerivacoesComerciaiseAguaBruta'
									>
										Derivações Comerciais e Água Bruta
									</SelectItem>
									<SelectItem
										className='focus:outline-none focus:ring-2 focus:ring-secondary'
										value='ConstrucaoIndustrial'
									>
										Construção Industrial
									</SelectItem>
									<SelectItem
										className='focus:outline-none focus:ring-2 focus:ring-secondary'
										value='Publica'
									>
										Pública
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					)}
				/>
			</div>

			{/* sewage */}
			<div className='flex flex-col gap-7 w-full max-w-96'>
				<p>
					Seu imóvel está ligada ao serviço de esgotamento sanitário da Embasa?
				</p>

				<div className='flex items-center justify-start gap-7'>
					<div>
						<input
							type='radio'
							id='yes'
							className='mr-1 focus:outline-none focus:ring-2 focus:ring-secondary'
							value='true'
							{...register('sewage')}
						/>
						<label htmlFor='yes'>Sim</label>
					</div>
					<div>
						<input
							type='radio'
							id='no'
							value='false'
							{...register('sewage')}
							className='mr-1 focus:outline-none focus:ring-2 focus:ring-secondary'
							defaultChecked
						/>
						<label htmlFor='no'>Não</label>
					</div>
				</div>
			</div>

			<button
				type='submit'
				className='w-full max-w-96 mx-auto h-12 p-2 font-bold bg-secondary rounded-md text-white sm:mx-0 focus:outline-none focus:ring-2 focus:ring-black'
			>
				Calcular
			</button>
		</form>
	);
};
