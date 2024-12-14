type RangeObjectType = {
	[key: string]: boolean;
};

type ResidenceCategory = 'FAIXA_1' | 'FAIXA_2';

// Based on the consumption and residence category, return which range the consumption is and which ranges already exceed
export const getResidenceRange = (
	consumption: number,
	residenceCategory: ResidenceCategory,
) => {
	const range1: RangeObjectType = {
		FAIXA_1_1: consumption <= 6,
		FAIXA_1_2: consumption >= 7 && consumption <= 10,
		FAIXA_1_3: consumption >= 11 && consumption <= 15,
		FAIXA_1_4: consumption >= 16 && consumption <= 20,
		FAIXA_1_5: consumption >= 21 && consumption <= 25,
		FAIXA_1_6: consumption >= 26 && consumption <= 30,
		FAIXA_1_7: consumption >= 31 && consumption <= 40,
		FAIXA_1_8: consumption >= 41 && consumption <= 50,
		FAIXA_1_9: consumption > 50,
	};

	const range2: RangeObjectType = {
		FAIXA_2_1: consumption <= 6,
		FAIXA_2_2: consumption >= 7 && consumption <= 10,
		FAIXA_2_3: consumption >= 11 && consumption <= 50,
		FAIXA_2_4: consumption > 50,
	};

	let ranges: RangeObjectType;

	// Set the value of ranges object based on the residence category
	if (residenceCategory === 'FAIXA_1') {
		ranges = range1;
	} else {
		ranges = range2;
	}

	const exceededRanges: string[] = [];

	// Go through the ranges object and return the first range it returns true. Then, save the previous ranges in an array
	for (const [key, value] of Object.entries(ranges)) {
		exceededRanges.push(key);

		if (value) {
			return {
				exceededRanges: exceededRanges.filter(range => range !== key),
				currentRange: key,
			};
		}
	}

	return null;
};
