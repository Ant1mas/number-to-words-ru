import getCurrencyObject from './getCurrencyObject'

test('test', () => {
  expect(getCurrencyObject()).toEqual({
    currencyNameCases: ['рубль', 'рубля', 'рублей'],
    currencyNameDeclensions: {
      nominative: ['рубль', ''],
      genitive: ['рубля', 'рублей'],
      dative: ['рублю', 'рублям'],
      accusative: ['рубль', 'рубли'],
      instrumental: ['рублём', 'рублями'],
      prepositional: ['рубле', 'рублях'],
    },
    fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
    fractionalPartNameDeclensions: {
      nominative: ['копейка', ''],
      genitive: ['копейки', 'копеек'],
      dative: ['копейке', 'копейкам'],
      accusative: ['копейку', 'копейки'],
      instrumental: ['копейкой', 'копейками'],
      prepositional: ['копейке', 'копейках'],
    },
    currencyNounGender: {
      integer: 0,
      fractionalPart: 1,
    },
    fractionalPartMinLength: 2,
  })
  expect(
    getCurrencyObject({
      currency: {
        currencyNameCases: ['рубль1', 'рубля2', 'рублей3'],
        fractionalPartNameCases: ['копейка1', 'копейки2', 'копеек3'],
      },
    })
  ).toEqual({
    currencyNameDeclensions: {
      nominative: ['рубль1', ''],
      genitive: ['рубля2', 'рублей3'],
      dative: ['рублю', 'рублям'],
      accusative: ['рубль', 'рубли'],
      instrumental: ['рублём', 'рублями'],
      prepositional: ['рубле', 'рублях'],
    },
    fractionalPartNameDeclensions: {
      nominative: ['копейка1', ''],
      genitive: ['копейки2', 'копеек3'],
      dative: ['копейке', 'копейкам'],
      accusative: ['копейку', 'копейки'],
      instrumental: ['копейкой', 'копейками'],
      prepositional: ['копейке', 'копейках'],
    },
    currencyNounGender: {
      integer: 0,
      fractionalPart: 1,
    },
    fractionalPartMinLength: 2,
  })
  expect(getCurrencyObject({ currency: {} })).toEqual({
    currencyNameDeclensions: {
      nominative: ['рубль', ''],
      genitive: ['рубля', 'рублей'],
      dative: ['рублю', 'рублям'],
      accusative: ['рубль', 'рубли'],
      instrumental: ['рублём', 'рублями'],
      prepositional: ['рубле', 'рублях'],
    },
    fractionalPartNameDeclensions: {
      nominative: ['копейка', ''],
      genitive: ['копейки', 'копеек'],
      dative: ['копейке', 'копейкам'],
      accusative: ['копейку', 'копейки'],
      instrumental: ['копейкой', 'копейками'],
      prepositional: ['копейке', 'копейках'],
    },
    currencyNounGender: {
      integer: 0,
      fractionalPart: 1,
    },
    fractionalPartMinLength: 2,
  })
})
