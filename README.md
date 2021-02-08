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
- Гибкая **настройка валюты**.
- Использование **с любым объектом** (напр. "сообщение", "комментарий", "работа"...).
- Конвертирование числа в слова без реальной валюты ("целых", "десятых", "стотысячных" и т. д.)
- Конвертирование **дробных чисел** (с разделителем "/").
- Конвертирование **в любом падеже**.
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
  declension: 'nominative',
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

- convert(number, [options])

------------------------

<br/><br/>

#### **Метод `convert`**

```
convert(number, [options])
```

Конвертировать число в слова.

#### **Аргументы метода**

`number (string|number)`: Число, которое нужно конвертировать.

>Если введенное число типа *number*, то максимальное значение **9'007'199'254'740'991** (ограничение Javascript).

>Если введенное число типа *string*, то максимальное значение 10<sup>305</sup> (**306 цифр**) до запятой и 10<sup>304</sup> (**305 цифр**) после запятой.

`[options] (Object)`: Опции конвертирования числа.

#### **Возвращаемое значение**

`(string)`: Возвращает конвертированное в текст число.

**Объект *options* по умолчанию**:

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

<br/><br/>

### **Аргумент `options`**

#### **`options.currency`**

```
currency: (string|Object)
```

Валюта числа.

#### **Значение по умолчанию**

'rub'

#### **Возможные значения**

- Строковые значения:

| Строковое значение  | Описание | Пример |
| ------------- | ------------- | ------------- |
| `'rub'`  | Рубль  | 124 **рубля** 42 **копейки**  |
| `'usd'`  | Доллар  | 124 **доллара** 42 **цента**  |
| `'eur'`  | Евро  | 124 **евро** 42 **цента**  |
| `'number'`  | Число без реальной валюты  | 124 **целых** 42 **сотых**  |

**Примечание**: Для всех стандартных валют, кроме `number` установлено `fractionalPartMinLength: 2`. Также эти валюты автоматически округляются до `2` знаков после запятой.

- Настроить валюту:

```js
{
  currencyNameCases: ['рубль', 'рубля', 'рублей'], // [1 рубль, 2-4 рубля, 5-9 рублей]
  fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
  currencyNounGender: {
    integer: 0, // 0 => Мужской род ('один', 'два'...)
    fractionalPart: 1 // 1 => Женский род ('одна', 'две'...)
  },
  fractionalPartMinLength: 2
}
// или
{
  currencyNameDeclensions: {
    nominative: ['рубль', 'рубли'],
    genitive: ['рубля', 'рублей'],
    dative: ['рублю', 'рублям'],
    accusative: ['рубль', 'рубли'],
    instrumental: ['рублём', 'рублями'],
    prepositional: ['рубле', 'рублях'],
  },
  fractionalPartNameDeclensions: {
    nominative: ['копейка', 'копейки'],
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
// или
{
  currencyNameCases: ['сообщение', 'сообщения', 'сообщений'],
  fractionalPartNameCases: ['', '', ''],
  currencyNounGender: {
    integer: 2, // 2 => Средний род ('одно', 'два'...)
    fractionalPart: 0
  }
}
```

**Примечание**: Если объект валюты заполнить не полностью, то недостающие параметры будут взяты из объекта валюты по умолчанию (`'rub'`).

- Обект валюты по умолчанию (`'rub'`):

```js
{
  currencyNameCases: ['рубль', 'рубля', 'рублей'], // [1 рубль, 2-4 рубля, 5-9 рублей]
  currencyNameDeclensions: {
    nominative: ['рубль', 'рубли'], // [Единственное число, Множественное число]
    genitive: ['рубля', 'рублей'],
    dative: ['рублю', 'рублям'],
    accusative: ['рубль', 'рубли'],
    instrumental: ['рублём', 'рублями'],
    prepositional: ['рубле', 'рублях'],
  },
  fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
  fractionalPartNameDeclensions: {
    nominative: ['копейка', 'копейки'],
    genitive: ['копейки', 'копеек'],
    dative: ['копейке', 'копейкам'],
    accusative: ['копейку', 'копейки'],
    instrumental: ['копейкой', 'копейками'],
    prepositional: ['копейке', 'копейках'],
  },
  currencyNounGender: {
    integer: 0, // 0 => Мужской род ('один', 'два'...)
    fractionalPart: 1 // 1 => Женский род ('одна', 'две'...)
  },
  fractionalPartMinLength: 2
}
```

#### Поля объекта `currency`:

`currencyNameCases: (Array)`: Формы названия валюты целой части числа. 3 элемента в массиве.

`currencyNameDeclensions: (Object)`: Падежи названия валюты целой части числа. В объекте 6 падежей, внутри каждого в массиве указаны формы единственного и множественного числа.

