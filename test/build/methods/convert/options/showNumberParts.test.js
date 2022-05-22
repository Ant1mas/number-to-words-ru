const root = '../../../../../';
const convertNumberToWords = require(`${root}dist/bundle`).convert;

test('showNumberParts', () => {
  expect(convertNumberToWords('1234567.12345', {
    showNumberParts: {
      integer: true,
      fractional: true,
    },
  }))
    .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 12 копеек');
  expect(convertNumberToWords('1234567.12345', {
    showNumberParts: {
      integer: true,
      fractional: false,
    },
  })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей');
  expect(convertNumberToWords('1234567.12345', {
    showNumberParts: {
      integer: false,
      fractional: true,
    },
  }))
    .toBe('12 копеек');
  expect(convertNumberToWords('1234567.12345', {
    showNumberParts: {
      integer: false,
      fractional: false,
    },
  }))
    .toBe('');
});
