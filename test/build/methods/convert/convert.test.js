const root = '../../../../';
const convertNumberToWords = require(`${root}dist/bundle`).convert;

describe('Проверка входных данных', () => {
  test('Пустая строка', () => {
    expect(convertNumberToWords('')).toBe('Ноль рублей 00 копеек');
  });
  test('Пустое значение', () => {
    expect(convertNumberToWords()).toBe('Ноль рублей 00 копеек');
  });
  describe('Допустимые знаки', () => {
    test('Знак `-`', () => {
      expect(convertNumberToWords('-')).toBe('Минус ноль рублей 00 копеек');
    });
    test('Знак `.`', () => {
      expect(convertNumberToWords('.')).toBe('Ноль рублей 00 копеек');
    });
    test('Знак `,`', () => {
      expect(convertNumberToWords(',')).toBe('Ноль рублей 00 копеек');
    });
    test('Знак `/`', () => {
      expect(convertNumberToWords('/')).toBe('Ноль 0 рубля');
    });
  });
  describe('Недопустимые знаки', () => {
    test('Буквы', () => {
      expect(convertNumberToWords('XZ')).toBe('Ноль рублей 00 копеек');
    });
    test('Символы', () => {
      expect(convertNumberToWords('`~!@"#№$;%^:&?*_+=\'\\()[]{}<>'))
        .toBe('Ноль рублей 00 копеек');
    });
  });
  describe('Недопустимые типы данных', () => {
    test('null', () => {
      expect(convertNumberToWords(null)).toBe('Ноль рублей 00 копеек');
    });
    test('undefined', () => {
      expect(convertNumberToWords(undefined)).toBe('Ноль рублей 00 копеек');
    });
    test('boolean', () => {
      expect(convertNumberToWords(true)).toBe('Ноль рублей 00 копеек');
    });
    test('symbol', () => {
      expect(convertNumberToWords(Symbol())).toBe('Ноль рублей 00 копеек');
    });
    test('bigInt', () => {
      expect(convertNumberToWords(BigInt(1))).toBe('Ноль рублей 00 копеек');
    });
    test('object', () => {
      expect(convertNumberToWords({})).toBe('Ноль рублей 00 копеек');
    });
    test('function', () => {
      expect(convertNumberToWords(function() { }))
        .toBe('Ноль рублей 00 копеек');
    });
  });
});

