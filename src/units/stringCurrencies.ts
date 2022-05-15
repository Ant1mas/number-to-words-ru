import { declensions } from 'src/units/declensions'
import { CurrencyStringValues } from 'src/typeScript/interfaces/CurrencyStringValues'

const defaultParams = {
  fractionalPartMinLength: 2,
}

export const stringCurrencies: CurrencyStringValues = {
  number: {
    fractionalPartMinLength: 0,
    currencyNameCases: ['целая', 'целых', 'целых'],
    currencyNameDeclensions: {
      [declensions.NOMINATIVE]: ['целая', ''],
      [declensions.GENITIVE]: ['целой', 'целых'],
      [declensions.DATIVE]: ['целой', 'целым'],
      [declensions.ACCUSATIVE]: ['целую', 'целые'],
      [declensions.INSTRUMENTAL]: ['целой', 'целыми'],
      [declensions.PREPOSITIONAL]: ['целой', 'целых'],
    },
    fractionalPartNameCases: ['', '', ''],
    fractionalPartNameDeclensions: {
      [declensions.NOMINATIVE]: ['', ''],
      [declensions.GENITIVE]: ['', ''],
      [declensions.DATIVE]: ['', ''],
      [declensions.ACCUSATIVE]: ['', ''],
      [declensions.INSTRUMENTAL]: ['', ''],
      [declensions.PREPOSITIONAL]: ['', ''],
    },
    currencyNounGender: {
      integer: 1,
      fractionalPart: 1,
    },
  },
  rub: {
    ...defaultParams,
    currencyNameCases: ['рубль', 'рубля', 'рублей'],
    currencyNameDeclensions: {
      [declensions.NOMINATIVE]: ['рубль', ''],
      [declensions.GENITIVE]: ['рубля', 'рублей'],
      [declensions.DATIVE]: ['рублю', 'рублям'],
      [declensions.ACCUSATIVE]: ['рубль', ''],
      [declensions.INSTRUMENTAL]: ['рублём', 'рублями'],
      [declensions.PREPOSITIONAL]: ['рубле', 'рублях'],
    },
    fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
    fractionalPartNameDeclensions: {
      [declensions.NOMINATIVE]: ['копейка', ''],
      [declensions.GENITIVE]: ['копейки', 'копеек'],
      [declensions.DATIVE]: ['копейке', 'копейкам'],
      [declensions.ACCUSATIVE]: ['копейку', ''],
      [declensions.INSTRUMENTAL]: ['копейкой', 'копейками'],
      [declensions.PREPOSITIONAL]: ['копейке', 'копейках'],
    },
    currencyNounGender: {
      integer: 0, // Мужской род
      fractionalPart: 1, // Женский род
    },
  },
  usd: {
    ...defaultParams,
    currencyNameCases: ['доллар', 'доллара', 'долларов'],
    currencyNameDeclensions: {
      [declensions.NOMINATIVE]: ['доллар', ''],
      [declensions.GENITIVE]: ['доллара', 'долларов'],
      [declensions.DATIVE]: ['доллару', 'долларам'],
      [declensions.ACCUSATIVE]: ['доллар', ''],
      [declensions.INSTRUMENTAL]: ['долларом', 'долларами'],
      [declensions.PREPOSITIONAL]: ['долларе', 'долларах'],
    },
    fractionalPartNameCases: ['цент', 'цента', 'центов'],
    fractionalPartNameDeclensions: {
      [declensions.NOMINATIVE]: ['цент', ''],
      [declensions.GENITIVE]: ['цента', 'центов'],
      [declensions.DATIVE]: ['центу', 'центам'],
      [declensions.ACCUSATIVE]: ['цент', ''],
      [declensions.INSTRUMENTAL]: ['центом', 'центами'],
      [declensions.PREPOSITIONAL]: ['центе', 'центах'],
    },
    currencyNounGender: {
      integer: 0,
      fractionalPart: 0,
    },
  },
  eur: {
    ...defaultParams,
    currencyNameCases: ['евро', 'евро', 'евро'],
    currencyNameDeclensions: {
      [declensions.NOMINATIVE]: ['евро', ''],
      [declensions.GENITIVE]: ['евро', 'евро'],
      [declensions.DATIVE]: ['евро', 'евро'],
      [declensions.ACCUSATIVE]: ['евро', ''],
      [declensions.INSTRUMENTAL]: ['евро', 'евро'],
      [declensions.PREPOSITIONAL]: ['евро', 'евро'],
    },
    fractionalPartNameCases: ['цент', 'цента', 'центов'],
    fractionalPartNameDeclensions: {
      [declensions.NOMINATIVE]: ['цент', ''],
      [declensions.GENITIVE]: ['цента', 'центов'],
      [declensions.DATIVE]: ['центу', 'центам'],
      [declensions.ACCUSATIVE]: ['цент', ''],
      [declensions.INSTRUMENTAL]: ['центом', 'центами'],
      [declensions.PREPOSITIONAL]: ['центе', 'центах'],
    },
    currencyNounGender: {
      integer: 0,
      fractionalPart: 0,
    },
  },
}

export default stringCurrencies
