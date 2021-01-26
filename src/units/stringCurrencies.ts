import {CurrencyStringValues} from 'typeScript/interfaces/CurrencyStringValues';
import {declensions} from "./declensions";

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
    currencyNameDeclensions: {
      [declensions.NOMINATIVE]: ['рубль', 'рубля'],
      [declensions.GENITIVE]: ['рубля', 'рублей'],
      [declensions.DATIVE]: ['рублю', 'рублям'],
      [declensions.ACCUSATIVE]: ['рубль', 'рубли'],
      [declensions.INSTRUMENTAL]: ['рублём', 'рублями'],
      [declensions.PREPOSITIONAL]: ['рубле', 'рублях'],
    },
    fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
    fractionalPartNameDeclensions: {
      [declensions.NOMINATIVE]: ['копейка', 'копейки'],
      [declensions.GENITIVE]: ['копейки', 'копеек'],
      [declensions.DATIVE]: ['копейке', 'копейкам'],
      [declensions.ACCUSATIVE]: ['копейку', 'копейки'],
      [declensions.INSTRUMENTAL]: ['копейкой', 'копейками'],
      [declensions.PREPOSITIONAL]: ['копейках', 'копейках'],
    },
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
