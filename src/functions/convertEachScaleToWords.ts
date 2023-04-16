import { NUMBERS } from 'src/units/numbers'
import { GENDERS } from 'src/units/genders'
import { DECLENSIONS } from 'src/units/declensions'
import getNumberScaleName from 'src/units/functions/getNumberScaleName'
import convertDigitToWord from 'src/functions/convertDigitToWord'
import type { Declension } from 'src/units/declensions'
import type { Gender } from 'src/units/genders'

export type ConvertedScalesToWords = {
  result: string
  unitNameForm: number
  lastScaleIsZero: boolean
}

/**
 * Конвертировать массив числа в текст.
 * @param {string[]} numberScalesArr - Массив классов числа ['009', '876', '543', ...].
 * @param {number} currencyNounGender - Род валюты (0 - мужской, 1 - женский, 2 - средний).
 * @param {Declension} declension - Падеж.
 * @return {ConvertedScalesToWords} Конвертированный результат (текст) и параметры падежа для валюты.
 */
export default function convertEachScaleToWords(
  numberScalesArr: string[],
  currencyNounGender = 0,
  declension: Declension = DECLENSIONS.NOMINATIVE,
): ConvertedScalesToWords {
  let convertedResult = ''
  let scaleNameForm = 2 // Форма падежа для названия класса единиц или валюты после (0 | 1 | 2).
  let scaleIsZero = false // Равняется ли целый класс "000".

  // Для каждого класса числа
  numberScalesArr.some((numberScale, arrIndex) => {
    scaleNameForm = 2 // Падеж названия единиц измерения по умолчанию ("рублей")
    scaleIsZero = false
    // Определить порядковый номер текущего класса числа
    const currentNumberScale = numberScalesArr.length - arrIndex
    const digit1 = parseInt(numberScale[0])
    const digit2 = parseInt(numberScale[1])
    const digit3 = parseInt(numberScale[2])
    let digit1text = ''
    let digit2text = ''
    let digit3text = ''
    // Если класс числа пустой (000)
    if (digit1 === 0 && digit2 === 0 && digit3 === 0) {
      scaleIsZero = true
      // Если нет классов выше
      if (numberScalesArr.length === 1) {
        convertedResult = convertDigitToWord(
          digit3,
          NUMBERS.numbers,
          declension,
          GENDERS.MALE,
        )
        scaleNameForm = 2
        // Выйти из цикла
        return true
      }
      // Пропустить этот пустой классы (000)
      return
    }
    /* Определить род числа
    если класс тысяч - то женский
    если класс единиц - берем из валюты
    иначе - мужской */
    let gender: Gender = GENDERS.MALE
    if (currentNumberScale === 2) {
      // Если текущий класс - тысячи
      gender = GENDERS.FEMALE
    } else if (currentNumberScale === 1) {
      // Если текущий класс - единицы
      if (currencyNounGender === 1) {
        // Если у валюты указан женский род (напр. копейка)
        gender = GENDERS.FEMALE
      } else if (currencyNounGender === 2) {
        // Если у валюты указан средний род
        gender = GENDERS.NEUTER
      }
    }
    // Определить сотни
    digit1text = convertDigitToWord(
      digit1,
      NUMBERS.hundreds,
      declension,
      gender,
    )
    // Определить десятки и единицы
    // Если в разряде десятков стоит "1"
    if (digit2 === 1) {
      digit2text = convertDigitToWord(
        digit3,
        NUMBERS.tenToNineteen,
        declension,
        gender,
      )
      // Если в разряде десятков стоит не "1"
    } else {
      digit2text = convertDigitToWord(digit2, NUMBERS.tens, declension, gender)
      digit3text = convertDigitToWord(
        digit3,
        NUMBERS.numbers,
        declension,
        gender,
      )
      // Определить ПАДЕЖ названия единиц измерения (рубль/рубля/рублей)
      // Если цифра в разряде единиц от 1 до 4
      if (digit3 >= 1 && digit3 <= 4) {
        // Если цифра в разряде единиц "1"
        if (digit3 === 1) {
          // Получиться "рубль"
          scaleNameForm = 0
        }
        if (digit3 >= 2 && digit3 <= 4) {
          // Получиться "рубля"
          scaleNameForm = 1
        }
      }
    }
    const scaleName = getNumberScaleName(
      currentNumberScale - 1,
      scaleNameForm,
      declension,
    )
    // Убрать ненужный "ноль"
    if (digit3 === 0 && (digit1 > 0 || digit2 > 0)) {
      digit3text = ''
    }
    // Соединить значения в одну строку
    const scaleResult = `${digit1text} ${digit2text} ${digit3text} ${scaleName}`
      .replace(/\s+/g, ' ')
      .trim()
    // Добавить текущий разобранный класс к общему результату
    convertedResult += ` ${scaleResult}`
    return
  })
  // Вернуть полученный результат и форму падежа для валюты
  return {
    result: convertedResult.trim(),
    unitNameForm: scaleNameForm,
    lastScaleIsZero: scaleIsZero,
  }
}
