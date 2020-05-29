<p align="center">
  <img src="https://user-images.githubusercontent.com/7397158/69491493-d4c97d00-0eb7-11ea-8375-7bf54187d0e1.png" alt="Logo" width="150" align="center" />
</p>
<h1 align="center">number-to-words-ru</h1>
<div align="center">
  Конвертирование числа в слова на русском языке.

  🔢 ➡ 🔡
</div>

[English version of README](https://github.com/Ant1mas/number-to-words-ru/blob/master/README-english.md)

# Что делает этот модуль
1234567.89 ➡ Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 89 копеек

123.45 ➡ Сто двадцать три рубля **сорок пять** копеек

251 ➡ Двести пятьдесят одно **сообщение**

6712 ➡ Шесть тысяч семьсот двенадцать **комментариев**

-345.21 ➡ **Минус** триста сорок пять рублей 21 копейка

450.3 ➡ Четыреста пятьдесят **долларов** 30 **центов**

122.00572 ➡ Сто двадцать две **целых** пятьсот семьдесят две **стотысячных**

5/123 ➡ Пять сто двадцать третьих

# Демонстрация работы

[Страница демонстрации работы модуля](https://ant1mas.github.io/number-to-words-ru/)

# Возможности
- **Максимум 306** цифр **до запятой** и **305** цифр **после запятой** в числе могут быть конвертированы в слова (если число указано как строка).
- Использование **любой своей валюты**.
- Использование с любым объектом (напр. "сообщение", "комментарий", "работа"...).
- Конвертирование числа в слова без реальной валюты ("целых", "десятых", "стотысячных" и т. д.)
- Конвертирование **дробных чисел** (с разделителем "/").
- **Округление числа** до заданной точности.
- **Автоматическое округление** до 2-ух знаков после запятой числа со стандартной валютой.
- **Скрытие части числа** до запятой или после запятой.
- **Скрытие валюты** в целой и/или в дробной части числа.
- **Отмена конвертирования знака минус** в слово.

# Установка
Установить с помощью npm:
```bash
npm install number-to-words-ru
```
Установить с помощью yarn:
```bash
yarn add number-to-words-ru
```

# Использование
```js
const numberToWordsRu = require('number-to-words-ru');
// или
import numberToWordsRu from 'number-to-words-ru'; // ES6


// Использование без опций
numberToWordsRu.convert('104');
// Сто четыре рубля 00 копеек

// или с опциями
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

## Методы

- [convert(number[, options])](#methods-convert)

------------------------

**<p id="methods-convert">`convert(number[, options])`</p>**

*Конвертировать число в слова.*

Тип возвращаемых данных: *String*.

<br/>

`number`: {String | Number}

*Число, которое нужно конвертировать.*

Если введенное число типа *Number*, то максимальное значение **9'007'199'254'740'991** (ограничение Javascript).

Если введенное число типа *String*, то максимальное значение **10<sup>305</sup>** (306 цифр) до запятой и **10<sup>304</sup>** (305 цифр) после запятой.

<br/>

`options`: {Object}

*Опции конвертирования числа.*

**Опций по умолчанию**:

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

### **Объект опций**

`currency`: {String | Object}

*Валюта числа.*

**По умолчанию**: `'rub'`

Строковые значения:

| Строковое значение  | Описание | Пример |
| ------------- | ------------- | ------------- |
| `'rub'`  | Рубль  | 124 **рубля** 42 **копейки**  |
| `'usd'`  | Доллар  | 124 **доллара** 42 **цента**  |
| `'eur'`  | Евро  | 124 **евро** 42 **цента**  |
| `'number'`  | Число без реальной валюты  | 124 **целых** 42 **сотых**  |

<br/>

Можно задать свою валюту объектом:

```js
{
  currencyNameCases: ['рубль', 'рубля', 'рублей'], // Падежи названия целой части числа
  fractionalPartNameCases: ['копейка', 'копейки', 'копеек'], // Падежи названия дробной части числа
  currencyNounGender: {
    integer: 0, // 0 => Мужской род ('один', 'два'...)
    fractionalPart: 1 // 1 => Женский род ('одна', 'две'...)
  }
}
// или
{
  currencyNameCases: ['сообщение', 'сообщения', 'сообщений'], // [1 сообщение, 2-4 сообщения, 5-9 сообщений]
  fractionalPartNameCases: ['', '', ''],
  currencyNounGender: {
    integer: 2, // 2 => Средний род ('одно', 'два'...)
    fractionalPart: 0
  }
}
```
<br/>

`roundNumber`: {Number}

*Округлить число до заданной точности.*

**По умолчанию**: `-1`

`{Number}` - Количество знаков после запятой, до которой нужно округлить число.

`-1` - Отключить округление.

Если опция `currency` является стандартной валютой (`rub` / `usd` / `eur`), то даже после округления число будет еще раз округлено до 2 знаков после запятой. Также в этом случае у результата в дробной части всегда будет 2 знака (например "00", "05").

Например:

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

Если разделитель числа является дробной чертой ("`/`"), то число НЕ будет округлено в любом случае.

<br/>

`convertMinusSignToWord`: {Boolean}

*Конвертировать знак минус в слово ('-' => 'минус').*

**По умолчанию**: `true`

<br/>

`showNumberParts`: {Object}

*Отображать часть числа.*

**Объект по умолчанию**:

```js
showNumberParts: {
  integer: true, // Целая часть числа
  fractional: true // Дробная часть числа
}
```

Например:

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

*Конвертировать в слова указанные части числа .*

**Объект по умолчанию**:

```js
convertNumbertToWords: {
  integer: true, // Целая часть числа
  fractional: false // Дробная часть числа
}
```

Например:

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

*Отображать валюту в указанных частях числа.*

**Объект по умолчанию**:

```js
showCurrency: {
  integer: true, // Целая часть числа
  fractional: true // Дробная часть числа
}
```

Например:

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

<br/>

# Примеры

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

# Лицензия

MIT
