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
      total: 16.28,
      aliquot: 0,
      maxValue: 6,
      minValue: 0,
    },
    ResidencialIntermediaria: {
      total: 39.52,
      aliquot: 0,
      maxValue: 6,
      minValue: 0,
    },
    ResidencialNormalVeraneio: {
      total: 44.77,
      aliquot: 0,
      maxValue: 6,
      minValue: 0,
    },
    Filantropica: {
      total: 20.07,
      aliquot: 0,
      maxValue: 6,
      minValue: 0,
    },
  },

  FAIXA_1_2: {
    ResidencialSocial: {
      total: 4.04,
      aliquot: 1.01,
      maxValue: 10,
      minValue: 7,
    },
    ResidencialIntermediaria: {
      total: 6.44,
      aliquot: 1.61,
      maxValue: 10,
      minValue: 7,
    },
    ResidencialNormalVeraneio: {
      total: 7.08,
      aliquot: 1.77,
      maxValue: 10,
      minValue: 7,
    },
    Filantropica: {
      total: 5,
      aliquot: 1.25,
      maxValue: 10,
      minValue: 7,
    },
  },
  FAIXA_1_3: {
    ResidencialSocial: {
      total: 35.9,
      aliquot: 7.18,
      maxValue: 15,
      minValue: 11,
    },
    ResidencialIntermediaria: {
      total: 50.8,
      aliquot: 10.16,
      maxValue: 15,
      minValue: 11,
    },
    ResidencialNormalVeraneio: {
      total: 62.65,
      aliquot: 12.53,
      maxValue: 15,
      minValue: 11,
    },
    Filantropica: {
      total: 44.3,
      aliquot: 8.86,
      maxValue: 15,
      minValue: 11,
    },
  },
  FAIXA_1_4: {
    ResidencialSocial: {
      total: 39.05,
      aliquot: 7.81,
      maxValue: 20,
      minValue: 16,
    },
    ResidencialIntermediaria: {
      total: 54.9,
      aliquot: 10.98,
      maxValue: 20,
      minValue: 16,
    },
    ResidencialNormalVeraneio: {
      total: 67.05,
      aliquot: 13.41,
      maxValue: 20,
      minValue: 16,
    },
    Filantropica: {
      total: 48.15,
      aliquot: 9.63,
      maxValue: 20,
      minValue: 16,
    },
  },
  FAIXA_1_5: {
    ResidencialSocial: {
      total: 58.2,
      aliquot: 11.64,
      maxValue: 25,
      minValue: 21,
    },
    ResidencialIntermediaria: {
      total: 72.1,
      aliquot: 14.42,
      maxValue: 25,
      minValue: 21,
    },
    ResidencialNormalVeraneio: {
      total: 75.4,
      aliquot: 15.08,
      maxValue: 25,
      minValue: 21,
    },
    Filantropica: {
      total: 71.85,
      aliquot: 14.37,
      maxValue: 25,
      minValue: 21,
    },
  },
  FAIXA_1_6: {
    ResidencialSocial: {
      total: 64.9,
      aliquot: 12.98,
      maxValue: 30,
      minValue: 26,
    },
    ResidencialIntermediaria: {
      total: 80.3,
      aliquot: 16.06,
      maxValue: 30,
      minValue: 26,
    },
    ResidencialNormalVeraneio: {
      total: 84.1,
      aliquot: 16.82,
      maxValue: 30,
      minValue: 26,
    },
    Filantropica: {
      total: 80.05,
      aliquot: 16.01,
      maxValue: 30,
      minValue: 26,
    },
  },
  FAIXA_1_7: {
    ResidencialSocial: {
      total: 143.7,
      aliquot: 14.37,
      maxValue: 40,
      minValue: 31,
    },
    ResidencialIntermediaria: {
      total: 176.9,
      aliquot: 17.69,
      maxValue: 40,
      minValue: 31,
    },
    ResidencialNormalVeraneio: {
      total: 184.9,
      aliquot: 18.49,
      maxValue: 40,
      minValue: 31,
    },
    Filantropica: {
      total: 176.9,
      aliquot: 17.69,
      maxValue: 40,
      minValue: 31,
    },
  },
  FAIXA_1_8: {
    ResidencialSocial: {
      total: 164.6,
      aliquot: 16.46,
      maxValue: 50,
      minValue: 41,
    },
    ResidencialIntermediaria: {
      total: 202.8,
      aliquot: 20.28,
      maxValue: 50,
      minValue: 41,
    },
    ResidencialNormalVeraneio: {
      total: 202.8,
      aliquot: 20.28,
      maxValue: 50,
      minValue: 41,
    },
    Filantropica: {
      total: 202.8,
      aliquot: 20.28,
      maxValue: 50,
      minValue: 41,
    },
  },
  FAIXA_1_9: {
    ResidencialSocial: {
      total: 0,
      aliquot: 19.79,
      maxValue: 0,
      minValue: 50,
    },
    ResidencialIntermediaria: {
      total: 0,
      aliquot: 24.4,
      maxValue: 0,
      minValue: 50,
    },
    ResidencialNormalVeraneio: {
      total: 0,
      aliquot: 24.4,
      maxValue: 0,
      minValue: 50,
    },
    Filantropica: {
      total: 0,
      aliquot: 24.4,
      maxValue: 0,
      minValue: 50,
    },
  },
};

