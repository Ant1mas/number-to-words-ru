import convertEachScaleToWordsSlash from '@/functions/convertEachScaleToWordsSlash'

test('test', () => {
  expect(convertEachScaleToWordsSlash(['122'])).toBe('сто двадцать вторых')
  expect(convertEachScaleToWordsSlash(['122'], 1, 'nominative')).toBe(
    'сто двадцать вторых',
  )
  expect(convertEachScaleToWordsSlash(['100'], 1, 'nominative')).toBe('сотых')
  expect(convertEachScaleToWordsSlash(['102'], 1, 'nominative')).toBe(
    'сто вторых',
  )
  expect(convertEachScaleToWordsSlash(['022'], 1, 'nominative')).toBe(
    'двадцать вторых',
  )
  expect(convertEachScaleToWordsSlash(['020'], 1, 'nominative')).toBe(
    'двадцатых',
  )
  expect(convertEachScaleToWordsSlash(['010'], 1, 'nominative')).toBe('десятых')
  expect(convertEachScaleToWordsSlash(['012'], 1, 'nominative')).toBe(
    'двенадцатых',
  )
  expect(convertEachScaleToWordsSlash(['002'], 1, 'nominative')).toBe('вторых')
  expect(convertEachScaleToWordsSlash(['001', '234'], 1, 'nominative')).toBe(
    'одна тысяча двести тридцать четвёртых',
  )
  expect(
    convertEachScaleToWordsSlash(['001', '234', '567'], 1, 'nominative'),
  ).toBe(
    'один миллион двести тридцать четыре тысячи пятьсот шестьдесят седьмых',
  )
  expect(
    convertEachScaleToWordsSlash(['001', '000', '567'], 1, 'nominative'),
  ).toBe('один миллион пятьсот шестьдесят седьмых')
  expect(convertEachScaleToWordsSlash(['025', '000'], 0, 'nominative')).toBe(
    'двадцатипятитысячная',
  )
  expect(convertEachScaleToWordsSlash(['020', '000'], 0, 'nominative')).toBe(
    'двадцатитысячная',
  )
  expect(convertEachScaleToWordsSlash(['010', '000'], 0, 'nominative')).toBe(
    'десятитысячная',
  )
  expect(convertEachScaleToWordsSlash(['012', '000'], 0, 'nominative')).toBe(
    'двенадцатитысячная',
  )
  expect(convertEachScaleToWordsSlash(['001', '000'], 0, 'nominative')).toBe(
    'тысячная',
  )
  expect(convertEachScaleToWordsSlash(['001', '000'], 1, 'nominative')).toBe(
    'тысячных',
  )
  expect(
    convertEachScaleToWordsSlash(['100', '000', '000'], 0, 'nominative'),
  ).toBe('стомиллионная')
  expect(
    convertEachScaleToWordsSlash(['000', '000', '001'], 0, 'nominative'),
  ).toBe('первая')
  expect(
    convertEachScaleToWordsSlash(['000', '000', '001'], 1, 'nominative'),
  ).toBe('первых')
  expect(
    convertEachScaleToWordsSlash(['000', '000', '001'], 2, 'nominative'),
  ).toBe('первых')
})
test('Пустой массив числа', () => {
  expect(convertEachScaleToWordsSlash([], 0, 'nominative')).toBe('')
  expect(convertEachScaleToWordsSlash([], 1, 'nominative')).toBe('')
  expect(convertEachScaleToWordsSlash([], 2, 'nominative')).toBe('')
  expect(convertEachScaleToWordsSlash([], 0, 'genitive')).toBe('')
})
test('Нули в классах числа', () => {
  expect(
    convertEachScaleToWordsSlash(['000', '000', '001'], 0, 'nominative'),
  ).toBe('первая')
  expect(
    convertEachScaleToWordsSlash(['000', '000', '000'], 0, 'nominative'),
  ).toBe('нулевая')
  expect(
    convertEachScaleToWordsSlash(['000', '000', '000'], 1, 'nominative'),
  ).toBe('нулевых')
  expect(
    convertEachScaleToWordsSlash(['000', '000', '000'], 2, 'nominative'),
  ).toBe('нулевых')
})
