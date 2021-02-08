import textValues from 'textValues';
import getCustomCurrency from 'functions/getCustomCurrency';
import {
  ConvertOptions,
  CurrencySettings,
} from 'typeScript/interfaces/ConvertInterfaces';

/**
 * Получить объект с данными валюты.
 * @param {ConvertOptions} convertOptions - Параметры конвертирования числа.
 * @return {CurrencySettings} Данные валюты.
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
    currencyObject = getCustomCurrency(convertOptions);
  }
  return currencyObject;
};

export default getCurrencyObject;
