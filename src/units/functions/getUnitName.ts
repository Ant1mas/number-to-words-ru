import {Declension, declensions} from "../declensions";
import unitNames from 'units/unitNames';

const integerWordEndings = {
  [declensions.NOMINATIVE]: ['', 'а'],
  [declensions.GENITIVE]: ['а', 'ов'],
  [declensions.DATIVE]: ['у', 'ам'],
  [declensions.ACCUSATIVE]: ['', 'ы'],
  [declensions.INSTRUMENTAL]: ['ом', 'ами'],
  [declensions.PREPOSITIONAL]: ['е', 'ах'],
};

type UnitName = {
  [key: string]: [string, string];
};

let thousandNames: UnitName = {
  [declensions.NOMINATIVE]: ['тысяча', 'тысячи'],
  [declensions.GENITIVE]: ['тысячи', 'тысяч'],
  [declensions.DATIVE]: ['тысяче', 'тысячам'],
  [declensions.ACCUSATIVE]: ['тысячу', 'тысячи'],
  [declensions.INSTRUMENTAL]: ['тысячей', 'тысячами'],
  [declensions.PREPOSITIONAL]: ['тысяче', 'тысячах'],
};

const getUnitName = (scale: number, declension: Declension, isPlural: boolean) => {
  if (scale === 0) {
    // Для единиц не отображаем названия
    return ''
  } else if (scale === 1) {
    // Тысячи
    return thousandNames[declension][isPlural ? 1 : 0];
  }

  // Миллионы и так далее
  const ending = integerWordEndings[declension][isPlural ? 1 : 0];
  const base = unitNames[scale - 2];

  return base ? base + ending : '';
};

export default getUnitName;
