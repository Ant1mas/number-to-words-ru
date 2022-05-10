import getOptions from './getOptions'
import defaultOptions from 'src/defaultOptions'

test('test', () => {
  expect(getOptions()).toEqual({
    currency: 'rub',
    declension: 'nominative',
    roundNumber: -1,
    convertMinusSignToWord: true,
    showNumberParts: {
      integer: true,
      fractional: true,
    },
    convertNumberToWords: {
      integer: true,
      fractional: false,
    },
    showCurrency: {
      integer: true,
      fractional: true,
    },
  })
  expect(
    getOptions({
      currency: 'number',
      showNumberParts: {},
      convertNumberToWords: {
        integer: true,
        fractional: false,
      },
      showCurrency: {
        fractional: false,
      },
    })
  ).toEqual({
    currency: 'number',
    declension: 'nominative',
    roundNumber: -1,
    convertMinusSignToWord: true,
    showNumberParts: {
      integer: true,
      fractional: true,
    },
    convertNumberToWords: {
      integer: true,
      fractional: false,
    },
    showCurrency: {
      integer: true,
      fractional: false,
    },
  })
  expect(
    getOptions({
      currency: {
        currencyNameCases: ['рубль1', 'рубля1', 'рублей1'],
        fractionalPartMinLength: 3,
      },
    })
  ).toEqual({
    currency: {
      currencyNameCases: ['рубль1', 'рубля1', 'рублей1'],
      fractionalPartMinLength: 3,
    },
    declension: 'nominative',
    roundNumber: -1,
    convertMinusSignToWord: true,
    showNumberParts: {
      integer: true,
      fractional: true,
    },
    convertNumberToWords: {
      integer: true,
      fractional: false,
    },
    showCurrency: {
      integer: true,
      fractional: true,
    },
  })
})
