/**
 * Разделить число на части.
 * @param {(number|string)} number - Число, которое нужно обработать.
 * @param {Object} options - Параметры конвертирования.
 * @return {Array} Обработанное число в виде ['-', '150', '/', '25'].
 */
const splitNumberToArray = (number, options) => {
  // Максимальная длинна целой части числа
  const maxIntegerPartLength = 306;
  // Конвертировать в String
  const numberString = number.toString();
  const numberArray = [];
  // Убрать из строки всё лишнее
  let cleanNumber = numberString.match(/[0-9\,\.\-\/]/g);
  if (cleanNumber !== null) {
    cleanNumber = cleanNumber.join('');
  } else {
    cleanNumber = '0';
  }
  // Определить указан ли знак минуса в начале
  numberArray[0] = cleanNumber.search(/\-/) === 0 ? '-' : '+';
  // Удалить все знаки минуса
  cleanNumber = cleanNumber.match(/[^\-]/g).join('');
  // Добавить разделитчель числа в массив
  numberArray[2] = cleanNumber.substr(cleanNumber.search(/[\,\.\/]/), 1);
  // Отметить позицию первого разделителя числа
  cleanNumber = cleanNumber.replace(/[\,\.\/]/, '|CUTHERE|');
  // Удалить все разделители числа
  cleanNumber = cleanNumber.match(/[^\,\.\/]/g).join('');
  // Разделить число на целую и десятичную части
  numberArray[1] = cleanNumber.split('|CUTHERE|')[0];
  numberArray[3] = cleanNumber.split('|CUTHERE|')[1];
  // Если десятичной части вообще нет, то добавить пустую
  numberArray[3] = numberArray[3] === undefined ? '' : numberArray[3];
  // Убрать лишние нули из целой части
  numberArray[1] = numberArray[1].replace(/^0+/, '');
  // Если разделитель не дробная черта и валюта не 'number'
  if (
    numberArray[2] !== '/'
    && options.currency !== 'number'
  ) {
    // Убрать лишние нули из дробной части
    numberArray[3] = numberArray[3]
      .split('')
      .reverse()
      .join('')
      .replace(/^0+/, '')
      .split('')
      .reverse()
      .join('');
  }
  // Заменить пустые значения на ноль
  numberArray[1] = numberArray[1] === '' ? '0' : numberArray[1];
  numberArray[3] = numberArray[3] === '' ? '0' : numberArray[3];
  // Если целая часть числа слишком длинная
  if (numberArray[1].length > maxIntegerPartLength) {
    // Убрать лишнюю часть числа
    numberArray[1] = numberArray[1].slice(0, maxIntegerPartLength);
  }
  // Если дробная часть числа слишком длинная
  if (numberArray[3].length > maxIntegerPartLength - 1) {
    // Убрать лишнюю часть числа
    numberArray[3] = numberArray[3].slice(0, maxIntegerPartLength - 1);
  }
  return numberArray;
};


export default splitNumberToArray;
