import * as _ from 'lodash';

/**
 * Рекурсивная версия lodash.mapValues() [https://lodash.com/docs/#mapValues].
 * Рекурсивно применить итератор для каждого значения в объекте на всех уровнях вложенности.
 * @param {object} object - Объект для итерирования.
 * @param {Function} iteratee - Функция, вызываемая для каждой итерации.
 * @return {object} Новый объект.
 */
const _deepMapValues = (object: object, iteratee: Function): object => {
  let result = _.cloneDeep(object);
  /**
   * Пройти по значениям объекта.
   * Если значение не является вложенным объектом, то применить к нему итератор.
   * Если значение является объектом, то рекурсивно применить к нему эту же функцию с указанием пути.
   * @param {object} object - Объект для итерирования.
   * @param {any[]} path - Путь до текущего значения во всей цепочке вложенностей объекта.
   * @return {undefined}
   */
  const iterateObject = (object: object, path: any[] = []) => {
    _.forOwn(object, (value: any, key: string)=> {
      // Если текущее значение является объектом.
      if (_.isPlainObject(value)) {
        // Рекурсивно применить к нему функцию с дополнением пути.
        value = iterateObject(value, [...path, key]);
      } else {
        // Применить к значению итератор.
        _.set(result, [...path, key], iteratee(path, key, value));
      }
    });
  };
  // Запустить итератор
  iterateObject(object);
  // Вернуть новый объект с учетом изменений
  return result;
};

export default _deepMapValues;
