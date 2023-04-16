import type { CustomCurrency } from 'src/typeScript/types/CustomCurrency'

/**
 * Сделать так, чтобы у дробной части числа
 * минимальная длина соответствовала currencyObject.fractionalPartMinLength
 * @param {string[]} numberArray - Число в виде массива ['-', '150', '.', '25'].
 * @param {object} currencyObject - Объект с параметрами валюты.
 * @return {string[]} Обновленный массив числа.
 */
export default function fractionalPartToMinLength(
  numberArray: string[],
  currencyObject: CustomCurrency,
): string[] {
  // Если разделитель - дробная черта
  if (numberArray[2] === '/') {
    return numberArray
  }
  const updatedNumberArray = [...numberArray]
  const fractionalPartMinLength = currencyObject.fractionalPartMinLength || 0
  // Если в дробной части цифр меньше, чем fractionalPartMinLength
  if (updatedNumberArray[3].length < fractionalPartMinLength) {
    // Заполнить нулями
    updatedNumberArray[3] =
      updatedNumberArray[3] +
      '0'.repeat(fractionalPartMinLength - updatedNumberArray[3].length)
  }
  return updatedNumberArray
}
