import { DECLENSIONS } from 'src/units/declensions'
import type { Declension } from 'src/units/declensions'
import type { OptionCurrency } from 'src/typeScript/types/OptionCurrency'
import type { CustomCurrency } from '@/src/typeScript/types/CustomCurrency'

type numberParts = 'integer' | 'fractional'

/**
 * Получить валюту в виде текста в правильной форме.
 * @param {CustomCurrency} currencyObject - Объект валюты.
 * @param {numberParts} numberPart - Часть чиcла ('integer' | 'fractional').
 * @param {number} unitNameForm - Форма валюты (0 | 1 | 2).
 * @param {boolean} lastScaleIsZero - Равняется ли последний класс "000".
 * @param {OptionCurrency} currency - Валюта.
 * @param {Declension} declension - Падеж.
 * @return {string} Валюта в виде текста ("рубля", "рублей", "копеек" и т.д.).
 */
export default function getCurrencyWord(
  currencyObject: CustomCurrency,
  numberPart: numberParts,
  unitNameForm: number,
  lastScaleIsZero: boolean,
  currency: OptionCurrency,
  declension: Declension,
): string {
  const declensionsObject =
    numberPart === 'integer'
      ? currencyObject.currencyNameDeclensions
      : currencyObject.fractionalPartNameDeclensions
  let resultCurrencyWord =
    declensionsObject[declension][unitNameForm === 0 ? 0 : 1]
  // Если падеж "именительный" или "винительный" и множественное число
  if (
    (declension === DECLENSIONS.NOMINATIVE ||
      declension === DECLENSIONS.ACCUSATIVE) &&
    unitNameForm >= 1
  ) {
    // Использовать родительный падеж.
    resultCurrencyWord =
      declensionsObject[DECLENSIONS.GENITIVE][unitNameForm === 1 ? 0 : 1]
    // Если валюта указана как "number"
    if (currency === 'number') {
      resultCurrencyWord = declensionsObject[DECLENSIONS.GENITIVE][1]
    }
  }
  // Если последний класс числа равен "000"
  if (lastScaleIsZero === true) {
    // Всегда родительный падеж и множественное число
    resultCurrencyWord = declensionsObject[DECLENSIONS.GENITIVE][1]
  }
  return resultCurrencyWord
}
