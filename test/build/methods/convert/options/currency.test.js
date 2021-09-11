const root = '../../../../../';
const numberToWordsRu = require(`${root}dist/bundle`);

describe('currency', () => {
  describe('string values', () => {
    test(`'rub'`, () => {
      expect(numberToWordsRu.convert('1234567.12345', {
        currency: 'rub',
      }))
      .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 12 копеек');
    });
    test(`'usd'`, () => {
      expect(numberToWordsRu.convert('1234567.12345', {
        currency: 'usd',
      }))
      .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь долларов 12 центов');
    });
    test(`'eur'`, () => {
      expect(numberToWordsRu.convert('1234567.12345', {
        currency: 'eur',
      }))
      .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь евро 12 центов');
    });
    test(`'number'`, () => {
      expect(numberToWordsRu.convert('1234567.12345', {
        currency: 'number',
      }))
      .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь целых 12345 стотысячных');
      expect(numberToWordsRu.convert('1.8000', {
        currency: 'number',
      }))
      .toBe('Одна целая 8 десятых');
      expect(numberToWordsRu.convert('1234567.12345', {
        currency: 'number',
        convertNumbertToWords: {
          fractional: true,
        },
      }))
      .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь целых двенадцать тысяч триста сорок пять стотысячных');
      expect(numberToWordsRu.convert('1.8000', {
        currency: 'number',
        convertNumbertToWords: {
          fractional: true,
        },
      }))
      .toBe('Одна целая восемь десятых');
      expect(numberToWordsRu.convert('1.00000', {
        currency: 'number',
        convertNumbertToWords: {
          fractional: true,
        },
      }))
      .toBe('Одна целая ноль десятых');
    });
  });
  describe('object values', () => {
    expect(numberToWordsRu.convert('1234567.12345', {
      currency: {
        currencyNameCases: ['доллар', 'доллара', 'долларов'],
        fractionalPartNameCases: ['цент', 'цента', 'центов'],
        currencyNounGender: {
          integer: 0, // Мужской род
          fractionalPart: 1, // Женский род
        },
      },
    }))
    .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь долларов 12345 центов');
    expect(numberToWordsRu.convert('1.6789', {
      currency: {
        currencyNameCases: ['доллар', 'доллара', 'долларов'],
        fractionalPartNameCases: ['цент', 'цента', 'центов'],
        fractionalPartMinLength: 1,
      },
      roundNumber: 0,
    }))
    .toBe('Два доллара 0 центов');
    expect(numberToWordsRu.convert('1.6789', {
      currency: {
        currencyNameCases: ['доллар', 'доллара', 'долларов'],
        fractionalPartNameCases: ['цент', 'цента', 'центов'],
        fractionalPartMinLength: 0,
      },
      roundNumber: 0,
    }))
    .toBe('Два доллара');
    test('Средний род (currencyNounGender == 2)', () => {
      expect(numberToWordsRu.convert('1231.52', {
        currency: {
          currencyNameCases: ['сообщение', 'сообщения', 'сообщений'],
          fractionalPartNameCases: ['яблоко', 'яблока', 'яблок'],
          currencyNounGender: {
            integer: 2, // Средний род
            fractionalPart: 2,
          },
        },
      }))
      .toBe('Одна тысяча двести тридцать одно сообщение 52 яблока');
    });
    expect(numberToWordsRu.convert('1234561.12345', {
      currency: {
        currencyNameCases: ['сообщение', 'сообщения', 'сообщений'],
        currencyNounGender: {
          integer: 2, // Средний род
        },
      },
    }))
    .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят одно сообщение 12345 копеек');
    expect(numberToWordsRu.convert('1234567.12345', {
      currency: {},
    }))
    .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 12345 копеек');
  });
});
