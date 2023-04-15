import isEqual from 'lodash/isEqual'

import { GENDERS } from 'src/units/genders'
import { DECLENSIONS } from 'src/units/declensions'
import { SLASH_NUMBER_UNIT_PREFIXES } from 'src/units/slashNumberUnitPrefixes'
import {
  FRACTIONAL_UNITS_BASES,
  FRACTIONAL_UNIT_ENDINGS,
} from 'src/units/fractionalCurrencyNumber'
import { UNIT_NAMES } from 'src/units/unitNames'
import { ORDINAL_NUMBERS_DECLENSIONS } from 'src/units/ordinalNumbers/ordinalNumbers'
import convertEachScaleToWords from 'src/functions/convertEachScaleToWords'
import removeEmptyScalesBeforeNumber from 'src/functions/removeEmptyScalesBeforeNumber'
import selectDataByDeclension from 'src/functions/selectDataByDeclension'
import type { Declension } from 'src/units/declensions'

/**
 * Конвертировать в текст массив числа с разделителем "/".
 * @param {string[]} numberScalesArr - Массив классов числа ['009', '876', '543', ...].
 * @param {number} unitNameForm - Род валюты целой части числа (0 - мужской, 1 - женский, 2 - средний).
 * @param {Declension} declension - Падеж.
 * @return {string} Конвертированный результат (текст).
 */
