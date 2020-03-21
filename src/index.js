const textValues = require('./textValues');

const numberToWordsRu = {};
let dividerSlash = false; // Является ли разделитель числа дробной чертой

getOptions = (options) => {
  // Опции по умолчанию
  const resultOptions = {
    /* currency - Название валюты ('rub', 'usd', 'eur')
    или 'number' или объект со своей валютой */
    currency: 'rub',
    convertMinusSignToWord: true,
    showNumberParts: {
      integer: true,
      fractional: true,
    },
    convertNumbertToWords: {
      integer: true,
      fractional: false,
    },
    showCurrency: {
      integer: true,
      fractional: true,
    },
  };
  // Заменить опции по умолчанию выбранными опциями, если они правильно указаны
  const updateOptions = (currentOptions, newOptions) => {
    Object.keys(currentOptions).forEach((key) => {
      // Если нужно изменить эту опцию
      if (newOptions[key] !== undefined) {
        // Если эта опция - объект
        if (
          typeof currentOptions[key] === 'object' &&
          key !== 'currency'
        ) {
          // Перейти внутрь этого объекта (рекурсия)
          updateOptions(currentOptions[key], newOptions[key]);
        } else {
        // Если эта опция - не объект
          // Если тип данных одинаковый или currency[string/object]
          if (
            typeof currentOptions[key] === typeof newOptions[key] ||
            (
              key === 'currency' &&
              (
                typeof newOptions[key] === 'string' ||
                typeof newOptions[key] === 'object'
              )
            )
          ) {
            // Заменить новым значением
            currentOptions[key] = newOptions[key];
          }
        }
      }
    });
  };
  updateOptions(resultOptions, options);
  return resultOptions;
};

getCurrencyData = (convertOptions) => {
  let currencyData;
  // Если отображение без валюты
  if (convertOptions.currency === 'number') {
    currencyData = {
      currencyNameCases: ['целая', 'целых', 'целых'],
      fractionalPartNameCases: textValues.fractionalUnits,
      currencyNounGender: {
        integer: 1,
        fractionalPart: 1,
      },
    };
  // Если валюта указана словами
  } else if (typeof convertOptions.currency === 'string') {
    // Если такая валюта есть в списке
    if (textValues.currency[convertOptions.currency] !== undefined) {
      // Получить данные найденной валюты
      currencyData = textValues.currency[convertOptions.currency];
    } else {
      throw new Error(
        'Wrong currency name [' + convertOptions.currency + ']. '
        + 'Try "rub", "usd", "eur", "number" or object with your currency.',
      );
    }
  // Если валюта описана как объект
  } else if (typeof convertOptions.currency === 'object') {
    // Если объект оформлен правильно
    if (
      typeof convertOptions.currency === 'object' &&
      Object.keys(convertOptions.currency).length === 3 &&
      convertOptions.currency.currencyNameCases.length === 3 &&
      convertOptions.currency.fractionalPartNameCases.length === 3 &&
      typeof convertOptions.currency.currencyNounGender === 'object' &&
      Object.keys(convertOptions.currency.currencyNounGender).length === 2 &&
      typeof convertOptions.currency.currencyNounGender.integer === 'number' &&
      typeof convertOptions.currency.currencyNounGender.fractionalPart === 'number'
    ) {
      // Принять валюту
      currencyData = convertOptions.currency;
    } else {
    // Если объект оформлен неправильно
      throw new Error(`Wrong currency object.`);
    }
  }
  return currencyData;
};

