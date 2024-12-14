type SewageTaxProps = {
	totalPrice: number;
};

// Add the sewage tax that is 80% of the bill value
export const sewageTax = ({ totalPrice }: SewageTaxProps) => {
	const sewageTaxPercentage = 80;
	const sewageTax = (sewageTaxPercentage * totalPrice) / 100;

	return {
		total: sewageTax,
	};
};
