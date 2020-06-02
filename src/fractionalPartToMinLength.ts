import {CurrencySettings} from 'typeScript/interfaces/ConvertInterfaces';

/**
 * Сделать так, чтобы у дробной части числа
 * минимальная длина соответствовала currencyObject.fractionalPartMinLength
 * @param {Array} numberArray - Число в виде массива ['-', '150', '/', '25'].
 * @param {Object} currencyObject - Объект с параметрами валюты.
 * @return {Array} Обновленный массив числа.
 */
const fractionalPartToMinLength = (numberArray: string[], currencyObject: CurrencySettings): string[] => {
  // Если разделитель - дробная черта
  if (numberArray[2] === '/') {
    return numberArray;
  }
  const updatedNumberArray = [...numberArray];
  // Если в дробной части цифр меньше, чем fractionalPartMinLength
  if (updatedNumberArray[3].length < currencyObject.fractionalPartMinLength) {
    // Заполнить нулями
    updatedNumberArray[3] = updatedNumberArray[3] + '0'
      .repeat(currencyObject.fractionalPartMinLength - updatedNumberArray[3].length);
  }
  return updatedNumberArray;
};

export default fractionalPartToMinLength;