processNumber = (number) => {
  // Максимальная длинна целой части числа
  const maxIntegerPartLength = 306;
  // Конвертировать в String
  const numberString = number.toString();
  let numberArr = [];
  // Убрать из строки всё лишнее
  let clearNumber = numberString.match(/[0-9\,\.\-\/]/g);
  if (clearNumber !== null) {
    clearNumber = clearNumber.join('');
  } else {
    clearNumber = '0';
  }
  // Определить указан ли знак минуса в начале
  numberArr[0] = clearNumber.search(/\-/) === 0 ? '-' : '+';
  // Удалить все знаки минуса
  clearNumber = clearNumber.match(/[^\-]/g).join('');
  // Определить является ли разделитьель дробной чертой
  dividerSlash = clearNumber
    .substr(clearNumber.search(/[\,\.\/]/), 1) === '/' ? true : false;
  // Отметить позицию первого разделителя числа
  clearNumber = clearNumber.replace(/[\,\.\/]/, 'CUTHERE');
  // Удалить все разделители числа
  clearNumber = clearNumber.match(/[^\,\.\/]/g).join('');
  // Разделить число на целую и десятичную части
  numberArr = numberArr.concat(clearNumber.split('CUTHERE'));
  // Если десятичной части вообще нет, то добавить пустую
  numberArr[2] = numberArr[2] === undefined ? '' : numberArr[2];
  // Убрать лишние нули из целой части
  numberArr[1] = numberArr[1].replace(/^0+/, '');
  // Убрать лишние нули из дробной части
  // Если разделитель не дробная черта
  if (dividerSlash === false) {
    numberArr[2] = numberArr[2]
      .split('')
      .reverse()
      .join('')
      .replace(/^0+/, '')
      .split('')
      .reverse()
      .join('');
  }
  // Заменить пустые значения на ноль
  numberArr[1] = numberArr[1] === '' ? '0' : numberArr[1];
  numberArr[2] = numberArr[2] === '' ? '0' : numberArr[2];
  // Если целая часть числа слишком длинная
  if (numberArr[1].length > maxIntegerPartLength) {
    // Убрать лишнюю часть числа
    numberArr[1] = numberArr[1].slice(0, maxIntegerPartLength);
  }
  // Если дробная часть числа слишком длинная
  if (numberArr[2].length > maxIntegerPartLength - 1) {
    // Убрать лишнюю часть числа
    numberArr[2] = numberArr[2].slice(0, maxIntegerPartLength - 1);
  }
  return numberArr;
};

replaceAt = (string, index, newSubStr) => {
  return string.substr(0, index)
    + newSubStr.toString()
    + string.substr(index
    + newSubStr.toString().length);
};

roundNumber = (numberArr, precision = 2) => {
  // Обрезать дробную часть
  let fractionalPart = numberArr[2].substr(0, precision + 1);
  // Если недостаточно знаков в дробной части
  if (fractionalPart.length < (precision + 1)) {
    // Заполнить пустое место нулями
    fractionalPart = fractionalPart + '0'
      .repeat((precision + 1) - fractionalPart.length);
  }
  let numberPartToRound = `${numberArr[1]}.${fractionalPart}`;
  let increaseDigit = false;
  // Цикл от последней цифры к первой (справа налево)
  for (let index = numberPartToRound.length - 1; index >= 0; index--) {
    // Если текущий символ - это цифра (не знак разделителя)
    if (numberPartToRound[index].search(/[0-9]/) !== -1) {
      const currentDigit = parseInt(numberPartToRound[index]);
      // Если нужно было увеличивать цифру
      if (increaseDigit === true) {
        // Если текущая цифра 9, то увеличить следующую
        if (currentDigit === 9) {
          numberPartToRound = replaceAt(numberPartToRound, index, 0);
          increaseDigit = true;
          // Если это уже самая первая цифра слева, то добавить "1" в начало
          if (index === 0) {
            numberPartToRound = `1${numberPartToRound}`;
          }
        // Если любая другая цифра
        } else {
          numberPartToRound = replaceAt(
            numberPartToRound,
            index,
            currentDigit + 1,
          );
          increaseDigit = false;
          break;
        }
      // Если не нужно было увеличивать цифру
      } else {
        // Если текущая цифра <= 4, то завершить цикл
        if (currentDigit <= 4) {
          break;
        } else {
        /* Если текущая цифра >= 5,
        то увеличить следующую цифру (соседнюю слева) */
          increaseDigit = true;
        }
      }
    }
  }
  const resultNumberArr = numberPartToRound.slice(0, -1).split('.');
  resultNumberArr.unshift(numberArr[0]);
  const result = resultNumberArr;
  return result;
};

numberToScales = (number) => {
  // Сделать количество цифр числа кратным 3
  const numberLength = number.length;
  const numberScales = Math.ceil(numberLength / 3);
  const numberLengthGoal = numberScales * 3;
  const lackOfDigits = numberLengthGoal - numberLength;
  const extendedNumber = '0'.repeat(lackOfDigits) + number;
  // Разделить число на классы по 3 цифры в каждом
  const cutNumber = [];
  for (i = 0; i < extendedNumber.length; i+=3) {
    const digits3 = extendedNumber[i]
      + extendedNumber[i + 1]
      + extendedNumber[i + 2];
    cutNumber.push(digits3);
  }
  return cutNumber;
};

