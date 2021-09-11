import digits from 'src/units/ordinalNumbers/digits';
import tenToNineteen from 'src/units/ordinalNumbers/tenToNineteen';
import tens from 'src/units/ordinalNumbers/tens';
import hundreds from 'src/units/ordinalNumbers/hundreds';

interface OrdinalNumbersDeclensions {
  digits: object[],
  tenToNineteen: object[],
  tens: object[],
  hundreds: object[],
};

export const ordinalNumbersDeclensions: OrdinalNumbersDeclensions = {
  digits: digits,
  tenToNineteen: tenToNineteen,
  tens: tens,
  hundreds: hundreds,
};

export default ordinalNumbersDeclensions;
