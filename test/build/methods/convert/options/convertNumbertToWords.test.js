const root = '../../../../../';
const numberToWordsRu = require(`${root}dist/bundle`);

test('convertNumbertToWords', () => {
  expect(numberToWordsRu.convert('1234567.12345', {
    convertNumbertToWords: {
      integer: true,
      fractional: true,
    },
  }))
    .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей двенадцать копеек');
  expect(numberToWordsRu.convert('1234567.12345', {
    convertNumbertToWords: {
      integer: true,
      fractional: false,
    },
  }))
    .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 12 копеек');
  expect(numberToWordsRu.convert('1234567.12345', {
    convertNumbertToWords: {
      integer: false,
      fractional: true,
    },
  }))
    .toBe('1234567 рублей двенадцать копеек');
  expect(numberToWordsRu.convert('1234567.12345', {
    convertNumbertToWords: {
      integer: false,
      fractional: false,
    },
  }))
    .toBe('1234567 рублей 12 копеек');
});