convertsEachScaleToWords = (numberScaleArr, currencyNounGender = 0) => {
  let convertedResult = '';
  let unitNameForm; // Падеж названия единиц измерения
  // Для каждого класса числа
  numberScaleArr.forEach((NumberScale, arrIndex) => {
    unitNameForm = 2; // Падеж названия единиц измерения по умолчанию (рублей)
    // Определить порядковый номер текущего класса числа
    const currentNumberScale = numberScaleArr.length - arrIndex;
    const digit1 = parseInt(NumberScale[0]);
    const digit2 = parseInt(NumberScale[1]);
    const digit3 = parseInt(NumberScale[2]);
    let digit1text = '';
    let digit2text = '';
    let digit3text = '';
    // Пропускать пустые классы (000)
    if (
      numberScaleArr.length > 1
      && digit1 === 0
      && digit2 === 0
      && digit3 === 0
    ) {
      return;
    }
    // Определить сотни
    digit1text = textValues.numberNames[3][digit1];
    // Определить десятки и единицы
    // Если в разряде десятков стоит "1"
    if (digit2 === 1) {
      digit2text = textValues.tensNames[digit3];
    // Если в раздяде десятков стоит не "1"
    } else {
      digit2text = textValues.numberNames[2][digit2];
      digit3text = textValues.numberNames[1][digit3];
      // Определить РОД названия единиц (один/одна, два/две)
      // Если текущий класс - тысячные
      if (currentNumberScale === 2) {
        // Поменять род названия единиц (один -> одна, два -> две)
        digit3text = textValues.numberNames[0][digit3];
      }
      // Если текущий класс - единицы
      if (currentNumberScale === 1) {
        // Если у валюты указан женский род (напр. копейка)
        if (currencyNounGender === 1) {
          // Поменять род названия единиц (один -> одна, два -> две)
          digit3text = textValues.numberNames[0][digit3];
        }
      }
      // Определить ПАДЕЖ названия единиц измерения (рубль/рубля/рублей)
      // Если цифра в разряде единиц от 1 до 4
      if (digit3 >= 1 && digit3 <= 4) {
        // Если цифра в разряде единиц "1"
        if (digit3 === 1) {
          // Получиться "рубль"
          unitNameForm = 0;
        }
        if (digit3 >= 2 && digit3 <= 4) {
          // Получиться "рубля"
          unitNameForm = 1;
        }
      }
    }
    // Указать падеж для названия класса единиц
    const unitName = textValues.units[currentNumberScale - 1][unitNameForm];
    // Убрать ненужный "ноль"
    if (digit3 === 0 && (digit1 > 0 || digit2 > 0)) {
      digit3text = '';
    }
    // Соеденить значения в одну строку
    const scaleResult = `${digit1text} ${digit2text} ${digit3text} ${unitName}`
      .replace(/\s+/g, ' ')
      .trim();
    // Добавить текущий разобранный класс к общему результату
    convertedResult += ` ${scaleResult}`;
  });
  // Вернуть полученный результат и форму падежа для валюты
  return {
    result: convertedResult.trim(),
    unitNameForm: unitNameForm,
  };
};

