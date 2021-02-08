import * as _ from 'lodash';
import defaultOptions from 'defaultOptions';
import textValues from 'textValues';
import declensions from 'units/declensions';
import updateObjectDeep from 'functions/updateObjectDeep';
import {CurrencySettings} from 'typeScript/interfaces/ConvertInterfaces';

/**
 * Создать объект валюты на основе объекта валюты пользователя.
 * @param {ConvertOptions} convertOptions - Опции конвертирования валюты.
 * @return {CurrencySettings} Готовый для использования объект валюты.
 */
const getCustomCurrency = (convertOptions: any): CurrencySettings => {
  const userCurrencyObject = _.cloneDeep(convertOptions.currency);
  // Название валюты по умолчанию
  const defaultCurrencyName: any = defaultOptions['currency'];
  // Объект валюты по умолчанию
  const defaultCurrencyObject = textValues.currency[defaultCurrencyName];
  let editedCurrencyObject = _.cloneDeep(defaultCurrencyObject);
  editedCurrencyObject = updateObjectDeep(editedCurrencyObject, userCurrencyObject);
  // Если пользователь выбрал падеж "nominative"
  if (convertOptions.declension === declensions.NOMINATIVE) {
    // Заменить падежи в объекте целой части
    // данными из массива "currencyNameCases"
    // currencyNameCases[0]
    if (
      _.get(userCurrencyObject, ['currencyNameDeclensions', declensions.NOMINATIVE, 0]) === undefined
      && _.get(userCurrencyObject, ['currencyNameCases', 0]) !== undefined
    ) {
      _.set(editedCurrencyObject, ['currencyNameDeclensions', declensions.NOMINATIVE, 0], userCurrencyObject.currencyNameCases[0]);
    }
    // currencyNameCases[1]
    if (
      _.get(userCurrencyObject, ['currencyNameDeclensions', declensions.GENITIVE, 0]) === undefined
      && _.get(userCurrencyObject, ['currencyNameCases', 1]) !== undefined
    ) {
      _.set(editedCurrencyObject, ['currencyNameDeclensions', declensions.GENITIVE, 0], userCurrencyObject.currencyNameCases[1]);
    }
    // currencyNameCases[2]
    if (
      _.get(userCurrencyObject, ['currencyNameDeclensions', declensions.GENITIVE, 1]) === undefined
      && _.get(userCurrencyObject, ['currencyNameCases', 2]) !== undefined
    ) {
      _.set(editedCurrencyObject, ['currencyNameDeclensions', declensions.GENITIVE, 1], userCurrencyObject.currencyNameCases[2]);
    }
    // Заменить падежи в объекте дробной части
    // данными из массива "fractionalPartNameCases"
    // fractionalPartNameCases[0]
    if (
      _.get(userCurrencyObject, ['fractionalPartNameDeclensions', declensions.NOMINATIVE, 0]) === undefined
      && _.get(userCurrencyObject, ['fractionalPartNameCases', 0]) !== undefined
    ) {
      _.set(editedCurrencyObject, ['fractionalPartNameDeclensions', declensions.NOMINATIVE, 0], userCurrencyObject.fractionalPartNameCases[0]);
    }
    // fractionalPartNameCases[1]
    if (
      _.get(userCurrencyObject, ['fractionalPartNameDeclensions', declensions.GENITIVE, 0]) === undefined
      && _.get(userCurrencyObject, ['fractionalPartNameCases', 1]) !== undefined
    ) {
      _.set(editedCurrencyObject, ['fractionalPartNameDeclensions', declensions.GENITIVE, 0], userCurrencyObject.fractionalPartNameCases[1]);
    }
    // fractionalPartNameCases[2]
    if (
      _.get(userCurrencyObject, ['fractionalPartNameDeclensions', declensions.GENITIVE, 1]) === undefined
      && _.get(userCurrencyObject, ['fractionalPartNameCases', 2]) !== undefined
    ) {
      _.set(editedCurrencyObject, ['fractionalPartNameDeclensions', declensions.GENITIVE, 1], userCurrencyObject.fractionalPartNameCases[2]);
    }
  }
  // Удалить формы валюты и оставить формы падежей валюты
  delete editedCurrencyObject.currencyNameCases;
  delete editedCurrencyObject.fractionalPartNameCases;
  // Если объект оформлен правильно
  if (
    typeof editedCurrencyObject === 'object' &&
    Object.keys(editedCurrencyObject).length === 4 &&
    typeof editedCurrencyObject.currencyNounGender === 'object' &&
    Object.keys(editedCurrencyObject.currencyNounGender).length === 2 &&
    typeof editedCurrencyObject.currencyNounGender.integer === 'number' &&
    typeof editedCurrencyObject.currencyNounGender.fractionalPart === 'number' &&
    typeof editedCurrencyObject.fractionalPartMinLength === 'number' &&
    typeof editedCurrencyObject.currencyNameDeclensions === 'object' &&
    typeof editedCurrencyObject.fractionalPartNameDeclensions === 'object'
  ) {
    return editedCurrencyObject;
  } else {
  // Если объект оформлен неправильно
    throw new Error(`Wrong currency object.`);
  }
};

export default getCustomCurrency;
