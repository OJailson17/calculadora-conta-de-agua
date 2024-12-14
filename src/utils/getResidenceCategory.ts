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

const residenceCategoryPerRange = {
	range1: [
		'ResidencialSocial',
		'ResidencialIntermediaria',
		'ResidencialNormalVeraneio',
		'Filantropica',
	],
	range2: [
		'Comercial',
		'ServicosComerciosOutrasAtividadesReduzidas',
		'DerivacoesComerciaisAguaBruta',
		'ConstrucaoIndustrial',
		'Publica',
	],
};

export const getResidenceCategory = (residenceCategory: Residence) => {
	const isRange1 = residenceCategoryPerRange.range1.includes(residenceCategory);

	const isRange2 = residenceCategoryPerRange.range2.includes(residenceCategory);

	return isRange1 ? 'FAIXA_1' : isRange2 ? 'FAIXA_2' : null;
};
