import combineResultData from '@/functions/combineResultData'

test('test', () => {
  expect(combineResultData(['+', '1501', '.', '22'])).toBe(
    'Одна тысяча пятьсот один рубль 22 копейки',
  )
  expect(
    combineResultData(['+', '1501', '.', ''], {
      currency: {
        fractionalPartMinLength: 0,
      },
      roundNumber: 0,
    }),
  ).toBe('Одна тысяча пятьсот один рубль')
})
test('Знак минус', () => {
  expect(combineResultData(['-', '1501', '.', '22'])).toBe(
    'Минус одна тысяча пятьсот один рубль 22 копейки',
  )
  expect(
    combineResultData(['-', '1501', '.', '22'], {
      convertMinusSignToWord: false,
    }),
  ).toBe('- одна тысяча пятьсот один рубль 22 копейки')
})
test('Разные варианты currency', () => {
  expect(
    combineResultData(['-', '1501', '.', '22'], {
      currency: 'usd',
    }),
  ).toBe('Минус одна тысяча пятьсот один доллар 22 цента')
  expect(
    combineResultData(['-', '1501', '.', '224'], {
      currency: 'number',
    }),
  ).toBe('Минус одна тысяча пятьсот одна целая 224 тысячных')
  expect(
    combineResultData(['-', '1501', '.', '224'], {
      currency: {
        currencyNameDeclensions: {
          nominative: ['рубль1', 'рубли1'],
          genitive: ['рубля1', 'рублей1'],
        },
      },
    }),
  ).toBe('Минус одна тысяча пятьсот один рубль1 224 копейки')
  expect(
    combineResultData(['-', '1501', '.', '224'], {
      currency: {
        currencyNameDeclensions: {
          nominative: ['рубль1', 'рубли1'],
          genitive: ['рубля1', 'рублей1'],
        },
      },
      roundNumber: 2,
    }),
  ).toBe('Минус одна тысяча пятьсот один рубль1 22 копейки')
  expect(
    combineResultData(['-', '1501', '.', ''], {
      currency: {
        fractionalPartMinLength: 0,
      },
      showCurrency: {
        fractional: true,
      },
    }),
  ).toBe('Минус одна тысяча пятьсот один рубль 0 копеек')
  expect(
    combineResultData(['-', '1501', '/', '23'], {
      currency: 'number',
    }),
  ).toBe('Минус одна тысяча пятьсот одна 23')
  expect(
    combineResultData(['-', '1501', '.', ''], {
      currency: 'number',
    }),
  ).toBe('Минус одна тысяча пятьсот одна целая 0 десятых')
  expect(
    combineResultData(['-', '1501', '.', '000000'], {
      currency: 'number',
    }),
  ).toBe('Минус одна тысяча пятьсот одна целая 0 десятых')
  expect(
    combineResultData(['-', '1501', '.', '020000'], {
      currency: 'number',
    }),
  ).toBe('Минус одна тысяча пятьсот одна целая 2 сотых')
})
test('Округление', () => {
  expect(
    combineResultData(['+', '1501', '.', ''], {
      currency: 'number',
      roundNumber: -1,
    }),
  ).toBe('Одна тысяча пятьсот одна целая 0 десятых')
  expect(
    combineResultData(['+', '1501', '.', '015'], {
      currency: 'number',
      roundNumber: -1,
    }),
  ).toBe('Одна тысяча пятьсот одна целая 15 тысячных')
  expect(
    combineResultData(['+', '1501', '.', '015'], {
      currency: 'number',
      roundNumber: 0,
    }),
  ).toBe('Одна тысяча пятьсот одна целая')
  expect(
    combineResultData(['+', '1501', '.', '015'], {
      currency: 'number',
      roundNumber: 1,
    }),
  ).toBe('Одна тысяча пятьсот одна целая 0 десятых')
  expect(
    combineResultData(['+', '1501', '.', '015'], {
      currency: 'number',
      roundNumber: 2,
    }),
  ).toBe('Одна тысяча пятьсот одна целая 2 сотых')
  expect(
    combineResultData(['+', '1501', '.', '015'], {
      currency: 'number',
      roundNumber: 3,
    }),
  ).toBe('Одна тысяча пятьсот одна целая 15 тысячных')
  expect(
    combineResultData(['+', '1501', '.', '015'], {
      currency: 'rub',
      roundNumber: 0,
    }),
  ).toBe('Одна тысяча пятьсот один рубль 00 копеек')
  expect(
    combineResultData(['+', '1501', '.', '015'], {
      currency: 'rub',
      roundNumber: 1,
    }),
  ).toBe('Одна тысяча пятьсот один рубль 00 копеек')
  expect(
    combineResultData(['+', '1501', '.', '015'], {
      currency: 'rub',
      roundNumber: 2,
    }),
  ).toBe('Одна тысяча пятьсот один рубль 02 копейки')
})
test('Опция showNumberParts', () => {
  expect(
    combineResultData(['+', '1501', '.', '22'], {
      showNumberParts: {
        integer: true,
        fractional: true,
      },
    }),
  ).toBe('Одна тысяча пятьсот один рубль 22 копейки')
  expect(
    combineResultData(['+', '1501', '.', '22'], {
      showNumberParts: {
        integer: false,
        fractional: true,
      },
    }),
  ).toBe('22 копейки')
  expect(
    combineResultData(['+', '1501', '.', '22'], {
      showNumberParts: {
        integer: true,
        fractional: false,
      },
    }),
  ).toBe('Одна тысяча пятьсот один рубль')
  expect(
    combineResultData(['+', '1501', '.', '22'], {
      showNumberParts: {
        integer: false,
        fractional: false,
      },
    }),
  ).toBe('')
})
test('Опция convertNumberToWords', () => {
  expect(
    combineResultData(['+', '1501', '.', '22'], {
      convertNumberToWords: {
        integer: true,
        fractional: true,
      },
    }),
  ).toBe('Одна тысяча пятьсот один рубль двадцать две копейки')
  expect(
    combineResultData(['+', '1501', '.', '22'], {
      convertNumberToWords: {
        integer: false,
        fractional: true,
      },
    }),
  ).toBe('1501 рубль двадцать две копейки')
  expect(
    combineResultData(['+', '1501', '.', '22'], {
      convertNumberToWords: {
        integer: true,
        fractional: false,
      },
    }),
  ).toBe('Одна тысяча пятьсот один рубль 22 копейки')
  expect(
    combineResultData(['+', '1501', '.', '22'], {
      convertNumberToWords: {
        integer: false,
        fractional: false,
      },
    }),
  ).toBe('1501 рубль 22 копейки')
})
test('', () => {
  expect(
    combineResultData(['+', '1501', '.', '22'], {
      showCurrency: {
        integer: true,
        fractional: true,
      },
    }),
  ).toBe('Одна тысяча пятьсот один рубль 22 копейки')
  expect(
    combineResultData(['+', '1501', '.', '22'], {
      showCurrency: {
        integer: false,
        fractional: true,
      },
    }),
  ).toBe('Одна тысяча пятьсот один 22 копейки')
  expect(
    combineResultData(['+', '1501', '.', '22'], {
      showCurrency: {
        integer: true,
        fractional: false,
      },
    }),
  ).toBe('Одна тысяча пятьсот один рубль 22')
  expect(
    combineResultData(['+', '1501', '.', '22'], {
      showCurrency: {
        integer: false,
        fractional: false,
      },
    }),
  ).toBe('Одна тысяча пятьсот один 22')
})
test('Разделитель - дробная черта', () => {
  expect(combineResultData(['+', '1501', '/', '122'])).toBe(
    'Одна тысяча пятьсот одна 122 рубля',
  )
  expect(
    combineResultData(['+', '1501', '/', '122'], {
      convertNumberToWords: {
        fractional: true,
      },
    }),
  ).toBe('Одна тысяча пятьсот одна сто двадцать вторая рубля')
})
