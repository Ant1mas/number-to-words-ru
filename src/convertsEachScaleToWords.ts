import textValues from 'textValues';
import {ConvertedScalesToWords} from 'typeScript/interfaces/ConvertedScalesToWords';

/**
 * Конвертировать массив числа в текст.
 * @param {Array} numberScaleArr - Массив числа.
 * @param {number} currencyNounGender - Род валюты.
 * @return {Object} Конвертированный результат и падеж для валюты.
 */
const convertsEachScaleToWords = (numberScaleArr: string[], currencyNounGender = 0): ConvertedScalesToWords => {
  let convertedResult = '';
  let unitNameForm; // Падеж названия единиц измерения
  // Для каждого класса числа
  numberScaleArr.forEach((numberScale, arrIndex) => {
    unitNameForm = 2; // Падеж названия единиц измерения по умолчанию (рублей)
    // Определить порядковый номер текущего класса числа
    const currentNumberScale = numberScaleArr.length - arrIndex;
    const digit1 = parseInt(numberScale[0]);
    const digit2 = parseInt(numberScale[1]);
    const digit3 = parseInt(numberScale[2]);
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
    digit1text = textValues.numberNames[4][digit1];
    // Определить десятки и единицы
    // Если в разряде десятков стоит "1"
    if (digit2 === 1) {
      digit2text = textValues.tensNames[digit3];
    // Если в раздяде десятков стоит не "1"
    } else {
      digit2text = textValues.numberNames[3][digit2];
      digit3text = textValues.numberNames[0][digit3];
      // Определить РОД названия единиц (один/одна, два/две, одно/два)
      // Если текущий класс - тысячные
      if (currentNumberScale === 2) {
        // Поменять род названия единиц (один -> одна, два -> две)
        digit3text = textValues.numberNames[1][digit3];
      }
      // Если текущий класс - единицы
      if (currentNumberScale === 1) {
        // Если у валюты указан женский род (напр. копейка)
        if (currencyNounGender === 1) {
          // Поменять род названия единиц (один -> одна, два -> две)
          digit3text = textValues.numberNames[1][digit3];
        }
        // Если у валюты указан средний род
        if (currencyNounGender === 2) {
          // Поменять род названия единиц (один -> одно, два -> два)
          digit3text = textValues.numberNames[2][digit3];
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
    const unitName = textValues.integerUnits[currentNumberScale - 1][unitNameForm];
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

export default convertsEachScaleToWords;
