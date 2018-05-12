let moduleObj = {};

moduleObj.convert = function(number, options = {}) {
  // Опции по умолчанию
  let useOptions = {
    onlyNumber: false,
    currency: 'rub',
    showDecimal: true,
    decimalWords: false,
  };
  // Заменить опции по умолчанию указанными опциями
  Object.keys(options).forEach((key) => {
    const value = options[key];
    useOptions[key] = value;
  });
  // Текстовые значения
  const textValues = {
    minus: 'минус',
    numberNames: [
      ['', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
      ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
      ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
      ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
    ],
    tensNames: [
      'десять',
      'одиннадцать',
      'двенадцать',
      'тринадцать',
      'четырнадцать',
      'пятнадцать',
      'шестнадцать',
      'семнадцать',
      'восемнадцать',
      'девятнадцать',
    ],
    units: [
      [],
      [],
      ['тысяча', 'тысячи', 'тысяч'],
      ['миллион', 'миллиона', 'миллионов'],
      ['миллиард', 'милиарда', 'миллиардов'],
      ['триллион', 'триллиона', 'триллионов'],
      ['квадриллион', 'квадриллиона', 'квадриллионов'],
      ['квинтиллион', 'квинтиллиона', 'квинтиллионов'],
      ['секстиллион', 'секстиллиона', 'секстиллионов'],
    ],
    currency: {
      rub: {
        currencyNameCases: ['рубль', 'рубля', 'рублей'],
        decimalNameCases: ['копейка', 'копейки', 'копеек'],
        currencyValueCase: 1,
        decimalValueCase: 0,
      },
      usd: {
        currencyNameCases: ['доллар', 'доллара', 'долларов'],
        decimalNameCases: ['цент', 'цента', 'центов'],
        currencyValueCase: 1,
        decimalValueCase: 1,
      },
      eur: {
        currencyNameCases: ['евро', 'евро', 'евро'],
        decimalNameCases: ['цент', 'цента', 'центов'],
        currencyValueCase: 1,
        decimalValueCase: 1,
      },
    },
  };
  // Получить значения для валюты
  let currencyValues;
  if (typeof useOptions.currency === 'string') {
    currencyValues = textValues.currency[useOptions.currency];
  } else if (typeof useOptions.currency === 'object') {
    currencyValues = useOptions.currency;
  // Если валюта не выбрана
  } else if (useOptions.currency === false) {
    currencyValues = {
      currencyNameCases: ['целая', 'целых', 'целых'],
      decimalNameCases: ['сотая', 'сотых', 'сотых'],
      currencyValueCase: 0,
      decimalValueCase: 0,
    };
  }
  // Перевести число в дробное
  const numberValue = parseFloat(number).toFixed(2);
  // Целая часть числа
  const integerValue = Math.trunc(numberValue);
  // Дробная часть числа
  let fractionalValue = numberValue.split(".")[1];
  // Если показывать только число
  if (useOptions.onlyNumber === true) {
    currencyValues = {
      currencyNameCases: ['', '', ''],
      decimalNameCases: ['', '', ''],
      currencyValueCase: 1,
      decimalValueCase: 1,
    };
    fractionalValue = '';
  }
  // Длина целой части числа
  const numberLength = Math.abs(integerValue).toString().length;
  // Количество классов единиц целого числа
  const classesOfUnits = Math.ceil(numberLength / 3);
  // Кол-во цифр последнего класса единиц
  const numbersLastClass = numberLength % 3 || 3;
  // Число текущего класса единиц
  let currentClassNumber = Math.abs(integerValue).toString().substr(0, numbersLastClass);
  // Кол-во удаленных цифр
  let deletedDigits = 0;
  // Собранное число
  let collectedResult = [];
  // Собранная дробная часть
  let fractionalWords = [];
  // Падеж валюты ('рубль', 'рубля', 'рублей')
  let currencyTextCase = 2;
  // Падеж дробной части валюты ('копейка', 'копейки', 'копеек')
  let fractionalTextCase = 2;
  // Обработка целой части числа
  // Если отрицательное число
  if (integerValue < 0) {
    collectedResult.push(textValues.minus);
    // Удалить символ минуса из основного числа
    deletedDigits++;
  }
  // Для каждого класса единиц числа
  for (let currentUnitClass = classesOfUnits; currentUnitClass > 0; currentUnitClass--) {
    // Падеж класса числа
    let classTextCase = false;
    // Для каждой цифры класса
    for (;currentClassNumber.length > 0;) {
      // Текущая цифра
      const currentDigit = parseInt(currentClassNumber.substr(0, 1));
      // Название класса единиц
      if (currentDigit === 1) {
        classTextCase = 2;
        if (currentClassNumber.length < 2) {
          classTextCase = 0;
        }
      } else if (currentDigit > 1 && currentDigit < 5) {
        classTextCase = 1;
      } else if (currentDigit > 4 && currentDigit < 10) {
        classTextCase = 2;
      }
      // Если число - ноль
      if (integerValue === 0) {
        collectedResult.push(textValues.numberNames[1][0]);
      }
      // Получить название валюты
      // Если это последний класс числа
      if (currentUnitClass === 1) {
        // Если число не в пределах 10-19 и не равно 0
        if ((currentClassNumber.length !== 2 ||
        currentDigit !== 1) &&
        currentClassNumber.length < 3) {
          // Если последняя цифра 1
          if (currentDigit === 1) {
            currencyTextCase = 0;
          // Если последняя цифра 2-4
          } else if (currentDigit > 1 && currentDigit < 5) {
            currencyTextCase = 1;
          // Если последняя цифра 0 или 5-9
          } else {
            currencyTextCase = 2;
          }
        }
      }
      // Если число в пределах 10-19
      if (currentClassNumber.length === 2 &&
      currentDigit === 1) {
        collectedResult.push(textValues.tensNames[currentClassNumber.substr(1, 1)]);
        // Удалить на одну цифру больше из основного числа
        deletedDigits++;
        // Перейти к следующему классу
        currentClassNumber = '';
        classTextCase = 2;
      // Если число не в пределах 10-19 и не равно 0
      } else if (currentDigit !== 0) {
        // Если класс - тысячные
        if (currentUnitClass === 2 &&
        currentClassNumber.length === 1) {
          collectedResult.push(textValues.numberNames[0][currentDigit]);
        } else {
          // Если это сотни или десятки
          if (currentClassNumber.length > 1) {
            collectedResult.push(textValues.numberNames[currentClassNumber.length][currentDigit]);
          // Если это единицы
          } else {
            // Выбрать правильный род названия цифры
            // Если первый класс числа
            if (currentUnitClass === 1) {
              collectedResult.push(textValues.numberNames[currencyValues.currencyValueCase][currentDigit]);
            } else {
              collectedResult.push(textValues.numberNames[1][currentDigit]);
            }
          }
        }
      }
      // Удалить первую цифру числа класса
      currentClassNumber = currentClassNumber.substr(1);
      // Удалить на одну цифру больше из основного числа
      deletedDigits++;
    }
    // Если есть название класса
    if (classTextCase !== false &&
    currentUnitClass > 1) {
      // Добавить название класса
      collectedResult.push(textValues.units[currentUnitClass][classTextCase]);
    }
    // Получить число следующего класса
    currentClassNumber = integerValue.toString().substr(deletedDigits, 3);
  }
  // /Обработка целой части числа
  // Обработка дробной части числа
  // Для каждой цифры дробной части
  for (let fractionalIndex = 0; fractionalIndex < fractionalValue.length; fractionalIndex++) {
    // Текущая цифра
    const currentFractinalDigit = parseInt(fractionalValue[fractionalIndex]);
    // Если число в пределах 10-19
    if (parseInt(fractionalValue) > 9 && parseInt(fractionalValue) < 20) {
      fractionalWords.push(textValues.tensNames[fractionalValue.substr(1, 1)]);
      fractionalIndex = 2;
    // Если число в не пределах 10-19 и !== 0
    } else if (currentFractinalDigit !== 0) {
      // Если десятки
      if (fractionalIndex === 0) {
        fractionalWords.push(textValues.numberNames[2][currentFractinalDigit]);
      // Если единицы
      } else if (fractionalIndex === 1) {
        fractionalWords.push(textValues.numberNames[currencyValues.decimalValueCase][currentFractinalDigit]);
      }
      if (fractionalIndex === 1) {
        // Если последняя цифра 1
        if (currentFractinalDigit === 1) {
          fractionalTextCase = 0;
        // Если последняя цифра 2-4
        } else if (currentFractinalDigit > 1 && currentFractinalDigit < 5) {
          fractionalTextCase = 1;
        }
      }
    }
  }
  // Если fractionalValue === 0
  if (parseInt(fractionalValue) === 0) {
    fractionalWords.push(textValues.numberNames[1][0]);
  }
  // Если показывать дробную часть не словами
  if (!useOptions.decimalWords) {
    fractionalWords = [];
    fractionalWords.push(fractionalValue);
  }
  // Добавить десятичную валюту
  fractionalWords.push(currencyValues.decimalNameCases[fractionalTextCase]);
  // /Обработка дробной части числа
  // Добавить валюту
  collectedResult.push(currencyValues.currencyNameCases[currencyTextCase]);
  // Если нужно добавить десятичную часть
  if (useOptions.showDecimal === true) {
    collectedResult.push(fractionalWords.join(' '));
  }
  // Обработать результат
  // Убрать пустые значения
  collectedResult = collectedResult.filter((value) => {
    if (value.trim() !== '') {
      return true;
    }
  });
  // Составить предложение
  let finalResult = collectedResult.join(' ');
  finalResult = finalResult[0].toUpperCase() + finalResult.substr(1);
  return finalResult;
}

export default moduleObj;
