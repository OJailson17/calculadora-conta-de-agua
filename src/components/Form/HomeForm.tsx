'use client';
import { RiArrowDropDownLine } from 'react-icons/ri';
import * as Select from '@radix-ui/react-select';
import * as Dialog from '@radix-ui/react-dialog';
import { ResidenceTypeModal } from '../ResidenceTypeModal';

export const HomeForm = () => {
	return (
		<form className='flex flex-col gap-12'>
			{/* Consumption */}

			<div className='flex flex-col gap-2'>
				<p>
					Volume de água consumido em m³.
					<span className='text-secondary'> Saiba como encontrar.</span>
				</p>
				<div className='w-full flex items-end justify-start gap-2'>
					<input
						type='number'
						placeholder='Ex: 10'
						className='w-full max-w-96 h-12 py-3 px-2 border-2 border-black rounded-md'
					/>
					<span className='hidden lg:inline-block'>m³</span>
				</div>
			</div>

			{/* Residence type */}
			<div className='flex flex-col gap-2 max-w-96'>
				<Dialog.Root>
					<p>
						Tipo de imóvel.
						<Dialog.Trigger asChild>
							<span className='text-secondary cursor-pointer hover:underline'>
								Saiba onde encontrar.
							</span>
						</Dialog.Trigger>
					</p>
					<ResidenceTypeModal />
				</Dialog.Root>

				<Select.Root>
					<Select.Trigger
						className='w-full h-12 py-3 px-2 border-2 flex items-center justify-between border-black rounded-md'
						aria-label='Residência'
					>
						<Select.Value placeholder='Tipo de Imóvel' />
						<Select.Icon>
							<RiArrowDropDownLine size={24} />
						</Select.Icon>
					</Select.Trigger>

					<Select.Portal>
						<Select.Content
							side='bottom'
							position='popper'
							id='SelectContent'
							align='center'
							className='text-center py-2 px-0 rounded-md bg-zinc-100'
						>
							<Select.Viewport className='w-full'>
								<Select.Group className='flex flex-col items-center justify-center gap-3'>
									<Select.Label className='font-bold text-primary'>
										Residência
									</Select.Label>
									<Select.SelectItem className='cursor-pointer' value='apple'>
										Residencial Social
									</Select.SelectItem>
									<Select.SelectItem value='banana'>
										Residencial Intermediária
									</Select.SelectItem>
									<Select.SelectItem value='blueberry'>
										Residencial Normal / Veraneio
									</Select.SelectItem>
									<Select.SelectItem value='grapes'>
										Filantrópica
									</Select.SelectItem>
								</Select.Group>

								<Select.Separator className='h-px my-2 bg-black' />

								<Select.Group className='flex flex-col items-center justify-center gap-3'>
									<Select.Label className='font-bold text-primary'>
										Comércio e Indústrias
									</Select.Label>
									<Select.SelectItem value='aubergine'>
										Comercial
									</Select.SelectItem>
									<Select.SelectItem value='broccoli'>
										Serviços / Comércios / Outras Atividades Reduzidas
									</Select.SelectItem>
									<Select.SelectItem value='carrot'>
										Derivações Comerciais e Água Bruta
									</Select.SelectItem>
									<Select.SelectItem value='courgette'>
										Construção Industrial
									</Select.SelectItem>
									<Select.SelectItem value='leek'>Pública</Select.SelectItem>
								</Select.Group>
							</Select.Viewport>
						</Select.Content>
					</Select.Portal>
				</Select.Root>
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
							name='sewage'
							value='true'
							className='mr-1'
						/>
						<label htmlFor='yes'>Sim</label>
					</div>
					<div>
						<input
							type='radio'
							id='no'
							name='sewage'
							value='false'
							className='mr-1'
							defaultChecked
						/>
						<label htmlFor='no'>Não</label>
					</div>
				</div>
			</div>

			<button
				type='submit'
				className='w-full max-w-96 mx-auto h-12 p-2 font-bold bg-secondary rounded-md text-white sm:mx-0'
			>
				Calcular
			</button>
		</form>
	);
};
