import { DECLENSIONS } from 'src/units/declensions'
import type { Declension, DeclensionsData } from 'src/units/declensions'

/**
 * Конвертировать в текст массив числа с разделителем "/".
 * @param {Declensions} declensionsObject - Объект с падежами.
 * @param {Declension} declension - Падеж.
 * @param {boolean} isPlural - Множественное ли число.
 * @return {string} Конвертированный результат (текст).
 */
export default function selectDataByDeclension(
  declensionsObject: DeclensionsData,
  declension: Declension,
  isPlural: boolean = false,
): string {
  let result = declensionsObject[declension][isPlural ? 1 : 0]
  // Если падеж "именительный" или "винительный" и множественное число
  if (
    isPlural === true &&
    (declension === DECLENSIONS.NOMINATIVE ||
      declension === DECLENSIONS.ACCUSATIVE)
  ) {
    // Использовать родительный падеж.
    result = declensionsObject[declensions.GENITIVE][1]
  }
  return result
}
