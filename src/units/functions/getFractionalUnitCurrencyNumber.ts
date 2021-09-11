import * as _ from 'lodash';
import {
  fractionalUnitsDeclensions,
  fractionalUnitsBases,
  fractionalUnitPrefixes,
  fractionalUnitEndings,
} from 'src/units/fractionalCurrencyNumber';
import unitNames from 'src/units/unitNames';
import {declensions, Declension} from "src/units/declensions";
import selectDataByDeclension from 'src/functions/selectDataByDeclension';

/**
 * Получить единицу измерения дробной части в виде слова.
 * Используется у currency: "number".
 * @param {number} index - Индекс цифры, у которой нужно получить единицу измерения (отсчет начинается с 0).
 * @param {number} digitToConvert - Цифра, которая находится по индексу.
 * @param {Declension} declension - Падеж.
 * @param {number} unitNameForm - Форма валюты (0 | 1 | 2).
 * @return {string} Единица измерения дробной части числа. ('десятая', 'стотысячных', 'десятимиллионная' и т.д.).
 */
const getFractionalUnitCurrencyNumber = (
  index: number,
  digitToConvert: number,
  declension: Declension = 'nominative',
  unitNameForm: number = 0
): string => {
  if (index < 0) {
    index = 0;
  }
  let result = '';
  let unitDeclensionsObject:any = {};
  // Если такой разряд есть в массиве, то просто взять его объект падежей как есть
  if (index <= fractionalUnitsDeclensions.length - 1) {
    unitDeclensionsObject = fractionalUnitsDeclensions[index];
  // Если такого разряда нет в массиве, то сгенерировать его объект падежей
  } else {
    // Определить класс числа
    // (0 - единицы, 1 - тысячи, 2 - миллионы и т.д.).
    const numberScale = Math.ceil((index + 2) / 3) - 1;
    // Получить разряд цифры в текущем классе
    // (0 - единицы, 1 - десятки, 2 - сотни).
    const digitIndexInScale = index - numberScale * 3 + 1;
    // Получить корень названия класса числа
    const unitNameBase = (numberScale <= fractionalUnitsBases.length) ? fractionalUnitsBases[numberScale - 1] : unitNames[numberScale - 2];
    // Получить приставку к числу
    const unitNamePrefix = fractionalUnitPrefixes[digitIndexInScale];
    // Составить объект с падежами
    Object.keys(fractionalUnitEndings).forEach((key) => {
      const declensionEndings = fractionalUnitEndings[key];
      declensionEndings.forEach((ending, index) => {
        _.set(unitDeclensionsObject, [key, index], `${unitNamePrefix}${unitNameBase}${ending}`);
      });
    });
  }
  // Выбрать правильную форму слова
  result = selectDataByDeclension(unitDeclensionsObject, declension, (unitNameForm === 0) ? false : true);
  // Если цифра для конвертирования === 0
  if (digitToConvert === 0) {
    // Использовать родительный падеж.
    result = unitDeclensionsObject[declensions.GENITIVE][1];
  }
  return result;
};

export default getFractionalUnitCurrencyNumber;
