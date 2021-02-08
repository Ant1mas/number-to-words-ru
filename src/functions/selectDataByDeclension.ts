import {declensions, DeclensionsData} from "units/declensions";

/**
 * Конвертировать в текст массив числа с разделителем "/".
 * @param {Declensions} declensionsObject - Объект с падежами.
 * @param {Declension} declension - Падеж.
 * @param {boolean} isPlural - Множественное ли число.
 * @return {string} Конвертированный результат (текст).
 */
export const selectDataByDeclension = (
  declensionsObject: DeclensionsData,
  declension: Declension,
  isPlural: boolean = false,
): string => {
  let result = declensionsObject[declension][isPlural ? 1 : 0];
  // Если падеж "именительный" или "винительный" и множественное число
  if (
    isPlural === true &&
    (
      declension === declensions.NOMINATIVE
      || declension === declensions.ACCUSATIVE
    )
  ) {
    // Использовать родительный падеж.
    result = declensionsObject[declensions.GENITIVE][1];
  }
  return result;
}

export default selectDataByDeclension;
