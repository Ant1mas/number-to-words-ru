import { DECLENSIONS } from 'src/units/declensions'
import { UNIT_NAMES } from 'src/units/unitNames'
import type { Declension } from 'src/units/declensions'

const INTEGER_WORD_ENDINGS = {
  [DECLENSIONS.NOMINATIVE]: ['', 'ы'],
  [DECLENSIONS.GENITIVE]: ['а', 'ов'],
  [DECLENSIONS.DATIVE]: ['у', 'ам'],
  [DECLENSIONS.ACCUSATIVE]: ['', 'а'],
  [DECLENSIONS.INSTRUMENTAL]: ['ом', 'ами'],
  [DECLENSIONS.PREPOSITIONAL]: ['е', 'ах'],
}

type UnitName = {
  [key in Declension]: [string, string]
}

const THOUSAND_NAMES: UnitName = {
  [DECLENSIONS.NOMINATIVE]: ['тысяча', 'тысячи'],
  [DECLENSIONS.GENITIVE]: ['тысячи', 'тысяч'],
  [DECLENSIONS.DATIVE]: ['тысяче', 'тысячам'],
  [DECLENSIONS.ACCUSATIVE]: ['тысячу', 'тысячи'],
  [DECLENSIONS.INSTRUMENTAL]: ['тысячей', 'тысячами'],
  [DECLENSIONS.PREPOSITIONAL]: ['тысяче', 'тысячах'],
}

/**
 * Получить название класса числа в правильном падеже.
 * @param {number} scale - Индекс класса числа (0 - единицы, 1 - тысячи и т.д.).
 * @param {number} scaleNameForm - Форма названия класса числа (0 | 1 | 2).
 * @param {Declension} declension - Падеж для класса числа.
 * @return {string} Название класса числа (напр. "миллиард", "миллиона", "тысячи" и др.).
 */
export default function getNumberScaleName(
  scale: number,
  scaleNameForm: number,
  declension: Declension,
): string {
  let scaleDeclension = declension
  let scalePlural = scaleNameForm === 0 ? 0 : 1
  // Если падеж "именительный" или "винительный" и множественное число
  if (
    (declension === DECLENSIONS.NOMINATIVE ||
      declension === DECLENSIONS.ACCUSATIVE) &&
    scaleNameForm >= 1
  ) {
    // Для множественного числа именительного падежа используется родительный падеж.
    scaleDeclension = DECLENSIONS.GENITIVE
    scalePlural = scaleNameForm === 1 ? 0 : 1
  }
  if (scale === 0) {
    // Класс единиц
    // Для них название не отображается.
    return ''
  } else if (scale === 1) {
    // Класс тысяч
    return THOUSAND_NAMES[scaleDeclension][scalePlural]
  }
  // Класс миллионов и так далее
  const ending = INTEGER_WORD_ENDINGS[scaleDeclension][scalePlural]
  const base = UNIT_NAMES[scale - 2]
  return base + ending
}
