'use client';

import { useEffect, useState } from 'react';

export const CalculationResult = ({ totalPrice }: { totalPrice: number }) => {
	const [isScreenReady, setIsScreenReady] = useState(false);

	useEffect(() => {
		setIsScreenReady(false);

		setTimeout(() => {
			setIsScreenReady(true);
		}, 500);
	}, [totalPrice]);

	return (
		<div
			id='#result'
			className='flex flex-col items-center justify-center gap-8'
		>
			<p className='font-medium text-2xl'>Valor atual da conta</p>

			{isScreenReady ? (
				<p className='font-bold text-[48px]'>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					}).format(totalPrice)}
				</p>
			) : (
				<p className='font-bold text-[48px]'>calculando...</p>
			)}

			<p className='text-sm'>
				Valor não inclui taxas, multas ou juros adicionais que podem ser
				cobrados
			</p>
		</div>
	);
};
