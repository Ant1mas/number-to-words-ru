import { DIGITS } from 'src/units/ordinalNumbers/digits'
import { TEN_TO_NINETEEN } from 'src/units/ordinalNumbers/tenToNineteen'
import { TENS } from 'src/units/ordinalNumbers/tens'
import { HUNDREDS } from 'src/units/ordinalNumbers/hundreds'

type OrdinalNumbersDeclensions = {
  digits: object[]
  tenToNineteen: object[]
  tens: object[]
  hundreds: object[]
}

export const ORDINAL_NUMBERS_DECLENSIONS: OrdinalNumbersDeclensions = {
  digits: DIGITS,
  tenToNineteen: TEN_TO_NINETEEN,
  tens: TENS,
  hundreds: HUNDREDS,
}
