import splitNumberToArray from 'src/functions/splitNumberToArray';
import combineResultData from 'src/functions/combineResultData';
import getOptions from 'src/functions/getOptions';
import ConvertOptions from 'src/typeScript/interfaces/ConvertOptions';

/**
 * Конвертировать число в текст
 * @param {string | number} number - Число, которе нужно конвертировать.
 * @param {ConvertOptions} options - Параметры конвертирования.
 * @return {string} Число в виде текста
 */
const convert = (number: string | number, options?: ConvertOptions): string => {
  // Получить объект опций
  const appliedOptions = getOptions(options);
  // Обработать введенное число
  const numberArray = splitNumberToArray(number);
  // Собрать конечный словесный результат
  const convertedNumberString = combineResultData(numberArray, appliedOptions);
  return convertedNumberString;
};

export default convert;
