'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface BillContextProps {
	billPrice: number;
	onSetBillPrice: (price: number) => void;
}

interface BillContextProviderProps {
	children: ReactNode;
}

const BillContext = createContext({} as BillContextProps);

export const BillContextProvider = ({ children }: BillContextProviderProps) => {
	const [billPrice, setBillPrice] = useState(0);

	const handleSetBillPrice = (price: number) => {
		setBillPrice(price);
	};

	return (
		<BillContext.Provider
			value={{ billPrice, onSetBillPrice: handleSetBillPrice }}
		>
			{children}
		</BillContext.Provider>
	);
};

export const useBillContext = () => useContext(BillContext);
