import {Declension, declensions} from "src/units/declensions";
import unitNames from 'src/units/unitNames';

const integerWordEndings = {
  [declensions.NOMINATIVE]: ['', 'ы'],
  [declensions.GENITIVE]: ['а', 'ов'],
  [declensions.DATIVE]: ['у', 'ам'],
  [declensions.ACCUSATIVE]: ['', 'а'],
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
 * @param {number} scale - Индекс класса числа (0 - единицы, 1 - тысячи и т.д.).
 * @param {number} scaleNameForm - Форма названия класса числа (0 | 1 | 2).
 * @param {Declension} declension - Падеж для класса числа.
 * @return {string} Название класса числа (напр. "миллиард", "миллиона", "тысячи" и др.).
 */
const getNumberScaleName = (scale: number, scaleNameForm: number, declension: Declension): string => {
  let scaleDeclension = declension;
  let scalePlural = (scaleNameForm === 0) ? 0 : 1;
  // Если падеж "именительный" или "винительный" и множественное число
  if (
    (declension === declensions.NOMINATIVE
    || declension === declensions.ACCUSATIVE)
    && scaleNameForm >= 1
  ) {
    // Для множественного числа именительного падежа используется родительный падеж.
    scaleDeclension = declensions.GENITIVE;
    scalePlural = (scaleNameForm === 1) ? 0 : 1;
  }
  if (scale === 0) {
    // Класс единиц
    // Для них название не отображается.
    return ''
  } else if (scale === 1) {
    // Класс тысяч
    return thousandNames[scaleDeclension][scalePlural];
  }
  // Класс миллионов и так далее
  const ending = integerWordEndings[scaleDeclension][scalePlural];
  const base = unitNames[scale - 2];
  return base + ending;
};

export default getNumberScaleName;
