import numberToWordsRu from 'index';
import declensions from "../units/declensions";

console.log('numberToWordsRu :>> ', numberToWordsRu.convert('-2564,6565', {
  currency: 'number',
  convertNumbertToWords: {
    integer: true,
    fractional: true,
  },
  showCurrency: {
    integer: true,
    fractional: true
  },
  declension: declensions.NOMINATIVE
}));
