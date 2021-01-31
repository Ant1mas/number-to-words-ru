const numberToWordsRu = require('../dist/bundle');

describe('Проверка входных данных', () => {
  test('Пустая строка', () => {
    expect(numberToWordsRu.convert('')).toBe('Ноль рублей 00 копеек');
  });
  test('Пустое значение', () => {
    expect(numberToWordsRu.convert()).toBe('Ноль рублей 00 копеек');
  });
  describe('Допустимые знаки', () => {
    test('Знак `-`', () => {
      expect(numberToWordsRu.convert('-')).toBe('Минус ноль рублей 00 копеек');
    });
    test('Знак `.`', () => {
      expect(numberToWordsRu.convert('.')).toBe('Ноль рублей 00 копеек');
    });
    test('Знак `,`', () => {
      expect(numberToWordsRu.convert(',')).toBe('Ноль рублей 00 копеек');
    });
    test('Знак `/`', () => {
      expect(numberToWordsRu.convert('/')).toBe('Ноль 0 рубля');
    });
  });
  describe('Недопустимые знаки', () => {
    test('Буквы', () => {
      expect(numberToWordsRu.convert('XZ')).toBe('Ноль рублей 00 копеек');
    });
    test('Символы', () => {
      expect(numberToWordsRu
        .convert('`~!@"#№$;%^:&?*_+=\'\\()[]{}<>'))
        .toBe('Ноль рублей 00 копеек');
    });
  });
  describe('Недопустимые типы данных', () => {
    test('null', () => {
      expect(numberToWordsRu.convert(null)).toBe('Ноль рублей 00 копеек');
    });
    test('undefined', () => {
      expect(numberToWordsRu.convert(undefined)).toBe('Ноль рублей 00 копеек');
    });
    test('boolean', () => {
      expect(numberToWordsRu.convert(true)).toBe('Ноль рублей 00 копеек');
    });
    test('symbol', () => {
      expect(numberToWordsRu.convert(Symbol())).toBe('Ноль рублей 00 копеек');
    });
    test('bigInt', () => {
      expect(numberToWordsRu.convert(BigInt(1))).toBe('Ноль рублей 00 копеек');
    });
    test('object', () => {
      expect(numberToWordsRu.convert({})).toBe('Ноль рублей 00 копеек');
    });
    test('function', () => {
      expect(numberToWordsRu.convert(function(){})).toBe('Ноль рублей 00 копеек');
    });
  });
});
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
    expect(numberToWordsRu.convert('1/0', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна нулевая рубля');
    expect(numberToWordsRu.convert('1/', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одна нулевая рубля');
    expect(numberToWordsRu.convert('2/0', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Две нулевых рубля');
    expect(numberToWordsRu.convert('5/0', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Пять нулевых рубля');
    expect(numberToWordsRu.convert('11/0', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Одиннадцать нулевых рубля');
    expect(numberToWordsRu.convert('20/0', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Двадцать нулевых рубля');
    expect(numberToWordsRu.convert('21/0', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Двадцать одна нулевая рубля');
    expect(numberToWordsRu.convert('100/0', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Сто нулевых рубля');
    expect(numberToWordsRu.convert('101/0', {
      convertNumbertToWords: {
        fractional: true,
      },
    })).toBe('Сто одна нулевая рубля');
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
        expect(numberToWordsRu.convert('1.8000', {
          currency: 'number',
        })).toBe('Одна целая 8000 десятитысячных');
      });
      test("'number' words", () => {
        expect(numberToWordsRu.convert('1234567.12345', {
          currency: 'number',
          convertNumbertToWords: {
            fractional: true,
          },
        })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь целых двенадцать тысяч триста сорок пять стотысячных');
        expect(numberToWordsRu.convert('1.8000', {
          currency: 'number',
          convertNumbertToWords: {
            fractional: true,
          },
        })).toBe('Одна целая восемь тысяч десятитысячных');
      });
    });
    describe('object values', () => {
      describe('common values', () => {
        test('full objects', () => {
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
                integer: 0,
                fractionalPart: 1,
              },
            },
            roundNumber: 2,
          })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь долларов 12 центов');
          expect(numberToWordsRu.convert('1.6789', {
            currency: {
              currencyNameCases: ['доллар', 'доллара', 'долларов'],
              fractionalPartNameCases: ['цент', 'цента', 'центов'],
              fractionalPartMinLength: 2,
            },
            roundNumber: 1,
          })).toBe('Один доллар 70 центов');
          expect(numberToWordsRu.convert('1.6789', {
            currency: {
              currencyNameCases: ['доллар', 'доллара', 'долларов'],
              fractionalPartNameCases: ['цент', 'цента', 'центов'],
              fractionalPartMinLength: 2,
            },
            roundNumber: 0,
          })).toBe('Два доллара 00 центов');
          expect(numberToWordsRu.convert('1.6789', {
            currency: {
              currencyNameCases: ['доллар', 'доллара', 'долларов'],
              fractionalPartNameCases: ['цент', 'цента', 'центов'],
              fractionalPartMinLength: 1,
            },
            roundNumber: 0,
          })).toBe('Два доллара 0 центов');
          expect(numberToWordsRu.convert('1.6789', {
            currency: {
              currencyNameCases: ['доллар', 'доллара', 'долларов'],
              fractionalPartNameCases: ['цент', 'цента', 'центов'],
              fractionalPartMinLength: 0,
            },
            roundNumber: 0,
          })).toBe('Два доллара');
        });
        test('not full objects', () => {
          expect(numberToWordsRu.convert('1234561.12345', {
            currency: {
              currencyNameCases: ['сообщение', 'сообщения', 'сообщений'],
              currencyNounGender: {
                integer: 2, // Средний род
              },
            },
          })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят одно сообщение 12345 копеек');
          expect(numberToWordsRu.convert('1234567.12345', {
            currency: {},
          })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 12345 копеек');
        });
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
        expect(numberToWordsRu.convert('1.00089', {
          currency: 'number',
          roundNumber: 5,
        })).toBe('Одна целая 89 стотысячных');
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
        })).toBe('Одна тысяча двести тридцать пять рублей 00 копеек');
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

describe('Проверка падежей', () => {
  test('Родительный', () => {
    expect(numberToWordsRu.convert('0', {declension: 'genitive'})).toBe('Ноля рублей 00 копеек');
    expect(numberToWordsRu.convert('1', {declension: 'genitive'})).toBe('Одного рубля 00 копеек');
    expect(numberToWordsRu.convert('2', {declension: 'genitive'})).toBe('Двух рублей 00 копеек');
    expect(numberToWordsRu.convert('3', {declension: 'genitive'})).toBe('Трёх рублей 00 копеек');
    expect(numberToWordsRu.convert('4', {declension: 'genitive'})).toBe('Четырёх рублей 00 копеек');
    expect(numberToWordsRu.convert('5', {declension: 'genitive'})).toBe('Пяти рублей 00 копеек');
    expect(numberToWordsRu.convert('10', {declension: 'genitive'})).toBe('Десяти рублей 00 копеек');
    expect(numberToWordsRu.convert('11', {declension: 'genitive'})).toBe('Одиннадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('12', {declension: 'genitive'})).toBe('Двенадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('13', {declension: 'genitive'})).toBe('Тринадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('14', {declension: 'genitive'})).toBe('Четырнадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('15', {declension: 'genitive'})).toBe('Пятнадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('16', {declension: 'genitive'})).toBe('Шестнадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('17', {declension: 'genitive'})).toBe('Семнадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('18', {declension: 'genitive'})).toBe('Восемнадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('19', {declension: 'genitive'})).toBe('Девятнадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('20', {declension: 'genitive'})).toBe('Двадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('21', {declension: 'genitive'})).toBe('Двадцати одного рубля 00 копеек');
    expect(numberToWordsRu.convert('30', {declension: 'genitive'})).toBe('Тридцати рублей 00 копеек');
    expect(numberToWordsRu.convert('32', {declension: 'genitive'})).toBe('Тридцати двух рублей 00 копеек');
    expect(numberToWordsRu.convert('40', {declension: 'genitive'})).toBe('Сорока рублей 00 копеек');
    expect(numberToWordsRu.convert('43', {declension: 'genitive'})).toBe('Сорока трёх рублей 00 копеек');
    expect(numberToWordsRu.convert('50', {declension: 'genitive'})).toBe('Пятидесяти рублей 00 копеек');
    expect(numberToWordsRu.convert('54', {declension: 'genitive'})).toBe('Пятидесяти четырёх рублей 00 копеек');
    expect(numberToWordsRu.convert('60', {declension: 'genitive'})).toBe('Шестидесяти рублей 00 копеек');
    expect(numberToWordsRu.convert('70', {declension: 'genitive'})).toBe('Семидесяти рублей 00 копеек');
    expect(numberToWordsRu.convert('80', {declension: 'genitive'})).toBe('Восьмидесяти рублей 00 копеек');
    expect(numberToWordsRu.convert('90', {declension: 'genitive'})).toBe('Девяноста рублей 00 копеек');
    expect(numberToWordsRu.convert('99', {declension: 'genitive'})).toBe('Девяноста девяти рублей 00 копеек');
    expect(numberToWordsRu.convert('100', {declension: 'genitive'})).toBe('Ста рублей 00 копеек');
    expect(numberToWordsRu.convert('101', {declension: 'genitive'})).toBe('Ста одного рубля 00 копеек');
    expect(numberToWordsRu.convert('110', {declension: 'genitive'})).toBe('Ста десяти рублей 00 копеек');
    expect(numberToWordsRu.convert('200', {declension: 'genitive'})).toBe('Двухсот рублей 00 копеек');
    expect(numberToWordsRu.convert('201', {declension: 'genitive'})).toBe('Двухсот одного рубля 00 копеек');
    expect(numberToWordsRu.convert('210', {declension: 'genitive'})).toBe('Двухсот десяти рублей 00 копеек');
    expect(numberToWordsRu.convert('500', {declension: 'genitive'})).toBe('Пятисот рублей 00 копеек');
    expect(numberToWordsRu.convert('501', {declension: 'genitive'})).toBe('Пятисот одного рубля 00 копеек');
    expect(numberToWordsRu.convert('510', {declension: 'genitive'})).toBe('Пятисот десяти рублей 00 копеек');
    expect(numberToWordsRu.convert('1000', {declension: 'genitive'})).toBe('Одной тысячи рублей 00 копеек');
    expect(numberToWordsRu.convert('1001', {declension: 'genitive'})).toBe('Одной тысячи одного рубля 00 копеек');
    expect(numberToWordsRu.convert('1002', {declension: 'genitive'})).toBe('Одной тысячи двух рублей 00 копеек');
    expect(numberToWordsRu.convert('1005', {declension: 'genitive'})).toBe('Одной тысячи пяти рублей 00 копеек');
    expect(numberToWordsRu.convert('1100', {declension: 'genitive'})).toBe('Одной тысячи ста рублей 00 копеек');
    expect(numberToWordsRu.convert('1000000', {declension: 'genitive'})).toBe('Одного миллиона рублей 00 копеек');
    expect(numberToWordsRu.convert('987654321', {declension: 'genitive'})).toBe('Девятисот восьмидесяти семи миллионов шестисот пятидесяти четырёх тысяч трёхсот двадцати одного рубля 00 копеек');
  });
  test('Дательный', () => {
    expect(numberToWordsRu.convert('0', {declension: 'dative'})).toBe('Нолю рублям 00 копейкам');
    expect(numberToWordsRu.convert('1', {declension: 'dative'})).toBe('Одному рублю 00 копейкам');
    expect(numberToWordsRu.convert('2', {declension: 'dative'})).toBe('Двум рублям 00 копейкам');
    expect(numberToWordsRu.convert('3', {declension: 'dative'})).toBe('Трём рублям 00 копейкам');
    expect(numberToWordsRu.convert('4', {declension: 'dative'})).toBe('Четырём рублям 00 копейкам');
    expect(numberToWordsRu.convert('5', {declension: 'dative'})).toBe('Пяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('10', {declension: 'dative'})).toBe('Десяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('11', {declension: 'dative'})).toBe('Одиннадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('12', {declension: 'dative'})).toBe('Двенадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('13', {declension: 'dative'})).toBe('Тринадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('14', {declension: 'dative'})).toBe('Четырнадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('15', {declension: 'dative'})).toBe('Пятнадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('16', {declension: 'dative'})).toBe('Шестнадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('17', {declension: 'dative'})).toBe('Семнадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('18', {declension: 'dative'})).toBe('Восемнадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('19', {declension: 'dative'})).toBe('Девятнадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('20', {declension: 'dative'})).toBe('Двадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('21', {declension: 'dative'})).toBe('Двадцати одному рублю 00 копейкам');
    expect(numberToWordsRu.convert('30', {declension: 'dative'})).toBe('Тридцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('32', {declension: 'dative'})).toBe('Тридцати двум рублям 00 копейкам');
    expect(numberToWordsRu.convert('40', {declension: 'dative'})).toBe('Сорока рублям 00 копейкам');
    expect(numberToWordsRu.convert('43', {declension: 'dative'})).toBe('Сорока трём рублям 00 копейкам');
    expect(numberToWordsRu.convert('50', {declension: 'dative'})).toBe('Пятидесяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('54', {declension: 'dative'})).toBe('Пятидесяти четырём рублям 00 копейкам');
    expect(numberToWordsRu.convert('60', {declension: 'dative'})).toBe('Шестидесяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('70', {declension: 'dative'})).toBe('Семидесяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('80', {declension: 'dative'})).toBe('Восьмидесяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('90', {declension: 'dative'})).toBe('Девяноста рублям 00 копейкам');
    expect(numberToWordsRu.convert('99', {declension: 'dative'})).toBe('Девяноста девяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('100', {declension: 'dative'})).toBe('Ста рублям 00 копейкам');
    expect(numberToWordsRu.convert('101', {declension: 'dative'})).toBe('Ста одному рублю 00 копейкам');
    expect(numberToWordsRu.convert('110', {declension: 'dative'})).toBe('Ста десяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('200', {declension: 'dative'})).toBe('Двумстам рублям 00 копейкам');
    expect(numberToWordsRu.convert('201', {declension: 'dative'})).toBe('Двумстам одному рублю 00 копейкам');
    expect(numberToWordsRu.convert('210', {declension: 'dative'})).toBe('Двумстам десяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('500', {declension: 'dative'})).toBe('Пятистам рублям 00 копейкам');
    expect(numberToWordsRu.convert('501', {declension: 'dative'})).toBe('Пятистам одному рублю 00 копейкам');
    expect(numberToWordsRu.convert('510', {declension: 'dative'})).toBe('Пятистам десяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('1000', {declension: 'dative'})).toBe('Одной тысяче рублей 00 копейкам');
    expect(numberToWordsRu.convert('1001', {declension: 'dative'})).toBe('Одной тысяче одному рублю 00 копейкам');
    expect(numberToWordsRu.convert('1002', {declension: 'dative'})).toBe('Одной тысяче двум рублям 00 копейкам');
    expect(numberToWordsRu.convert('1005', {declension: 'dative'})).toBe('Одной тысяче пяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('1100', {declension: 'dative'})).toBe('Одной тысяче ста рублям 00 копейкам');
    expect(numberToWordsRu.convert('1000000', {declension: 'dative'})).toBe('Одному миллиону рублей 00 копейкам');
    expect(numberToWordsRu.convert('987654321', {declension: 'dative'})).toBe('Девятистам восьмидесяти семи миллионам шестистам пятидесяти четырём тысячам трёмстам двадцати одному рублю 00 копейкам');
  });
  test('Винительный', () => {
    expect(numberToWordsRu.convert('0', {declension: 'accusative'})).toBe('Ноль рублей 00 копеек');
    expect(numberToWordsRu.convert('1', {declension: 'accusative'})).toBe('Один рубль 00 копеек');
    expect(numberToWordsRu.convert('2', {declension: 'accusative'})).toBe('Два рубля 00 копеек');
    expect(numberToWordsRu.convert('3', {declension: 'accusative'})).toBe('Три рубля 00 копеек');
    expect(numberToWordsRu.convert('4', {declension: 'accusative'})).toBe('Четыре рубля 00 копеек');
    expect(numberToWordsRu.convert('5', {declension: 'accusative'})).toBe('Пять рублей 00 копеек');
    expect(numberToWordsRu.convert('10', {declension: 'accusative'})).toBe('Десять рублей 00 копеек');
    expect(numberToWordsRu.convert('11', {declension: 'accusative'})).toBe('Одиннадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('12', {declension: 'accusative'})).toBe('Двенадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('13', {declension: 'accusative'})).toBe('Тринадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('14', {declension: 'accusative'})).toBe('Четырнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('15', {declension: 'accusative'})).toBe('Пятнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('16', {declension: 'accusative'})).toBe('Шестнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('17', {declension: 'accusative'})).toBe('Семнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('18', {declension: 'accusative'})).toBe('Восемнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('19', {declension: 'accusative'})).toBe('Девятнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('20', {declension: 'accusative'})).toBe('Двадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('21', {declension: 'accusative'})).toBe('Двадцать один рубль 00 копеек');
    expect(numberToWordsRu.convert('30', {declension: 'accusative'})).toBe('Тридцать рублей 00 копеек');
    expect(numberToWordsRu.convert('32', {declension: 'accusative'})).toBe('Тридцать два рубля 00 копеек');
    expect(numberToWordsRu.convert('40', {declension: 'accusative'})).toBe('Сорок рублей 00 копеек');
    expect(numberToWordsRu.convert('43', {declension: 'accusative'})).toBe('Сорок три рубля 00 копеек');
    expect(numberToWordsRu.convert('50', {declension: 'accusative'})).toBe('Пятьдесят рублей 00 копеек');
    expect(numberToWordsRu.convert('54', {declension: 'accusative'})).toBe('Пятьдесят четыре рубля 00 копеек');
    expect(numberToWordsRu.convert('60', {declension: 'accusative'})).toBe('Шестьдесят рублей 00 копеек');
    expect(numberToWordsRu.convert('70', {declension: 'accusative'})).toBe('Семьдесят рублей 00 копеек');
    expect(numberToWordsRu.convert('80', {declension: 'accusative'})).toBe('Восемьдесят рублей 00 копеек');
    expect(numberToWordsRu.convert('90', {declension: 'accusative'})).toBe('Девяносто рублей 00 копеек');
    expect(numberToWordsRu.convert('99', {declension: 'accusative'})).toBe('Девяносто девять рублей 00 копеек');
    expect(numberToWordsRu.convert('100', {declension: 'accusative'})).toBe('Сто рублей 00 копеек');
    expect(numberToWordsRu.convert('101', {declension: 'accusative'})).toBe('Сто один рубль 00 копеек');
    expect(numberToWordsRu.convert('110', {declension: 'accusative'})).toBe('Сто десять рублей 00 копеек');
    expect(numberToWordsRu.convert('200', {declension: 'accusative'})).toBe('Двести рублей 00 копеек');
    expect(numberToWordsRu.convert('201', {declension: 'accusative'})).toBe('Двести один рубль 00 копеек');
    expect(numberToWordsRu.convert('210', {declension: 'accusative'})).toBe('Двести десять рублей 00 копеек');
    expect(numberToWordsRu.convert('500', {declension: 'accusative'})).toBe('Пятьсот рублей 00 копеек');
    expect(numberToWordsRu.convert('501', {declension: 'accusative'})).toBe('Пятьсот один рубль 00 копеек');
    expect(numberToWordsRu.convert('510', {declension: 'accusative'})).toBe('Пятьсот десять рублей 00 копеек');
    expect(numberToWordsRu.convert('1000', {declension: 'accusative'})).toBe('Одну тысячу рублей 00 копеек');
    expect(numberToWordsRu.convert('1001', {declension: 'accusative'})).toBe('Одну тысячу один рубль 00 копеек');
    expect(numberToWordsRu.convert('1002', {declension: 'accusative'})).toBe('Одну тысячу два рубля 00 копеек');
    expect(numberToWordsRu.convert('1005', {declension: 'accusative'})).toBe('Одну тысячу пять рублей 00 копеек');
    expect(numberToWordsRu.convert('1100', {declension: 'accusative'})).toBe('Одну тысячу сто рублей 00 копеек');
    expect(numberToWordsRu.convert('1000000', {declension: 'accusative'})).toBe('Один миллион рублей 00 копеек');
    expect(numberToWordsRu.convert('987654321', {declension: 'accusative'})).toBe('Девятьсот восемьдесят семь миллионов шестьсот пятьдесят четыре тысячи триста двадцать один рубль 00 копеек');
  });
  test('Творительный', () => {
    expect(numberToWordsRu.convert('0', {declension: 'instrumental'})).toBe('Нолём рублями 00 копейками');
    expect(numberToWordsRu.convert('1', {declension: 'instrumental'})).toBe('Одним рублём 00 копейками');
    expect(numberToWordsRu.convert('2', {declension: 'instrumental'})).toBe('Двумя рублями 00 копейками');
    expect(numberToWordsRu.convert('3', {declension: 'instrumental'})).toBe('Тремя рублями 00 копейками');
    expect(numberToWordsRu.convert('4', {declension: 'instrumental'})).toBe('Четырьмя рублями 00 копейками');
    expect(numberToWordsRu.convert('5', {declension: 'instrumental'})).toBe('Пятью рублями 00 копейками');
    expect(numberToWordsRu.convert('10', {declension: 'instrumental'})).toBe('Десятью рублями 00 копейками');
    expect(numberToWordsRu.convert('11', {declension: 'instrumental'})).toBe('Одиннадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('12', {declension: 'instrumental'})).toBe('Двенадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('13', {declension: 'instrumental'})).toBe('Тринадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('14', {declension: 'instrumental'})).toBe('Четырнадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('15', {declension: 'instrumental'})).toBe('Пятнадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('16', {declension: 'instrumental'})).toBe('Шестнадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('17', {declension: 'instrumental'})).toBe('Семнадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('18', {declension: 'instrumental'})).toBe('Восемнадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('19', {declension: 'instrumental'})).toBe('Девятнадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('20', {declension: 'instrumental'})).toBe('Двадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('21', {declension: 'instrumental'})).toBe('Двадцатью одним рублём 00 копейками');
    expect(numberToWordsRu.convert('30', {declension: 'instrumental'})).toBe('Тридцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('32', {declension: 'instrumental'})).toBe('Тридцатью двумя рублями 00 копейками');
    expect(numberToWordsRu.convert('40', {declension: 'instrumental'})).toBe('Сорока рублями 00 копейками');
    expect(numberToWordsRu.convert('43', {declension: 'instrumental'})).toBe('Сорока тремя рублями 00 копейками');
    expect(numberToWordsRu.convert('50', {declension: 'instrumental'})).toBe('Пятьюдесятью рублями 00 копейками');
    expect(numberToWordsRu.convert('54', {declension: 'instrumental'})).toBe('Пятьюдесятью четырьмя рублями 00 копейками');
    expect(numberToWordsRu.convert('60', {declension: 'instrumental'})).toBe('Шестьюдесятью рублями 00 копейками');
    expect(numberToWordsRu.convert('70', {declension: 'instrumental'})).toBe('Семьюдесятью рублями 00 копейками');
    expect(numberToWordsRu.convert('80', {declension: 'instrumental'})).toBe('Восемьюдесятью рублями 00 копейками');
    expect(numberToWordsRu.convert('90', {declension: 'instrumental'})).toBe('Девяноста рублями 00 копейками');
    expect(numberToWordsRu.convert('99', {declension: 'instrumental'})).toBe('Девяноста девятью рублями 00 копейками');
    expect(numberToWordsRu.convert('100', {declension: 'instrumental'})).toBe('Ста рублями 00 копейками');
    expect(numberToWordsRu.convert('101', {declension: 'instrumental'})).toBe('Ста одним рублём 00 копейками');
    expect(numberToWordsRu.convert('110', {declension: 'instrumental'})).toBe('Ста десятью рублями 00 копейками');
    expect(numberToWordsRu.convert('200', {declension: 'instrumental'})).toBe('Двумястами рублями 00 копейками');
    expect(numberToWordsRu.convert('201', {declension: 'instrumental'})).toBe('Двумястами одним рублём 00 копейками');
    expect(numberToWordsRu.convert('210', {declension: 'instrumental'})).toBe('Двумястами десятью рублями 00 копейками');
    expect(numberToWordsRu.convert('500', {declension: 'instrumental'})).toBe('Пятьюстами рублями 00 копейками');
    expect(numberToWordsRu.convert('501', {declension: 'instrumental'})).toBe('Пятьюстами одним рублём 00 копейками');
    expect(numberToWordsRu.convert('510', {declension: 'instrumental'})).toBe('Пятьюстами десятью рублями 00 копейками');
    expect(numberToWordsRu.convert('1000', {declension: 'instrumental'})).toBe('Одной тысячей рублей 00 копейками');
    expect(numberToWordsRu.convert('1001', {declension: 'instrumental'})).toBe('Одной тысячей одним рублём 00 копейками');
    expect(numberToWordsRu.convert('1002', {declension: 'instrumental'})).toBe('Одной тысячей двумя рублями 00 копейками');
    expect(numberToWordsRu.convert('1005', {declension: 'instrumental'})).toBe('Одной тысячей пятью рублями 00 копейками');
    expect(numberToWordsRu.convert('1100', {declension: 'instrumental'})).toBe('Одной тысячей ста рублями 00 копейками');
    expect(numberToWordsRu.convert('1000000', {declension: 'instrumental'})).toBe('Одним миллионом рублей 00 копейками');
    expect(numberToWordsRu.convert('987654321', {declension: 'instrumental'})).toBe('Девятьюстами восемьюдесятью семью миллионами шестьюстами пятьюдесятью четырьмя тысячами тремястами двадцатью одним рублём 00 копейками');
  });
  test('Предложный', () => {
    expect(numberToWordsRu.convert('0', {declension: 'prepositional'})).toBe('Ноле рублях 00 копейках');
    expect(numberToWordsRu.convert('1', {declension: 'prepositional'})).toBe('Одном рубле 00 копейках');
    expect(numberToWordsRu.convert('2', {declension: 'prepositional'})).toBe('Двух рублях 00 копейках');
    expect(numberToWordsRu.convert('3', {declension: 'prepositional'})).toBe('Трёх рублях 00 копейках');
    expect(numberToWordsRu.convert('4', {declension: 'prepositional'})).toBe('Четырёх рублях 00 копейках');
    expect(numberToWordsRu.convert('5', {declension: 'prepositional'})).toBe('Пяти рублях 00 копейках');
    expect(numberToWordsRu.convert('10', {declension: 'prepositional'})).toBe('Десяти рублях 00 копейках');
    expect(numberToWordsRu.convert('11', {declension: 'prepositional'})).toBe('Одиннадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('12', {declension: 'prepositional'})).toBe('Двенадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('13', {declension: 'prepositional'})).toBe('Тринадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('14', {declension: 'prepositional'})).toBe('Четырнадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('15', {declension: 'prepositional'})).toBe('Пятнадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('16', {declension: 'prepositional'})).toBe('Шестнадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('17', {declension: 'prepositional'})).toBe('Семнадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('18', {declension: 'prepositional'})).toBe('Восемнадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('19', {declension: 'prepositional'})).toBe('Девятнадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('20', {declension: 'prepositional'})).toBe('Двадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('21', {declension: 'prepositional'})).toBe('Двадцати одном рубле 00 копейках');
    expect(numberToWordsRu.convert('30', {declension: 'prepositional'})).toBe('Тридцати рублях 00 копейках');
    expect(numberToWordsRu.convert('32', {declension: 'prepositional'})).toBe('Тридцати двух рублях 00 копейках');
    expect(numberToWordsRu.convert('40', {declension: 'prepositional'})).toBe('Сорока рублях 00 копейках');
    expect(numberToWordsRu.convert('43', {declension: 'prepositional'})).toBe('Сорока трёх рублях 00 копейках');
    expect(numberToWordsRu.convert('50', {declension: 'prepositional'})).toBe('Пятидесяти рублях 00 копейках');
    expect(numberToWordsRu.convert('54', {declension: 'prepositional'})).toBe('Пятидесяти четырёх рублях 00 копейках');
    expect(numberToWordsRu.convert('60', {declension: 'prepositional'})).toBe('Шестидесяти рублях 00 копейках');
    expect(numberToWordsRu.convert('70', {declension: 'prepositional'})).toBe('Семидесяти рублях 00 копейках');
    expect(numberToWordsRu.convert('80', {declension: 'prepositional'})).toBe('Восьмидесяти рублях 00 копейках');
    expect(numberToWordsRu.convert('90', {declension: 'prepositional'})).toBe('Девяноста рублях 00 копейках');
    expect(numberToWordsRu.convert('99', {declension: 'prepositional'})).toBe('Девяноста девяти рублях 00 копейках');
    expect(numberToWordsRu.convert('100', {declension: 'prepositional'})).toBe('Ста рублях 00 копейках');
    expect(numberToWordsRu.convert('101', {declension: 'prepositional'})).toBe('Ста одном рубле 00 копейках');
    expect(numberToWordsRu.convert('110', {declension: 'prepositional'})).toBe('Ста десяти рублях 00 копейках');
    expect(numberToWordsRu.convert('200', {declension: 'prepositional'})).toBe('Двухстах рублях 00 копейках');
    expect(numberToWordsRu.convert('201', {declension: 'prepositional'})).toBe('Двухстах одном рубле 00 копейках');
    expect(numberToWordsRu.convert('210', {declension: 'prepositional'})).toBe('Двухстах десяти рублях 00 копейках');
    expect(numberToWordsRu.convert('500', {declension: 'prepositional'})).toBe('Пятистах рублях 00 копейках');
    expect(numberToWordsRu.convert('501', {declension: 'prepositional'})).toBe('Пятистах одном рубле 00 копейках');
    expect(numberToWordsRu.convert('510', {declension: 'prepositional'})).toBe('Пятистах десяти рублях 00 копейках');
    expect(numberToWordsRu.convert('1000', {declension: 'prepositional'})).toBe('Одной тысяче рублей 00 копейках');
    expect(numberToWordsRu.convert('1001', {declension: 'prepositional'})).toBe('Одной тысяче одном рубле 00 копейках');
    expect(numberToWordsRu.convert('1002', {declension: 'prepositional'})).toBe('Одной тысяче двух рублях 00 копейках');
    expect(numberToWordsRu.convert('1005', {declension: 'prepositional'})).toBe('Одной тысяче пяти рублях 00 копейках');
    expect(numberToWordsRu.convert('1100', {declension: 'prepositional'})).toBe('Одной тысяче ста рублях 00 копейках');
    expect(numberToWordsRu.convert('1000000', {declension: 'prepositional'})).toBe('Одном миллионе рублей 00 копейках');
    expect(numberToWordsRu.convert('987654321', {declension: 'prepositional'})).toBe('Девятистах восьмидесяти семи миллионах шестистах пятидесяти четырёх тысячах трёхстах двадцати одном рубле 00 копейках');
  });
});
