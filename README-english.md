<p align="center">
  <img src="https://user-images.githubusercontent.com/7397158/69491493-d4c97d00-0eb7-11ea-8375-7bf54187d0e1.png" alt="Logo" width="150" align="center" />
</p>
<h1 align="center">number-to-words-ru</h1>
<div align="center">
  Convert a number to words on russian language.

  🔢 ➡ 🔡
</div>

[Русская версия описания](https://github.com/Ant1mas/number-to-words-ru/blob/master/README.md)

# What does this module do
1234567.89 ➡ Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 89 копеек

123.45 ➡ Сто двадцать три рубля **сорок пять** копеек

-345.21 ➡ **Минус** триста сорок пять рублей 21 копейка

450.3 ➡ Четыреста пятьдесят **долларов** 30 **центов**

122.00572 ➡ Сто двадцать две **целых** пятьсот семьдесят две **стотысячных**

5/123 ➡ Пять сто двадцать третьих

# Demo

[Demo page](https://ant1mas.github.io/number-to-words-ru/)

# Features
- **Max 306** digits **before point** and **305** digits **after point** can be converted in words (if typed as String).
- Use any **own custom currency**.
- Convert number in words without real currency ("целых", "десятых", "стотысячных" etc.)
- Convert **number with slash** in words.
- **Auto round to 2 digits** after point long number with currency.
- **Hide part** before point or after point.
- **Hide currency** in part before point or in part after point.
- **Do not convert in words** part before point or after point or minus sign.

# Installation
Install with npm:
```bash
npm install number-to-words-ru
```
Install with yarn:
```bash
yarn add number-to-words-ru
```

# Usage
```js
const numberToWordsRu = require('number-to-words-ru');
// or
import numberToWordsRu from 'number-to-words-ru'; // ES6



// Use without options
numberToWordsRu.convert('104');
// Сто четыре рубля 00 копеек

// or with options
numberToWordsRu.convert('-4201512.21', {
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
});
// Минус четыре миллиона двести одна тысяча пятьсот двенадцать рублей 21 копейка
```

# API

## Methods

- [convert(number[, options])](#methods-convert)

------------------------

**<p id="methods-convert">`convert(number[, options])`</p>**

*Convert number to words.*

Return value is *String*.

`number` {String | Number}

*Number to convert to words.*

If typed as *Number* max value is **9'007'199'254'740'991** (limit of Javascript).

If typed as *String* max value is **10<sup>305</sup>** (306 digits) before point and **10<sup>304</sup>** (305 digits) after point.

`options` {Object}

*Convert options.*

Full options object:

```js
{
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
}
```

### Options object

`currency` {String | Object}

*Select currency.*

**Default**: `'rub'`

String values:

| String value  | Description | Example |
| ------------- | ------------- | ------------- |
| `'rub'`  | Russian ruble  | 124 **рубля** 42 **копейки**  |
| `'usd'`  | Dollar  | 124 **доллара** 42 **цента**  |
| `'eur'`  | Euro  | 124 **евро** 42 **цента**  |
| `'number'`  | Number without currency  | 124 **целых** 42 **сотых**  |


Own currency **object** example:

```js
{
  currencyNameCases: ['рубль', 'рубля', 'рублей'], // Integer currency names
  fractionalPartNameCases: ['копейка', 'копейки', 'копеек'], // Fractional number currency names
  currencyNounGender: {
    integer: 0, // 0 => 'один', 1 => 'одна'
    fractionalPart: 1 // 0 => 'два', 1 => 'две'
  }
}
```

`convertMinusSignToWord` {Boolean}

*Convert minus sign to word.*

**Default**: `true`

`showNumberParts` {Object}

*Show parts of number.*

Object:

```js
showNumberParts: {
  integer: true,
  fractional: true
}
```

`convertNumbertToWords` {Object}

*Convert to words parts of number.*

Object:

```js
convertNumbertToWords: {
  integer: true,
  fractional: false
}
```

`showCurrency` {Object}

*Show currency in parts of number.*

Object:

```js
showCurrency: {
  integer: true,
  fractional: true
}
```


# Examples

```js
const converted = numberToWordsRu.convert('-905.645', {
  currency: 'usd',
  convertNumbertToWords : {
    integer: true,
    fractional: true,
  },
});
// converted === 'Минус девятьсот пять долларов шестьдесят пять центов'
```

```js
const converted = numberToWordsRu.convert('8952.41', {
  currency: {
    currencyNameCases: ['юань', 'юаня', 'юаней'],
    fractionalPartNameCases: ['фынь', 'фыня', 'фыней'],
    currencyNounGender: {
      integer: 0,
      fractionalPart: 0,
    },
  },
});
// converted === 'Восемь тысяч девятьсот пятьдесят два юаня 41 фынь'
```

```js
const converted = numberToWordsRu.convert('9516351', {
  showNumberParts: {
    fractional: false,
  },
  showCurrency : {
    integer: false,
  },
});
// converted === 'Девять миллионов пятьсот шестнадцать тысяч триста пятьдесят один'
```

```js
const converted = numberToWordsRu.convert('452/971', {
  convertNumbertToWords : {
    fractional: true,
  },
  showCurrency: {
    fractional: false,
  },
});
// converted === 'Четыреста пятьдесят две девятьсот семьдесят первых'
```

```js
const converted = numberToWordsRu.convert('235.00000706', {
  currency: 'number',
  convertNumbertToWords : {
    fractional: true,
  },
});
// converted === 'Двести тридцать пять целых семьсот шесть стомиллионных'
```

# License

MIT
