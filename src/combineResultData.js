import textValues from 'textValues';
import getOptions from 'getOptions';
import roundNumber from 'roundNumber';
import getCurrencyObject from 'getCurrencyObject';
import numberToScales from 'numberToScales';
import convertsEachScaleToWords from 'convertsEachScaleToWords';
import convertsEachScaleToWordsSlash from 'convertsEachScaleToWordsSlash';

/**
 * Собрать число в сроку с применением параметров.
 * @param {Array} numberArray - Число в виде массива ['-', '150', '/', '25'].
 * @param {Object} options - Парметры конвертирования.
 * @return {string} Число, конвертированное в текст.
 */
const combineResultData = (numberArray, options) => {
  /* Пример convertedNumberArr:
  ['минус', 'двадцать два', 'рубля', 'сорок одна', 'копейка'] */
  const convertedNumberArr = ['', '', '', '', ''];
  let modifiedNumberArray = [...numberArray];
  // Определить опции для функции
  const useOptions = getOptions(options);
  // Определить отображение валюты
  const currencyObject = getCurrencyObject(useOptions);
  // Если есть знак минус
  if (numberArray[0] === '-') {
    // Если отображать знак минус словом
    if (useOptions.convertMinusSignToWord === true) {
      convertedNumberArr[0] = textValues.minus;
    } else {
      convertedNumberArr[0] = '-';
    }
  }
  // Если разделитель - не дробная черта
  if (numberArray[2] !== '/') {
    // Округлить число до заданной точности
    modifiedNumberArray = roundNumber(numberArray, useOptions.roundNumber);
  }
  // Если указана валюта
  if (
    typeof useOptions.currency === 'string' &&
    useOptions.currency !== 'number'
  ) {
    // Если разделитель - не дробная черта
    if (numberArray[2] !== '/') {
      // Округлить число до 2 знаков после запятой
      modifiedNumberArray = roundNumber(modifiedNumberArray, 2);
      // Если в дробной части < 2 цифр
      if (modifiedNumberArray[3].length < 2) {
        // Заполнить нулями
        modifiedNumberArray[3] = modifiedNumberArray[3] + '0'
          .repeat(2 - modifiedNumberArray[3].length);
      }
    }
  }
  // Если нужно отображать целую часть числа
  if (useOptions.showNumberParts.integer === true) {
    convertedNumberArr[1] = modifiedNumberArray[1];
    // Если нужно конвертировать число в слова
    if (useOptions.convertNumbertToWords.integer === true) {
      // Если разделитель - не дробная черта
      if (modifiedNumberArray[2] !== '/') {
        convertedNumberArr[1] = convertsEachScaleToWords(
          numberToScales(modifiedNumberArray[1]),
          currencyObject.currencyNounGender.integer,
        ).result;
      } else {
      // Если раделитель - дробная черта
        // Род числа всегда женский ('одна', 'две')
        convertedNumberArr[1] =
          convertsEachScaleToWords(numberToScales(modifiedNumberArray[1]), 1).result;
      }
    }
    // Если нужно отображать валюту числа
    if (useOptions.showCurrency.integer === true) {
      // Если разделитель - не дробная черта
      if (modifiedNumberArray[2] !== '/') {
        convertedNumberArr[2] = currencyObject.currencyNameCases[
          convertsEachScaleToWords(
            numberToScales(modifiedNumberArray[1]),
            currencyObject.currencyNounGender.integer,
          ).unitNameForm
        ];
      }
    }
  }
  // Если нужно отображать дробную часть числа
  if (useOptions.showNumberParts.fractional === true) {
    convertedNumberArr[3] = modifiedNumberArray[3];
    // Если нужно конвертировать число в слова
    if (useOptions.convertNumbertToWords.fractional === true) {
      // Если разделитель - дробная черта
      if (modifiedNumberArray[2] === '/') {
        convertedNumberArr[3] = convertsEachScaleToWordsSlash(
          numberToScales(modifiedNumberArray[3]),
          convertsEachScaleToWords(
            numberToScales(modifiedNumberArray[1]),
            currencyObject.currencyNounGender.integer,
          ).unitNameForm,
        );
      } else {
      // Если разделитель - не дробная черта
        convertedNumberArr[3] = convertsEachScaleToWords(
          numberToScales(modifiedNumberArray[3]),
          currencyObject.currencyNounGender.fractionalPart,
        ).result;
      }
    }
    // Если нужно отображать валюту числа
    if (useOptions.showCurrency.fractional === true) {
      // Если валюта - не 'number'
      if (useOptions.currency !== 'number') {
        convertedNumberArr[4] = currencyObject.fractionalPartNameCases[
          convertsEachScaleToWords(
            numberToScales(modifiedNumberArray[3]),
            currencyObject.currencyNounGender.fractionalPart,
          ).unitNameForm
        ];
      }
      // Если не указана валюта
      if (useOptions.currency === 'number') {
        // Если разделитель - не дробная черта
        if (modifiedNumberArray[2] !== '/') {
          // Получить массив названий дробной части
          const getFractionalPartArr = currencyObject
            .getFractionalPartNameCases(modifiedNumberArray[3].length - 1);
          convertedNumberArr[4] = getFractionalPartArr[
            convertsEachScaleToWords(numberToScales(
              modifiedNumberArray[3]),
              currencyObject.currencyNounGender.fractionalPart,
            ).unitNameForm
          ];
        }
      }
      // Если разделитель - дробная черта
      if (modifiedNumberArray[2] === '/') {
        // Если указана валюта
        if (useOptions.currency !== 'number') {
          convertedNumberArr[4] = currencyObject.currencyNameCases[1];
        }
      }
    }
  }
  let convertedNumberResult = convertedNumberArr
      .filter(Boolean)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
  // Сделать первую букву заглавной
  convertedNumberResult = convertedNumberResult
      .charAt(0)
      .toUpperCase()
      + convertedNumberResult.slice(1);
  return convertedNumberResult;
};

export default combineResultData;
