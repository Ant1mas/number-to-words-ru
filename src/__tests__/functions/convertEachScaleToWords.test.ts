import convertEachScaleToWords from 'src/functions/convertEachScaleToWords'

test('test', () => {
  expect(convertEachScaleToWords(['012', '345', '671'])).toEqual({
    result:
      'двенадцать миллионов триста сорок пять тысяч шестьсот семьдесят один',
    unitNameForm: 0,
    lastScaleIsZero: false,
  })
  expect(
    convertEachScaleToWords(['012', '345', '671'], 0, 'nominative'),
  ).toEqual({
    result:
      'двенадцать миллионов триста сорок пять тысяч шестьсот семьдесят один',
    unitNameForm: 0,
    lastScaleIsZero: false,
  })
  expect(convertEachScaleToWords(['000'], 0, 'nominative')).toEqual({
    result: 'ноль',
    unitNameForm: 2,
    lastScaleIsZero: true,
  })
  expect(
    convertEachScaleToWords(['012', '342', '000'], 0, 'nominative'),
  ).toEqual({
    result: 'двенадцать миллионов триста сорок две тысячи',
    unitNameForm: 2,
    lastScaleIsZero: true,
  })
  expect(
    convertEachScaleToWords(['012', '342', '451'], 2, 'nominative'),
  ).toEqual({
    result:
      'двенадцать миллионов триста сорок две тысячи четыреста пятьдесят одно',
    unitNameForm: 0,
    lastScaleIsZero: false,
  })
  expect(convertEachScaleToWords(['321'], 2, 'nominative')).toEqual({
    result: 'триста двадцать одно',
    unitNameForm: 0,
    lastScaleIsZero: false,
  })
})
test('Падежи', () => {
  expect(convertEachScaleToWords(['012', '345', '671'], 0, 'genitive')).toEqual(
    {
      result:
        'двенадцати миллионов трёхсот сорока пяти тысяч шестисот семидесяти одного',
      unitNameForm: 0,
      lastScaleIsZero: false,
    },
  )
  expect(
    convertEachScaleToWords(['012', '345', '671'], 0, 'prepositional'),
  ).toEqual({
    result:
      'двенадцати миллионах трёхстах сорока пяти тысячах шестистах семидесяти одном',
    unitNameForm: 0,
    lastScaleIsZero: false,
  })
})
