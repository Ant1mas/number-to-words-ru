import roundNumber from 'src/functions/roundNumber'

test('test', () => {
  expect(roundNumber(['-', '1234567890', '.', ''], 2)).toEqual([
    '-',
    '1234567890',
    '.',
    '',
  ])
  expect(roundNumber(['-', '1234567890', '.', ''])).toEqual([
    '-',
    '1234567890',
    '.',
    '',
  ])
})
test('precision < 0', () => {
  expect(roundNumber(['-', '1234567890', '.', '1234567890'], -1)).toEqual([
    '-',
    '1234567890',
    '.',
    '123456789',
  ])
  expect(roundNumber(['-', '1234567890', '.', '000000000'], -1)).toEqual([
    '-',
    '1234567890',
    '.',
    '0',
  ])
  expect(roundNumber(['-', '1234567890', '.', '000100000'], -1)).toEqual([
    '-',
    '1234567890',
    '.',
    '0001',
  ])
})
describe('Разделители', () => {
  test('Дробная черта', () => {
    expect(roundNumber(['-', '1234567890', '/', '1234567890'], 2)).toEqual([
      '-',
      '1234567890',
      '/',
      '1234567890',
    ])
  })
  test('Точка', () => {
    expect(roundNumber(['-', '1234567890', '.', '1234567890'], 2)).toEqual([
      '-',
      '1234567890',
      '.',
      '12',
    ])
  })
  test('Запятая', () => {
    expect(roundNumber(['-', '1234567890', '.', '1234567890'], 2)).toEqual([
      '-',
      '1234567890',
      '.',
      '12',
    ])
  })
})
test('Недостаточно знаков после запятой', () => {
  expect(roundNumber(['-', '1234567890', '.', '123'], 8)).toEqual([
    '-',
    '1234567890',
    '.',
    '123',
  ])
})
test('Повышение целой части', () => {
  expect(roundNumber(['-', '9999', '.', '9995'], 3)).toEqual([
    '-',
    '10000',
    '.',
    '0',
  ])
  expect(roundNumber(['-', '7899', '.', '9995'], 2)).toEqual([
    '-',
    '7900',
    '.',
    '0',
  ])
  expect(roundNumber(['-', '7899', '.', '9995'], 3)).toEqual([
    '-',
    '7900',
    '.',
    '0',
  ])
  expect(roundNumber(['-', '7899', '.', '9995'], 4)).toEqual([
    '-',
    '7899',
    '.',
    '9995',
  ])
})
test('Без повышения целой части', () => {
  expect(roundNumber(['-', '7899', '.', '9876'], 2)).toEqual([
    '-',
    '7899',
    '.',
    '99',
  ])
  expect(roundNumber(['-', '7899', '.', '9876'], 3)).toEqual([
    '-',
    '7899',
    '.',
    '988',
  ])
})