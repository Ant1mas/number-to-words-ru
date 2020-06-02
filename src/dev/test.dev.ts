import numberToWordsRu from 'index';

console.log('numberToWordsRu :>> ', numberToWordsRu.convert('-2564,6565', {
  currency: 'number',
  convertNumbertToWords: {
    integer: true,
    fractional: true,
  },
}));
