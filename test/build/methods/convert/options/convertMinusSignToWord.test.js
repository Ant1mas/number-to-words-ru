const root = '../../../../../';
const numberToWordsRu = require(`${root}dist/bundle`);

test('convertMinusSignToWord', () => {
  expect(numberToWordsRu.convert('-15.45', {
    convertMinusSignToWord: true,
  })).toBe('Минус пятнадцать рублей 45 копеек');
  expect(numberToWordsRu.convert('-15.45', {
    convertMinusSignToWord: false,
  })).toBe('- пятнадцать рублей 45 копеек');
});
