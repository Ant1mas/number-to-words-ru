import addIntegerNamesForms from 'units/functions/addIntegerNamesForms';

export let integer = [
  ['', '', ''],
  ['тысяча', 'тысячи', 'тысяч'], // [1, 2-4, 5-9]
  ['миллион', 'миллиона', 'миллионов'],
  ['миллиард', 'милиарда', 'миллиардов'],
  ['триллион', 'триллиона', 'триллионов'],
  // ...
];

// Дополнить массив "integer" всеми оставшимися значениями
integer = integer.concat(addIntegerNamesForms());

export default integer;
