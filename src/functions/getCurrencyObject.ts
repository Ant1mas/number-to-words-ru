import { STRING_CURRENCIES } from 'src/units/stringCurrencies'
import { DEFAULT_OPTIONS } from 'src/defaultOptions'
import getCustomCurrency from 'src/functions/getCustomCurrency'
import type { ConvertOptions } from '@/src/typeScript/types/ConvertOptions'
import type { CustomCurrency } from '@/src/typeScript/types/CustomCurrency'

/**
 * Получить объект с данными валюты.
 * @param {ConvertOptions} convertOptions - Параметры конвертирования числа.
 * @return {CustomCurrency} Данные валюты.
 */
export default function getCurrencyObject(
  convertOptions?: ConvertOptions,
): CustomCurrency {
  let currencyObject: CustomCurrency
  const currency = convertOptions?.currency || DEFAULT_OPTIONS.currency
  // Если валюта указана словами
  if (typeof currency === 'string') {
    currencyObject = STRING_CURRENCIES[currency]
  }
  // Если валюта описана объектом
  if (typeof currency === 'object') {
    currencyObject = getCustomCurrency(convertOptions)
  }
  return currencyObject
}
