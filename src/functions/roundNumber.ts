import replaceAt from 'src/functions/replaceAt';

/**
 * Округлить число в виде массива до заданной точности.
 * @param {string[]} numberArray - Число в виде массива ['-', '150', '.', '25'].
 * @param {number} precision - Точность. Сколько знаков после запятой.
 * @return {string[]} Округленное число в виде массива.
 */
const roundNumber = (
  numberArray: string[],
  precision = 2
): string[] => {
  // Если разделитель - дробная черта то не округлять
  if (numberArray[2] === '/') {
    return numberArray;
  }
  let resultNumberArray = [...numberArray];
  // Если нужно применять округление
  if (precision >= 0) {
    // Если количество знаков после запятой <= precision, то не округлять
    if (numberArray[3].length <= precision) {
      return numberArray;
    }
    const integerPart = numberArray[1];
    // Обрезать дробную часть
    const fractionalPart = numberArray[3].substring(0, precision + 1);
    let numberPartToRound = `${integerPart}.${fractionalPart}`;
    let increaseDigit = false;
    // Цикл от последней цифры к первой (справа налево)
    for (let index = numberPartToRound.length - 1; index >= 0; index--) {
      // Если текущий символ - это цифра (не знак разделителя)
      if (numberPartToRound[index].search(/[0-9]/) !== -1) {
        const currentDigit: number = parseInt(numberPartToRound[index]);
        // Если нужно было увеличивать цифру
        if (increaseDigit === true) {
          // Если текущая цифра 9, то увеличить следующую
          if (currentDigit === 9) {
            numberPartToRound = replaceAt(numberPartToRound, index, 0);
            increaseDigit = true;
            // Если это уже самая первая цифра слева, то добавить "1" в начало
            if (index === 0) {
              numberPartToRound = `1${numberPartToRound}`;
            }
          // Если любая другая цифра
          } else {
            numberPartToRound = replaceAt(
              numberPartToRound,
              index,
              currentDigit + 1,
            );
            increaseDigit = false;
            break;
          }
        // Если не нужно было увеличивать цифру
        } else {
          // Если текущая цифра <= 4, то завершить цикл
          if (currentDigit <= 4) {
            break;
          } else {
          /* Если текущая цифра >= 5,
          то увеличить следующую цифру (соседнюю слева) */
            increaseDigit = true;
          }
        }
      }
    }
    resultNumberArray[1] = numberPartToRound.slice(0, -1).split('.')[0];
    resultNumberArray[3] = numberPartToRound.slice(0, -1).split('.')[1];
  }
  // Убрать лишние нули из дробной части справа
  resultNumberArray[3] = resultNumberArray[3]
    .split('')
    .reverse()
    .join('')
    .replace(/^0+/, '')
    .split('')
    .reverse()
    .join('');
  // Если дробная часть пустая, то сделать равной 0
  if (
    resultNumberArray[3] === '' &&
    precision !== 0
  ) {
    resultNumberArray[3] = '0';
  }
  return resultNumberArray;
};

export default roundNumber;
