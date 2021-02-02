// Type definitions for number-to-words-ru
// Project: https://github.com/Ant1mas/number-to-words-ru
// Definitions by: Anton Moskovskiy <https://github.com/Ant1mas>

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
  export interface CurrencySettings {
    /**
     * Integer currency names\
     * * for gidits [1, 2-4, 5-9]\
     * e.g. ['рубль', 'рубля', 'рублей']
     */
    currencyNameCases?: [string, string, string],

    /**
     * Fractional number currency names\
     * * for gidits [1, 2-4, 5-9]\
     * e.g. ['копейка', 'копейки', 'копеек']
     */
    fractionalPartNameCases?: [string, string, string],
    currencyNounGender?: {
      /**
       * 0 => 'один', 1 => 'одна', 2 => 'одно'\
       * Default: `0`
       */
      integer?: 0 | 1 | 2,

      /**
     * 0 => 'один', 1 => 'одна', 2 => 'одно'\
     * Default: `1`
     */
      fractionalPart?: 0 | 1 | 2
    },
    /**
     * Minimal length of fractional part\
     * Default: `2`
     */
    fractionalPartMinLength?: number
  }
  /**
   * Convert options
   */
  export interface ConvertOptions {
    /**
     * Select currency\
     * `'rub'`:	Russian ruble	124 рубля 42 копейки\
     * `'usd'`:	Dollar	124 доллара 42 цента\
     * `'eur'`:	Euro	124 евро 42 цента\
     * `'number'`:	Number without currency	124 целых 42 сотых\
     * Default: `rub`
     */
    currency?: 'rub' | 'usd' | 'eur' | 'number' | CurrencySettings;
    roundNumber?: number,
    convertMinusSignToWord?: boolean;
    showNumberParts?: {
      integer?: boolean;
      fractional?: boolean;
    },
    convertNumbertToWords?: {
      integer?: boolean;
      fractional?: boolean;
    },
    showCurrency?: {
      integer?: boolean;
      fractional?: boolean;
    },
    declension?: 'nominative'
      | 'genitive'
      | 'dative'
      | 'accusative'
      | 'instrumental'
      | 'prepositional'
  }
  export interface numberToWordsRuFunctions {
    convert: typeof convert,
  }
  /**
   * Convert number to words\
   * If typed as `number` max value is `9'007'199'254'740'991` (limit of Javascript).\
   * If typed as `string` max value is `306 digits` before point and `305 digits` after point.
   *
   * @param number The input number
   * @param options The convert options
   */
  export function convert(number: string | number, options?: ConvertOptions): string;
  /**
   * Object of functions:\
   * `convert`: Convert number to words.
   */
  const numberToWordsRu: numberToWordsRuFunctions;
  export default numberToWordsRu;
}
