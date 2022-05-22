// Type definitions for number-to-words-ru
// Project: https://github.com/Ant1mas/number-to-words-ru
// Definitions by: Anton Moskovskiy <https://github.com/Ant1mas>

type Declension =
  | 'nominative'
  | 'genitive'
  | 'dative'
  | 'accusative'
  | 'instrumental'
  | 'prepositional'

interface CustomCurrency {
  /**
   * Integer currency name forms\
   * for digits [1, 2-4, 5-9]\
   * e.g. ['рубль', 'рубля', 'рублей']
   */
  currencyNameCases?: [string, string, string]

  /**
   * Integer currency name forms\
   * for declensions
   */
  currencyNameDeclensions?: {
    [key in Declension]?: [string, string]
  }

  /**
   * Fractional number currency name forms\
   * for digits [1, 2-4, 5-9]\
   * e.g. ['копейка', 'копейки', 'копеек']
   */
  fractionalPartNameCases?: [string, string, string]

  /**
   * Fractional number currency name forms\
   * for declensions
   */
  fractionalPartNameDeclensions?: {
    [key in Declension]?: [string, string]
  }

  currencyNounGender?: {
    /**
     * 0 => 'один', 1 => 'одна', 2 => 'одно'\
     * Default: `0`
     */
    integer?: 0 | 1 | 2

    /**
     * 0 => 'один', 1 => 'одна', 2 => 'одно'\
     * Default: `1`
     */
    fractionalPart?: 0 | 1 | 2
  }
  /**
   * Minimal length of fractional part\
   * Default: `2`
   */
  fractionalPartMinLength?: number
}

type OptionCurrency = 'rub' | 'usd' | 'eur' | 'number' | CustomCurrency

interface ConvertOptions {
  /**
   * Select currency\
   * `'rub'` Russian ruble. 124 рубля 42 копейки\
   * `'usd'` Dollar. 124 доллара 42 цента\
   * `'eur'` Euro. 124 евро 42 цента\
   * `'number'` Number without currency. 124 целых 42 сотых\
   * `Object` Custom currency. 124 юаня 42 фыня\
   * Default: `'rub'`
   */
  currency?: OptionCurrency
  /**
   * Select declension\
   * `'nominative'` Одна тысяча два рубля\
   * `'genitive'` Одной тысячи двух рублей\
   * `'dative'` Одной тысяче двум рублям\
   * `'accusative'` Одну тысячу два рубля\
   * `'instrumental'` Одной тысячей двумя рублями\
   * `'prepositional'` Одной тысяче двух рублях\
   * Default: `nominative`
   */
  declension?: Declension
  /**
   * Rounding\
   * `-1` Rounding disabled\
   * `0` and more. Precision of rounding\
   * Default: `-1`
   */
  roundNumber?: number
  /**
   * Convert minus sign to word\
   * `true` Минус\
   * `false` -\
   * Default: `true`
   */
  convertMinusSignToWord?: boolean
  /**
   * Show number parts\
   * `Object`
   */
  showNumberParts?: {
    /**
     * Show integer part of number\
     * `true` **Два рубля** пять копеек\
     * `false` Пять копеек\
     * Default: `true`
     */
    integer?: boolean
    /**
     * Show fractional part of number\
     * `true` Два рубля **пять копеек**\
     * `false` Два рубля\
     * Default: `true`
     */
    fractional?: boolean
  }
  /**
   * Convert number parts to words\
   * `Object`
   */
  convertNumberToWords?: {
    /**
     * Convert integer part to words\
     * `true` **Два** рубля пять копеек\
     * `false` **2** рубля пять копеек\
     * Default: `true`
     */
    integer?: boolean
    /**
     * Convert fractional part to words\
     * `true` Два рубля **пять** копеек\
     * `false` Два рубля **5** копеек\
     * Default: `false`
     */
    fractional?: boolean
  }
  /**
   * Convert number parts to words\
   * `Object`\
   * @deprecated Use `convertNumberToWords`
   */
  convertNumbertToWords?: {
    /**
     * Convert integer part to words\
     * `true` **Два** рубля пять копеек\
     * `false` **2** рубля пять копеек\
     * Default: `true`
     */
    integer?: boolean
    /**
     * Convert fractional part to words\
     * `true` Два рубля **пять** копеек\
     * `false` Два рубля **5** копеек\
     * Default: `false`
     */
    fractional?: boolean
  }
  /**
   * Show currency of number parts\
   * `Object`
   */
  showCurrency?: {
    /**
     * Show currency of integer part\
     * `true` Два **рубля** пять копеек\
     * `false` Два пять копеек\
     * Default: `true`
     */
    integer?: boolean
    /**
     * Show currency of fractional part\
     * `true` Два рубля пять **копеек**\
     * `false` Два рубля пять\
     * Default: `true`
     */
    fractional?: boolean
  }
}

/**
 * What does this module do:
 *
 * `1234567.89` --> Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 89 копеек\
 * `123.45` --> Сто двадцать три рубля сорок пять копеек\
 * `251` --> Двести пятьдесят одно сообщение\
 * `6712` --> Шесть тысяч семьсот двенадцать комментариев\
 * `-345.21` --> Минус триста сорок пять рублей 21 копейка\
 * `450.3` --> Четыреста пятьдесят долларов 30 центов\
 * `122.00572` --> Сто двадцать две целых пятьсот семьдесят две стотысячных\
 * `5/123` --> Пять сто двадцать третьих
 */
declare module 'number-to-words-ru' {
  export interface numberToWordsRuFunctions {
    convert: typeof convert
  }
  /**
   * Convert number to words\
   * If typed as `number` max value is `9'007'199'254'740'991` (limit of Javascript).\
   * If typed as `string` max value is `306 digits` before point and `305 digits` after point.
   *
   * @param number The input number
   * @param options The convert options
   */
  export function convert(
    number: string | number,
    options?: ConvertOptions
  ): string
  /**
   * Object of functions:\
   * `convert`: Convert number to words.
   */
  const numberToWordsRu: numberToWordsRuFunctions
  export default numberToWordsRu
}
