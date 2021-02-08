import digits from 'units/ordinalNumbers/digits';
import tenToNineteen from 'units/ordinalNumbers/tenToNineteen';
import tens from 'units/ordinalNumbers/tens';
import hundreds from 'units/ordinalNumbers/hundreds';

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
