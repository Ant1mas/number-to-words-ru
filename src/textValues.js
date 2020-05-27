import integerUnits from 'units/integer';
import slashNumberForms from 'units/slashNumberForms';
import getFractionalNameForms from 'units/functions/getFractionalNameForms';
import getSlashNumberUnitName from 'units/functions/getSlashNumberUnitName';
import stringCurrencies from 'stringCurrencies';

const textValues = {
  minus: 'минус',
  numberNames: [
    ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
    ['ноль', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
    ['ноль', 'одно', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
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
  integerUnits: integerUnits,
  slashNumberUnits: slashNumberForms,
  currency: stringCurrencies,
  getFractionalUnits: getFractionalNameForms,
  getSlashNumberUnitsNames: getSlashNumberUnitName,
};

export default textValues;
