import {declensions} from "units/declensions";

export const fractionalUnitsDeclensions = [
  {
    [declensions.NOMINATIVE]: ['десятая', 'десятые'],
    [declensions.GENITIVE]: ['десятой', 'десятых'],
    [declensions.DATIVE]: ['десятой', 'десятым'],
    [declensions.ACCUSATIVE]: ['десятую', 'десятых'],
    [declensions.INSTRUMENTAL]: ['десятой', 'десятыми'],
    [declensions.PREPOSITIONAL]: ['десятой', 'десятых'],
  },
  {
    [declensions.NOMINATIVE]: ['сотая', 'сотые'],
    [declensions.GENITIVE]: ['сотой', 'сотых'],
    [declensions.DATIVE]: ['сотой', 'сотым'],
    [declensions.ACCUSATIVE]: ['сотую', 'сотых'],
    [declensions.INSTRUMENTAL]: ['сотой', 'сотыми'],
    [declensions.PREPOSITIONAL]: ['сотой', 'сотых'],
  },
];

// Массоив корней для составления слова
export const fractionalUnitsBases = [
  'тысяч',
  // 'миллион',
  // 'миллиард',
  // ...
];

export const fractionalUnitPrefixes = ['', 'десяти', 'сто'];
export const fractionalUnitEndings = {
  [declensions.NOMINATIVE]: ['ная', 'ные'],
  [declensions.GENITIVE]: ['ной', 'ных'],
  [declensions.DATIVE]: ['ной', 'ным'],
  [declensions.ACCUSATIVE]: ['ную', 'ные'],
  [declensions.INSTRUMENTAL]: ['ной', 'ными'],
  [declensions.PREPOSITIONAL]: ['ной', 'ных'],
};
