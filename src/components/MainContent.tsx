'use client';

import { useBillContext } from '@/context/BillContext';
import { CalculationResult } from './CalculationResult';
import { HomeForm } from './Form/HomeForm';

export const MainContent = () => {
	const { billPrice } = useBillContext();

	return (
		<div className='flex flex-col gap-7 items-start justify-start sm:flex-row'>
			<HomeForm />
			<CalculationResult totalPrice={billPrice} />
		</div>
	);
};
