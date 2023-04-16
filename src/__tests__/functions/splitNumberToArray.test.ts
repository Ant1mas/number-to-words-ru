import splitNumberToArray from 'src/functions/splitNumberToArray'

test('Разные типы данных', () => {
  expect(splitNumberToArray(123459876)).toEqual(['+', '123459876', '.', '0'])
  expect(splitNumberToArray(-12345.9876)).toEqual(['-', '12345', '.', '9876'])
})
test('Разные знаки', () => {
  expect(splitNumberToArray('-12345.9876')).toEqual(['-', '12345', '.', '9876'])
  expect(splitNumberToArray('')).toEqual(['+', '0', '.', '0'])
  expect(splitNumberToArray('123459876')).toEqual(['+', '123459876', '.', '0'])
  expect(splitNumberToArray('.123459876')).toEqual(['+', '0', '.', '123459876'])
  expect(splitNumberToArray('12345.9876')).toEqual(['+', '12345', '.', '9876'])
  expect(splitNumberToArray('12345,9876')).toEqual(['+', '12345', ',', '9876'])
  expect(splitNumberToArray('12345/9876')).toEqual(['+', '12345', '/', '9876'])
})
test('Лишние знаки', () => {
  expect(splitNumberToArray('123,45.98,76')).toEqual([
    '+',
    '123',
    ',',
    '459876',
  ])
  expect(splitNumberToArray('-+-+++123,45.-98,+76')).toEqual([
    '-',
    '123',
    ',',
    '459876',
  ])
})
test('Недопустимые знаки', () => {
  expect(splitNumberToArray('абвabc12"3№4!@#$%^&*()[]{}5.9876')).toEqual([
    '+',
    '12345',
    '.',
    '9876',
  ])
})
test('Слишком длинное число', () => {
  // maxIntegerPartLength === 306
  expect(
    splitNumberToArray(
      '11111111111111111111111111111111111111111111111111222222222222222222222222222222222222222222222222223333333333333333333333333333333333333333333333333344444444444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555556666666666666666666666666666666666666666666666666677777777777777777777777777777777777777777777777777',
    ),
  ).toEqual([
    '+',
    '111111111111111111111111111111111111111111111111112222222222222222222222222222222222222222222222222233333333333333333333333333333333333333333333333333444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555566666666666666666666666666666666666666666666666666777777',
    '.',
    '0',
  ])
  expect(
    splitNumberToArray(
      '1,11111111111111111111111111111111111111111111111111222222222222222222222222222222222222222222222222223333333333333333333333333333333333333333333333333344444444444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555556666666666666666666666666666666666666666666666666677777777777777777777777777777777777777777777777777',
    ),
  ).toEqual([
    '+',
    '1',
    ',',
    '11111111111111111111111111111111111111111111111111222222222222222222222222222222222222222222222222223333333333333333333333333333333333333333333333333344444444444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555556666666666666666666666666666666666666666666666666677777',
  ])
})
test('Лишние нули', () => {
  expect(splitNumberToArray('0000012345.987600000000')).toEqual([
    '+',
    '12345',
    '.',
    '9876',
  ])
  expect(splitNumberToArray('0000012345/987600000000')).toEqual([
    '+',
    '12345',
    '/',
    '987600000000',
  ])
})
