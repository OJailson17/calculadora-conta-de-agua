import { sewageTax } from './addSewageTax';
import { getResidenceCategory } from './getResidenceCategory';
import { getResidenceRange } from './getResidenceRange';
import { FAIXA_1, FAIXA_2 } from './taxes';

type Residence =
	| 'ResidencialSocial'
	| 'ResidencialIntermediaria'
	| 'ResidencialNormalVeraneio'
	| 'Filantropica'
	| 'Comercial'
	| 'ServicosComerciosOutrasAtividadesReduzidas'
	| 'DerivacoesComerciaisAguaBruta'
	| 'ConstrucaoIndustrial'
	| 'Publica';

type ResidenceCategory = 'FAIXA_1' | 'FAIXA_2';

type CalculatePriceProps = {
	consumption: number;
	residence: Residence;
	sewage: boolean;
};

// Get taxes data
const getPriceData = (residenceCategory: ResidenceCategory) => {
	const priceData = {
		FAIXA_1,
		FAIXA_2,
	};

	return priceData[residenceCategory];
};

export const calculateBillPrice = ({
	consumption,
	residence,
	sewage,
}: CalculatePriceProps) => {
	// Get residence category
	const residenceCategory = getResidenceCategory(residence);

	// Throw an error if residence category is invalid
	if (!residenceCategory) {
		throw new Error('Invalid residence category');
	}

	const prices = getPriceData(residenceCategory);

	// Get the consumption range
	const range = getResidenceRange(consumption, residenceCategory);

	let totalExceededPrice = 0; // the sum of the total price from the exceeded ranges
	let totalPrice = 0; // the total price
	let overLimit = 0; // the amount of water exceeded from the last range

	// Check if range is different than null
	if (!range) {
		throw new Error('Something went wrong');
	}

	// If there is no exceeded range then, return the total value of current range
	if (range.exceededRanges.length <= 0) {
		const rangeTotalPrice = prices[range.currentRange][residence].total;
		totalPrice = rangeTotalPrice;

		if (sewage) {
			const { total } = sewageTax({ totalPrice: rangeTotalPrice });
			totalPrice += total;
		}

		return { totalPrice: Number(totalPrice.toFixed(2)) };
	}

	// get the last range to calculate the difference from the consumption
	const lastRange = range.exceededRanges[range.exceededRanges.length - 1];

	// set over limit as the difference between the consumption and the max value of the last range
	overLimit = consumption - prices[lastRange][residence].maxValue;

	// go through the list of exceeded ranges and sum the total price of the exceeded ranges with the calculation of the current range
	for (let i = 0; i < range.exceededRanges.length; i++) {
		totalExceededPrice =
			prices[range.exceededRanges[i]][residence].total + totalExceededPrice;

		totalPrice =
			overLimit * prices[range.currentRange][residence].aliquot +
			totalExceededPrice;
	}

	if (sewage) {
		const { total: totalSewageTax } = sewageTax({ totalPrice });
		totalPrice += totalSewageTax;
	}

	return { totalPrice: Number(totalPrice.toFixed(2)) };
};
