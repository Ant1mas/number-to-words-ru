import {Declension, declensions} from "units/declensions";
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
  [key in Declension]?: [string, string];
};

let thousandNames: UnitName = {
  [declensions.NOMINATIVE]: ['тысяча', 'тысячи'],
  [declensions.GENITIVE]: ['тысячи', 'тысяч'],
  [declensions.DATIVE]: ['тысяче', 'тысячам'],
  [declensions.ACCUSATIVE]: ['тысячу', 'тысячи'],
  [declensions.INSTRUMENTAL]: ['тысячей', 'тысячами'],
  [declensions.PREPOSITIONAL]: ['тысяче', 'тысячах'],
};

/**
 * Получить название класса числа в правильном падеже.
 * @param {number} scale - Порядковый номер класса числа (0 - единицы, 1 - тысячи и т.д.).
 * @param {Declension} declension - Падеж для класса числа.
 * @param {boolean} isPlural - Множественость класса числа.
 * @return {string} Название класса числа (напр. "миллиард", "миллиона", "тысячи" и др.).
 */
const getUnitName = (scale: number, declension: Declension, isPlural: boolean) => {
  if (scale === 0) {
    // Класс единиц
    // Для них название не отображается.
    return ''
  } else if (scale === 1) {
    // Класс тысяч
    return thousandNames[declension][isPlural ? 1 : 0];
  }
  // Класс миллионов и так далее
  const ending = integerWordEndings[declension][isPlural ? 1 : 0];
  const base = unitNames[scale - 2];
  return base ? base + ending : '';
};

export default getUnitName;
