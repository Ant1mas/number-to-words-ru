import textValues from 'textValues';
import convertsEachScaleToWords from 'functions/convertsEachScaleToWords';

/**
 * Конвертировать в текст массив числа с разделителем "/".
 * @param {Array} numberScaleArr - Массив числа.
 * @param {number} unitNameForm - Род для валюты.
 * @return {string} Конвертированный результат.
 */
const convertsEachScaleToWordsSlash = (numberScaleArr: string[], unitNameForm = 1): string => {
  if (numberScaleArr.length < 1) {
    return '';
  }
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
  // Если нет цифр, кроме нуля
  if (lastDigitBeforeZerosIndex === 0) {
    convertedResult = unitNameForm === 0 ? textValues.slashNumberUnits.number[0][0] : textValues.slashNumberUnits.number[0][1];
    return convertedResult;
  }
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
    const currentScaleNumberArr: any[] = numberScaleArr[scaleChangingIndex].split('');
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
    const unitName = textValues.getSlashNumberUnitsNames(scaleChanging);
    // Добавить название класса
    numberLongWord += unitName[unitNameForm];
    // Добавить результат к общему значению
    convertedResult += ` ${numberLongWord}`;
  // Если этот класс единиц (<1000)
  } else {
    let wordsResult = '';
    // Поделить число текущего класса на цифры
    const currentScaleNumberArr: any[] = numberScaleArr[scaleChangingIndex].split('');
    // Индекс цифры, которой надо поменять форму
    const digitIndexChange = 3 - lastDigitBeforeZerosIndex;
    // Получить обычную часть числа
    const currentScaleNumberNormal: any = currentScaleNumberArr.slice();
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

export default convertsEachScaleToWordsSlash;