export default function convertEachScaleToWordsSlash(
  numberScalesArr: string[],
  unitNameForm = 1,
  declension: Declension = 'nominative',
): string {
  if (numberScalesArr.length < 1) {
    return ''
  }
  let convertedResult = ''
  // Удалить лишние нули в начале числа
  const updatedNumberScalesArr = removeEmptyScalesBeforeNumber(numberScalesArr)
  /* Определить индекс класса, который является последним.
  После него могут быть только классы с "000".
  0 - единицы, 1 - тысячи, 2 - миллионы и т.д. */
  const lastScaleWihNumber = [...updatedNumberScalesArr]
    .reverse()
    .findIndex((scale) => scale !== '000')
  // Индекс последнего класса в массиве.
  const lastScaleWihNumberIndex =
    updatedNumberScalesArr.length - lastScaleWihNumber - 1
  // Если нет ни одного не пустого класса
  if (lastScaleWihNumber === -1) {
    // Вернуть ноль
    const zeroValuesObject: any = ORDINAL_NUMBERS_DECLENSIONS.digits[0]
    const zeroValue = selectDataByDeclension(
      zeroValuesObject[GENDERS.FEMALE],
      declension,
      unitNameForm === 0 ? false : true,
    )
    return zeroValue
  }
  /* Если есть не пустые классы до последнего не пустого класса,
  то конвертировать как обычное число */
  if (updatedNumberScalesArr.length - 1 - lastScaleWihNumber > 0) {
    // Получить массив классов, в котором последний класс будет пустым.
    const numberScalesArrForCommonConvert = updatedNumberScalesArr.map(
      (scale, index) => {
        return index === lastScaleWihNumberIndex ? '000' : scale
      },
    )
    // Конвертировать классы как обычное число
    convertedResult +=
      convertEachScaleToWords(
        numberScalesArrForCommonConvert,
        1,
        DECLENSIONS.NOMINATIVE,
      ).result + ' '
  }
  // Если последний класс для конвертирования - тысячи или больше
  if (lastScaleWihNumber >= 1) {
    // Собрать валюту в виде "двадцатипятитысячная".
    // Получить текущий класс для конвертирования.
    const scaleToConvertArr: number[] = updatedNumberScalesArr[
      lastScaleWihNumberIndex
    ]
      .split('')
      .map((digit) => parseInt(digit))
    // Конвертировать сотни ("четырёхсот")
    const hundreds = SLASH_NUMBER_UNIT_PREFIXES.hundreds[scaleToConvertArr[0]]
    // Конвертировать десятки ("двадцати")
    const tens =
      scaleToConvertArr[1] === 1
        ? SLASH_NUMBER_UNIT_PREFIXES.tenToNineteen[scaleToConvertArr[2]]
        : SLASH_NUMBER_UNIT_PREFIXES.tens[scaleToConvertArr[1]]
    // Конвертировать единицы ("пяти")
    let digits =
      scaleToConvertArr[1] === 1
        ? ''
        : SLASH_NUMBER_UNIT_PREFIXES.digit[scaleToConvertArr[2]]
    /* Если весь класс равен === 001
    и до него не было значений */
    if (
      isEqual(scaleToConvertArr, [0, 0, 1]) &&
      updatedNumberScalesArr.length - 1 === lastScaleWihNumber
    ) {
      // Получится "тысячная" вместо "однотысячная".
      digits = ''
    }
    // Получить корень названия класса числа ("тысяч")
    const unitNameBase =
      lastScaleWihNumber <= FRACTIONAL_UNITS_BASES.length
        ? FRACTIONAL_UNITS_BASES[lastScaleWihNumber - 1]
        : UNIT_NAMES[lastScaleWihNumber - 2]
    // Получить окончание названия класса числа с правильным падежом ("ная", "ной", "ных" и т.д.)
    const unitNameEnding = selectDataByDeclension(
      FRACTIONAL_UNIT_ENDINGS,
      declension,
      unitNameForm === 0 ? false : true,
    )
    // Добавить текст к общему результату
    convertedResult +=
      `${hundreds}${tens}${digits}${unitNameBase}${unitNameEnding}` + ' '
  }
  // Если последний класс для конвертирования - единицы
  if (lastScaleWihNumber === 0) {
    // Собрать валюту в виде "пятьсот двадцать первая".
    // Получить текущий класс для конвертирования.
    const scaleToConvertArr: number[] = updatedNumberScalesArr[
      lastScaleWihNumberIndex
    ]
      .split('')
      .map((digit) => parseInt(digit))
    /* Определить какой разряд в текущем классе последний
    (Любая последняя цифра, кроме нуля)
    0 - единицы, 1 - десятки, 2 - сотни */
    const lastDigitInScale = [...scaleToConvertArr]
      .reverse()
      .findIndex((digit) => digit !== 0)
    // Получить индекс последнего разряда в текущем классе
    const lastDigitInScaleIndex =
      scaleToConvertArr.length - lastDigitInScale - 1
    /* Получить класс без последнего разряда для конвертирования как обычного числа
    и если после этого в разряде десяток остается "1", то эту "1" тоже убрать,
    чтобы не отконвертировалось как 10-19. */
    const scaleForCommonConvert = [
      scaleToConvertArr
        .map((digit, index) => {
          return index === lastDigitInScaleIndex ? 0 : digit
        })
        .map((digit, index) => {
          return index === 1 && digit === 1 ? 0 : digit
        })
        .join(''),
    ]
    // Если в классе остались цифры (не равен "000")
    if (scaleForCommonConvert[0] !== '000') {
      // Конвертировать класс как обычное число
      convertedResult +=
        convertEachScaleToWords(
          scaleForCommonConvert,
          1,
          DECLENSIONS.NOMINATIVE,
        ).result + ' '
    }
    // Цифра для конвертирования
    let digitToConvert = scaleToConvertArr[lastDigitInScaleIndex]
    // Получить объект для выбора формы последнего разряда
    let lastDigitDeclensionsObject: any = ORDINAL_NUMBERS_DECLENSIONS.hundreds
    // Если разряд единиц
    if (lastDigitInScale === 0) {
      lastDigitDeclensionsObject = ORDINAL_NUMBERS_DECLENSIONS.digits
    }
    // Если разряд десятков
    if (lastDigitInScale === 1) {
      lastDigitDeclensionsObject = ORDINAL_NUMBERS_DECLENSIONS.tens
    }
    // Если в десятках цифра 1 (число 10-19)
    if (scaleToConvertArr[1] === 1) {
      lastDigitDeclensionsObject = ORDINAL_NUMBERS_DECLENSIONS.tenToNineteen
      digitToConvert = scaleToConvertArr[2]
    }
    // Получить последний разряд (в виде текста) в правильном падеже
    const lastDigitText = selectDataByDeclension(
      lastDigitDeclensionsObject[digitToConvert][GENDERS.FEMALE],
      declension,
      unitNameForm === 0 ? false : true,
    )
    // Добавить текст к общему результату
    convertedResult += `${lastDigitText}` + ' '
  }
  return convertedResult.trim()
}
