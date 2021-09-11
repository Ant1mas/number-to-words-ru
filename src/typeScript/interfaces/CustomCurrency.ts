import {Declension} from "src/units/declensions";

interface CustomCurrency {
  /**
   * Integer currency name forms\
   * for digits [1, 2-4, 5-9]\
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
   * for digits [1, 2-4, 5-9]\
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

export default CustomCurrency;