convertsEachScaleToWordsSlash = (numberScaleArr, unitNameForm = 1) => {
  unitNameForm = unitNameForm === 0 ? 0 : 1;
  let convertedResult = '';
  /* Определить порядковый номер с конца последнего числа,
  которое находится до нулей */
  const lastDigitBeforeZerosIndex = numberScaleArr
    .join('')
    .split('')
    .reverse()
    .join('')
    .search(/[1-9]/) + 1;
  /* Определить в каком классе
  lastDigitBeforeZerosIndex (какой класс изменяется по падежу) */
  const scaleChanging = Math.ceil(lastDigitBeforeZerosIndex / 3);
  const scaleChangingIndex = numberScaleArr.length - scaleChanging;
  /* Если есть еще классы над scaleChangingIndex,
  то добавить их в именительном падеже */
  if (scaleChangingIndex > 0) {
    // Сформировать массив только из этих классов
    const simpleScalesArr = numberScaleArr.map((numberScale, scaleIndex) => {
      // Если класс выше, чем scaleChangingIndex, то оставить его как есть
      if (scaleIndex < scaleChangingIndex) {
        return numberScale;
      // Если класс ниже или равен scaleChangingIndex
      } else {
        return '000';
      }
    });
    // Конвертировать их в именительном падеже
    convertedResult += convertsEachScaleToWords(simpleScalesArr).result;
  }
  // Обработать класс, который меняется по падежам
  // Если этот класс >= 2 (класс тысяч и выше)
  if (scaleChanging >= 2) {
    /* Переменная для составления длинного числа,
    например "двухсотдвадцатипятитысячных" */
    let numberLongWord = '';
    // Поделить число текущего класса на цифры
    const currentScaleNumberArr = numberScaleArr[scaleChangingIndex].split('');
    // Составить число
    numberLongWord += textValues
      .slashNumberUnits
      .hundreds[currentScaleNumberArr[0]][2];
    // Если в разряде десятков стоит "1"
    if (currentScaleNumberArr[1] === '1') {
      numberLongWord += textValues
        .slashNumberUnits
        .teens[currentScaleNumberArr[2]][2];
    // Если в раздяде десятков стоит не "1"
    } else {
      numberLongWord += textValues
        .slashNumberUnits
        .tens[currentScaleNumberArr[1]][2];
      numberLongWord += textValues
        .slashNumberUnits
        .number[currentScaleNumberArr[2]][2];
    }
    // Получить название класса
    const unitName = textValues.slashNumberUnitsNames(scaleChanging);
    // Добавить название класса
    numberLongWord += unitName[unitNameForm];
    // Добавить результат к общему значению
    convertedResult += ` ${numberLongWord}`;
  // Если этот класс единиц (<1000)
  } else {
    let wordsResult = '';
    // Поделить число текущего класса на цифры
    const currentScaleNumberArr = numberScaleArr[scaleChangingIndex].split('');
    // Индекс цифры, которой надо поменять форму
    const digitIndexChange = 3 - lastDigitBeforeZerosIndex;
    // Получить обычную часть числа
    const currentScaleNumberNormal = currentScaleNumberArr.slice();
    // Если надо поменять цифру в первом разряде, а она часть 10-19
    if (digitIndexChange === 2 && currentScaleNumberNormal[1] === '1') {
      // Не показывать разряд десяток в именительном падеже
      currentScaleNumberNormal[1] = '0';
    }
    currentScaleNumberNormal[digitIndexChange] = '0';
    // Добавить обычную часть числа
    // Если есть обычная часть числа
    if (digitIndexChange > 0) {
      // Если есть цифры (!= 000)
      if (currentScaleNumberNormal.join('') !== '000') {
        // Конвертировать обычную часть числа в слова
        wordsResult += convertsEachScaleToWords([currentScaleNumberNormal])
          .result;
      }
    }
    // Добавить измененную часть числа
    // Если это разряд сотен
    if (digitIndexChange === 0) {
      wordsResult += ' ' + textValues
        .slashNumberUnits
        .hundreds[currentScaleNumberArr[0]][unitNameForm];
    } else {
    // Если это разряд десятков или единиц
      // Если в разраде десятков цифра 1 (числа 10-19)
      if (currentScaleNumberArr[1] === '1') {
        wordsResult += ' ' + textValues
          .slashNumberUnits
          .teens[currentScaleNumberArr[2]][unitNameForm];
      } else {
        // Если нужно менять разряд 2 (десятки)
        if (digitIndexChange === 1) {
          wordsResult += ' ' + textValues
            .slashNumberUnits
            .tens[currentScaleNumberArr[1]][unitNameForm];
        // Если нужно менять разряд 1 (единицы)
        } else if (digitIndexChange === 2) {
          wordsResult += ' ' + textValues
            .slashNumberUnits
            .number[currentScaleNumberArr[2]][unitNameForm];
        }
      }
    }
    // Добавить результат к общему значению
    convertedResult += ` ${wordsResult}`;
  }
  return convertedResult;
};

