//@ts-expect-error
import { convert as convertNumberToWordsRu } from 'dist/index.umd.cjs'

test('convertMinusSignToWord', () => {
  expect(convertNumberToWordsRu('-15.45', {
    convertMinusSignToWord: true,
  })).toBe('Минус пятнадцать рублей 45 копеек');
  expect(convertNumberToWordsRu('-15.45', {
    convertMinusSignToWord: false,
  })).toBe('- пятнадцать рублей 45 копеек');
});
