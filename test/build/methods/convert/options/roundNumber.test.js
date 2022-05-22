const root = '../../../../../';
const convertNumberToWords = require(`${root}dist/bundle`).convert;

describe('roundNumber', () => {
  test('Проверка вариантов округления', () => {
    expect(convertNumberToWords('0.995'))
      .toBe('Один рубль 00 копеек');
    expect(convertNumberToWords('.995'))
      .toBe('Один рубль 00 копеек');
    expect(convertNumberToWords('0.505'))
      .toBe('Ноль рублей 51 копейка');
    expect(convertNumberToWords('50.995'))
      .toBe('Пятьдесят один рубль 00 копеек');
    expect(convertNumberToWords('50.994'))
      .toBe('Пятьдесят рублей 99 копеек');
    expect(convertNumberToWords('999.995'))
      .toBe('Одна тысяча рублей 00 копеек');
    expect(convertNumberToWords('15999.995'))
      .toBe('Шестнадцать тысяч рублей 00 копеек');
  });
  describe('slash delimiter', () => {
    test('common currency', () => {
      expect(convertNumberToWords('1234/6789', {
        currency: 'rub',
        roundNumber: 50,
      }))
        .toBe('Одна тысяча двести тридцать четыре 6789 рубля');
      expect(convertNumberToWords('1234/6789', {
        currency: 'rub',
        roundNumber: 2,
      }))
        .toBe('Одна тысяча двести тридцать четыре 6789 рубля');
      expect(convertNumberToWords('1234/6789', {
        currency: 'rub',
        roundNumber: -1,
      }))
        .toBe('Одна тысяча двести тридцать четыре 6789 рубля');
    });
    test('currency "number"', () => {
      expect(convertNumberToWords('1234/6789', {
        currency: 'number',
        roundNumber: 50,
      }))
        .toBe('Одна тысяча двести тридцать четыре 6789');
      expect(convertNumberToWords('1234/6789', {
        currency: 'number',
        roundNumber: 2,
      }))
        .toBe('Одна тысяча двести тридцать четыре 6789');
      expect(convertNumberToWords('1234/6789', {
        currency: 'number',
        roundNumber: -1,
      }))
        .toBe('Одна тысяча двести тридцать четыре 6789');
    });
    test('custom currency', () => {
      expect(convertNumberToWords('1234/6789', {
        currency: {
          currencyNameCases: ['рубль', 'рубля', 'рублей'],
          fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
          currencyNounGender: {
            integer: 0,
            fractionalPart: 1,
          },
        },
        roundNumber: 50,
      }))
        .toBe('Одна тысяча двести тридцать четыре 6789 рубля');
      expect(convertNumberToWords('1234/6789', {
        currency: {
          currencyNameCases: ['рубль', 'рубля', 'рублей'],
          fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
          currencyNounGender: {
            integer: 0,
            fractionalPart: 1,
          },
        },
        roundNumber: 2,
      }))
        .toBe('Одна тысяча двести тридцать четыре 6789 рубля');
      expect(convertNumberToWords('1234/6789', {
        currency: {
          currencyNameCases: ['рубль', 'рубля', 'рублей'],
          fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
          currencyNounGender: {
            integer: 0,
            fractionalPart: 1,
          },
        },
        roundNumber: -1,
      }))
        .toBe('Одна тысяча двести тридцать четыре 6789 рубля');
    });
  });
  describe('normal delimiter', () => {
    test('common currency', () => {
      expect(convertNumberToWords('1234.6789', {
        currency: 'rub',
        roundNumber: 50,
      }))
        .toBe('Одна тысяча двести тридцать четыре рубля 68 копеек');
      expect(convertNumberToWords('1234.6789', {
        currency: 'rub',
        roundNumber: 2,
      }))
        .toBe('Одна тысяча двести тридцать четыре рубля 68 копеек');
      expect(convertNumberToWords('1234.6789', {
        currency: 'rub',
        roundNumber: 1,
      }))
        .toBe('Одна тысяча двести тридцать четыре рубля 70 копеек');
      expect(convertNumberToWords('1234.6789', {
        currency: 'rub',
        roundNumber: 0,
      }))
        .toBe('Одна тысяча двести тридцать пять рублей 00 копеек');
      expect(convertNumberToWords('1234.6789', {
        currency: 'rub',
        roundNumber: -1,
      }))
        .toBe('Одна тысяча двести тридцать четыре рубля 68 копеек');
    });
    test('currency "number"', () => {
      expect(convertNumberToWords('1234.6789', {
        currency: 'number',
        roundNumber: 50,
      }))
        .toBe('Одна тысяча двести тридцать четыре целых 6789 десятитысячных');
      expect(convertNumberToWords('1234.0015', {
        currency: 'number',
        roundNumber: 4,
      }))
        .toBe('Одна тысяча двести тридцать четыре целых 15 десятитысячных');
      expect(convertNumberToWords('1234.0015', {
        currency: 'number',
        roundNumber: 3,
      }))
        .toBe('Одна тысяча двести тридцать четыре целых 2 тысячных');
      expect(convertNumberToWords('1234.0015', {
        currency: 'number',
        roundNumber: 2,
      }))
        .toBe('Одна тысяча двести тридцать четыре целых 0 десятых');
      expect(convertNumberToWords('1234.0015', {
        currency: 'number',
        roundNumber: 0,
      }))
        .toBe('Одна тысяча двести тридцать четыре целых');
      expect(convertNumberToWords('1234.6789', {
        currency: 'number',
        roundNumber: 2,
      }))
        .toBe('Одна тысяча двести тридцать четыре целых 68 сотых');
      expect(convertNumberToWords('1234.6789', {
        currency: 'number',
        roundNumber: 0,
      }))
        .toBe('Одна тысяча двести тридцать пять целых');
      expect(convertNumberToWords('1234.6789', {
        currency: 'number',
        roundNumber: -1,
      }))
        .toBe('Одна тысяча двести тридцать четыре целых 6789 десятитысячных');
      expect(convertNumberToWords('1.9999', {
        currency: 'number',
        roundNumber: 3,
      }))
        .toBe('Две целых 0 десятых');
      expect(convertNumberToWords('1.9999', {
        currency: 'number',
        roundNumber: 0,
      }))
        .toBe('Две целых');
      expect(convertNumberToWords('1.00089', {
        currency: 'number',
        roundNumber: 5,
      }))
        .toBe('Одна целая 89 стотысячных');
    });
    test('custom currency', () => {
      expect(convertNumberToWords('1234.6789', {
        currency: {
          currencyNameCases: ['рубль', 'рубля', 'рублей'],
          fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
          currencyNounGender: {
            integer: 0,
            fractionalPart: 1,
          },
        },
        roundNumber: 50,
      }))
        .toBe('Одна тысяча двести тридцать четыре рубля 6789 копеек');
      expect(convertNumberToWords('1234.6789', {
        currency: {
          currencyNameCases: ['рубль', 'рубля', 'рублей'],
          fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
          currencyNounGender: {
            integer: 0,
            fractionalPart: 1,
          },
        },
        roundNumber: 2,
      }))
        .toBe('Одна тысяча двести тридцать четыре рубля 68 копеек');
      expect(convertNumberToWords('1234.6789', {
        currency: {
          currencyNameCases: ['рубль', 'рубля', 'рублей'],
          fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
          currencyNounGender: {
            integer: 0,
            fractionalPart: 1,
          },
        },
        roundNumber: 0,
      }))
        .toBe('Одна тысяча двести тридцать пять рублей 00 копеек');
      expect(convertNumberToWords('1234.6789', {
        currency: {
          currencyNameCases: ['рубль', 'рубля', 'рублей'],
          fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
          currencyNounGender: {
            integer: 0,
            fractionalPart: 1,
          },
        },
        roundNumber: -1,
      }))
        .toBe('Одна тысяча двести тридцать четыре рубля 6789 копеек');
    });
  });
});
