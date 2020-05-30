const numberToWordsRu = require('../dist/bundle');

describe('Проверка чисел', () => {
  test('Отрицательные', () => {
    expect(numberToWordsRu.convert(-2)).toBe('Минус два рубля 00 копеек');
  });
  test('Десятичные', () => {
    expect(numberToWordsRu.convert(1.01)).toBe('Один рубль 01 копейка');
    expect(numberToWordsRu.convert(1.02)).toBe('Один рубль 02 копейки');
    expect(numberToWordsRu.convert(1.04)).toBe('Один рубль 04 копейки');
    expect(numberToWordsRu.convert(1.05)).toBe('Один рубль 05 копеек');
    expect(numberToWordsRu.convert(1.09)).toBe('Один рубль 09 копеек');
    expect(numberToWordsRu.convert(1.10)).toBe('Один рубль 10 копеек');
    expect(numberToWordsRu.convert(1.11)).toBe('Один рубль 11 копеек');
    expect(numberToWordsRu.convert(1.12)).toBe('Один рубль 12 копеек');
    expect(numberToWordsRu.convert(1.20)).toBe('Один рубль 20 копеек');
    expect(numberToWordsRu.convert(1.21)).toBe('Один рубль 21 копейка');
    expect(numberToWordsRu.convert(1.22)).toBe('Один рубль 22 копейки');
    expect(numberToWordsRu.convert(1.29)).toBe('Один рубль 29 копеек');
  });
  test('Без валюты (целые, десятые и т.д.)', () => {
    expect(numberToWordsRu.convert(0.1, {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Ноль целых одна десятая');
    expect(numberToWordsRu.convert(1.1, {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна целая одна десятая');
    expect(numberToWordsRu.convert(1.01, {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна целая одна сотая');
    expect(numberToWordsRu.convert(1.001, {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна целая одна тысячная');
    expect(numberToWordsRu.convert(1.0001, {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна целая одна десятитысячная');
    expect(numberToWordsRu.convert(1.00001, {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна целая одна стотысячная');
    expect(numberToWordsRu.convert(1.000001, {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна целая одна миллионная');
    expect(numberToWordsRu.convert(1.0000001, {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна целая одна десятимиллионная');
    expect(numberToWordsRu.convert(1.00000001, {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна целая одна стомиллионная');
    expect(numberToWordsRu.convert(1.2, {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна целая две десятых');
    expect(numberToWordsRu.convert(1.02, {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна целая две сотых');
    expect(numberToWordsRu.convert(1.002, {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна целая две тысячных');
    expect(numberToWordsRu.convert(1.0002, {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна целая две десятитысячных');
    expect(numberToWordsRu.convert(2.1, {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две целых одна десятая');
    expect(numberToWordsRu.convert(1.000345, {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна целая триста сорок пять миллионных');
  });
  test('Дробные', () => {
    expect(numberToWordsRu.convert('0/2', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Ноль вторых рубля');
    expect(numberToWordsRu.convert('0/2000', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Ноль двухтысячных рубля');
    expect(numberToWordsRu.convert('1/2', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна вторая рубля');
    expect(numberToWordsRu.convert('2/2', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две вторых рубля');
    expect(numberToWordsRu.convert('1/12', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна двенадцатая рубля');
    expect(numberToWordsRu.convert('2/12', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две двенадцатых рубля');
    expect(numberToWordsRu.convert('1/22', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна двадцать вторая рубля');
    expect(numberToWordsRu.convert('2/22', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две двадцать вторых рубля');
    expect(numberToWordsRu.convert('1/202', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна двести вторая рубля');
    expect(numberToWordsRu.convert('2/202', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две двести вторых рубля');
    expect(numberToWordsRu.convert('1/222', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна двести двадцать вторая рубля');
    expect(numberToWordsRu.convert('2/222', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две двести двадцать вторых рубля');
    expect(numberToWordsRu.convert('1/200', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна двухсотая рубля');
    expect(numberToWordsRu.convert('2/200', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две двухсотых рубля');
    expect(numberToWordsRu.convert('1/1000', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна тысячная рубля');
    expect(numberToWordsRu.convert('2/1000', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две тысячных рубля');
    expect(numberToWordsRu.convert('2/2000', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две двухтысячных рубля');
    expect(numberToWordsRu.convert('2/2002', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две две тысячи вторых рубля');
    expect(numberToWordsRu.convert('2/2020', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две две тысячи двадцатых рубля');
    expect(numberToWordsRu.convert('2/2200', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две две тысячи двухсотых рубля');
    expect(numberToWordsRu.convert('2/2220', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две две тысячи двести двадцатых рубля');
    expect(numberToWordsRu.convert('2/2222', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две две тысячи двести двадцать вторых рубля');
    expect(numberToWordsRu.convert('2/20000', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две двадцатитысячных рубля');
    expect(numberToWordsRu.convert('2/25000', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две двадцатипятитысячных рубля');
    expect(numberToWordsRu.convert('2/200000', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две двухсоттысячных рубля');
    expect(numberToWordsRu.convert('2/2000000', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две двухмиллионных рубля');
    expect(numberToWordsRu.convert('2/235000', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две двухсоттридцатипятитысячных рубля');
    expect(numberToWordsRu.convert('1/100000', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна стотысячная рубля');
    expect(numberToWordsRu.convert('1/90000', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна девяностотысячная рубля');
    expect(numberToWordsRu.convert('2/100000', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две стотысячных рубля');
    expect(numberToWordsRu.convert('2/90000', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две девяностотысячных рубля');
  });
  test('Остальные', () => {
    expect(numberToWordsRu.convert(0)).toBe('Ноль рублей 00 копеек');
    expect(numberToWordsRu.convert(1)).toBe('Один рубль 00 копеек');
    expect(numberToWordsRu.convert(2)).toBe('Два рубля 00 копеек');
    expect(numberToWordsRu.convert(4)).toBe('Четыре рубля 00 копеек');
    expect(numberToWordsRu.convert(5)).toBe('Пять рублей 00 копеек');
    expect(numberToWordsRu.convert(9)).toBe('Девять рублей 00 копеек');
    expect(numberToWordsRu.convert(10)).toBe('Десять рублей 00 копеек');
    expect(numberToWordsRu.convert(11)).toBe('Одиннадцать рублей 00 копеек');
    expect(numberToWordsRu.convert(12)).toBe('Двенадцать рублей 00 копеек');
    expect(numberToWordsRu.convert(14)).toBe('Четырнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert(15)).toBe('Пятнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert(19)).toBe('Девятнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert(20)).toBe('Двадцать рублей 00 копеек');
    expect(numberToWordsRu.convert(21)).toBe('Двадцать один рубль 00 копеек');
    expect(numberToWordsRu.convert(22)).toBe('Двадцать два рубля 00 копеек');
    expect(numberToWordsRu.convert(24)).toBe('Двадцать четыре рубля 00 копеек');
    expect(numberToWordsRu.convert(25)).toBe('Двадцать пять рублей 00 копеек');
    expect(numberToWordsRu.convert(29)).toBe('Двадцать девять рублей 00 копеек');
    expect(numberToWordsRu.convert(100)).toBe('Сто рублей 00 копеек');
    expect(numberToWordsRu.convert(101)).toBe('Сто один рубль 00 копеек');
    expect(numberToWordsRu.convert(102)).toBe('Сто два рубля 00 копеек');
    expect(numberToWordsRu.convert(105)).toBe('Сто пять рублей 00 копеек');
    expect(numberToWordsRu.convert(109)).toBe('Сто девять рублей 00 копеек');
    expect(numberToWordsRu.convert(110)).toBe('Сто десять рублей 00 копеек');
    expect(numberToWordsRu.convert(111)).toBe('Сто одиннадцать рублей 00 копеек');
    expect(numberToWordsRu.convert(115)).toBe('Сто пятнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert(121)).toBe('Сто двадцать один рубль 00 копеек');
    expect(numberToWordsRu.convert(122)).toBe('Сто двадцать два рубля 00 копеек');
    expect(numberToWordsRu.convert(125)).toBe('Сто двадцать пять рублей 00 копеек');
    expect(numberToWordsRu.convert(129)).toBe('Сто двадцать девять рублей 00 копеек');
    expect(numberToWordsRu.convert(1000)).toBe('Одна тысяча рублей 00 копеек');
    expect(numberToWordsRu.convert(1001)).toBe('Одна тысяча один рубль 00 копеек');
    expect(numberToWordsRu.convert(1002)).toBe('Одна тысяча два рубля 00 копеек');
    expect(numberToWordsRu.convert(1009)).toBe('Одна тысяча девять рублей 00 копеек');
    expect(numberToWordsRu.convert(1010)).toBe('Одна тысяча десять рублей 00 копеек');
    expect(numberToWordsRu.convert(1011)).toBe('Одна тысяча одиннадцать рублей 00 копеек');
    expect(numberToWordsRu.convert(1012)).toBe('Одна тысяча двенадцать рублей 00 копеек');
    expect(numberToWordsRu.convert(1019)).toBe('Одна тысяча девятнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert(1020)).toBe('Одна тысяча двадцать рублей 00 копеек');
    expect(numberToWordsRu.convert(1021)).toBe('Одна тысяча двадцать один рубль 00 копеек');
    expect(numberToWordsRu.convert(1022)).toBe('Одна тысяча двадцать два рубля 00 копеек');
    expect(numberToWordsRu.convert(1029)).toBe('Одна тысяча двадцать девять рублей 00 копеек');
    expect(numberToWordsRu.convert(2000)).toBe('Две тысячи рублей 00 копеек');
    expect(numberToWordsRu.convert(9000)).toBe('Девять тысяч рублей 00 копеек');
    expect(numberToWordsRu.convert(10101)).toBe('Десять тысяч сто один рубль 00 копеек');
    expect(numberToWordsRu.convert(10102)).toBe('Десять тысяч сто два рубля 00 копеек');
    expect(numberToWordsRu.convert(10109)).toBe('Десять тысяч сто девять рублей 00 копеек');
    expect(numberToWordsRu.convert(10121)).toBe('Десять тысяч сто двадцать один рубль 00 копеек');
    expect(numberToWordsRu.convert(100000)).toBe('Сто тысяч рублей 00 копеек');
    expect(numberToWordsRu.convert(101000)).toBe('Сто одна тысяча рублей 00 копеек');
    expect(numberToWordsRu.convert(102000)).toBe('Сто две тысячи рублей 00 копеек');
    expect(numberToWordsRu.convert(109000)).toBe('Сто девять тысяч рублей 00 копеек');
    expect(numberToWordsRu.convert(111000)).toBe('Сто одиннадцать тысяч рублей 00 копеек');
    expect(numberToWordsRu.convert(120000)).toBe('Сто двадцать тысяч рублей 00 копеек');
    expect(numberToWordsRu.convert(121000)).toBe('Сто двадцать одна тысяча рублей 00 копеек');
    expect(numberToWordsRu.convert(122000)).toBe('Сто двадцать две тысячи рублей 00 копеек');
    expect(numberToWordsRu.convert(129000)).toBe('Сто двадцать девять тысяч рублей 00 копеек');
    expect(numberToWordsRu.convert(200000)).toBe('Двести тысяч рублей 00 копеек');
    expect(numberToWordsRu.convert(300000)).toBe('Триста тысяч рублей 00 копеек');
    expect(numberToWordsRu.convert(400000)).toBe('Четыреста тысяч рублей 00 копеек');
    expect(numberToWordsRu.convert(500000)).toBe('Пятьсот тысяч рублей 00 копеек');
    expect(numberToWordsRu.convert(600000)).toBe('Шестьсот тысяч рублей 00 копеек');
    expect(numberToWordsRu.convert(700000)).toBe('Семьсот тысяч рублей 00 копеек');
    expect(numberToWordsRu.convert(800000)).toBe('Восемьсот тысяч рублей 00 копеек');
    expect(numberToWordsRu.convert(900000)).toBe('Девятьсот тысяч рублей 00 копеек');
    expect(numberToWordsRu.convert(1100100)).toBe('Один миллион сто тысяч сто рублей 00 копеек');
    expect(numberToWordsRu.convert(2200200)).toBe('Два миллиона двести тысяч двести рублей 00 копеек');
    expect(numberToWordsRu.convert(5500500)).toBe('Пять миллионов пятьсот тысяч пятьсот рублей 00 копеек');
    expect(numberToWordsRu.convert(11100100)).toBe('Одиннадцать миллионов сто тысяч сто рублей 00 копеек');
    expect(numberToWordsRu.convert(22200200)).toBe('Двадцать два миллиона двести тысяч двести рублей 00 копеек');
    expect(numberToWordsRu.convert(20200200)).toBe('Двадцать миллионов двести тысяч двести рублей 00 копеек');
    expect(numberToWordsRu.convert(21200200)).toBe('Двадцать один миллион двести тысяч двести рублей 00 копеек');
    expect(numberToWordsRu.convert(29200200)).toBe('Двадцать девять миллионов двести тысяч двести рублей 00 копеек');
    expect(numberToWordsRu.convert(100000000)).toBe('Сто миллионов рублей 00 копеек');
    expect(numberToWordsRu.convert(200000000)).toBe('Двести миллионов рублей 00 копеек');
    expect(numberToWordsRu.convert(300000000)).toBe('Триста миллионов рублей 00 копеек');
    expect(numberToWordsRu.convert(400000000)).toBe('Четыреста миллионов рублей 00 копеек');
    expect(numberToWordsRu.convert(500000000)).toBe('Пятьсот миллионов рублей 00 копеек');
    expect(numberToWordsRu.convert(600000000)).toBe('Шестьсот миллионов рублей 00 копеек');
    expect(numberToWordsRu.convert(700000000)).toBe('Семьсот миллионов рублей 00 копеек');
    expect(numberToWordsRu.convert(800000000)).toBe('Восемьсот миллионов рублей 00 копеек');
    expect(numberToWordsRu.convert(900000000)).toBe('Девятьсот миллионов рублей 00 копеек');
  });
});
describe('Options', () => {
  describe('currency', () => {
    describe('string values', () => {
      test("'rub'", () => {
        expect(numberToWordsRu.convert('1234567.12345', {
          currency: 'rub',
        })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 12 копеек');
      });
      test("'usd'", () => {
        expect(numberToWordsRu.convert('1234567.12345', {
          currency: 'usd',
        })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь долларов 12 центов');
      });
      test("'eur'", () => {
        expect(numberToWordsRu.convert('1234567.12345', {
          currency: 'eur',
        })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь евро 12 центов');
      });
      test("'number'", () => {
        expect(numberToWordsRu.convert('1234567.12345', {
          currency: 'number',
        })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь целых 12345 стотысячных');
      });
      test("'number' words", () => {
        expect(numberToWordsRu.convert('1234567.12345', {
          currency: 'number',
          convertNumbertToWords: {
            fractional: true,
          },
        })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь целых двенадцать тысяч триста сорок пять стотысячных');
      });
    });
    describe('object values', () => {
      test('common value', () => {
        expect(numberToWordsRu.convert('1234567.12345', {
          currency: {
            currencyNameCases: ['доллар', 'доллара', 'долларов'],
            fractionalPartNameCases: ['цент', 'цента', 'центов'],
            currencyNounGender: {
              integer: 0, // Мужской род
              fractionalPart: 1, // Женский род
            },
          },
        })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь долларов 12345 центов');
        expect(numberToWordsRu.convert('1234567.12345', {
          currency: {
            currencyNameCases: ['доллар', 'доллара', 'долларов'],
            fractionalPartNameCases: ['цент', 'цента', 'центов'],
            currencyNounGender: {
              integer: 0, // Мужской род
              fractionalPart: 1, // Женский род
            },
          },
          roundNumber: 2,
        })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь долларов 12 центов');
      });
      test('currencyNounGender == 2', () => {
        expect(numberToWordsRu.convert('1231.52', {
          currency: {
            currencyNameCases: ['сообщение', 'сообщения', 'сообщений'],
            fractionalPartNameCases: ['яблоко', 'яблока', 'яблок'],
            currencyNounGender: {
              integer: 2, // Средний род
              fractionalPart: 2,
            },
          },
        })).toBe('Одна тысяча двести тридцать одно сообщение 52 яблока');
      });
    });
  });
  describe('roundNumber', () => {
    describe('slash delimiter', () => {
      test('common currency', () => {
        expect(numberToWordsRu.convert('1234/6789', {
          currency: 'rub',
          roundNumber: 8,
        })).toBe('Одна тысяча двести тридцать четыре 6789 рубля');
        expect(numberToWordsRu.convert('1234/6789', {
          currency: 'rub',
          roundNumber: 2,
        })).toBe('Одна тысяча двести тридцать четыре 6789 рубля');
        expect(numberToWordsRu.convert('1234/6789', {
          currency: 'rub',
          roundNumber: -1,
        })).toBe('Одна тысяча двести тридцать четыре 6789 рубля');
      });
      test('currency "number"', () => {
        expect(numberToWordsRu.convert('1234/6789', {
          currency: 'number',
          roundNumber: 8,
        })).toBe('Одна тысяча двести тридцать четыре 6789');
        expect(numberToWordsRu.convert('1234/6789', {
          currency: 'number',
          roundNumber: 2,
        })).toBe('Одна тысяча двести тридцать четыре 6789');
        expect(numberToWordsRu.convert('1234/6789', {
          currency: 'number',
          roundNumber: -1,
        })).toBe('Одна тысяча двести тридцать четыре 6789');
      });
      test('custom currency', () => {
        expect(numberToWordsRu.convert('1234/6789', {
          currency: {
            currencyNameCases: ['рубль', 'рубля', 'рублей'],
            fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
            currencyNounGender: {
              integer: 0,
              fractionalPart: 1,
            },
          },
          roundNumber: 8,
        })).toBe('Одна тысяча двести тридцать четыре 6789 рубля');
        expect(numberToWordsRu.convert('1234/6789', {
          currency: {
            currencyNameCases: ['рубль', 'рубля', 'рублей'],
            fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
            currencyNounGender: {
              integer: 0,
              fractionalPart: 1,
            },
          },
          roundNumber: 2,
        })).toBe('Одна тысяча двести тридцать четыре 6789 рубля');
        expect(numberToWordsRu.convert('1234/6789', {
          currency: {
            currencyNameCases: ['рубль', 'рубля', 'рублей'],
            fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
            currencyNounGender: {
              integer: 0,
              fractionalPart: 1,
            },
          },
          roundNumber: -1,
        })).toBe('Одна тысяча двести тридцать четыре 6789 рубля');
      });
    });
    describe('normal delimiter', () => {
      test('common currency', () => {
        expect(numberToWordsRu.convert('1234.6789', {
          currency: 'rub',
          roundNumber: 8,
        })).toBe('Одна тысяча двести тридцать четыре рубля 68 копеек');
        expect(numberToWordsRu.convert('1234.6789', {
          currency: 'rub',
          roundNumber: 2,
        })).toBe('Одна тысяча двести тридцать четыре рубля 68 копеек');
        expect(numberToWordsRu.convert('1234.6789', {
          currency: 'rub',
          roundNumber: 1,
        })).toBe('Одна тысяча двести тридцать четыре рубля 70 копеек');
        expect(numberToWordsRu.convert('1234.6789', {
          currency: 'rub',
          roundNumber: 0,
        })).toBe('Одна тысяча двести тридцать пять рублей 00 копеек');
        expect(numberToWordsRu.convert('1234.6789', {
          currency: 'rub',
          roundNumber: -1,
        })).toBe('Одна тысяча двести тридцать четыре рубля 68 копеек');
      });
      test('currency "number"', () => {
        expect(numberToWordsRu.convert('1234.6789', {
          currency: 'number',
          roundNumber: 8,
        })).toBe('Одна тысяча двести тридцать четыре целых 6789 десятитысячных');
        expect(numberToWordsRu.convert('1234.6789', {
          currency: 'number',
          roundNumber: 2,
        })).toBe('Одна тысяча двести тридцать четыре целых 68 сотых');
        expect(numberToWordsRu.convert('1234.6789', {
          currency: 'number',
          roundNumber: 0,
        })).toBe('Одна тысяча двести тридцать пять целых');
        expect(numberToWordsRu.convert('1234.6789', {
          currency: 'number',
          roundNumber: -1,
        })).toBe('Одна тысяча двести тридцать четыре целых 6789 десятитысячных');
        expect(numberToWordsRu.convert('1.9999', {
          currency: 'number',
          roundNumber: 3,
        })).toBe('Две целых 0 десятых');
        expect(numberToWordsRu.convert('1.9999', {
          currency: 'number',
          roundNumber: 0,
        })).toBe('Две целых');
      });
      test('custom currency', () => {
        expect(numberToWordsRu.convert('1234.6789', {
          currency: {
            currencyNameCases: ['рубль', 'рубля', 'рублей'],
            fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
            currencyNounGender: {
              integer: 0,
              fractionalPart: 1,
            },
          },
          roundNumber: 8,
        })).toBe('Одна тысяча двести тридцать четыре рубля 6789 копеек');
        expect(numberToWordsRu.convert('1234.6789', {
          currency: {
            currencyNameCases: ['рубль', 'рубля', 'рублей'],
            fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
            currencyNounGender: {
              integer: 0,
              fractionalPart: 1,
            },
          },
          roundNumber: 2,
        })).toBe('Одна тысяча двести тридцать четыре рубля 68 копеек');
        expect(numberToWordsRu.convert('1234.6789', {
          currency: {
            currencyNameCases: ['рубль', 'рубля', 'рублей'],
            fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
            currencyNounGender: {
              integer: 0,
              fractionalPart: 1,
            },
          },
          roundNumber: 0,
        })).toBe('Одна тысяча двести тридцать пять рублей');
        expect(numberToWordsRu.convert('1234.6789', {
          currency: {
            currencyNameCases: ['рубль', 'рубля', 'рублей'],
            fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
            currencyNounGender: {
              integer: 0,
              fractionalPart: 1,
            },
          },
          roundNumber: -1,
        })).toBe('Одна тысяча двести тридцать четыре рубля 6789 копеек');
      });
    });
  });
  test('convertMinusSignToWord', () => {
    expect(numberToWordsRu.convert('-15.45', {
      convertMinusSignToWord: true,
    })).toBe('Минус пятнадцать рублей 45 копеек');
    expect(numberToWordsRu.convert('-15.45', {
      convertMinusSignToWord: false,
    })).toBe('- пятнадцать рублей 45 копеек');
  });
  test('showNumberParts', () => {
    expect(numberToWordsRu.convert('1234567.12345', {
      showNumberParts: {
        integer: true,
        fractional: true,
      },
    })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 12 копеек');
    expect(numberToWordsRu.convert('1234567.12345', {
      showNumberParts: {
        integer: false,
        fractional: false,
      },
    })).toBe('');
    expect(numberToWordsRu.convert('1234567.12345', {
      showNumberParts: {
        integer: true,
        fractional: false,
      },
    })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей');
    expect(numberToWordsRu.convert('1234567.12345', {
      showNumberParts: {
        integer: false,
        fractional: true,
      },
    })).toBe('12 копеек');
  });
  test('convertNumbertToWords', () => {
    expect(numberToWordsRu.convert('1234567.12345', {
      convertNumbertToWords: {
        integer: true,
        fractional: true,
      },
    })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей двенадцать копеек');
    expect(numberToWordsRu.convert('1234567.12345', {
      convertNumbertToWords: {
        integer: false,
        fractional: false,
      },
    })).toBe('1234567 рублей 12 копеек');
    expect(numberToWordsRu.convert('1234567.12345', {
      convertNumbertToWords: {
        integer: true,
        fractional: false,
      },
    })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 12 копеек');
    expect(numberToWordsRu.convert('1234567.12345', {
      convertNumbertToWords: {
        integer: false,
        fractional: true,
      },
    })).toBe('1234567 рублей двенадцать копеек');
  });
  test('showCurrency', () => {
    expect(numberToWordsRu.convert('1234567.12345', {
      showCurrency: {
        integer: true,
        fractional: true,
      },
    })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 12 копеек');
    expect(numberToWordsRu.convert('1234567.12345', {
      showCurrency: {
        integer: false,
        fractional: false,
      },
    })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь 12');
    expect(numberToWordsRu.convert('1234567.12345', {
      showCurrency: {
        integer: true,
        fractional: false,
      },
    })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 12');
    expect(numberToWordsRu.convert('1234567.12345', {
      showCurrency: {
        integer: false,
        fractional: true,
      },
    })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь 12 копеек');
  });
  test('combined options', () => {
    expect(numberToWordsRu.convert('1234567.12345', {
      showNumberParts: {
        integer: false,
      },
      convertNumbertToWords: {
        fractional: true,
      },
      showCurrency: {
        fractional: false,
      },
    })).toBe('Двенадцать');
    expect(numberToWordsRu.convert('1234567.12345', {
      currency: 'number',
      showNumberParts: {
        fractional: false,
      },
      convertNumbertToWords: {
        integer: true,
      },
      showCurrency: {
        integer: true,
      },
    })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь целых');
  });
});
test('Проверка округления числа', () => {
  expect(numberToWordsRu.convert('0.995')).toBe('Один рубль 00 копеек');
  expect(numberToWordsRu.convert('.995')).toBe('Один рубль 00 копеек');
  expect(numberToWordsRu.convert('0.505')).toBe('Ноль рублей 51 копейка');
  expect(numberToWordsRu.convert('50.995')).toBe('Пятьдесят один рубль 00 копеек');
  expect(numberToWordsRu.convert('50.994')).toBe('Пятьдесят рублей 99 копеек');
  expect(numberToWordsRu.convert('999.995')).toBe('Одна тысяча рублей 00 копеек');
  expect(numberToWordsRu.convert('15999.995')).toBe('Шестнадцать тысяч рублей 00 копеек');
});
