const root = '../../../../';
const numberToWordsRu = require(`${root}dist/bundle`);

test('showNumberParts', () => {
  expect(numberToWordsRu.convert('1234567.12345', {
    showNumberParts: {
      integer: true,
      fractional: true,
    },
  }))
  .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 12 копеек');
  expect(numberToWordsRu.convert('1234567.12345', {
    showNumberParts: {
      integer: true,
      fractional: false,
    },
  })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей');
  expect(numberToWordsRu.convert('1234567.12345', {
    showNumberParts: {
      integer: false,
      fractional: true,
    },
  }))
  .toBe('12 копеек');
  expect(numberToWordsRu.convert('1234567.12345', {
    showNumberParts: {
      integer: false,
      fractional: false,
    },
  }))
  .toBe('');
});
