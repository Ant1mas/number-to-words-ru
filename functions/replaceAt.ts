/**
 * Заменить часть строки по индексу.
 * @param {string} string - Строка в которой нужно заменить.
 * @param {number} index - Индекс с которого нужно начать заменять.
 * @param {string | number} newSubStr - Строка, которую нужно вставить на место индекса.
 * @return {string} Измененная строка.
 */
export default function replaceAt(
  string: string,
  index: number,
  newSubStr: string | number,
): string {
  return (
    string.substring(0, index) +
    newSubStr.toString() +
    string.substring(index + newSubStr.toString().length)
  )
}
