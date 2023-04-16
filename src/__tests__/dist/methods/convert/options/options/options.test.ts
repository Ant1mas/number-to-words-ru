//@ts-expect-error
import { convert as convertNumberToWordsRu } from 'dist/index.umd.cjs'

test('combined options', () => {
  expect(convertNumberToWordsRu('1234567.12345', {
    showNumberParts: {
      integer: false,
    },
    convertNumberToWords: {
      fractional: true,
    },
    showCurrency: {
      fractional: false,
    },
  })).toBe('Двенадцать');
  expect(convertNumberToWordsRu('1234567.12345', {
    currency: 'number',
    showNumberParts: {
      fractional: false,
    },
    convertNumberToWords: {
      integer: true,
    },
    showCurrency: {
      integer: true,
    },
  })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь целых');
});
