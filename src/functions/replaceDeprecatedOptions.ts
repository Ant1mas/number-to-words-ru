import cloneDeep from 'lodash/cloneDeep'

import ConvertOptions from 'src/typeScript/interfaces/ConvertOptions'

/**
 * Заменить устаревшие переменные на новые.
 * @param {object} options - Параметры конвертирования.
 * @return {object} Обновленный объект параметров конвертирования.
 */
const replaceDeprecatedOptions = (options: ConvertOptions = {}) => {
  let resultOptions = cloneDeep(options)
  if (!resultOptions.convertNumberToWords) {
    if (resultOptions.convertNumbertToWords) {
      resultOptions.convertNumberToWords = resultOptions.convertNumbertToWords
    }
  }
  delete resultOptions.convertNumbertToWords
  return resultOptions
}

export default replaceDeprecatedOptions
