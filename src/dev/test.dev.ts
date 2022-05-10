import numberToWordsRu from 'src/index'

console.log(
  'numberToWordsRu :>> ',
  numberToWordsRu.convert('-2564.6565', {
    currency: 'number',
    convertNumberToWords: {
      integer: true,
      fractional: true,
    },
    showCurrency: {
      integer: true,
      fractional: true,
    },
  })
)
