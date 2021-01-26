import textValues from 'textValues';
import roundNumber from 'functions/roundNumber';
import fractionalPartToMinLength from 'functions/fractionalPartToMinLength';
import getCurrencyObject from 'functions/getCurrencyObject';
import numberToScales from 'functions/numberToScales';
import convertsEachScaleToWords from 'functions/convertsEachScaleToWords';
import convertsEachScaleToWordsSlash from 'functions/convertsEachScaleToWordsSlash';
import {ConvertOptions} from 'typeScript/interfaces/ConvertInterfaces';

/**
 * Собрать число в сроку с применением параметров.
 * @param {Array} numberArray - Число в виде массива ['-', '150', '/', '25'].
 * @param {Object} options - Парметры конвертирования.
 * @return {string} Число, конвертированное в текст.
 */
const combineResultData = (numberArray: string[], options?: ConvertOptions): string => {
  /* Пример convertedNumberArr:
  ['минус', 'двадцать два', 'рубля', 'сорок одна', 'копейка'] */
  const convertedNumberArr = ['', '', '', '', ''];
  let modifiedNumberArray = [...numberArray];
  // Определить отображение валюты
  const currencyObject = getCurrencyObject(options);
  // Если есть знак минус
  if (numberArray[0] === '-') {
    // Если отображать знак минус словом
    if (options.convertMinusSignToWord === true) {
      convertedNumberArr[0] = textValues.minus;
    } else {
      convertedNumberArr[0] = '-';
    }
  }
  // Округлить число до заданной точности
  modifiedNumberArray = roundNumber(numberArray, options.roundNumber);
  // Если указана валюта
  if (
    typeof options.currency === 'string' &&
    options.currency !== 'number'
  ) {
    // Округлить число до 2 знаков после запятой
    modifiedNumberArray = roundNumber(modifiedNumberArray, 2);
  }
  // Обеспечить минимальную длину дробной части числа
  modifiedNumberArray = fractionalPartToMinLength(modifiedNumberArray, currencyObject);
  // Если нужно отображать целую часть числа
  if (options.showNumberParts.integer === true) {
    convertedNumberArr[1] = modifiedNumberArray[1];
    // Если нужно конвертировать число в слова
    if (options.convertNumbertToWords.integer === true) {
      // Если разделитель - не дробная черта
      if (modifiedNumberArray[2] !== '/') {
        convertedNumberArr[1] = convertsEachScaleToWords(
          numberToScales(modifiedNumberArray[1]),
          currencyObject.currencyNounGender.integer,
          options.declension
        ).result;
      } else {
      // Если раделитель - дробная черта
        // Род числа всегда женский ('одна', 'две')
        convertedNumberArr[1] =
          convertsEachScaleToWords(numberToScales(modifiedNumberArray[1]), 1, options.declension).result;
      }
    }
    // Если нужно отображать валюту числа
    if (options.showCurrency.integer === true) {
      // Если разделитель - не дробная черта
      if (modifiedNumberArray[2] !== '/') {
        convertedNumberArr[2] = currencyObject.currencyNameCases[
          convertsEachScaleToWords(
            numberToScales(modifiedNumberArray[1]),
            currencyObject.currencyNounGender.integer,
            options.declension
          ).unitNameForm
        ];
      }
    }
  }
  // Если нужно отображать дробную часть числа
  if (options.showNumberParts.fractional === true) {
    convertedNumberArr[3] = modifiedNumberArray[3];
    // Если нужно конвертировать число в слова
    if (options.convertNumbertToWords.fractional === true) {
      // Если разделитель - дробная черта
      if (modifiedNumberArray[2] === '/') {
        convertedNumberArr[3] = convertsEachScaleToWordsSlash(
          numberToScales(modifiedNumberArray[3]),
          convertsEachScaleToWords(
            numberToScales(modifiedNumberArray[1]),
            currencyObject.currencyNounGender.integer,
            options.declension
          ).unitNameForm,
        );
      } else {
      // Если разделитель - не дробная черта
        convertedNumberArr[3] = convertsEachScaleToWords(
          numberToScales(modifiedNumberArray[3]),
          currencyObject.currencyNounGender.fractionalPart,
          options.declension
        ).result;
      }
    } else {
    // Если не нужно конвертировать число в слова
      // Если валюта "number"
      if (options.currency === 'number') {
        // Если в дробной части есть цифры
        if (convertedNumberArr[3].length > 0) {
          // Удалить лишние нули перед числом
          convertedNumberArr[3] = convertedNumberArr[3].replace(/^0+/, '');
          // Если после удаления лишних нулей не осталось цифр, то добавить один "0"
          if (convertedNumberArr[3] === '') {
            convertedNumberArr[3] = '0';
          }
        }
      }
    }
    // Если нужно отображать валюту числа
    if (options.showCurrency.fractional === true) {
      // Если валюта - не 'number'
      if (options.currency !== 'number') {
        convertedNumberArr[4] = currencyObject.fractionalPartNameCases[
          convertsEachScaleToWords(
            numberToScales(modifiedNumberArray[3]),
            currencyObject.currencyNounGender.fractionalPart,
            options.declension
          ).unitNameForm
        ];
      }
      // Если не указана валюта
      if (options.currency === 'number') {
        // Если разделитель - не дробная черта
        if (modifiedNumberArray[2] !== '/') {
          // Получить массив названий дробной части
          const getFractionalPartArr = textValues.getFractionalUnits(modifiedNumberArray[3].length - 1);
          convertedNumberArr[4] = getFractionalPartArr[
            convertsEachScaleToWords(numberToScales(
              modifiedNumberArray[3]),
              currencyObject.currencyNounGender.fractionalPart,
              options.declension
            ).unitNameForm
          ];
        }
      }
      // Если разделитель - дробная черта
      if (modifiedNumberArray[2] === '/') {
        // Если указана валюта
        if (options.currency !== 'number') {
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
