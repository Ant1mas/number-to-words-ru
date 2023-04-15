import get from 'lodash/get'
import has from 'lodash/has'

import { DEFAULT_OPTIONS } from 'src/defaultOptions'
import replaceDeprecatedOptions from 'src/functions/replaceDeprecatedOptions'
import _deepMapValues from 'src/lodashFunctions/deepMapValues'
import type { ConvertOptions } from '@/src/typeScript/types/ConvertOptions'

/**
 * Получить опции конвертирования.
 * @param {object} options - Опции, выбранные пользователем.
 * @return {ConvertOptions} Опции конвертирования.
 */
export default function getOptions(
  options: ConvertOptions = {},
): ConvertOptions {
  const updatedOptions = replaceDeprecatedOptions(options)
  const resultOptions: ConvertOptions = _deepMapValues(
    DEFAULT_OPTIONS,
    (path: string[], key: string, value: string) => {
      // Если есть обновления для этой опции
      if (has(updatedOptions, [...path, key])) {
        const newValue = get(updatedOptions, [...path, key])
        return newValue
      } else {
        return value
      }
    },
  )
  return resultOptions
}
