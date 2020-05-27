import replaceAt from 'replaceAt';

/**
 * Округлить число в виде массива до заданной точности.
 * @param {*} numberArray - Число в виде массива.
 * @param {*} precision - Точность. Сколько знаков после запятой.
 * @return {Array} Округленное число в виде массива.
 */
const roundNumber = (numberArray, precision = 2) => {
  const integerPart = numberArray[1];
  // Обрезать дробную часть
  let fractionalPart = numberArray[3].substr(0, precision + 1);
  // Если недостаточно знаков в дробной части
  if (fractionalPart.length < (precision + 1)) {
    // Заполнить пустое место нулями
    fractionalPart = fractionalPart + '0'
      .repeat((precision + 1) - fractionalPart.length);
  }
  let numberPartToRound = `${integerPart}.${fractionalPart}`;
  let increaseDigit = false;
  // Цикл от последней цифры к первой (справа налево)
  for (let index = numberPartToRound.length - 1; index >= 0; index--) {
    // Если текущий символ - это цифра (не знак разделителя)
    if (numberPartToRound[index].search(/[0-9]/) !== -1) {
      const currentDigit = parseInt(numberPartToRound[index]);
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
  const resultNumberArray = numberArray;
  resultNumberArray[1] = numberPartToRound.slice(0, -1).split('.')[0];
  resultNumberArray[3] = numberPartToRound.slice(0, -1).split('.')[1];
  return resultNumberArray;
};

export default roundNumber;
