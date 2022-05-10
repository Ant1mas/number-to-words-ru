import { convert as convertNumberToWords } from 'src/index'

console.log(
  'numberToWordsRu :>> ',
  convertNumberToWords('-2564.6565', {
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
