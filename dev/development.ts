import { convert as numberToWordsRu } from '@/index'

// Change this 2 constants
const NUMBER = '-2564.6565'
const OPTIONS = {
  currency: 'number',
  convertNumberToWords: {
    integer: true,
    fractional: true,
  },
  showCurrency: {
    integer: true,
    fractional: true,
  },
}

// Add data to page
const app = document.querySelector('#app')
//@ts-expect-error
const text = document.createTextNode(numberToWordsRu(NUMBER, OPTIONS))
app?.appendChild(text)
console.log(
  'numberToWordsRu :>> ',
  //@ts-expect-error
  numberToWordsRu(NUMBER, OPTIONS),
)
