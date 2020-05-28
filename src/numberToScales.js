/**
 * Разделить число на части по 3 цифры.
 * @param {string} number - Число, которое нужно раздалить.
 * @return {Array} Разделенное число, например ['009', '876', '543', ...].
 */
const numberToScales = (number) => {
  // Сделать количество цифр числа кратным 3
  const numberLength = number.length;
  const numberScales = Math.ceil(numberLength / 3);
  const numberLengthGoal = numberScales * 3;
  const lackOfDigits = numberLengthGoal - numberLength;
  const extendedNumber = '0'.repeat(lackOfDigits) + number;
  // Разделить число на классы по 3 цифры в каждом
  const cutNumber = [];
  for (let i = 0; i < extendedNumber.length; i+=3) {
    const digits3 = extendedNumber[i]
      + extendedNumber[i + 1]
      + extendedNumber[i + 2];
    cutNumber.push(digits3);
  }
  return cutNumber;
};

export default numberToScales;
