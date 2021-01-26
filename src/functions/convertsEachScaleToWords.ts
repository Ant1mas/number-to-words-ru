import textValues, {DeclensionNumberNames, numberNames} from 'textValues';
import {ConvertedScalesToWords} from 'typeScript/interfaces/ConvertedScalesToWords';
import genders, {Gender} from "../units/genders";
import {Declension, declensions} from "../units/declensions";
import getUnitName from "../units/functions/getUnitName";

const convertDigitToWord = (digit: number, values: DeclensionNumberNames, declension: Declension, gender: Gender) => {
  const declensionValues = values[declension];
  const word = declensionValues[digit];
  return "object" === typeof word ? word[gender] : word;
};

/**
 * Конвертировать массив числа в текст.
 * @param {Array} numberScaleArr - Массив числа.
 * @param {number} currencyNounGender - Род валюты.
 * @param {Declension} declension - Падеж.
 * @return {Object} Конвертированный результат и падеж для валюты.
 */
const convertsEachScaleToWords = (numberScaleArr: string[], currencyNounGender = 0, declension: Declension = declensions.NOMINATIVE): ConvertedScalesToWords => {
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
    // Определить род числа
    //  если тысячный разряд - то женский
    //  если единичный разряд - берем из валюты
    //  иначе - мужской
    let gender: Gender = genders.MALE;
    if (currentNumberScale === 2) {
      // Если текущий класс - тысячные
      gender = genders.FEMALE;
    } else if (currentNumberScale === 1) {
      // Если текущий класс - единицы
      if (currencyNounGender === 1) {
        // Если у валюты указан женский род (напр. копейка)
        gender = genders.FEMALE;
      } else if (currencyNounGender === 2) {
        // Если у валюты указан средний род
        gender = genders.NEUTER;
      }
    }

    // Определить сотни
    digit1text = convertDigitToWord(digit1, numberNames.hundreds, declension, gender);
    // Определить десятки и единицы
    // Если в разряде десятков стоит "1"
    if (digit2 === 1) {
      digit2text = convertDigitToWord(digit3, numberNames.tenToNineteen, declension, gender);
    // Если в раздяде десятков стоит не "1"
    } else {
      digit2text = convertDigitToWord(digit2, numberNames.tens, declension, gender);
      digit3text = convertDigitToWord(digit3, numberNames.numbers, declension, gender);

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
    let unitDeclension = (((digit3 >= 5 && digit3 <= 9) || digit2 === 1 || digit3 ===0) && declension === declensions.NOMINATIVE) ? declensions.GENITIVE : declension
    let isPlural = !(digit3 === 1 && digit2 !== 1);
    let unitName = getUnitName(currentNumberScale - 1, unitDeclension, isPlural);
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
