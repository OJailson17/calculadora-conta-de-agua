type TaxesProps = {
	[key: string]: {
		[key: string]: {
			total: number;
			aliquot: number;
			maxValue: number;
			minValue: number;
		};
	};
};

export const FAIXA_1: TaxesProps = {
	FAIXA_1_1: {
		ResidencialSocial: {
			total: 14.97,
			aliquot: 0,
			maxValue: 6,
			minValue: 0,
		},
		ResidencialIntermediaria: {
			total: 36.35,
			aliquot: 0,
			maxValue: 6,
			minValue: 0,
		},
		ResidencialNormalVeraneio: {
			total: 41.18,
			aliquot: 0,
			maxValue: 6,
			minValue: 0,
		},
		Filantropica: {
			total: 18.46,
			aliquot: 0,
			maxValue: 6,
			minValue: 0,
		},
	},
	FAIXA_1_2: {
		ResidencialSocial: {
			total: 3.72,
			aliquot: 0.93,
			maxValue: 10,
			minValue: 7,
		},
		ResidencialIntermediaria: {
			total: 5.92,
			aliquot: 1.48,
			maxValue: 10,
			minValue: 7,
		},
		ResidencialNormalVeraneio: {
			total: 6.52,
			aliquot: 1.63,
			maxValue: 10,
			minValue: 7,
		},
		Filantropica: {
			total: 4.6,
			aliquot: 1.15,
			maxValue: 10,
			minValue: 7,
		},
	},
	FAIXA_1_3: {
		ResidencialSocial: {
			total: 33,
			aliquot: 6.6,
			maxValue: 15,
			minValue: 11,
		},
		ResidencialIntermediaria: {
			total: 46.7,
			aliquot: 9.34,
			maxValue: 15,
			minValue: 11,
		},
		ResidencialNormalVeraneio: {
			total: 57.65,
			aliquot: 11.53,
			maxValue: 15,
			minValue: 11,
		},
		Filantropica: {
			total: 40.7,
			aliquot: 8.14,
			maxValue: 15,
			minValue: 11,
		},
	},
	FAIXA_1_4: {
		ResidencialSocial: {
			total: 35.9,
			aliquot: 7.18,
			maxValue: 20,
			minValue: 16,
		},
		ResidencialIntermediaria: {
			total: 50.5,
			aliquot: 10.1,
			maxValue: 20,
			minValue: 16,
		},
		ResidencialNormalVeraneio: {
			total: 61.7,
			aliquot: 12.34,
			maxValue: 20,
			minValue: 16,
		},
		Filantropica: {
			total: 44.3,
			aliquot: 8.86,
			maxValue: 20,
			minValue: 16,
		},
	},
	FAIXA_1_5: {
		ResidencialSocial: {
			total: 53.55,
			aliquot: 10.71,
			maxValue: 25,
			minValue: 21,
		},
		ResidencialIntermediaria: {
			total: 66.3,
			aliquot: 13.26,
			maxValue: 25,
			minValue: 21,
		},
		ResidencialNormalVeraneio: {
			total: 69.35,
			aliquot: 13.87,
			maxValue: 25,
			minValue: 21,
		},
		Filantropica: {
			total: 66.05,
			aliquot: 13.21,
			maxValue: 25,
			minValue: 21,
		},
	},
	FAIXA_1_6: {
		ResidencialSocial: {
			total: 59.7,
			aliquot: 11.94,
			maxValue: 30,
			minValue: 26,
		},
		ResidencialIntermediaria: {
			total: 73.85,
			aliquot: 14.77,
			maxValue: 30,
			minValue: 26,
		},
		ResidencialNormalVeraneio: {
			total: 77.35,
			aliquot: 15.47,
			maxValue: 30,
			minValue: 26,
		},
		Filantropica: {
			total: 73.65,
			aliquot: 14.73,
			maxValue: 30,
			minValue: 26,
		},
	},
	FAIXA_1_7: {
		ResidencialSocial: {
			total: 132.1,
			aliquot: 13.21,
			maxValue: 40,
			minValue: 31,
		},
		ResidencialIntermediaria: {
			total: 162.7,
			aliquot: 16.27,
			maxValue: 40,
			minValue: 31,
		},
		ResidencialNormalVeraneio: {
			total: 170,
			aliquot: 17.0,
			maxValue: 40,
			minValue: 31,
		},
		Filantropica: {
			total: 162.7,
			aliquot: 16.27,
			maxValue: 40,
			minValue: 31,
		},
	},
	FAIXA_1_8: {
		ResidencialSocial: {
			total: 151.4,
			aliquot: 15.14,
			maxValue: 50,
			minValue: 41,
		},
		ResidencialIntermediaria: {
			total: 186.5,
			aliquot: 18.65,
			maxValue: 50,
			minValue: 41,
		},
		ResidencialNormalVeraneio: {
			total: 186.5,
			aliquot: 18.65,
			maxValue: 50,
			minValue: 41,
		},
		Filantropica: {
			total: 186.5,
			aliquot: 18.65,
			maxValue: 50,
			minValue: 41,
		},
	},
	FAIXA_1_9: {
		ResidencialSocial: {
			total: 0,
			aliquot: 18.2,
			maxValue: 0,
			minValue: 50,
		},
		ResidencialIntermediaria: {
			total: 0,
			aliquot: 22.44,
			maxValue: 0,
			minValue: 50,
		},
		ResidencialNormalVeraneio: {
			total: 0,
			aliquot: 22.44,
			maxValue: 0,
			minValue: 50,
		},
		Filantropica: {
			total: 0,
			aliquot: 22.44,
			maxValue: 0,
			minValue: 50,
		},
	},
};