export const FAIXA_2: TaxesProps = {
  FAIXA_2_1: {
    Comercial: {
      total: 129.94,
      aliquot: 0,
      maxValue: 6,
      minValue: 0,
    },
    ServicosComerciosOutrasAtividadesReduzidas: {
      total: 55.53,
      aliquot: 0,
      maxValue: 6,
      minValue: 0,
    },
    DerivacoesComerciaisAguaBruta: {
      total: 21.25,
      aliquot: 0,
      maxValue: 6,
      minValue: 0,
    },
    ConstrucaoIndustrial: {
      total: 129.94,
      aliquot: 0,
      maxValue: 6,
      minValue: 0,
    },
    Publica: {
      total: 129.94,
      aliquot: 0,
      maxValue: 6,
      minValue: 0,
    },
  },
  FAIXA_2_2: {
    Comercial: {
      total: 19.84,
      aliquot: 4.96,
      maxValue: 10,
      minValue: 7,
    },
    ServicosComerciosOutrasAtividadesReduzidas: {
      total: 7.08,
      aliquot: 1.77,
      maxValue: 10,
      minValue: 7,
    },
    DerivacoesComerciaisAguaBruta: {
      total: 7.08,
      aliquot: 1.77,
      maxValue: 10,
      minValue: 7,
    },
    ConstrucaoIndustrial: {
      total: 19.84,
      aliquot: 4.96,
      maxValue: 10,
      minValue: 7,
    },
    Publica: {
      total: 19.84,
      aliquot: 4.96,
      maxValue: 10,
      minValue: 7,
    },
  },
  FAIXA_2_3: {
    Comercial: {
      total: 74.8,
      aliquot: 28.5,
      maxValue: 50,
      minValue: 11,
    },
    ServicosComerciosOutrasAtividadesReduzidas: {
      total: 1140,
      aliquot: 28.5,
      maxValue: 50,
      minValue: 11,
    },
    DerivacoesComerciaisAguaBruta: {
      total: 96,
      aliquot: 2.4,
      maxValue: 50,
      minValue: 11,
    },
    ConstrucaoIndustrial: {
      total: 1140,
      aliquot: 28.5,
      maxValue: 50,
      minValue: 11,
    },
    Publica: {
      total: 1140,
      aliquot: 28.5,
      maxValue: 50,
      minValue: 11,
    },
  },
  FAIXA_2_4: {
    Comercial: {
      total: 0,
      aliquot: 33.6,
      maxValue: 0,
      minValue: 50,
    },
    ServicosComerciosOutrasAtividadesReduzidas: {
      total: 0,
      aliquot: 33.6,
      maxValue: 0,
      minValue: 50,
    },
    DerivacoesComerciaisAguaBruta: {
      total: 0,
      aliquot: 2.61,
      maxValue: 0,
      minValue: 50,
    },
    ConstrucaoIndustrial: {
      total: 0,
      aliquot: 33.6,
      maxValue: 0,
      minValue: 50,
    },
    Publica: {
      total: 0,
      aliquot: 33.6,
      maxValue: 0,
      minValue: 50,
    },
  },
};
