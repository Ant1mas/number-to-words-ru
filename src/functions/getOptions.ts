import get from 'lodash/get'
import has from 'lodash/has'
import replaceDeprecatedOptions from 'src/functions/replaceDeprecatedOptions'
import _deepMapValues from 'src/lodashFunctions/deepMapValues'
import defaultOptions from 'src/defaultOptions'
import ConvertOptions from 'src/typeScript/interfaces/ConvertOptions'

/**
 * Получить опции конвертирования.
 * @param {object} options - Опции, выбранные пользователем.
 * @return {ConvertOptions} Опции конвертирования.
 */
const getOptions = (options: ConvertOptions = {}): ConvertOptions => {
  const updatedOptions = replaceDeprecatedOptions(options)
  const resultOptions: ConvertOptions = _deepMapValues(
    defaultOptions,
    (path: string[], key: string, value: string) => {
      // Если есть обновления для этой опции
      if (has(updatedOptions, [...path, key])) {
        const newValue = get(updatedOptions, [...path, key])
        return newValue
      } else {
        return value
      }
    }
  )
  return resultOptions
}

export default getOptions
