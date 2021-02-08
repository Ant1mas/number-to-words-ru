import {DeclensionNumberNames} from 'textValues';
import {Gender} from "units/genders";

/**
 * Конвертировать одну цифру в слово.
 * @param {number} digit - Цифра для конвертирования.
 * @param {DeclensionNumberNames} values - Подходящий объект с падежами для конвертирования цифры.
 * @param {Declension} declension - Выбранный падеж.
 * @param {Gender} gender - Род для цирфы.
 * @return {string} Цирфа (в видео слова) в правильном падеже (напр. "сто", "двадцать", "две" и др.)
 */
export const convertDigitToWord = (
  digit: number,
  values: DeclensionNumberNames,
  declension: Declension,
  gender: Gender
): string => {
  const declensionValues = values[declension];
  const word = declensionValues[digit];
  return (typeof word === "object") ? word[gender] : word;
};

export default convertDigitToWord;
