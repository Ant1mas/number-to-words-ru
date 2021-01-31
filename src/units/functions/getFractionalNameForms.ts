import {
  fractional,
  fractionalWordEndings,
  fractionalWordPrefixes,
} from 'units/fractional';
import getUnitName from "units/functions/getUnitName";
import declensions from "units/declensions";

/**
 * Получить падежи дробной части числа.
 * @param {number} index - Индекс цифры к которой нужно получить падежи.
 * @return {Array} Падежи дробной части числа. ['стомиллионная', 'стомиллионных', 'стомиллионных'].
 */
const getFractionalNameForms = (index: number): string[] => {
  if (index < 0) {
    index = 0;
  }
  let result;
  // Если такой разряд есть в списке, то просто взять его как есть
  if (fractional.length - 1 >= index) {
    result = fractional[index];
  // Если такого разряда нет в списке, то сгенерировать
  } else {
    // Определить с какого index начинается гернерация значения
    const indexStarts = fractional.length;
    // Определить с какого по порядку класса нужно начать генерировать
    const lastClass = Math.floor((fractional.length - 2) / 3);
    const nextClass = lastClass + 1;
    // Определить к какому классу относится указанный index
    const classIndex = nextClass + Math.floor((index - indexStarts) / 3);
    // Определить какой разряд у класса нужен
    const classScaleIndex = (index - indexStarts) % 3;
    // Сгенерировать массив
    result = fractionalWordEndings.map((ending) => {
      return fractionalWordPrefixes[classScaleIndex]
        + getUnitName(classIndex, declensions.NOMINATIVE, false)
        + ending;
    });
  }
  return result;
};

export default getFractionalNameForms;
