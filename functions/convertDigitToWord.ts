import type { Declension } from '@/lib/constants/declensions'
import type { Gender } from '@/lib/constants/genders'
import type { DeclensionNumbersArray } from '@/lib/constants/numbers'

/**
 * Конвертировать одну цифру в слово.
 * @param {number} digit - Цифра для конвертирования.
 * @param {DeclensionNumberNames} declensionNumberNames - Подходящий объект с падежами для конвертирования цифры.
 * @param {Declension} declension - Выбранный падеж.
 * @param {Gender} gender - Род для цифры.
 * @return {string} Цифра (в видео слова) в правильном падеже (напр. "сто", "двадцать", "две" и др.)
 */
export default function convertDigitToWord(
  digit: number,
  declensionNumberNames: DeclensionNumbersArray,
  declension: Declension,
  gender: Gender,
): string {
  const declensionValues = declensionNumberNames[declension]
  const word = declensionValues[digit]
  return typeof word === 'object' ? word[gender] : word
}
