/**
 * Заменить часть строки по индексу.
 * @param {string} string - Строка в которой нужно заменить.
 * @param {number} index - Индекс с которого нужно начать заменять.
 * @param {string | number} newSubStr - Строка, которую нужно вставить на место индекса.
 * @return {string} Измененная строка.
 */
const replaceAt = (
  string: string,
  index: number,
  newSubStr: string | number
): string => {
  return string.substr(0, index)
    + newSubStr.toString()
    + string.substr(index + newSubStr.toString().length);
};

export default replaceAt;
