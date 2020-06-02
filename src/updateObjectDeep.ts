import * as _ from 'lodash';
import _deepMapValues from 'lodashFunctions/deepMapValues';

/**
 * Рекурсивное обновление значений в объекте.
 * Новые поля не добавляются. Значение обновляется, только если тип полей одинаковый.
 * @param {Object} object - Исходный объект.
 * @param {Object} newObject - Новый объект.
 * @return {Object} Обновленный объект.
 */
const updateObjectDeep = (object: object, newObject: object): object => {
  return _deepMapValues(object, (path: string[], key: string, value: string) => {
    // Если тип данных одинаковый
    if (Object.prototype.toString.call(_.get(newObject, [...path, key])) === Object.prototype.toString.call(value)) {
      // Заменить новым значением
      return _.get(newObject, [...path, key]);
    } else {
      // Оставить старое значение
      return value;
    }
  });
};

export default updateObjectDeep;
