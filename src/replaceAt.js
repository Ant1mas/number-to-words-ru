/**
 * Заменить часть строки по индексу.
 * @param {string} string - Строка в которой нужно заменить.
 * @param {number} index - Индекс с которого нужно начать заменять.
 * @param {string} newSubStr - Строка, которую нажно вставить на место индекса.
 * @return {string} Измененная строка.
 */
const replaceAt = (string, index, newSubStr) => {
  return string.substr(0, index)
    + newSubStr.toString()
    + string.substr(index + newSubStr.toString().length);
};

export default replaceAt;
