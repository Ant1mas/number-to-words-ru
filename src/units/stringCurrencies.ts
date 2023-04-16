import { DECLENSIONS } from 'src/units/declensions'
import type { CurrencyStringValues } from 'src/typeScript/types/CurrencyStringValues'

const DEFAULT_PARAMS = {
  fractionalPartMinLength: 2,
}

export const STRING_CURRENCIES: CurrencyStringValues = {
  number: {
    fractionalPartMinLength: 0,
    currencyNameCases: ['целая', 'целых', 'целых'],
    currencyNameDeclensions: {
      [DECLENSIONS.NOMINATIVE]: ['целая', ''],
      [DECLENSIONS.GENITIVE]: ['целой', 'целых'],
      [DECLENSIONS.DATIVE]: ['целой', 'целым'],
      [DECLENSIONS.ACCUSATIVE]: ['целую', 'целые'],
      [DECLENSIONS.INSTRUMENTAL]: ['целой', 'целыми'],
      [DECLENSIONS.PREPOSITIONAL]: ['целой', 'целых'],
    },
    fractionalPartNameCases: ['', '', ''],
    fractionalPartNameDeclensions: {
      [DECLENSIONS.NOMINATIVE]: ['', ''],
      [DECLENSIONS.GENITIVE]: ['', ''],
      [DECLENSIONS.DATIVE]: ['', ''],
      [DECLENSIONS.ACCUSATIVE]: ['', ''],
      [DECLENSIONS.INSTRUMENTAL]: ['', ''],
      [DECLENSIONS.PREPOSITIONAL]: ['', ''],
    },
    currencyNounGender: {
      integer: 1,
      fractionalPart: 1,
    },
  },
  rub: {
    ...DEFAULT_PARAMS,
    currencyNameCases: ['рубль', 'рубля', 'рублей'],
    currencyNameDeclensions: {
      [DECLENSIONS.NOMINATIVE]: ['рубль', ''],
      [DECLENSIONS.GENITIVE]: ['рубля', 'рублей'],
      [DECLENSIONS.DATIVE]: ['рублю', 'рублям'],
      [DECLENSIONS.ACCUSATIVE]: ['рубль', ''],
      [DECLENSIONS.INSTRUMENTAL]: ['рублём', 'рублями'],
      [DECLENSIONS.PREPOSITIONAL]: ['рубле', 'рублях'],
    },
    fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
    fractionalPartNameDeclensions: {
      [DECLENSIONS.NOMINATIVE]: ['копейка', ''],
      [DECLENSIONS.GENITIVE]: ['копейки', 'копеек'],
      [DECLENSIONS.DATIVE]: ['копейке', 'копейкам'],
      [DECLENSIONS.ACCUSATIVE]: ['копейку', ''],
      [DECLENSIONS.INSTRUMENTAL]: ['копейкой', 'копейками'],
      [DECLENSIONS.PREPOSITIONAL]: ['копейке', 'копейках'],
    },
    currencyNounGender: {
      integer: 0, // Мужской род
      fractionalPart: 1, // Женский род
    },
  },
  usd: {
    ...DEFAULT_PARAMS,
    currencyNameCases: ['доллар', 'доллара', 'долларов'],
    currencyNameDeclensions: {
      [DECLENSIONS.NOMINATIVE]: ['доллар', ''],
      [DECLENSIONS.GENITIVE]: ['доллара', 'долларов'],
      [DECLENSIONS.DATIVE]: ['доллару', 'долларам'],
      [DECLENSIONS.ACCUSATIVE]: ['доллар', ''],
      [DECLENSIONS.INSTRUMENTAL]: ['долларом', 'долларами'],
      [DECLENSIONS.PREPOSITIONAL]: ['долларе', 'долларах'],
    },
    fractionalPartNameCases: ['цент', 'цента', 'центов'],
    fractionalPartNameDeclensions: {
      [DECLENSIONS.NOMINATIVE]: ['цент', ''],
      [DECLENSIONS.GENITIVE]: ['цента', 'центов'],
      [DECLENSIONS.DATIVE]: ['центу', 'центам'],
      [DECLENSIONS.ACCUSATIVE]: ['цент', ''],
      [DECLENSIONS.INSTRUMENTAL]: ['центом', 'центами'],
      [DECLENSIONS.PREPOSITIONAL]: ['центе', 'центах'],
    },
    currencyNounGender: {
      integer: 0,
      fractionalPart: 0,
    },
  },
  eur: {
    ...DEFAULT_PARAMS,
    currencyNameCases: ['евро', 'евро', 'евро'],
    currencyNameDeclensions: {
      [DECLENSIONS.NOMINATIVE]: ['евро', ''],
      [DECLENSIONS.GENITIVE]: ['евро', 'евро'],
      [DECLENSIONS.DATIVE]: ['евро', 'евро'],
      [DECLENSIONS.ACCUSATIVE]: ['евро', ''],
      [DECLENSIONS.INSTRUMENTAL]: ['евро', 'евро'],
      [DECLENSIONS.PREPOSITIONAL]: ['евро', 'евро'],
    },
    fractionalPartNameCases: ['цент', 'цента', 'центов'],
    fractionalPartNameDeclensions: {
      [DECLENSIONS.NOMINATIVE]: ['цент', ''],
      [DECLENSIONS.GENITIVE]: ['цента', 'центов'],
      [DECLENSIONS.DATIVE]: ['центу', 'центам'],
      [DECLENSIONS.ACCUSATIVE]: ['цент', ''],
      [DECLENSIONS.INSTRUMENTAL]: ['центом', 'центами'],
      [DECLENSIONS.PREPOSITIONAL]: ['центе', 'центах'],
    },
    currencyNounGender: {
      integer: 0,
      fractionalPart: 0,
    },
  },
}
