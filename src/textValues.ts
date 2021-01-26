import genders from 'units/genders';
import slashNumberForms from 'units/slashNumberForms';
import getFractionalNameForms from 'units/functions/getFractionalNameForms';
import getSlashNumberUnitName from 'units/functions/getSlashNumberUnitName';
import {stringCurrencies} from 'units/stringCurrencies';
import {CurrencyStringValues} from 'typeScript/interfaces/CurrencyStringValues';
import {SlashNumberForms} from 'typeScript/interfaces/SlashNumberForms';
import {declensions} from "./units/declensions";

type DeclensionNumberName = string | {
  [key: string]: string
}

export interface DeclensionNumberNames {
  [key: string]: [
    DeclensionNumberName,
    DeclensionNumberName,
    DeclensionNumberName,
    DeclensionNumberName,
    DeclensionNumberName,
    DeclensionNumberName,
    DeclensionNumberName,
    DeclensionNumberName,
    DeclensionNumberName,
    DeclensionNumberName];
}

interface NumberNames {
  numbers: DeclensionNumberNames,
  tenToNineteen: DeclensionNumberNames,
  tens: DeclensionNumberNames,
  hundreds: DeclensionNumberNames
}

interface TextValues {
  minus: string,
  numberNames: NumberNames,
  slashNumberUnits: SlashNumberForms,
  currency: CurrencyStringValues,
  getFractionalUnits: Function,
  getSlashNumberUnitsNames: Function,
}

// Правила взяты отсюда http://www.fio.ru/pravila/grammatika/sklonenie-imen-chislitelnykh/
export const numberNames: NumberNames = {
  numbers: {
    [declensions.NOMINATIVE]: ['ноль',
      {
        [genders.MALE]: 'один',
        [genders.NEUTER]: 'одно',
        [genders.FEMALE]: 'одна',
      },
      {
        [genders.MALE]:'два',
        [genders.NEUTER]:'два',
        [genders.FEMALE]:'две',
      }, 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
    [declensions.GENITIVE]: ['ноль',
      {
        [genders.MALE]: 'одного',
        [genders.NEUTER]: 'одного',
        [genders.FEMALE]: 'одной',
      }, 'двух', 'трех', 'четырех', 'пяти', 'шести', 'семи', 'восьми', 'девяти'],
    [declensions.DATIVE]: ['нолю',
      {
        [genders.MALE]: 'одному',
        [genders.NEUTER]: 'одному',
        [genders.FEMALE]: 'одной',
      }, 'двум', 'трем', 'четырем', 'пяти', 'шести', 'семи', 'восьми', 'девяти'],
    [declensions.ACCUSATIVE]: ['ноль',
      {
        [genders.MALE]: 'один',
        [genders.NEUTER]: 'одного',
        [genders.FEMALE]: 'одну',
      },
      {
        [genders.MALE]:'два',
        [genders.NEUTER]:'два',
        [genders.FEMALE]:'две',
      }, 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
    [declensions.INSTRUMENTAL]: ['нолем',
      {
        [genders.MALE]: 'одним',
        [genders.NEUTER]: 'одним',
        [genders.FEMALE]: 'одной',
      }, 'двумя', 'тремя', 'четырьмя', 'пятью', 'шестью', 'семью', 'восемью', 'девятью'],
    [declensions.PREPOSITIONAL]: ['ноле',
      {
        [genders.MALE]: 'одном',
        [genders.NEUTER]: 'одном',
        [genders.FEMALE]: 'одной',
      }, 'двух', 'трех', 'четырех', 'пяти', 'шести', 'семи', 'восьми', 'девяти'],
  },
  tenToNineteen: {
    [declensions.NOMINATIVE]: ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
    [declensions.GENITIVE]: ['десяти', 'одиннадцати', 'двенадцати', 'тринадцати', 'четырнадцати', 'пятнадцати', 'шестнадцати', 'семнадцати', 'восемнадцати', 'девятнадцати'],
    [declensions.DATIVE]: ['десяти', 'одиннадцати', 'двенадцати', 'тринадцати', 'четырнадцати', 'пятнадцати', 'шестнадцати', 'семнадцати', 'восемнадцати', 'девятнадцати'],
    [declensions.ACCUSATIVE]: ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
    [declensions.INSTRUMENTAL]: ['десятью', 'одиннадцатью', 'двенадцатью', 'тринадцатью', 'четырнадцатью', 'пятнадцатью', 'шестнадцатью', 'семнадцатью', 'восемнадцатью', 'девятнадцатью'],
    [declensions.PREPOSITIONAL]: ['десяти', 'одиннадцати', 'двенадцати', 'тринадцати', 'четырнадцати', 'пятнадцати', 'шестнадцати', 'семнадцати', 'восемнадцати', 'девятнадцати'],
  },
  tens: {
    [declensions.NOMINATIVE]: ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
    [declensions.GENITIVE]: ['', '', 'двадцати', 'тридцати', 'сорока', 'пятидесяти', 'шестидесяти', 'семидесяти', 'восьмидесяти', 'девяноста'],
    [declensions.DATIVE]: ['', '', 'двадцати', 'тридцати', 'сорока', 'пятидесяти', 'шестидесяти', 'семидесяти', 'восьмидесяти', 'девяноста'],
    [declensions.ACCUSATIVE]: ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
    [declensions.INSTRUMENTAL]: ['', '', 'двадцатью', 'тридцатью', 'сорока', 'пятьюдесятью', 'шестьюдесятью', 'семьюдесятью', 'восьмьюдесятью', 'девяноста'],
    [declensions.PREPOSITIONAL]: ['', '', 'двадцати', 'тридцати', 'сорока', 'пятидесяти', 'шестидесяти', 'семидесяти', 'восьмидесяти', 'девяноста'],
  },
  hundreds: {
    [declensions.NOMINATIVE]: ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
    [declensions.GENITIVE]: ['', 'ста', 'двухсот', 'трехсот', 'четырехсот', 'пятисот', 'шестисот', 'семисот', 'восемисот', 'девятисот'],
    [declensions.DATIVE]: ['', 'ста', 'двумстам', 'тремстам', 'четыремстам', 'пятистам', 'шестистам', 'семистам', 'восемистам', 'девятистам'],
    [declensions.ACCUSATIVE]: ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
    [declensions.INSTRUMENTAL]: ['', 'ста', 'двумястами', 'тремястами', 'четырьмястами', 'пятьюстами', 'шестьюстами', 'семьюстами', 'восемьюстами', 'девятьюстами'],
    [declensions.PREPOSITIONAL]: ['', 'ста', 'двухстах', 'трехстах', 'четырехстах', 'пятистах', 'шестистах', 'семистах', 'восемистах', 'девятистах']
  }
};

const textValues: TextValues = {
  minus: 'минус',
  slashNumberUnits: slashNumberForms,
  numberNames,
  currency: stringCurrencies,
  getFractionalUnits: getFractionalNameForms,
  getSlashNumberUnitsNames: getSlashNumberUnitName,
};

export default textValues;
