import replaceDeprecatedOptions from './replaceDeprecatedOptions'

test('deprecated convertNumbertToWords', () => {
  expect(
    replaceDeprecatedOptions({
      currency: 'number',
      showNumberParts: {},
      convertNumbertToWords: {
        integer: true,
        fractional: false,
      },
      showCurrency: {
        fractional: false,
      },
    })
  ).toEqual({
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
  expect(
    replaceDeprecatedOptions({
      currency: 'number',
      showNumberParts: {},
      convertNumberToWords: {
        integer: false,
        fractional: true,
      },
      convertNumbertToWords: {
        integer: true,
        fractional: false,
      },
      showCurrency: {
        fractional: false,
      },
    })
  ).toEqual({
    currency: 'number',
    showNumberParts: {},
    convertNumberToWords: {
      integer: false,
      fractional: true,
    },
    showCurrency: {
      fractional: false,
    },
  })
  expect(
    replaceDeprecatedOptions({
      currency: 'number',
      showNumberParts: {},
      showCurrency: {
        fractional: false,
      },
    })
  ).toEqual({
    currency: 'number',
    showNumberParts: {},
    showCurrency: {
      fractional: false,
    },
  })
  expect(replaceDeprecatedOptions({})).toEqual({})
})
