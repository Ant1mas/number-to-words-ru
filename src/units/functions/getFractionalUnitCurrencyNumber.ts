import selectDataByDeclension from 'src/functions/selectDataByDeclension'
import set from 'src/functions/set'
import { DECLENSIONS } from 'src/units/declensions'
import {
  FRACTIONAL_UNITS_BASES,
  FRACTIONAL_UNITS_DECLENSIONS,
  FRACTIONAL_UNIT_ENDINGS,
  FRACTIONAL_UNIT_PREFIXES,
} from 'src/units/fractionalCurrencyNumber'
import { UNIT_NAMES } from 'src/units/unitNames'

import type { Declension } from 'src/units/declensions'

/**
 * Получить единицу измерения дробной части в виде слова.
 * Используется у currency: "number".
 * @param {number} index - Индекс цифры, у которой нужно получить единицу измерения (отсчет начинается с 0).
 * @param {number} digitToConvert - Цифра, которая находится по индексу.
 * @param {Declension} declension - Падеж.
 * @param {number} unitNameForm - Форма валюты (0 | 1 | 2).
 * @return {string} Единица измерения дробной части числа. ('десятая', 'стотысячных', 'десятимиллионная' и т.д.).
 */
export default function getFractionalUnitCurrencyNumber(
  index: number,
  digitToConvert: number,
  declension: Declension = 'nominative',
  unitNameForm: number = 0,
): string {
  if (index < 0) {
    index = 0
  }
  let result = ''
  let unitDeclensionsObject: any = {}
  // Если такой разряд есть в массиве, то просто взять его объект падежей как есть
  if (index <= FRACTIONAL_UNITS_DECLENSIONS.length - 1) {
    unitDeclensionsObject = FRACTIONAL_UNITS_DECLENSIONS[index]
    // Если такого разряда нет в массиве, то сгенерировать его объект падежей
  } else {
    // Определить класс числа
    // (0 - единицы, 1 - тысячи, 2 - миллионы и т.д.).
    const numberScale = Math.ceil((index + 2) / 3) - 1
    // Получить разряд цифры в текущем классе
    // (0 - единицы, 1 - десятки, 2 - сотни).
    const digitIndexInScale = index - numberScale * 3 + 1
    // Получить корень названия класса числа
    const unitNameBase =
      numberScale <= FRACTIONAL_UNITS_BASES.length
        ? FRACTIONAL_UNITS_BASES[numberScale - 1]
        : UNIT_NAMES[numberScale - 2]
    // Получить приставку к числу
    const unitNamePrefix = FRACTIONAL_UNIT_PREFIXES[digitIndexInScale]
    // Составить объект с падежами
    Object.keys(FRACTIONAL_UNIT_ENDINGS).forEach((declension) => {
      // @ts-expect-error
      const declensionEndings = FRACTIONAL_UNIT_ENDINGS[declension]
      declensionEndings.forEach((ending: string, index: number) => {
        set(
          unitDeclensionsObject,
          [declension, index],
          `${unitNamePrefix}${unitNameBase}${ending}`,
        )
      })
    })
  }
  // Выбрать правильную форму слова
  result = selectDataByDeclension(
    unitDeclensionsObject,
    declension,
    unitNameForm === 0 ? false : true,
  )
  // Если цифра для конвертирования === 0
  if (digitToConvert === 0) {
    // Использовать родительный падеж.
    result = unitDeclensionsObject[DECLENSIONS.GENITIVE]?.[1]
  }
  return result
}
