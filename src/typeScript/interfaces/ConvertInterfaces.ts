import {Declension} from "units/declensions";

export interface CurrencySettings {
  /**
   * Integer currency name forms\
   * for gidits [1, 2-4, 5-9]\
   * e.g. ['рубль', 'рубля', 'рублей']
   */
  currencyNameCases?: [string, string, string],

  /**
   * Integer currency name forms\
   * for declensions
   */
  currencyNameDeclensions?: {
    [key in Declension]?: [string, string];
  },

  /**
   * Fractional number currency name forms\
   * for gidits [1, 2-4, 5-9]\
   * e.g. ['копейка', 'копейки', 'копеек']
   */
  fractionalPartNameCases?: [string, string, string],

  /**
   * Fractional number currency name forms\
   * for declensions
   */
  fractionalPartNameDeclensions?: {
    [key in Declension]?: [string, string];
  },


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
    fractionalPart?: 0 | 1 | 2,
  },
  /**
   * Minimal length of fractional part\
   * Default: `2`
   */
  fractionalPartMinLength?: number
}

export interface ConvertOptions {
  /**
   * Select currency\
   * `'rub'` Russian ruble. 124 рубля 42 копейки\
   * `'usd'` Dollar. 124 доллара 42 цента\
   * `'eur'` Euro. 124 евро 42 цента\
   * `'number'` Number without currency. 124 целых 42 сотых\
   * `Object` Custom currency. 124 юаня 42 фыня\
   * Default: `'rub'`
   */
  currency?: 'rub' | 'usd' | 'eur' | 'number' | CurrencySettings,
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
  declension?: Declension,
  /**
   * Rounding\
   * `-1` Rounding disabled\
   * `0` and more. Precision of rounding\
   * Default: `-1`
   */
  roundNumber?: number,
  /**
   * Convert minus sign to word\
   * `true` Минус\
   * `false` -\
   * Default: `true`
   */
  convertMinusSignToWord?: boolean;
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
    integer?: boolean;
    /**
     * Show fractional part of number\
     * `true` Два рубля **пять копеек**\
     * `false` Два рубля\
     * Default: `true`
     */
    fractional?: boolean;
  },
  /**
   * Convert number parts to words\
   * `Object`
   */
  convertNumbertToWords?: {
    /**
     * Convert integer part to words\
     * `true` **Два** рубля пять копеек\
     * `false` **2** рубля пять копеек\
     * Default: `true`
     */
    integer?: boolean;
    /**
     * Convert fractional part to words\
     * `true` Два рубля **пять** копеек\
     * `false` Два рубля **5** копеек\
     * Default: `false`
     */
    fractional?: boolean;
  },
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
    integer?: boolean;
    /**
     * Show currency of fractional part\
     * `true` Два рубля пять **копеек**\
     * `false` Два рубля пять\
     * Default: `true`
     */
    fractional?: boolean;
  },
}
