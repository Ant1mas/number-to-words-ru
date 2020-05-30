import textValues from 'textValues';
import defaultOptions from 'defaultOptions';
import stringCurrencies from 'stringCurrencies';
import updateObjectDeep from 'updateObjectDeep';

/**
 * Получить объект с данными валюты.
 * @param {Object} convertOptions - Параметры конвертирования числа.
 * @return {Object} Данные валюты.
 */
const getCurrencyObject = (convertOptions) => {
  let currencyObject;
  // Если отображение без валюты
  if (convertOptions.currency === 'number') {
    currencyObject = {
      currencyNameCases: ['целая', 'целых', 'целых'],
      getFractionalPartNameCases: textValues.getFractionalUnits,
      currencyNounGender: {
        integer: 1,
        fractionalPart: 1,
      },
    };
  // Если валюта указана словами
  } else if (typeof convertOptions.currency === 'string') {
    // Если такая валюта есть в списке
    if (textValues.currency[convertOptions.currency] !== undefined) {
      // Получить данные найденной валюты
      currencyObject = textValues.currency[convertOptions.currency];
    } else {
      throw new Error(
        'Wrong currency name [' + convertOptions.currency + ']. '
        + 'Try "rub", "usd", "eur", "number" or object with your currency.',
      );
    }
  // Если валюта описана объектом
  } else if (typeof convertOptions.currency === 'object') {
    // Объект валюты по умолчанию
    const defaultCurrencyObject = stringCurrencies[defaultOptions['currency']];
    // Обновить объект валюты новым объектом валюты
    const updatedCurrencyObject = updateObjectDeep(defaultCurrencyObject, convertOptions.currency);
    // Если объект оформлен правильно
    if (
      typeof updatedCurrencyObject === 'object' &&
      Object.keys(updatedCurrencyObject).length === 3 &&
      updatedCurrencyObject.currencyNameCases.length === 3 &&
      updatedCurrencyObject.fractionalPartNameCases.length === 3 &&
      typeof updatedCurrencyObject.currencyNounGender === 'object' &&
      Object.keys(updatedCurrencyObject.currencyNounGender).length === 2 &&
      typeof updatedCurrencyObject.currencyNounGender.integer === 'number' &&
      typeof updatedCurrencyObject.currencyNounGender.fractionalPart === 'number'
    ) {
      // Принять валюту
      currencyObject = updatedCurrencyObject;
    } else {
    // Если объект оформлен неправильно
      throw new Error(`Wrong currency object.`);
    }
  }
  return currencyObject;
};

export default getCurrencyObject;
