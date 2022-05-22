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
- Flexible **customization of currency**.
- Use **with any object** (for example "сообщение", "комментарий", работа"...).
- Convert number in words without real currency ("целых", "десятых", "стотысячных" etc.)
- Convert **number with slash** in words (delimiter "/").
- Convert **in any declension**.
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
const convertNumberToWordsRu = require('number-to-words-ru').convert
// or
import { convert as convertNumberToWordsRu } from 'number-to-words-ru' // ES6

// Use without options
convertNumberToWordsRu('104')
// Сто четыре рубля 00 копеек

// or with options
convertNumberToWordsRu('-4201512.21', {
  currency: 'rub',
  declension: 'nominative',
  roundNumber: -1,
  convertMinusSignToWord: true,
  showNumberParts: {
    integer: true,
    fractional: true,
  },
  convertNumberToWords: {
    integer: true,
    fractional: false,
  },
  showCurrency: {
    integer: true,
    fractional: true,
  },
})
// Минус четыре миллиона двести одна тысяча пятьсот двенадцать рублей 21 копейка
```

# API

## Methods

- convert(number, [options])

---

<br/><br/>

#### **Метод `convert`**

```
convert(number, [options])
```

Convert number to words.

#### **Arguments**

`number (string|number)`: Number to convert to words.

> If typed as _number_ max value is **9'007'199'254'740'991** (limit of Javascript).

> If typed as _string_ max value is 10<sup>305</sup> (**306 digits**) before point and 10<sup>304</sup> (**305 digits**) after point.

`[options] (Object)`: Convert options.

#### **Returns**

`(string)`: Returns converted to text number.

**Default _options_ object**:

```js
{
  currency: 'rub',
  declension: 'nominative',
  roundNumber: -1,
  convertMinusSignToWord: true,
  showNumberParts: {
    integer: true,
    fractional: true,
  },
  convertNumberToWords: {
    integer: true,
    fractional: false,
  },
  showCurrency: {
    integer: true,
    fractional: true,
  },
}
```

---

<br/><br/>

### **Argument `options`**

#### **`options.currency`**

```
currency: (string|Object)
```

Currency of number.

#### **Default value**

'rub'

#### **Possible values**

- String values:

| String value | Description             | Example                      |
| ------------ | ----------------------- | ---------------------------- |
| `'rub'`      | Russian ruble           | 124 **рубля** 42 **копейки** |
| `'usd'`      | Dollar                  | 124 **доллара** 42 **цента** |
| `'eur'`      | Euro                    | 124 **евро** 42 **цента**    |
| `'number'`   | Number without currency | 124 **целых** 42 **сотых**   |

**Note**: For all common currencies except `number` set `fractionalPartMinLength: 2`. Also these currencies will be rounded to `2`.

- Customize currency:

```js
{
  currencyNameCases: ['рубль', 'рубля', 'рублей'], // [1 рубль, 2-4 рубля, 5-9 рублей]
  fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
  currencyNounGender: {
    integer: 0, // 0 => ('один', 'два'...)
    fractionalPart: 1 // 1 => ('одна', 'две'...)
  }
  fractionalPartMinLength: 2
}
// or
{
  currencyNameDeclensions: {
    nominative: ['рубль', ''],
    genitive: ['рубля', 'рублей'],
    dative: ['рублю', 'рублям'],
    accusative: ['рубль', 'рубли'],
    instrumental: ['рублём', 'рублями'],
    prepositional: ['рубле', 'рублях'],
  },
  fractionalPartNameDeclensions: {
    nominative: ['копейка', ''],
    genitive: ['копейки', 'копеек'],
    dative: ['копейке', 'копейкам'],
    accusative: ['копейку', 'копейки'],
    instrumental: ['копейкой', 'копейками'],
    prepositional: ['копейке', 'копейках'],
  },
  currencyNounGender: {
    integer: 0,
    fractionalPart: 1
  },
  fractionalPartMinLength: 2
}
// or
{
  currencyNameCases: ['сообщение', 'сообщения', 'сообщений'],
  fractionalPartNameCases: ['', '', ''],
  currencyNounGender: {
    integer: 2, // 2 => ('одно', 'два'...)
    fractionalPart: 0
  }
}
```

**Note**: If currency object will not be filled completely then missing data will be taken from default currency (`'rub'`).

- Default currency object (`'rub'`):

```js
{
  currencyNameCases: ['рубль', 'рубля', 'рублей'], // [1 рубль, 2-4 рубля, 5-9 рублей]
  currencyNameDeclensions: {
    nominative: ['рубль', ''], // [singular, plural]
    genitive: ['рубля', 'рублей'],
    dative: ['рублю', 'рублям'],
    accusative: ['рубль', 'рубли'],
    instrumental: ['рублём', 'рублями'],
    prepositional: ['рубле', 'рублях'],
  },
  fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
  fractionalPartNameDeclensions: {
    nominative: ['копейка', ''],
    genitive: ['копейки', 'копеек'],
    dative: ['копейке', 'копейкам'],
    accusative: ['копейку', 'копейки'],
    instrumental: ['копейкой', 'копейками'],
    prepositional: ['копейке', 'копейках'],
  },
  currencyNounGender: {
    integer: 0, // 0 => ('один', 'два'...)
    fractionalPart: 1 // 1 => ('одна', 'две'...)
  },
  fractionalPartMinLength: 2
}
```

#### Fields of object `currency`

`currencyNameCases: (Array)`: Currency form name of integer part. 3 elements in array.

`currencyNameDeclensions: (Object)`: Declensions of integer part. In object 6 declensions, inside of each placed array with singular and plural.

`fractionalPartNameCases: (Array)`: Currency form name of fractional part. 3 elements in array.

`fractionalPartNameDeclensions: (Object)`: Declensions of fractional part. In object 6 declensions, inside of each placed array with singular and plural.

`currencyNounGender: (Object)`: Form of number: 0 - ("один"), 1 - ("одна"), 2 - ("одно").

- `integer` - For integer part.

- `fractionalPart` - For fractional part.

`fractionalPartMinLength: (number)`: Minimal length of fractional part. For example if set `3` then in fractional part mey be number `002`.

**Note**: In arrays `currencyNameCases` and `fractionalPartNameCases`: first element for digit 1 (`1 рубль`), second element for digits 2-4 (`2 рубля`), third element for digits 5-9 and 0 (`5 рублей`).

<br/><br/>

#### **`options.declension`**

```
declension: (string)
```

Select declension.

#### **Default value**

'nominative'

#### **Possible values**

- `'nominative'` - For example, "Двадцать одна тысяча рублей".
- `'genitive'` - For example, "Двадцати одной тысячи рублей".
- `'dative'` - For example, "Двадцати одной тысяче рублей".
- `'accusative'` - For example, "Двадцать одну тысячу рублей".
- `'instrumental'` - For example, "Двадцатью одной тысячей рублей".
- `'prepositional'` - For example, "Двадцати одной тысяче рублей".

#### Example

```js
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

convertNumberToWordsRu('41521000', {
  declension: 'instrumental',
})
// Сорока одним миллионом пятьюстами двадцатью одной тысячей рублей 00 копеек

convertNumberToWordsRu('2711.00052', {
  declension: 'instrumental',
  currency: 'number',
  convertNumberToWords: {
    fractional: true,
  },
})
// Двумя тысячами семьюстами одиннадцатью целыми пятьюдесятью двумя стотысячными

convertNumberToWordsRu('672/15', {
  declension: 'instrumental',
  convertNumberToWords: {
    fractional: true,
  },
})
// Шестьюстами семьюдесятью двумя пятнадцатыми рубля
```

<br/><br/>

#### **`options.roundNumber`**

```
roundNumber: (number)
```

Round number to specified precision.

#### **Default value**

-1

#### **Possible values**

- `(number)` - Precision. Integer.
- `-1` - Disable rounding.

**Note**: If option `currency` is a common currency (`rub` / `usd` / `eur`) then after rounding it will be rounded again to 2 digits.

#### Example

```js
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

convertNumberToWordsRu('129.6789', {
  currency: 'rub',
  roundNumber: 5,
})
// Сто двадцать девять рублей 68 копеек

convertNumberToWordsRu('129.6789', {
  currency: 'rub',
  roundNumber: 1,
})
// Сто двадцать девять рублей 70 копеек

convertNumberToWordsRu('129.6789', {
  currency: 'rub',
  roundNumber: 0,
})
// Сто тридцать рублей 00 копеек
```

**Note**: If delimiter is slash ("`/`") then number will NOT be rounded in any case.

<br/><br/>

#### **`options.convertMinusSignToWord`**

```
convertMinusSignToWord: (Boolean)
```

Convert minus sign to word ( '-' --> 'минус' ).

#### **Default value**

true

<br/><br/>

#### **`options.showNumberParts`**

```
showNumberParts: (Object)
```

Show parts of number.

#### **Default value**

```js
{
  integer: true,
  fractional: true
}
```

#### Example

```js
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

convertNumberToWordsRu('123.45', {
  showNumberParts: {
    integer: true,
    fractional: false,
  },
})
// Сто двадцать три рубля

convertNumberToWordsRu('123.45', {
  showNumberParts: {
    integer: false,
    fractional: true,
  },
})
// 45 копеек
```

<br/><br/>

#### **`options.convertNumberToWords`**

```
convertNumberToWords: (Object)
```

Convert to words parts of number.

#### **Default value**

```js
{
  integer: true,
  fractional: false
}
```

#### Example

```js
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

convertNumberToWordsRu('123.45', {
  convertNumberToWords: {
    integer: true,
    fractional: false,
  },
})
// Сто двадцать три рубля 45 копеек

convertNumberToWordsRu('123.45', {
  convertNumberToWords: {
    integer: false,
    fractional: true,
  },
})
// 123 рубля сорок пять копеек
```

<br/><br/>

#### **`options.showCurrency`**

```
showCurrency: (Object)
```

Show currency in parts of number.

#### **Default value**

```js
{
  integer: true,
  fractional: true
}
```

#### Example

```js
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

convertNumberToWordsRu('123.45', {
  showCurrency: {
    integer: true,
    fractional: false,
  },
})
// Сто двадцать три рубля 45

convertNumberToWordsRu('123.45', {
  showCurrency: {
    integer: false,
    fractional: true,
  },
})
// Сто двадцать три 45 копеек
```

# Examples

```js
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

const converted = convertNumberToWordsRu('-905.645', {
  currency: 'usd',
  convertNumberToWords: {
    integer: true,
    fractional: true,
  },
})
// converted === 'Минус девятьсот пять долларов шестьдесят пять центов'
```

```js
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

const converted = convertNumberToWordsRu('8952.41', {
  currency: {
    currencyNameCases: ['юань', 'юаня', 'юаней'],
    fractionalPartNameCases: ['фынь', 'фыня', 'фыней'],
    currencyNounGender: {
      integer: 0,
      fractionalPart: 0,
    },
  },
})
// converted === 'Восемь тысяч девятьсот пятьдесят два юаня 41 фынь'
```

```js
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

const converted = convertNumberToWordsRu('6712', {
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
})
// converted === 'Двести пятьдесят одно сообщение'
```

```js
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

const converted = convertNumberToWordsRu('6712', {
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
})
// converted === 'Шесть тысяч семьсот двенадцать комментариев'
```

```js
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

const converted = convertNumberToWordsRu('9516351', {
  showNumberParts: {
    fractional: false,
  },
  showCurrency: {
    integer: false,
  },
})
// converted === 'Девять миллионов пятьсот шестнадцать тысяч триста пятьдесят один'
```

```js
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

const converted = convertNumberToWordsRu('452/971', {
  convertNumberToWords: {
    fractional: true,
  },
  showCurrency: {
    fractional: false,
  },
})
// converted === 'Четыреста пятьдесят две девятьсот семьдесят первых'
```

```js
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

const converted = convertNumberToWordsRu('235.00000706', {
  currency: 'number',
  convertNumberToWords: {
    fractional: true,
  },
})
// converted === 'Двести тридцать пять целых семьсот шесть стомиллионных'
```

```js
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

let converted = convertNumberToWordsRu('0.5', {
  currency: 'number',
  convertNumberToWords: {
    fractional: true,
  },
})
converted = converted + ' литра воды'
// converted === 'Ноль целых пять десятых литра воды'
```

# License

MIT
