import cloneDeep from 'lodash/cloneDeep'

import type { ConvertOptions } from '@/src/typeScript/types/ConvertOptions'

/**
 * Заменить устаревшие переменные на новые.
 * @param {object} options - Параметры конвертирования.
 * @return {object} Обновленный объект параметров конвертирования.
 */
export default function replaceDeprecatedOptions(options: ConvertOptions = {}) {
  let resultOptions = cloneDeep(options)
  if (!resultOptions.convertNumberToWords) {
    if (resultOptions.convertNumbertToWords) {
      resultOptions.convertNumberToWords = resultOptions.convertNumbertToWords
    }
  }
  delete resultOptions.convertNumbertToWords
  return resultOptions
}
