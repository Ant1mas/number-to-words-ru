import declensions from "units/declensions";
import getNumberScaleName from "units/functions/getNumberScaleName";

const slashNumberUnitsForms = [
  ['', ''],
  ['тысячная', 'тысячных'],
  ['миллионная', 'миллионных'],
  ['миллиардная', 'миллиардных'],
  // ...
];

const slashNumberUnitEndings = ['ная', 'ных'];

/**
 * Получить падежи дробной (через "/") части числа.
 * @param {number} scaleIndex - Порядковый номер класса числа (2 - тысячи, 3 - миллионы).
 * @return {string[]} Падежи, например ['миллионная', 'миллионных'].
 */
const getSlashNumberUnitName = (scaleIndex = 2): string[] => {
  if (scaleIndex < 1) {
    scaleIndex = 1;
  }
  let result: string[];
  // Если такой разряд есть в списке, то просто взять его как есть
  if (slashNumberUnitsForms.length >= scaleIndex) {
    result = slashNumberUnitsForms[scaleIndex - 1];
  // Если такого разряда нет в списке, то сгенерировать
  } else {
    // Добавить окончания
    return slashNumberUnitEndings.map((ending) => {
      return getNumberScaleName(scaleIndex - 1, 0, declensions.NOMINATIVE) + ending;
    });
  }
  return result;
};

export default getSlashNumberUnitName;