describe('Проверка чисел', () => {
  test('Отрицательные', () => {
    expect(convertNumberToWords(-2)).toBe('Минус два рубля 00 копеек');
  });
  test('Десятичные', () => {
    expect(convertNumberToWords(1.01)).toBe('Один рубль 01 копейка');
    expect(convertNumberToWords(1.02)).toBe('Один рубль 02 копейки');
    expect(convertNumberToWords(1.04)).toBe('Один рубль 04 копейки');
    expect(convertNumberToWords(1.05)).toBe('Один рубль 05 копеек');
    expect(convertNumberToWords(1.09)).toBe('Один рубль 09 копеек');
    expect(convertNumberToWords(1.10)).toBe('Один рубль 10 копеек');
    expect(convertNumberToWords(1.11)).toBe('Один рубль 11 копеек');
    expect(convertNumberToWords(1.12)).toBe('Один рубль 12 копеек');
    expect(convertNumberToWords(1.20)).toBe('Один рубль 20 копеек');
    expect(convertNumberToWords(1.21)).toBe('Один рубль 21 копейка');
    expect(convertNumberToWords(1.22)).toBe('Один рубль 22 копейки');
    expect(convertNumberToWords(1.29)).toBe('Один рубль 29 копеек');
  });
  test('Без валюты (целые, десятые и т.д.)', () => {
    expect(convertNumberToWords(0.1, {
      currency: 'number',
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Ноль целых одна десятая');
    expect(convertNumberToWords(1.1, {
      currency: 'number',
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна целая одна десятая');
    expect(convertNumberToWords(1.01, {
      currency: 'number',
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна целая одна сотая');
    expect(convertNumberToWords(1.001, {
      currency: 'number',
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна целая одна тысячная');
    expect(convertNumberToWords(1.0001, {
      currency: 'number',
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна целая одна десятитысячная');
    expect(convertNumberToWords(1.00001, {
      currency: 'number',
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна целая одна стотысячная');
    expect(convertNumberToWords(1.000001, {
      currency: 'number',
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна целая одна миллионная');
    expect(convertNumberToWords(1.0000001, {
      currency: 'number',
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна целая одна десятимиллионная');
    expect(convertNumberToWords(1.00000001, {
      currency: 'number',
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна целая одна стомиллионная');
    expect(convertNumberToWords(1.2, {
      currency: 'number',
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна целая две десятых');
    expect(convertNumberToWords(1.02, {
      currency: 'number',
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна целая две сотых');
    expect(convertNumberToWords(1.002, {
      currency: 'number',
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна целая две тысячных');
    expect(convertNumberToWords(1.0002, {
      currency: 'number',
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна целая две десятитысячных');
    expect(convertNumberToWords(2.1, {
      currency: 'number',
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две целых одна десятая');
    expect(convertNumberToWords(1.000345, {
      currency: 'number',
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна целая триста сорок пять миллионных');
  });
  test('Дробные', () => {
    expect(convertNumberToWords('1/0', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна нулевая рубля');
    expect(convertNumberToWords('1/', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна нулевая рубля');
    expect(convertNumberToWords('2/0', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две нулевых рубля');
    expect(convertNumberToWords('5/0', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Пять нулевых рубля');
    expect(convertNumberToWords('11/0', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одиннадцать нулевых рубля');
    expect(convertNumberToWords('20/0', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Двадцать нулевых рубля');
    expect(convertNumberToWords('21/0', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Двадцать одна нулевая рубля');
    expect(convertNumberToWords('100/0', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Сто нулевых рубля');
    expect(convertNumberToWords('101/0', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Сто одна нулевая рубля');
    expect(convertNumberToWords('0/2', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Ноль вторых рубля');
    expect(convertNumberToWords('0/2000', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Ноль двухтысячных рубля');
    expect(convertNumberToWords('1/2', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна вторая рубля');
    expect(convertNumberToWords('2/2', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две вторых рубля');
    expect(convertNumberToWords('1/12', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна двенадцатая рубля');
    expect(convertNumberToWords('2/12', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две двенадцатых рубля');
    expect(convertNumberToWords('1/22', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна двадцать вторая рубля');
    expect(convertNumberToWords('2/22', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две двадцать вторых рубля');
    expect(convertNumberToWords('1/202', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна двести вторая рубля');
    expect(convertNumberToWords('2/202', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две двести вторых рубля');
    expect(convertNumberToWords('1/212', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна двести двенадцатая рубля');
    expect(convertNumberToWords('1/222', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна двести двадцать вторая рубля');
    expect(convertNumberToWords('2/222', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две двести двадцать вторых рубля');
    expect(convertNumberToWords('1/200', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна двухсотая рубля');
    expect(convertNumberToWords('2/200', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две двухсотых рубля');
    expect(convertNumberToWords('1/1000', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна тысячная рубля');
    expect(convertNumberToWords('2/1000', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две тысячных рубля');
    expect(convertNumberToWords('2/1010', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две одна тысяча десятых рубля');
    expect(convertNumberToWords('2/2000', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две двухтысячных рубля');
    expect(convertNumberToWords('2/2002', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две две тысячи вторых рубля');
    expect(convertNumberToWords('2/2012', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две две тысячи двенадцатых рубля');
    expect(convertNumberToWords('2/2020', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две две тысячи двадцатых рубля');
    expect(convertNumberToWords('2/2200', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две две тысячи двухсотых рубля');
    expect(convertNumberToWords('2/2220', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две две тысячи двести двадцатых рубля');
    expect(convertNumberToWords('2/2222', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две две тысячи двести двадцать вторых рубля');
    expect(convertNumberToWords('2/20000', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две двадцатитысячных рубля');
    expect(convertNumberToWords('2/21000', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две двадцатиоднотысячных рубля');
    expect(convertNumberToWords('2/25000', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две двадцатипятитысячных рубля');
    expect(convertNumberToWords('2/200000', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две двухсоттысячных рубля');
    expect(convertNumberToWords('2/2000000', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две двухмиллионных рубля');
    expect(convertNumberToWords('2/2001000', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две два миллиона однотысячных рубля');
    expect(convertNumberToWords('2/235000', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две двухсоттридцатипятитысячных рубля');
    expect(convertNumberToWords('1/100000', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна стотысячная рубля');
    expect(convertNumberToWords('1/90000', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Одна девяностотысячная рубля');
    expect(convertNumberToWords('2/100000', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две стотысячных рубля');
    expect(convertNumberToWords('2/90000', {
      convertNumberToWords: {
        fractional: true,
      },
    }))
      .toBe('Две девяностотысячных рубля');
  });
  test('Остальные', () => {
    expect(convertNumberToWords(0))
      .toBe('Ноль рублей 00 копеек');
    expect(convertNumberToWords(1))
      .toBe('Один рубль 00 копеек');
    expect(convertNumberToWords(2))
      .toBe('Два рубля 00 копеек');
    expect(convertNumberToWords(4))
      .toBe('Четыре рубля 00 копеек');
    expect(convertNumberToWords(5))
      .toBe('Пять рублей 00 копеек');
    expect(convertNumberToWords(9))
      .toBe('Девять рублей 00 копеек');
    expect(convertNumberToWords(10))
      .toBe('Десять рублей 00 копеек');
    expect(convertNumberToWords(11))
      .toBe('Одиннадцать рублей 00 копеек');
    expect(convertNumberToWords(12))
      .toBe('Двенадцать рублей 00 копеек');
    expect(convertNumberToWords(14))
      .toBe('Четырнадцать рублей 00 копеек');
    expect(convertNumberToWords(15))
      .toBe('Пятнадцать рублей 00 копеек');
    expect(convertNumberToWords(19))
      .toBe('Девятнадцать рублей 00 копеек');
    expect(convertNumberToWords(20))
      .toBe('Двадцать рублей 00 копеек');
    expect(convertNumberToWords(21))
      .toBe('Двадцать один рубль 00 копеек');
    expect(convertNumberToWords(22))
      .toBe('Двадцать два рубля 00 копеек');
    expect(convertNumberToWords(24))
      .toBe('Двадцать четыре рубля 00 копеек');
    expect(convertNumberToWords(25))
      .toBe('Двадцать пять рублей 00 копеек');
    expect(convertNumberToWords(29))
      .toBe('Двадцать девять рублей 00 копеек');
    expect(convertNumberToWords(100))
      .toBe('Сто рублей 00 копеек');
    expect(convertNumberToWords(101))
      .toBe('Сто один рубль 00 копеек');
    expect(convertNumberToWords(102))
      .toBe('Сто два рубля 00 копеек');
    expect(convertNumberToWords(105))
      .toBe('Сто пять рублей 00 копеек');
    expect(convertNumberToWords(109))
      .toBe('Сто девять рублей 00 копеек');
    expect(convertNumberToWords(110))
      .toBe('Сто десять рублей 00 копеек');
    expect(convertNumberToWords(111))
      .toBe('Сто одиннадцать рублей 00 копеек');
    expect(convertNumberToWords(115))
      .toBe('Сто пятнадцать рублей 00 копеек');
    expect(convertNumberToWords(121))
      .toBe('Сто двадцать один рубль 00 копеек');
    expect(convertNumberToWords(122))
      .toBe('Сто двадцать два рубля 00 копеек');
    expect(convertNumberToWords(125))
      .toBe('Сто двадцать пять рублей 00 копеек');
    expect(convertNumberToWords(129))
      .toBe('Сто двадцать девять рублей 00 копеек');
    expect(convertNumberToWords(1000))
      .toBe('Одна тысяча рублей 00 копеек');
    expect(convertNumberToWords(1001))
      .toBe('Одна тысяча один рубль 00 копеек');
    expect(convertNumberToWords(1002))
      .toBe('Одна тысяча два рубля 00 копеек');
    expect(convertNumberToWords(1009))
      .toBe('Одна тысяча девять рублей 00 копеек');
    expect(convertNumberToWords(1010))
      .toBe('Одна тысяча десять рублей 00 копеек');
    expect(convertNumberToWords(1011))
      .toBe('Одна тысяча одиннадцать рублей 00 копеек');
    expect(convertNumberToWords(1012))
      .toBe('Одна тысяча двенадцать рублей 00 копеек');
    expect(convertNumberToWords(1019))
      .toBe('Одна тысяча девятнадцать рублей 00 копеек');
    expect(convertNumberToWords(1020))
      .toBe('Одна тысяча двадцать рублей 00 копеек');
    expect(convertNumberToWords(1021))
      .toBe('Одна тысяча двадцать один рубль 00 копеек');
    expect(convertNumberToWords(1022))
      .toBe('Одна тысяча двадцать два рубля 00 копеек');
    expect(convertNumberToWords(1029))
      .toBe('Одна тысяча двадцать девять рублей 00 копеек');
    expect(convertNumberToWords(2000))
      .toBe('Две тысячи рублей 00 копеек');
    expect(convertNumberToWords(9000))
      .toBe('Девять тысяч рублей 00 копеек');
    expect(convertNumberToWords(10101))
      .toBe('Десять тысяч сто один рубль 00 копеек');
    expect(convertNumberToWords(10102))
      .toBe('Десять тысяч сто два рубля 00 копеек');
    expect(convertNumberToWords(10109))
      .toBe('Десять тысяч сто девять рублей 00 копеек');
    expect(convertNumberToWords(10121))
      .toBe('Десять тысяч сто двадцать один рубль 00 копеек');
    expect(convertNumberToWords(100000))
      .toBe('Сто тысяч рублей 00 копеек');
    expect(convertNumberToWords(101000))
      .toBe('Сто одна тысяча рублей 00 копеек');
    expect(convertNumberToWords(102000))
      .toBe('Сто две тысячи рублей 00 копеек');
    expect(convertNumberToWords(109000))
      .toBe('Сто девять тысяч рублей 00 копеек');
    expect(convertNumberToWords(111000))
      .toBe('Сто одиннадцать тысяч рублей 00 копеек');
    expect(convertNumberToWords(120000))
      .toBe('Сто двадцать тысяч рублей 00 копеек');
    expect(convertNumberToWords(121000))
      .toBe('Сто двадцать одна тысяча рублей 00 копеек');
    expect(convertNumberToWords(122000))
      .toBe('Сто двадцать две тысячи рублей 00 копеек');
    expect(convertNumberToWords(129000))
      .toBe('Сто двадцать девять тысяч рублей 00 копеек');
    expect(convertNumberToWords(200000))
      .toBe('Двести тысяч рублей 00 копеек');
    expect(convertNumberToWords(300000))
      .toBe('Триста тысяч рублей 00 копеек');
    expect(convertNumberToWords(400000))
      .toBe('Четыреста тысяч рублей 00 копеек');
    expect(convertNumberToWords(500000))
      .toBe('Пятьсот тысяч рублей 00 копеек');
    expect(convertNumberToWords(600000))
      .toBe('Шестьсот тысяч рублей 00 копеек');
    expect(convertNumberToWords(700000))
      .toBe('Семьсот тысяч рублей 00 копеек');
    expect(convertNumberToWords(800000))
      .toBe('Восемьсот тысяч рублей 00 копеек');
    expect(convertNumberToWords(900000))
      .toBe('Девятьсот тысяч рублей 00 копеек');
    expect(convertNumberToWords(1100100))
      .toBe('Один миллион сто тысяч сто рублей 00 копеек');
    expect(convertNumberToWords(2200200))
      .toBe('Два миллиона двести тысяч двести рублей 00 копеек');
    expect(convertNumberToWords(5500500))
      .toBe('Пять миллионов пятьсот тысяч пятьсот рублей 00 копеек');
    expect(convertNumberToWords(11100100))
      .toBe('Одиннадцать миллионов сто тысяч сто рублей 00 копеек');
    expect(convertNumberToWords(22200200))
      .toBe('Двадцать два миллиона двести тысяч двести рублей 00 копеек');
    expect(convertNumberToWords(20200200))
      .toBe('Двадцать миллионов двести тысяч двести рублей 00 копеек');
    expect(convertNumberToWords(21200200))
      .toBe('Двадцать один миллион двести тысяч двести рублей 00 копеек');
    expect(convertNumberToWords(29200200))
      .toBe('Двадцать девять миллионов двести тысяч двести рублей 00 копеек');
    expect(convertNumberToWords(100000000))
      .toBe('Сто миллионов рублей 00 копеек');
    expect(convertNumberToWords(200000000))
      .toBe('Двести миллионов рублей 00 копеек');
    expect(convertNumberToWords(300000000))
      .toBe('Триста миллионов рублей 00 копеек');
    expect(convertNumberToWords(400000000))
      .toBe('Четыреста миллионов рублей 00 копеек');
    expect(convertNumberToWords(500000000))
      .toBe('Пятьсот миллионов рублей 00 копеек');
    expect(convertNumberToWords(600000000))
      .toBe('Шестьсот миллионов рублей 00 копеек');
    expect(convertNumberToWords(700000000))
      .toBe('Семьсот миллионов рублей 00 копеек');
    expect(convertNumberToWords(800000000))
      .toBe('Восемьсот миллионов рублей 00 копеек');
    expect(convertNumberToWords(900000000))
      .toBe('Девятьсот миллионов рублей 00 копеек');
  });
});
