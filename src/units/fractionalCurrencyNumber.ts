import { DECLENSIONS } from 'src/units/declensions'
import type { DeclensionsData } from 'src/units/declensions'

export const FRACTIONAL_UNITS_DECLENSIONS = [
  {
    [DECLENSIONS.NOMINATIVE]: ['десятая', 'десятые'],
    [DECLENSIONS.GENITIVE]: ['десятой', 'десятых'],
    [DECLENSIONS.DATIVE]: ['десятой', 'десятым'],
    [DECLENSIONS.ACCUSATIVE]: ['десятую', 'десятых'],
    [DECLENSIONS.INSTRUMENTAL]: ['десятой', 'десятыми'],
    [DECLENSIONS.PREPOSITIONAL]: ['десятой', 'десятых'],
  },
  {
    [DECLENSIONS.NOMINATIVE]: ['сотая', 'сотые'],
    [DECLENSIONS.GENITIVE]: ['сотой', 'сотых'],
    [DECLENSIONS.DATIVE]: ['сотой', 'сотым'],
    [DECLENSIONS.ACCUSATIVE]: ['сотую', 'сотых'],
    [DECLENSIONS.INSTRUMENTAL]: ['сотой', 'сотыми'],
    [DECLENSIONS.PREPOSITIONAL]: ['сотой', 'сотых'],
  },
]

// Массив корней для составления слова
export const FRACTIONAL_UNITS_BASES = [
  'тысяч',
  // 'миллион',
  // 'миллиард',
  // ...
]

export const FRACTIONAL_UNIT_PREFIXES = ['', 'десяти', 'сто']

export const FRACTIONAL_UNIT_ENDINGS: DeclensionsData = {
  [DECLENSIONS.NOMINATIVE]: ['ная', 'ные'],
  [DECLENSIONS.GENITIVE]: ['ной', 'ных'],
  [DECLENSIONS.DATIVE]: ['ной', 'ным'],
  [DECLENSIONS.ACCUSATIVE]: ['ную', 'ные'],
  [DECLENSIONS.INSTRUMENTAL]: ['ной', 'ными'],
  [DECLENSIONS.PREPOSITIONAL]: ['ной', 'ных'],
}
