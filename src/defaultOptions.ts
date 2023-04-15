import { DECLENSIONS } from 'src/units/declensions'
import type { ConvertOptions } from '@/src/typeScript/types/ConvertOptions'

export const DEFAULT_OPTIONS: ConvertOptions = {
  currency: 'rub',
  declension: DECLENSIONS.NOMINATIVE,
  roundNumber: -1,
  convertMinusSignToWord: true,
  showNumberParts: {
    integer: true,
    fractional: true,
  },
  convertNumberToWords: {
    integer: true,
    fractional: false,
  },
  showCurrency: {
    integer: true,
    fractional: true,
  },
}
