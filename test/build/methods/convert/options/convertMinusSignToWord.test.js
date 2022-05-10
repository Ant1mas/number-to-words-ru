const root = '../../../../../';
const convertNumberToWords = require(`${root}dist/bundle`).convert;

test('convertMinusSignToWord', () => {
  expect(convertNumberToWords('-15.45', {
    convertMinusSignToWord: true,
  })).toBe('Минус пятнадцать рублей 45 копеек');
  expect(convertNumberToWords('-15.45', {
    convertMinusSignToWord: false,
  })).toBe('- пятнадцать рублей 45 копеек');
});
