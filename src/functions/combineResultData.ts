import { minus } from 'src/units/numbers'
import roundNumber from 'src/functions/roundNumber'
import fractionalPartToMinLength from 'src/functions/fractionalPartToMinLength'
import getOptions from 'src/functions/getOptions'
import getCurrencyObject from 'src/functions/getCurrencyObject'
import numberToScales from 'src/functions/numberToScales'
import convertEachScaleToWords from 'src/functions/convertEachScaleToWords'
import convertEachScaleToWordsSlash from 'src/functions/convertEachScaleToWordsSlash'
import getCurrencyWord from 'src/functions/getCurrencyWord'
import getFractionalUnitCurrencyNumber from 'src/units/functions/getFractionalUnitCurrencyNumber'
import { declensions } from 'src/units/declensions'
import ConvertOptions from 'src/typeScript/interfaces/ConvertOptions'

/**
 * Собрать число в сроку с применением параметров.
 * @param {array} numberArray - Число в виде массива ['-', '150', '.', '25'].
 * @param {object} options - Параметры конвертирования.
 * @return {string} Число, конвертированное в текст.
 */
const combineResultData = (
  numberArray: string[],
  options?: ConvertOptions
): string => {
  /* Пример convertedNumberArr:
  ['минус', 'двадцать два', 'рубля', 'сорок одна', 'копейка'] */
  const convertedNumberArr = ['', '', '', '', '']
  let modifiedNumberArray = [...numberArray]
  // Получить объект опций
  const appliedOptions = getOptions(options)
  // Определить отображение валюты
  const currencyObject = getCurrencyObject(appliedOptions)
  // Если есть знак минус
  if (numberArray[0] === '-') {
    // Если отображать знак минус словом
    if (appliedOptions.convertMinusSignToWord === true) {
      convertedNumberArr[0] = minus
    } else {
      convertedNumberArr[0] = '-'
    }
  }
  // Округлить число до заданной точности
  modifiedNumberArray = roundNumber(numberArray, appliedOptions.roundNumber)
  // Если указана валюта
  if (
    typeof appliedOptions.currency === 'string' &&
    appliedOptions.currency !== 'number'
  ) {
    // Округлить число до 2 знаков после запятой
    modifiedNumberArray = roundNumber(modifiedNumberArray, 2)
  }
  // Обеспечить минимальную длину дробной части числа
  modifiedNumberArray = fractionalPartToMinLength(
    modifiedNumberArray,
    currencyObject
  )
  const integerScalesArray = modifiedNumberArray[1]
  const fractionalScalesArray = modifiedNumberArray[3]
  const delimiter = modifiedNumberArray[2]
  // Если нужно отображать целую часть числа
  if (appliedOptions.showNumberParts.integer === true) {
    // По умолчанию число не конвертировано в слова
    convertedNumberArr[1] = integerScalesArray
    // Получить результат конвертирования числа
    const convertedIntegerObject = convertEachScaleToWords(
      numberToScales(integerScalesArray),
      currencyObject.currencyNounGender.integer,
      appliedOptions.declension
    )
    // Если нужно конвертировать число в слова
    if (appliedOptions.convertNumbertToWords.integer === true) {
      // Если разделитель - не дробная черта
      if (delimiter !== '/') {
        // Применить конвертированное число
        convertedNumberArr[1] = convertedIntegerObject.result
      } else {
        // Если разделитель - дробная черта
        // Род числа всегда женский ('одна', 'две')
        // Применить конвертированное число
        convertedNumberArr[1] = convertEachScaleToWords(
          numberToScales(integerScalesArray),
          1,
          appliedOptions.declension
        ).result
      }
    }
    // Если нужно отображать валюту целой части числа
    if (appliedOptions.showCurrency.integer === true) {
      // Если разделитель - не дробная черта
      if (delimiter !== '/') {
        const currencyWord = getCurrencyWord(
          currencyObject,
          'integer',
          convertedIntegerObject.unitNameForm,
          convertedIntegerObject.lastScaleIsZero,
          appliedOptions.currency,
          appliedOptions.declension
        )
        convertedNumberArr[2] = currencyWord
      }
    }
  }
  // Если нужно отображать дробную часть числа
  if (appliedOptions.showNumberParts.fractional === true) {
    // По умолчанию число не конвертировано в слова
    convertedNumberArr[3] = fractionalScalesArray
    // Получить результат конвертирования числа
    const convertedFractionalObject = convertEachScaleToWords(
      numberToScales(fractionalScalesArray),
      currencyObject.currencyNounGender.fractionalPart,
      appliedOptions.declension
    )
    // Если нужно конвертировать число в слова
    if (appliedOptions.convertNumbertToWords.fractional === true) {
      // Если разделитель - дробная черта
      if (delimiter === '/') {
        const convertedIntegerObject = convertEachScaleToWords(
          numberToScales(integerScalesArray),
          currencyObject.currencyNounGender.integer,
          appliedOptions.declension
        )
        convertedNumberArr[3] = convertEachScaleToWordsSlash(
          numberToScales(fractionalScalesArray),
          convertedIntegerObject.unitNameForm,
          appliedOptions.declension
        )
      } else {
        // Если разделитель - не дробная черта
        // Применить конвертированное число
        convertedNumberArr[3] = convertedFractionalObject.result
      }
    }
    // Если не нужно конвертировать число в слова
    if (appliedOptions.convertNumbertToWords.fractional === false) {
      // Если валюта "number"
      if (appliedOptions.currency === 'number') {
        // Если в дробной части есть цифры
        if (convertedNumberArr[3].length > 0) {
          // Удалить лишние нули перед числом
          convertedNumberArr[3] = convertedNumberArr[3].replace(/^0+/, '')
          // Если после удаления лишних нулей не осталось цифр, то добавить один "0"
          if (
            convertedNumberArr[3] === '' &&
            appliedOptions.roundNumber !== 0
          ) {
            convertedNumberArr[3] = '0'
          }
        }
      }
    }
    // Если нужно отображать валюту дробной части числа
    if (appliedOptions.showCurrency.fractional === true) {
      // Если валюта - не 'number'
      if (appliedOptions.currency !== 'number') {
        const currencyWord = getCurrencyWord(
          currencyObject,
          'fractional',
          convertedFractionalObject.unitNameForm,
          convertedFractionalObject.lastScaleIsZero,
          appliedOptions.currency,
          appliedOptions.declension
        )
        // Если определено число дробной части
        if (convertedNumberArr[3] !== '') {
          // Добавить валюту к дробной части
          convertedNumberArr[4] = currencyWord
        }
      }
      // Если валюта указана как "number"
      if (appliedOptions.currency === 'number') {
        // Если разделитель - не дробная черта
        if (delimiter !== '/') {
          // Если имеет смысл добавлять название валюты
          if (
            appliedOptions.roundNumber > 0 ||
            (appliedOptions.roundNumber < 0 && fractionalScalesArray.length > 0)
          ) {
            const digitToConvert = parseInt(
              fractionalScalesArray[fractionalScalesArray.length - 1]
            )
            convertedNumberArr[4] = getFractionalUnitCurrencyNumber(
              fractionalScalesArray.length - 1,
              digitToConvert,
              appliedOptions.declension,
              convertedFractionalObject.unitNameForm
            )
          }
        }
      }
      // Если разделитель - дробная черта
      if (delimiter === '/') {
        // Если указана валюта
        if (appliedOptions.currency !== 'number') {
          convertedNumberArr[4] =
            currencyObject.currencyNameDeclensions[declensions.GENITIVE][0]
        }
      }
    }
  }
  // Объединить полученный результат
  let convertedNumberResult = convertedNumberArr
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
  // Сделать первую букву заглавной
  convertedNumberResult =
    convertedNumberResult.charAt(0).toUpperCase() +
    convertedNumberResult.slice(1)
  return convertedNumberResult
}

export default combineResultData