combineResultData = (numberArray, options) => {
  /* Пример convertedNumberArr:
  ['минус', 'двадцать два', 'рубля', 'сорок одна', 'копейка'] */
  const convertedNumberArr = ['', '', '', '', ''];
  // Определить опции для функции
  const useOptions = getOptions(options);
  // Определить отображение валюты
  const currencyData = getCurrencyData(useOptions);
  // Если есть знак минус
  if (numberArray[0] === '-') {
    // Если отображать знак минус словом
    if (useOptions.convertMinusSignToWord === true) {
      convertedNumberArr[0] = textValues.minus;
    } else {
      convertedNumberArr[0] = '-';
    }
  }
  // Если указана валюта
  if (useOptions.currency !== 'number') {
    // Если разделитель - не дробная черта
    if (dividerSlash === false) {
      // Округлить число до 2 знаков после запятой
      numberArray = roundNumber(numberArray, 2);
    }
  }
  // Если нужно отображать целую часть числа
  if (useOptions.showNumberParts.integer === true) {
    convertedNumberArr[1] = numberArray[1].toString();
    // Если нужно конвертировать число в слова
    if (useOptions.convertNumbertToWords.integer === true) {
      // Если разделитель не дробная черта
      if (dividerSlash === false) {
        convertedNumberArr[1] = convertsEachScaleToWords(
          numberToScales(numberArray[1]),
          currencyData.currencyNounGender.integer,
        ).result;
      } else {
      // Если раделитель - дробная черта
        // Род числа всегда женский ('одна', 'две')
        convertedNumberArr[1] =
          convertsEachScaleToWords(numberToScales(numberArray[1]), 1).result;
      }
    }
    // Если нужно отображать валюту числа
    if (useOptions.showCurrency.integer === true) {
      // Если разделитель - не дробная черта
      if (dividerSlash === false) {
        convertedNumberArr[2] = currencyData.currencyNameCases[
          convertsEachScaleToWords(
            numberToScales(numberArray[1]),
            currencyData.currencyNounGender.integer,
          ).unitNameForm
        ];
      }
    }
  }
  // Если нужно отображать дробную часть числа
  if (useOptions.showNumberParts.fractional === true) {
    convertedNumberArr[3] = numberArray[2].toString();
    // Если нужно конвертировать число в слова
    if (useOptions.convertNumbertToWords.fractional === true) {
      // Если разделитель - дробная черта
      if (dividerSlash === true) {
        convertedNumberArr[3] = convertsEachScaleToWordsSlash(
          numberToScales(numberArray[2]),
          convertsEachScaleToWords(
            numberToScales(numberArray[1]),
            currencyData.currencyNounGender.integer,
          ).unitNameForm,
        );
      } else {
      // Если разделитель - не дробная черта
        convertedNumberArr[3] = convertsEachScaleToWords(
          numberToScales(numberArray[2]),
          currencyData.currencyNounGender.fractionalPart,
        ).result;
      }
    }
    // Если нужно отображать валюту числа
    if (useOptions.showCurrency.fractional === true) {
      convertedNumberArr[4] = currencyData.fractionalPartNameCases[
        convertsEachScaleToWords(
          numberToScales(numberArray[2]),
          currencyData.currencyNounGender.fractionalPart,
        ).unitNameForm
      ];
      // Если не указана валюта
      if (useOptions.currency === 'number') {
        // Если разделитель - не дробная черта
        if (dividerSlash === false) {
          // Получить массив названий дробной части
          const getFractionalPartArr = currencyData
            .fractionalPartNameCases(numberArray[2].length - 1);
          convertedNumberArr[4] = getFractionalPartArr[
            convertsEachScaleToWords(numberToScales(
              numberArray[2]),
              currencyData.currencyNounGender.fractionalPart,
            ).unitNameForm
          ];
        }
      }
      // Если разделитель - дробная черта
      if (dividerSlash === true) {
        // Если указана валюта
        if (useOptions.currency !== 'number') {
          convertedNumberArr[4] = currencyData.currencyNameCases[1];
        }
      }
    }
  }
  let convertedNumberResult = convertedNumberArr
      .filter(Boolean)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
  // Сделать первую букву заглавной
  convertedNumberResult = convertedNumberResult
      .charAt(0)
      .toUpperCase()
      + convertedNumberResult.slice(1);
  return convertedNumberResult;
};

numberToWordsRu.convert = function(number, options = {}) {
  // Обработать введенное число
  const numberArray = processNumber(number);
  // Собрать конечный словестный результат
  const convertedNumberArr = combineResultData(numberArray, options);
  return convertedNumberArr;
};

module.exports = numberToWordsRu;
