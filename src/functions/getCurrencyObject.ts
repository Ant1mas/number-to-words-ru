import stringCurrencies from 'src/units/stringCurrencies';
import defaultOptions from 'src/defaultOptions';
import getCustomCurrency from 'src/functions/getCustomCurrency';
import ConvertOptions from 'src/typeScript/interfaces/ConvertOptions';
import CustomCurrency from 'src/typeScript/interfaces/CustomCurrency';

/**
 * Получить объект с данными валюты.
 * @param {ConvertOptions} convertOptions - Параметры конвертирования числа.
 * @return {CustomCurrency} Данные валюты.
 */
const getCurrencyObject = (convertOptions?: ConvertOptions): CustomCurrency => {
  let currencyObject: CustomCurrency;
  const currency = convertOptions?.currency || defaultOptions.currency;
  // Если валюта указана словами
  if (typeof currency === 'string') {
    currencyObject = stringCurrencies[currency];
  
  }
  // Если валюта описана объектом
  if (typeof currency === 'object') {
    currencyObject = getCustomCurrency(convertOptions);
  }
  return currencyObject;
};

export default getCurrencyObject;
