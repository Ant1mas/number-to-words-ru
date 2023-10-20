import getFractionalUnitCurrencyNumber from '@/functions/getFractionalUnitCurrencyNumber'

test('test', () => {
  expect(getFractionalUnitCurrencyNumber(2, 5)).toEqual('тысячная')
  expect(getFractionalUnitCurrencyNumber(2, 5, 'nominative', 0)).toEqual(
    'тысячная',
  )
  expect(getFractionalUnitCurrencyNumber(2, 5, 'nominative', 0)).toEqual(
    'тысячная',
  )
  expect(getFractionalUnitCurrencyNumber(2, 5, 'nominative', 1)).toEqual(
    'тысячных',
  )
  expect(getFractionalUnitCurrencyNumber(2, 5, 'nominative', 2)).toEqual(
    'тысячных',
  )
  expect(getFractionalUnitCurrencyNumber(6, 5, 'nominative', 0)).toEqual(
    'десятимиллионная',
  )
  expect(getFractionalUnitCurrencyNumber(7, 5, 'nominative', 0)).toEqual(
    'стомиллионная',
  )
  expect(getFractionalUnitCurrencyNumber(-200, 5, 'nominative', 0)).toEqual(
    'десятая',
  )
  expect(getFractionalUnitCurrencyNumber(0, 0, 'nominative', 0)).toEqual(
    'десятых',
  )
  expect(getFractionalUnitCurrencyNumber(2, 0, 'nominative', 0)).toEqual(
    'тысячных',
  )
})
