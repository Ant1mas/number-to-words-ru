import { DEFAULT_OPTIONS } from 'src/defaultOptions'
import objectGet from 'src/functions/objectGet'
import set from 'src/functions/set'
import updateObjectDeep from 'src/functions/updateObjectDeep'
import { DECLENSIONS } from 'src/units/declensions'
import { STRING_CURRENCIES } from 'src/units/stringCurrencies'

import type { ConvertOptions } from 'src/typeScript/types/ConvertOptions'
import type { CustomCurrency } from 'src/typeScript/types/CustomCurrency'

/**
 * Создать объект валюты на основе объекта валюты пользователя.
 * @param {ConvertOptions} convertOptions - Опции конвертирования валюты.
 * @return {CustomCurrency} Готовый для использования объект валюты.
 */
export default function getCustomCurrency(
  convertOptions: ConvertOptions,
): CustomCurrency {
  const userCurrencyObject: any = structuredClone(convertOptions.currency)
  // Название валюты по умолчанию
  const defaultCurrency: any = DEFAULT_OPTIONS.currency
  // Объект валюты по умолчанию
  const defaultCurrencyObject = STRING_CURRENCIES[defaultCurrency]
  let editedCurrencyObject: CustomCurrency = structuredClone(
    defaultCurrencyObject,
  )
  // Обновить объект по умолчанию новыми значениями
  editedCurrencyObject = updateObjectDeep(
    editedCurrencyObject,
    userCurrencyObject,
  )
  // Заменить падежи в объекте currencyNameDeclensions
  // данными из массива currencyNameCases
  // currencyNameCases[0]
  if (
    objectGet(userCurrencyObject, [
      'currencyNameDeclensions',
      DECLENSIONS.NOMINATIVE,
      0,
    ]) === undefined &&
    objectGet(userCurrencyObject, ['currencyNameCases', 0]) !== undefined
  ) {
    set(
      editedCurrencyObject,
      ['currencyNameDeclensions', DECLENSIONS.NOMINATIVE, 0],
      userCurrencyObject.currencyNameCases[0],
    )
  }
  // currencyNameCases[1]
  if (
    objectGet(userCurrencyObject, [
      'currencyNameDeclensions',
      DECLENSIONS.GENITIVE,
      0,
    ]) === undefined &&
    objectGet(userCurrencyObject, ['currencyNameCases', 1]) !== undefined
  ) {
    set(
      editedCurrencyObject,
      ['currencyNameDeclensions', DECLENSIONS.GENITIVE, 0],
      userCurrencyObject.currencyNameCases[1],
    )
  }
  // currencyNameCases[2]
  if (
    objectGet(userCurrencyObject, [
      'currencyNameDeclensions',
      DECLENSIONS.GENITIVE,
      1,
    ]) === undefined &&
    objectGet(userCurrencyObject, ['currencyNameCases', 2]) !== undefined
  ) {
    set(
      editedCurrencyObject,
      ['currencyNameDeclensions', DECLENSIONS.GENITIVE, 1],
      userCurrencyObject.currencyNameCases[2],
    )
  }
  // Заменить падежи в объекте fractionalPartNameDeclensions
  // данными из массива fractionalPartNameCases
  // fractionalPartNameCases[0]
  if (
    objectGet(userCurrencyObject, [
      'fractionalPartNameDeclensions',
      DECLENSIONS.NOMINATIVE,
      0,
    ]) === undefined &&
    objectGet(userCurrencyObject, ['fractionalPartNameCases', 0]) !== undefined
  ) {
    set(
      editedCurrencyObject,
      ['fractionalPartNameDeclensions', DECLENSIONS.NOMINATIVE, 0],
      userCurrencyObject.fractionalPartNameCases[0],
    )
  }
  // fractionalPartNameCases[1]
  if (
    objectGet(userCurrencyObject, [
      'fractionalPartNameDeclensions',
      DECLENSIONS.GENITIVE,
      0,
    ]) === undefined &&
    objectGet(userCurrencyObject, ['fractionalPartNameCases', 1]) !== undefined
  ) {
    set(
      editedCurrencyObject,
      ['fractionalPartNameDeclensions', DECLENSIONS.GENITIVE, 0],
      userCurrencyObject.fractionalPartNameCases[1],
    )
  }
  // fractionalPartNameCases[2]
  if (
    objectGet(userCurrencyObject, [
      'fractionalPartNameDeclensions',
      DECLENSIONS.GENITIVE,
      1,
    ]) === undefined &&
    objectGet(userCurrencyObject, ['fractionalPartNameCases', 2]) !== undefined
  ) {
    set(
      editedCurrencyObject,
      ['fractionalPartNameDeclensions', DECLENSIONS.GENITIVE, 1],
      userCurrencyObject.fractionalPartNameCases[2],
    )
  }
  // Удалить объекты currencyNameCases и fractionalPartNameCases
  delete editedCurrencyObject.currencyNameCases
  delete editedCurrencyObject.fractionalPartNameCases
  return editedCurrencyObject
}
