import {CurrencyStringValues} from 'typeScript/interfaces/CurrencyStringValues';

const defaultParams = {
  fractionalPartMinLength: 2,
};

export const stringCurrencies: CurrencyStringValues = {
  number: {
    currencyNameCases: ['целая', 'целых', 'целых'],
    fractionalPartNameCases: ['', '', ''],
    currencyNounGender: {
      integer: 1,
      fractionalPart: 1,
    },
  },
  rub: {
    ...defaultParams,
    currencyNameCases: ['рубль', 'рубля', 'рублей'],
    fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
    currencyNounGender: {
      integer: 0, // Мужской род
      fractionalPart: 1, // Женский род
    },
  },
  usd: {
    ...defaultParams,
    currencyNameCases: ['доллар', 'доллара', 'долларов'],
    fractionalPartNameCases: ['цент', 'цента', 'центов'],
    currencyNounGender: {
      integer: 0,
      fractionalPart: 0,
    },
  },
  eur: {
    ...defaultParams,
    currencyNameCases: ['евро', 'евро', 'евро'],
    fractionalPartNameCases: ['цент', 'цента', 'центов'],
    currencyNounGender: {
      integer: 0,
      fractionalPart: 0,
    },
  },
};

export default stringCurrencies;
