const units = require('./units');

const textValues = {
  minus: 'минус',
  numberNames: [
    ['ноль', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
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
  units: units.integer,
  fractionalUnits: units.getFractionalNameForms,
  slashNumberUnits: units.slashNumberFroms,
  slashNumberUnitsNames: units.getSlashNumberUnitName,
  currency: {
    rub: {
      currencyNameCases: ['рубль', 'рубля', 'рублей'],
      fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
      currencyNounGender: {
        integer: 0, // Мужской род
        fractionalPart: 1, // Женский род
      },
    },
    usd: {
      currencyNameCases: ['доллар', 'доллара', 'долларов'],
      fractionalPartNameCases: ['цент', 'цента', 'центов'],
      currencyNounGender: {
        integer: 0,
        fractionalPart: 0,
      },
    },
    eur: {
      currencyNameCases: ['евро', 'евро', 'евро'],
      fractionalPartNameCases: ['цент', 'цента', 'центов'],
      currencyNounGender: {
        integer: 0,
        fractionalPart: 0,
      },
    },
  },
};

module.exports = textValues;
