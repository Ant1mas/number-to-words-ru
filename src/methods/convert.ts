import splitNumberToArray from 'splitNumberToArray';
import combineResultData from 'combineResultData';
import getOptions from 'getOptions';
import {ConvertOptions} from 'typeScript/interfaces/ConvertInterfaces';

/**
 * Конвертировать число в текст
 * @param {(string|number)} number - Число, которе нужно конвертировать.
 * @param {Object} options - Параметры конвертирования.
 * @return {string} Число в виде текста
 */
const convert = (number: string | number, options?: ConvertOptions): string => {
  // Получить объект опций
  const applyedOptions = getOptions(options);
  // Обработать введенное число
  const numberArray = splitNumberToArray(number, applyedOptions);
  // Собрать конечный словестный результат
  const convertedNumberString = combineResultData(numberArray, applyedOptions);
  return convertedNumberString;
};

export default convert;
