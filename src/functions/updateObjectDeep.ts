import get from 'src/functions/get'
import _deepMapValues from 'src/lodashFunctions/deepMapValues'

/**
 * Рекурсивное обновление значений в объекте.
 * Новые поля не добавляются. Значение обновляется, только если тип полей одинаковый.
 * @param {object} object - Исходный объект.
 * @param {object} newObject - Новый объект.
 * @return {object} Обновленный объект.
 */
export default function updateObjectDeep(
  object: object,
  newObject: object,
): object {
  return _deepMapValues(
    object,
    (path: string[], key: string, value: string) => {
      // Если тип данных одинаковый
      if (
        Object.prototype.toString.call(get(newObject, [...path, key])) ===
        Object.prototype.toString.call(value)
      ) {
        // Заменить новым значением
        return get(newObject, [...path, key])
      } else {
        // Оставить старое значение
        return value
      }
    },
  )
}
