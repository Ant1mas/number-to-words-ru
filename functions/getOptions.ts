import deepMapValues from '@/functions/deepMapValues'
import get from '@/functions/get'
import has from '@/functions/has'
import replaceDeprecatedOptions from '@/functions/replaceDeprecatedOptions'
import { DEFAULT_OPTIONS } from '@/lib/constants/defaultOptions'

import type { ConvertOptions } from '@/types/ConvertOptions'

/**
 * Получить опции конвертирования.
 * @param {object} options - Опции, выбранные пользователем.
 * @return {ConvertOptions} Опции конвертирования.
 */
export default function getOptions(
  options: ConvertOptions = {},
): ConvertOptions {
  const updatedOptions = replaceDeprecatedOptions(options)
  const resultOptions: ConvertOptions = deepMapValues(
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
