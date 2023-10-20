import { DIGITS } from '@/lib/constants/digits'
import { HUNDREDS } from '@/lib/constants/hundreds'
import { TEN_TO_NINETEEN } from '@/lib/constants/tenToNineteen'
import { TENS } from '@/lib/constants/tens'

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
