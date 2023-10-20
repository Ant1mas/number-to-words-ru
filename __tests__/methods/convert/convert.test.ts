import convert from '@/methods/convert'

test('test', () => {
  expect(convert('1234')).toBe(
    'Одна тысяча двести тридцать четыре рубля 00 копеек',
  )
  expect(convert(1234)).toBe(
    'Одна тысяча двести тридцать четыре рубля 00 копеек',
  )
  expect(
    convert(1234.0052, {
      currency: 'number',
      declension: 'genitive',
    }),
  ).toBe('Одной тысячи двухсот тридцати четырёх целых 52 десятитысячных')
  expect(
    convert(1234.0052, {
      currency: {
        currencyNameCases: ['рубль1', 'рубля1', 'рублей1'],
        fractionalPartNameCases: ['копейка1', 'копейки1', 'копеек1'],
      },
      roundNumber: 2,
    }),
  ).toBe('Одна тысяча двести тридцать четыре рубля1 01 копейка1')
})
