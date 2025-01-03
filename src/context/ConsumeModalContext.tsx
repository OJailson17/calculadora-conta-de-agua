'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface ConsumeModalProviderProps {
	children: ReactNode;
}

interface ConsumeModalContextProps {
	isModalOpen: boolean;
	onModalState: (modalState: boolean) => void;
	onCloseModal: () => void;
}

const ConsumeModalContext = createContext({} as ConsumeModalContextProps);

export const ConsumeModalContextProvider = ({
	children,
}: ConsumeModalProviderProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalState = (modalState: boolean = false) => {
		setIsModalOpen(modalState);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<ConsumeModalContext.Provider
			value={{
				isModalOpen,
				onModalState: handleModalState,
				onCloseModal: handleCloseModal,
			}}
		>
			{children}
		</ConsumeModalContext.Provider>
	);
};

export const useConsumeModal = () => useContext(ConsumeModalContext);
