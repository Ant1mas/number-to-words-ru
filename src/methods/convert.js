import splitNumberToArray from 'splitNumberToArray';
import combineResultData from 'combineResultData';

/**
 * Конвертировать число в текст
 * @param {(string|number)} number - Число, которе нужно конвертировать.
 * @param {Object} options - Параметры конвертирования.
 * @return {string} Число в виде текста
 */
const convert = (number, options = {}) => {
  // Обработать введенное число
  const numberArray = splitNumberToArray(number);
  // Собрать конечный словестный результат
  const convertedNumberString = combineResultData(numberArray, options);
  return convertedNumberString;
};

export default convert;
