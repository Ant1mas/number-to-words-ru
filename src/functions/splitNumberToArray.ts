/**
 * Разделить число на части.
 * @param {string | number} number - Число, которое нужно обработать.
 * @return {string[]} Обработанное число в виде ['-', '150', '/', '25'].
 */
const splitNumberToArray = (number: string | number): string[] => {
  // Максимальная длинна целой части числа
  const maxIntegerPartLength = 306
  // Конвертировать в String
  const numberString =
    typeof number === 'string' || typeof number === 'number'
      ? number.toString()
      : '0'
  let numberArray = []
  numberArray[2] = '.'
  // Убрать из строки всё лишнее
  let cleanNumber = numberString.replace(/[^\d\.\,\/\-]/g, '')
  cleanNumber = cleanNumber.length < 1 ? '0' : cleanNumber
  // Определить указан ли знак минуса в начале
  numberArray[0] = cleanNumber.search(/\-/) === 0 ? '-' : '+'
  // Удалить все знаки минуса
  cleanNumber = cleanNumber.replace(/[\-]/g, '')
  // Добавить разделитель числа в массив
  if (cleanNumber.search(/[\,\.\/]/) > -1) {
    numberArray[2] = cleanNumber.substr(cleanNumber.search(/[\,\.\/]/), 1)
  }
  // Отметить позицию первого разделителя числа
  cleanNumber = cleanNumber.replace(/[\,\.\/]/, '|CUTHERE|')
  // Удалить все разделители числа
  cleanNumber = cleanNumber.replace(/[\,\.\/]/g, '')
  // Разделить число на целую и десятичную части
  numberArray[1] = cleanNumber.split('|CUTHERE|')[0]
  numberArray[3] = cleanNumber.split('|CUTHERE|')[1]
  // Если десятичной части вообще нет, то добавить пустую
  numberArray[3] = numberArray[3] === undefined ? '' : numberArray[3]
  // Убрать лишние нули из целой части
  numberArray[1] = numberArray[1].replace(/^0+/, '')
  // Если разделитель не дробная черта
  if (numberArray[2] !== '/') {
    // Убрать лишние нули из дробной части
    numberArray[3] = numberArray[3]
      .split('')
      .reverse()
      .join('')
      .replace(/^0+/, '')
      .split('')
      .reverse()
      .join('')
  }
  // Заменить пустые значения на ноль
  numberArray[1] = numberArray[1] === '' ? '0' : numberArray[1]
  numberArray[3] = numberArray[3] === '' ? '0' : numberArray[3]
  // Если целая часть числа слишком длинная
  if (numberArray[1].length > maxIntegerPartLength) {
    // Убрать лишнюю целую часть числа
    numberArray[1] = numberArray[1].slice(0, maxIntegerPartLength)
  }
  // Если дробная часть числа слишком длинная
  if (numberArray[3].length > maxIntegerPartLength - 1) {
    // Убрать лишнюю дробную часть числа
    numberArray[3] = numberArray[3].slice(0, maxIntegerPartLength - 1)
  }
  return numberArray
}

export default splitNumberToArray
