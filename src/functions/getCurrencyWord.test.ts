import getCurrencyWord from './getCurrencyWord'

let currencyObject: any

beforeAll(() => {
  currencyObject = {
    currencyNameDeclensions: {
      nominative: ['рубль', 'рубли'],
      genitive: ['рубля', 'рублей'],
      dative: ['рублю', 'рублям'],
      accusative: ['рубль', 'рубли'],
      instrumental: ['рублём', 'рублями'],
      prepositional: ['рубле', 'рублях'],
    },
    fractionalPartNameDeclensions: {
      nominative: ['копейка', 'копейки'],
      genitive: ['копейки', 'копеек'],
      dative: ['копейке', 'копейкам'],
      accusative: ['копейку', 'копейки'],
      instrumental: ['копейкой', 'копейками'],
      prepositional: ['копейке', 'копейках'],
    },
  }
})

test('test', () => {
  expect(
    getCurrencyWord(currencyObject, 'integer', 0, false, 'rub', 'nominative')
  ).toBe('рубль')
  expect(
    getCurrencyWord(currencyObject, 'fractional', 0, false, 'rub', 'nominative')
  ).toBe('копейка')
  expect(
    getCurrencyWord(currencyObject, 'integer', 1, false, 'rub', 'prepositional')
  ).toBe('рублях')
  expect(
    getCurrencyWord(currencyObject, 'integer', 1, false, 'rub', 'nominative')
  ).toBe('рубля')
  expect(
    getCurrencyWord(currencyObject, 'integer', 2, false, 'rub', 'accusative')
  ).toBe('рублей')
  expect(
    getCurrencyWord(currencyObject, 'integer', 1, false, 'number', 'nominative')
  ).toBe('рублей')
})

test('lastScaleIsZero === true', () => {
  expect(
    getCurrencyWord(currencyObject, 'integer', 0, true, 'rub', 'nominative')
  ).toBe('рублей')
})