`fractionalPartNameCases: (Array)`: Формы названия валюты дробной части числа. 3 элемента в массиве.

`fractionalPartNameDeclensions: (Object)`: Падежи названия валюты дробной части числа. В объекте 6 падежей, внутри каждого в массиве указаны формы единственного и множественного числа.

`currencyNounGender: (Object)`: Род числа: 0 - мужской род (один), 1 - женский род (одна), 2 - средний род (одно).

- `integer` - Для целой части числа.

- `fractionalPart` - Для дробной части числа.

`fractionalPartMinLength: (number)`: Минимальное количество знаков, котрое может остаться в дробной части. Например, при значении `3` в дробной части возможно число `002`.

**Примечание**: В массивах `currencyNameCases` и `fractionalPartNameCases`: первый элемент для цифры 1 (`1 рубль`), второй элемент для цифр 2-4 (`2 рубля`), третий элемент для цифр 5-9 и 0 (`5 рублей`).

<br/><br/>

#### **`options.declension`**

```
declension: (string)
```

Выбрать падеж.

#### **Значение по умолчанию**

'nominative'

#### **Возможные значения**

- `'nominative'` - Именительный падеж. Например, "Двадцать одна тысяча рублей".
- `'genitive'` - Родительный падеж. Например, "Двадцати одной тысячи рублей".
- `'dative'` - Дательный падеж. Например, "Двадцати одной тысяче рублей".
- `'accusative'` - Винительный падеж. Например, "Двадцать одну тысячу рублей".
- `'instrumental'` - Творительный падеж. Например, "Двадцатью одной тысячей рублей".
- `'prepositional'` - Предложный падеж. Например, "Двадцати одной тысяче рублей".

#### Пример

```js
numberToWordsRu.convert('41521000', {
  declension: 'instrumental',
});
// Сорока одним миллионом пятьюстами двадцатью одной тысячей рублей 00 копеек

numberToWordsRu.convert('2711.00052', {
  declension: 'instrumental',
  currency: 'number',
  convertNumbertToWords: {
    fractional: true,
  },
});
// Двумя тысячами семьюстами одиннадцатью целыми пятьюдесятью двумя стотысячными

numberToWordsRu.convert('672/15', {
  declension: 'instrumental',
  convertNumbertToWords: {
    fractional: true,
  },
});
// Шестьюстами семьюдесятью двумя пятнадцатыми рубля
```

<br/><br/>

#### **`options.roundNumber`**

```
roundNumber: (number)
```

Округлить число до заданной точности.

#### **Значение по умолчанию**

-1

#### **Возможные значения**

- `(number)` - Целое число. Количество знаков после запятой, до которой нужно округлить число.
- `-1` - Отключить округление.

**Примечание**: Если опция `currency` является стандартной валютой (`'rub'` / `'usd'` / `'eur'`), то даже после округления число будет еще раз округлено до 2 знаков после запятой.

#### Пример

```js
numberToWordsRu.convert('129.6789', {
  currency: 'rub',
  roundNumber: 5,
});
// Сто двадцать девять рублей 68 копеек

numberToWordsRu.convert('129.6789', {
  currency: 'rub',
  roundNumber: 1,
});
// Сто двадцать девять рублей 70 копеек

numberToWordsRu.convert('129.6789', {
  currency: 'rub',
  roundNumber: 0,
});
// Сто тридцать рублей 00 копеек
```

**Примечание**: Если разделитель числа является дробной чертой ("`/`"), то число НЕ будет округлено в любом случае.

<br/><br/>

#### **`options.convertMinusSignToWord`**

```
convertMinusSignToWord: (Boolean)
```

Конвертировать знак минус в слово ( '-' --> 'минус' ).

#### **Значение по умолчанию**

true

<br/><br/>

#### **`options.showNumberParts`**

```
showNumberParts: (Object)
```

Отображать указанные части числа.

#### **Значение по умолчанию**

```js
{
  integer: true, // Целая часть числа
  fractional: true // Дробная часть числа
}
```

#### Пример

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

<br/><br/>

#### **`options.convertNumbertToWords`**

```
convertNumbertToWords: (Object)
```

Конвертировать в слова указанные части числа .

#### **Значение по умолчанию**

```js
{
  integer: true, // Целая часть числа
  fractional: false // Дробная часть числа
}
```

#### Пример

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

<br/><br/>

#### **`options.showCurrency`**

```
showCurrency: (Object)
```

Отображать валюту в указанных частях числа.

#### **Значение по умолчанию**

```js
{
  integer: true, // Целая часть числа
  fractional: true // Дробная часть числа
}
```

#### Пример

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

<br/><br/>

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
