import unitNames from 'units/unitNames';

const integerWordEndings = ['', 'а', 'ов'];

/**
 * Добавить падежи к каждому классу числа.
 * @return {Array} Падежи для каждого класса числа. [['квадриллион', 'квадриллиона', 'квадриллионов'], ...].
 */
const addIntegerNamesForms = () => {
  return unitNames.map((unitName) => {
    return integerWordEndings.map((wordEnding) => {
      return unitName + wordEnding;
    });
  });
};

export default addIntegerNamesForms;