export const FAIXA_2: TaxesProps = {
	FAIXA_2_1: {
		Comercial: {
			total: 119.51,
			aliquot: 0,
			maxValue: 6,
			minValue: 0,
		},
		ServicosComerciosOutrasAtividadesReduzidas: {
			total: 51.08,
			aliquot: 0,
			maxValue: 6,
			minValue: 0,
		},
		DerivacoesComerciaisAguaBruta: {
			total: 19.55,
			aliquot: 0,
			maxValue: 6,
			minValue: 0,
		},
		ConstrucaoIndustrial: {
			total: 119.51,
			aliquot: 0,
			maxValue: 6,
			minValue: 0,
		},
		Publica: {
			total: 119.51,
			aliquot: 0,
			maxValue: 6,
			minValue: 0,
		},
	},
	FAIXA_2_2: {
		Comercial: {
			total: 18.24,
			aliquot: 4.56,
			maxValue: 10,
			minValue: 7,
		},
		ServicosComerciosOutrasAtividadesReduzidas: {
			total: 6.52,
			aliquot: 1.63,
			maxValue: 10,
			minValue: 7,
		},
		DerivacoesComerciaisAguaBruta: {
			total: 6.52,
			aliquot: 1.63,
			maxValue: 10,
			minValue: 7,
		},
		ConstrucaoIndustrial: {
			total: 18.24,
			aliquot: 4.56,
			maxValue: 10,
			minValue: 7,
		},
		Publica: {
			total: 18.24,
			aliquot: 4.56,
			maxValue: 10,
			minValue: 7,
		},
	},
	FAIXA_2_3: {
		Comercial: {
			total: 1048.4,
			aliquot: 26.21,
			maxValue: 50,
			minValue: 11,
		},
		ServicosComerciosOutrasAtividadesReduzidas: {
			total: 1048.4,
			aliquot: 26.21,
			maxValue: 50,
			minValue: 11,
		},
		DerivacoesComerciaisAguaBruta: {
			total: 88.4,
			aliquot: 2.21,
			maxValue: 50,
			minValue: 11,
		},
		ConstrucaoIndustrial: {
			total: 1048.4,
			aliquot: 26.21,
			maxValue: 50,
			minValue: 11,
		},
		Publica: {
			total: 1048.4,
			aliquot: 26.21,
			maxValue: 50,
			minValue: 11,
		},
	},
	FAIXA_2_4: {
		Comercial: {
			total: 0,
			aliquot: 30.9,
			maxValue: 0,
			minValue: 50,
		},
		ServicosComerciosOutrasAtividadesReduzidas: {
			total: 0,
			aliquot: 30.9,
			maxValue: 0,
			minValue: 50,
		},
		DerivacoesComerciaisAguaBruta: {
			total: 0,
			aliquot: 2.4,
			maxValue: 0,
			minValue: 50,
		},
		ConstrucaoIndustrial: {
			total: 0,
			aliquot: 30.9,
			maxValue: 0,
			minValue: 50,
		},
		Publica: {
			total: 0,
			aliquot: 30.9,
			maxValue: 0,
			minValue: 50,
		},
	},
};
