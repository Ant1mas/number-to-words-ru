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

251 ➡ Двести пятьдесят одно **сообщение**

6712 ➡ Шесть тысяч семьсот двенадцать **комментариев**

-345.21 ➡ **Минус** триста сорок пять рублей 21 копейка

450.3 ➡ Четыреста пятьдесят **долларов** 30 **центов**

122.00572 ➡ Сто двадцать две **целых** пятьсот семьдесят две **стотысячных**

5/123 ➡ Пять сто двадцать третьих

# Demo

[Demo page](https://ant1mas.github.io/number-to-words-ru/)

# Features
- **Max 306** digits **before point** and **305** digits **after point** can be converted in words (if typed as String).
- Use any **own custom currency**.
- Use with any object (for example "сообщение", "комментарий", работа"...).
- Convert number in words without real currency ("целых", "десятых", "стотысячных" etc.)
- Convert **number with slash** in words (delimiter "/").
- **Round number** to specified precision.
- **Auto round to 2 digits** after point long number with common currency.
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
  roundNumber: -1,
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

<br/>

`number` {String | Number}

*Number to convert to words.*

If typed as *Number* max value is **9'007'199'254'740'991** (limit of Javascript).

If typed as *String* max value is **10<sup>305</sup>** (306 digits) before point and **10<sup>304</sup>** (305 digits) after point.

<br/>

`options` {Object}

*Convert options.*

**Default options**:

```js
{
  currency: 'rub',
  roundNumber: -1,
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
------------------------

### **Options object**

`currency`: {String | Object}

*Select currency.*

**Default**: `'rub'`

String values:

| String value  | Description | Example |
| ------------- | ------------- | ------------- |
| `'rub'`  | Russian ruble  | 124 **рубля** 42 **копейки**  |
| `'usd'`  | Dollar  | 124 **доллара** 42 **цента**  |
| `'eur'`  | Euro  | 124 **евро** 42 **цента**  |
| `'number'`  | Number without currency  | 124 **целых** 42 **сотых**  |

<br/>

Own currency **object** example:

```js
{
  currencyNameCases: ['рубль', 'рубля', 'рублей'], // Integer currency names
  fractionalPartNameCases: ['копейка', 'копейки', 'копеек'], // Fractional number currency names
  currencyNounGender: {
    integer: 0, // 0 => ('один', 'два'...)
    fractionalPart: 1 // 1 => ('одна', 'две'...)
  }
}
// or
{
  currencyNameCases: ['сообщение', 'сообщения', 'сообщений'], // [1 сообщение, 2-4 сообщения, 5-9 сообщений]
  fractionalPartNameCases: ['', '', ''],
  currencyNounGender: {
    integer: 2, // 2 => ('одно', 'два'...)
    fractionalPart: 0
  }
}
```

<br/>

`roundNumber`: {Number}

*Round number to specified precision.*

**Default**: `-1`

`{Number}` - Precision.

`-1` - Disable rounding.

If option `currency` is a common currency (`rub` / `usd` / `eur`) then after rounding it will be rounded again to 2 digits. Also in this case the result always will have 2 digits in fractional part (for example "00", "05").

Example:

```js
numberToWordsRu.convert('129.6789', {
  currency: 'eur',
  roundNumber: 5,
});
// Сто двадцать девять рублей 68 копеек

numberToWordsRu.convert('129.6789', {
  currency: 'eur',
  roundNumber: 1,
});
// Сто двадцать девять рублей 70 копеек

numberToWordsRu.convert('129.6789', {
  currency: 'eur',
  roundNumber: 0,
});
// Сто тридцать рублей 00 копеек
```

If delimiter is slash ("`/`") then number will NOT be rounded in any case.

<br/>

`convertMinusSignToWord`: {Boolean}

*Convert minus sign to word ('-' => 'минус').*

**Default**: `true`

<br/>

`showNumberParts`: {Object}

*Show parts of number.*

**Default object**:

```js
showNumberParts: {
  integer: true,
  fractional: true
}
```

Example:

```js
numberToWordsRu.convert('123.45', {
  showNumberParts: {
    integer: true,
    fractional: false
  }
});
// Сто двадцать три рубля

numberToWordsRu.convert('123.45', {
  showNumberParts: {
    integer: false,
    fractional: true
  }
});
// 45 копеек
```

<br/>

`convertNumbertToWords`: {Object}

*Convert to words parts of number.*

**Default object**:

```js
convertNumbertToWords: {
  integer: true,
  fractional: false
}
```

Example:

```js
numberToWordsRu.convert('123.45', {
  convertNumbertToWords: {
    integer: true,
    fractional: false
  }
});
// Сто двадцать три рубля 45 копеек

numberToWordsRu.convert('123.45', {
  convertNumbertToWords: {
    integer: false,
    fractional: true
  }
});
// 123 рубля сорок пять копеек
```

<br/>

`showCurrency`: {Object}

*Show currency in parts of number.*

**Default object**:

```js
showCurrency: {
  integer: true,
  fractional: true
}
```

Example:

```js
numberToWordsRu.convert('123.45', {
  showCurrency: {
    integer: true,
    fractional: false
  }
});
// Сто двадцать три рубля 45

numberToWordsRu.convert('123.45', {
  showCurrency: {
    integer: false,
    fractional: true
  }
});
// Сто двадцать три 45 копеек
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
const converted = numberToWordsRu.convert('6712', {
  currency: {
    currencyNameCases: ['сообщение', 'сообщения', 'сообщений'],
    fractionalPartNameCases: ['', '', ''],
    currencyNounGender: {
      integer: 2,
      fractionalPart: 0,
    },
  },
  showNumberParts: {
    fractional: false,
  },
});
// converted === 'Двести пятьдесят одно сообщение'
```

```js
const converted = numberToWordsRu.convert('6712', {
  currency: {
    currencyNameCases: ['комментарий', 'комментария', 'комментариев'],
    fractionalPartNameCases: ['', '', ''],
    currencyNounGender: {
      integer: 0,
      fractionalPart: 0,
    },
  },
  showNumberParts: {
    fractional: false,
  },
});
// converted === 'Шесть тысяч семьсот двенадцать комментариев'
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

```js
let converted = numberToWordsRu.convert('0.5', {
  currency: 'number',
  convertNumbertToWords : {
    fractional: true,
  },
});
converted = converted + ' литра воды';
// converted === 'Ноль целых пять десятых литра воды'
```

# License

MIT
