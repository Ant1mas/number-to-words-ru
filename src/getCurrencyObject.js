import textValues from 'textValues';

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
    // Если объект оформлен правильно
    if (
      typeof convertOptions.currency === 'object' &&
      Object.keys(convertOptions.currency).length === 3 &&
      convertOptions.currency.currencyNameCases.length === 3 &&
      convertOptions.currency.fractionalPartNameCases.length === 3 &&
      typeof convertOptions.currency.currencyNounGender === 'object' &&
      Object.keys(convertOptions.currency.currencyNounGender).length === 2 &&
      typeof convertOptions.currency.currencyNounGender.integer === 'number' &&
      typeof convertOptions.currency.currencyNounGender.fractionalPart === 'number'
    ) {
      // Принять валюту
      currencyObject = convertOptions.currency;
    } else {
    // Если объект оформлен неправильно
      throw new Error(`Wrong currency object.`);
    }
  }
  return currencyObject;
};

export default getCurrencyObject;
