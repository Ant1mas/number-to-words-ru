export interface CurrencySettings {
  /**
   * Integer currency name forms\
   * for gidits [1, 2-4, 5-9]\
   * e.g. ['рубль', 'рубля', 'рублей']
   */
  currencyNameCases?: [string, string, string],

  /**
   * Fractional number currency name forms\
   * for gidits [1, 2-4, 5-9]\
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
   * 'rub'	Russian ruble	124 рубля 42 копейки\
   * 'usd'	Dollar	124 доллара 42 цента\
   * 'eur'	Euro	124 евро 42 цента\
   * 'number'	Number without currency	124 целых 42 сотых\
   * Default: `rub`
   */
  currency?: 'rub' | 'usd' | 'eur' | 'number' | CurrencySettings,
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
}
