import textValues from 'textValues';
import roundNumber from 'functions/roundNumber';
import fractionalPartToMinLength from 'functions/fractionalPartToMinLength';
import getCurrencyObject from 'functions/getCurrencyObject';
import numberToScales from 'functions/numberToScales';
import convertEachScaleToWords from 'functions/convertEachScaleToWords';
import convertEachScaleToWordsSlash from 'functions/convertEachScaleToWordsSlash';
import getCurrencyWord from 'functions/getCurrencyWord';
import getFractionalUnitCurrencyNumber from 'units/functions/getFractionalUnitCurrencyNumber';
import {declensions} from "units/declensions";
import {ConvertOptions} from 'typeScript/interfaces/ConvertInterfaces';

/**
 * Собрать число в сроку с применением параметров.
 * @param {array} numberArray - Число в виде массива ['-', '150', '/', '25'].
 * @param {object} options - Парметры конвертирования.
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
  const integerScalesArray = modifiedNumberArray[1];
  const fractionalScalesArray = modifiedNumberArray[3];
  const delimiter = modifiedNumberArray[2];
  // Если нужно отображать целую часть числа
  if (options.showNumberParts.integer === true) {
    // По умолчанию число не конвертировано в слова
    convertedNumberArr[1] = integerScalesArray;
    // Получить результат конвертирования числа
    const convertedIntegerObject = convertEachScaleToWords(
      numberToScales(integerScalesArray),
      currencyObject.currencyNounGender.integer,
      options.declension
    );
    // Если нужно конвертировать число в слова
    if (options.convertNumbertToWords.integer === true) {
      // Если разделитель - не дробная черта
      if (delimiter !== '/') {
        // Применить конвертированное число
        convertedNumberArr[1] = convertedIntegerObject.result;
      } else {
      // Если раделитель - дробная черта
        // Род числа всегда женский ('одна', 'две')
        // Применить конвертированное число
        convertedNumberArr[1] = convertEachScaleToWords(
          numberToScales(integerScalesArray),
          1,
          options.declension
        ).result;
      }
    }
    // Если нужно отображать валюту целой части числа
    if (options.showCurrency.integer === true) {
      // Если разделитель - не дробная черта
      if (delimiter !== '/') {
        const currencyWord = getCurrencyWord(
          currencyObject,
          'integer',
          convertedIntegerObject.unitNameForm,
          convertedIntegerObject.lastScaleIsZero,
          options.currency,
          options.declension
        );
        convertedNumberArr[2] = currencyWord;
      }
    }
  }
  // Если нужно отображать дробную часть числа
  if (options.showNumberParts.fractional === true) {
    // По умолчанию число не конвертировано в слова
    convertedNumberArr[3] = fractionalScalesArray;
    // Получить результат конвертирования числа
    const convertedFractionalObject = convertEachScaleToWords(
      numberToScales(fractionalScalesArray),
      currencyObject.currencyNounGender.fractionalPart,
      options.declension
    );
    // Если нужно конвертировать число в слова
    if (options.convertNumbertToWords.fractional === true) {
      // Если разделитель - дробная черта
      if (delimiter === '/') {
        const convertedIntegerObject = convertEachScaleToWords(
          numberToScales(integerScalesArray),
          currencyObject.currencyNounGender.integer,
          options.declension
        );
        convertedNumberArr[3] = convertEachScaleToWordsSlash(
          numberToScales(fractionalScalesArray),
          convertedIntegerObject.unitNameForm,
          options.declension
        );
      } else {
      // Если разделитель - не дробная черта
        // Применить конвертированное число
        convertedNumberArr[3] = convertedFractionalObject.result;
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
    // Если нужно отображать валюту дробной части числа
    if (options.showCurrency.fractional === true) {
      // Если валюта - не 'number'
      if (options.currency !== 'number') {
        const currencyWord = getCurrencyWord(
          currencyObject,
          'fractional',
          convertedFractionalObject.unitNameForm,
          convertedFractionalObject.lastScaleIsZero,
          options.currency,
          options.declension
        );
        // Если определено число дробной части 
        if (convertedNumberArr[3] !== '') {
          // Добавить валюту к дробной части
          convertedNumberArr[4] = currencyWord;
        }
      }
      // Если валюта указана как "number"
      if (options.currency === 'number') {
        // Если разделитель - не дробная черта
        if (delimiter !== '/') {
          // Если определено число дробной части 
          if (convertedNumberArr[3] !== '') {
            const digitToConvert = parseInt(fractionalScalesArray[fractionalScalesArray.length - 1]);
            convertedNumberArr[4] = getFractionalUnitCurrencyNumber(
              fractionalScalesArray.length - 1,
              digitToConvert,
              options.declension,
              convertedFractionalObject.unitNameForm
            );
          }
        }
      }
      // Если разделитель - дробная черта
      if (delimiter === '/') {
        // Если указана валюта
        if (options.currency !== 'number') {
          convertedNumberArr[4] = currencyObject.currencyNameDeclensions[declensions.GENITIVE][0];
        }
      }
    }
  }
  // Объеденить полученный результат
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
