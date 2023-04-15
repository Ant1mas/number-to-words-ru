import splitNumberToArray from 'src/functions/splitNumberToArray'
import combineResultData from 'src/functions/combineResultData'
import getOptions from 'src/functions/getOptions'
import type { ConvertOptions } from 'src/typeScript/types/ConvertOptions'

/**
 * Конвертировать число в текст
 * @param {string | number} number - Число, которе нужно конвертировать.
 * @param {ConvertOptions} options - Параметры конвертирования.
 * @return {string} Число в виде текста
 */
export default function convert(
  number: string | number,
  options?: ConvertOptions,
): string {
  // Получить объект опций
  const appliedOptions = getOptions(options)
  // Обработать введенное число
  const numberArray = splitNumberToArray(number)
  // Собрать конечный словесный результат
  const convertedNumberString = combineResultData(numberArray, appliedOptions)
  return convertedNumberString
}
