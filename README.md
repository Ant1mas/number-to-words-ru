number-to-words-ru
=========
Convert a number into words on russian language.
# Installation
```
$ npm install --save number-to-words-ru
```
# Usage
```js
const numberToWordsRu = require('number-to-words-ru');
// or
import numberToWordsRu from 'number-to-words-ru'; // ES6

numberToWordsRu.convert(104);
// Сто четыре рубля 00 копеек

numberToWordsRu.convert(-4201512.21);
// Минус четыре миллиона двести одна тысяча пятьсот двенадцать рублей 21 копейка
```
# API

## `numberToWordsRu.convert(number[, options])`

Convert number into words.

### *Arguments*

`number` {Number | String}

Number to convert into words.

`options` {Object}

Output options.

`-| onlyNumber` {Boolean}

Show without currency.

**Default**: `false`

`-| currency` {'rub' | 'usd' | 'eur' | false | {Object}}

Select currency.

- *false*: Show without currency. For example *Пять целых одная сотая*.

Own currency object example:

```
{
  currencyNameCases: ['рубль', 'рубля', 'рублей'], // Integer currency names
  decimalNameCases: ['копейка', 'копейки', 'копеек'], // Decimal number currency names
  currencyValueCase: 1, // Integer name. 0 => 'одна', 1 => 'один'
  decimalValueCase: 0, // Decimal number name. 0 => 'две', 1 => 'два'
}
```

**Default**: `'rub'`

`-| showDecimal` {Boolean}

Show decimal.

**Default**: `true`

`-| decimalWords` {Boolean}

Convert decimal part to words.

**Default**: `false`

# Examples

```js
numberToWordsRu.convert(905.65, {
  onlyNumber: true,
});
// Девятьсот пять

numberToWordsRu.convert(1473.31, {
  currency: 'usd',
});
// Одна тысяча четыреста семьдесят три доллара 31 цент

numberToWordsRu.convert(22473.01, {
  currency: false,
});
// Двадцать две тысячи четыреста семьдесят три целых 01 сотая

numberToWordsRu.convert(4000155.04, {
  currency: {
    currencyNameCases: ['юань', 'юаня', 'юаней'],
    decimalNameCases: ['фынь', 'фыня', 'фыней'],
    currencyValueCase: 1,
    decimalValueCase: 1,
  },
});
// Четыре миллиона сто пятьдесят пять юаней 04 фыня

numberToWordsRu.convert(684682.48, {
  showDecimal: false,
});
// Шестьсот восемьдесят четыре тысячи шестьсот восемьдесят два рубля

numberToWordsRu.convert(4881.73, {
  decimalWords: true,
});
// Четыре тысячи восемьсот восемьдесят один рубль семьдесят три копейки
```

# License

MIT
