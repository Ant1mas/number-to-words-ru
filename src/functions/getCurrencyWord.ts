import {declensions, Declension} from "units/declensions";
import {CurrencySettings} from "typeScript/interfaces/ConvertInterfaces";

type numberParts = 
  | 'integer'
  | 'fractional';

/**
 * Поулчить валюту в виде текста в правильной форме.
 * @param {CurrencySettings} currencyObject - Объект валюты.
 * @param {numberParts} numberPart - Часть чиcла (целая / дробная).
 * @param {number} unitNameForm - Форма валюты (0 / 1 / 2).
 * @param {boolean} lastScaleIsZero - Равняется ли последнйи класс "000".
 * @param {string | CurrencySettings} currency - Валюта.
 * @param {Declension} declension - Падеж.
 * @return {string} Валюта в виде текста ("рубля", "рублей", "копеек" и т.д.).
 */
const getCurrencyWord = (
  currencyObject: CurrencySettings,
  numberPart: numberParts,
  unitNameForm: number,
  lastScaleIsZero: boolean,
  currency: string | CurrencySettings,
  declension: Declension
): string => {
  const declensionsObejct = (numberPart === 'integer') ? currencyObject.currencyNameDeclensions : currencyObject.fractionalPartNameDeclensions;
  let resultCurrencyWord = declensionsObejct[declension][unitNameForm === 0 ? 0 : 1];
  // Если падеж "именительный" или "винительный" и множественное число
  if (
    (declension === declensions.NOMINATIVE
    || declension === declensions.ACCUSATIVE)
    && unitNameForm >= 1
  ) {
    // Использовать родительный падеж.
    resultCurrencyWord = declensionsObejct[declensions.GENITIVE][unitNameForm === 1 ? 0 : 1];
    // Если валюта указана как "number"
    if (currency === 'number') {
      resultCurrencyWord = declensionsObejct[declensions.GENITIVE][1];
    }
  }
  // Если последний класс числа равен "000"
  if (lastScaleIsZero === true) {
    // Всегда родительный падеж и множественное число
    resultCurrencyWord = declensionsObejct[declensions.GENITIVE][1];
  }
  return resultCurrencyWord;
}

export default getCurrencyWord;
