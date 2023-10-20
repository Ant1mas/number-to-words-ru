import getCustomCurrency from '@/functions/getCustomCurrency'

test('test', () => {
  expect(
    getCustomCurrency({
      declension: 'nominative',
      currency: {
        currencyNameCases: ['рубль1', 'рубля1', 'рублей1'],
        fractionalPartNameCases: ['копейка1', 'копейки1', 'копеек1'],
        currencyNameDeclensions: {
          prepositional: ['рубле2', 'рублях2'],
        },
        fractionalPartNameDeclensions: {
          prepositional: ['копейке2', 'копейках2'],
        },
        currencyNounGender: {
          integer: 1,
        },
        fractionalPartMinLength: 5,
      },
    }),
  ).toEqual({
    currencyNameDeclensions: {
      nominative: ['рубль1', ''],
      genitive: ['рубля1', 'рублей1'],
      dative: ['рублю', 'рублям'],
      accusative: ['рубль', ''],
      instrumental: ['рублём', 'рублями'],
      prepositional: ['рубле2', 'рублях2'],
    },
    fractionalPartNameDeclensions: {
      nominative: ['копейка1', ''],
      genitive: ['копейки1', 'копеек1'],
      dative: ['копейке', 'копейкам'],
      accusative: ['копейку', ''],
      instrumental: ['копейкой', 'копейками'],
      prepositional: ['копейке2', 'копейках2'],
    },
    currencyNounGender: {
      integer: 1,
      fractionalPart: 1,
    },
    fractionalPartMinLength: 5,
  })
  expect(
    getCustomCurrency({
      declension: 'dative',
      currency: {
        currencyNameCases: ['рубль1', 'рубля1', 'рублей1'],
        fractionalPartNameCases: ['копейка1', 'копейки1', 'копеек1'],
        currencyNameDeclensions: {
          prepositional: ['рубле2', 'рублях2'],
        },
        fractionalPartNameDeclensions: {
          prepositional: ['копейке2', 'копейках2'],
        },
        currencyNounGender: {
          integer: 1,
        },
        fractionalPartMinLength: 5,
      },
    }),
  ).toEqual({
    currencyNameDeclensions: {
      nominative: ['рубль1', ''],
      genitive: ['рубля1', 'рублей1'],
      dative: ['рублю', 'рублям'],
      accusative: ['рубль', ''],
      instrumental: ['рублём', 'рублями'],
      prepositional: ['рубле2', 'рублях2'],
    },
    fractionalPartNameDeclensions: {
      nominative: ['копейка1', ''],
      genitive: ['копейки1', 'копеек1'],
      dative: ['копейке', 'копейкам'],
      accusative: ['копейку', ''],
      instrumental: ['копейкой', 'копейками'],
      prepositional: ['копейке2', 'копейках2'],
    },
    currencyNounGender: {
      integer: 1,
      fractionalPart: 1,
    },
    fractionalPartMinLength: 5,
  })
})
