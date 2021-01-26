import textValues from 'textValues';
import defaultOptions from 'defaultOptions';
import updateObjectDeep from 'functions/updateObjectDeep';
import {
  ConvertOptions,
  CurrencySettings,
} from 'typeScript/interfaces/ConvertInterfaces';

/**
 * Получить объект с данными валюты.
 * @param {Object} convertOptions - Параметры конвертирования числа.
 * @return {Object} Данные валюты.
 */
const getCurrencyObject = (convertOptions?: ConvertOptions): CurrencySettings => {
  let currencyObject: CurrencySettings;
  // Если валюта указана словами
  if (typeof convertOptions.currency === 'string') {
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
    // Названеи валюты по умолчанию
    const defaultCurrencyName: any = defaultOptions['currency'];
    // Объект валюты по умолчанию
    const defaultCurrencyObject = textValues.currency[defaultCurrencyName];
    // Обновить объект валюты новым объектом валюты
    const updatedCurrencyObject: CurrencySettings = updateObjectDeep(defaultCurrencyObject, convertOptions.currency);
    // Удалить падежи
    updatedCurrencyObject.currencyNameDeclensions = null;
    updatedCurrencyObject.fractionalPartNameDeclensions = null;

    // Если объект оформлен правильно
    if (
      typeof updatedCurrencyObject === 'object' &&
      Object.keys(updatedCurrencyObject).length === 6 &&
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
