//@ts-expect-error
import { convert as convertNumberToWordsRu } from 'dist/index.umd.cjs'

test('showCurrency', () => {
  expect(convertNumberToWordsRu('1234567.12345', {
    showCurrency: {
      integer: true,
      fractional: true,
    },
  }))
    .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 12 копеек');
  expect(convertNumberToWordsRu('1234567.12345', {
    showCurrency: {
      integer: true,
      fractional: false,
    },
  }))
    .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 12');
  expect(convertNumberToWordsRu('1234567.12345', {
    showCurrency: {
      integer: false,
      fractional: true,
    },
  }))
    .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь 12 копеек');
  expect(convertNumberToWordsRu('1234567.12345', {
    showCurrency: {
      integer: false,
      fractional: false,
    },
  }))
    .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь 12');
});
