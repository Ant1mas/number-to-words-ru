import convertDigitToWord from '@/functions/convertDigitToWord'
import { NUMBERS } from '@/lib/constants/numbers'

test('test', () => {
  expect(
    convertDigitToWord(1, NUMBERS.numbers, 'nominative', 'FEMALE'),
  ).toEqual('одна')
  expect(
    convertDigitToWord(1, NUMBERS.numbers, 'prepositional', 'MALE'),
  ).toEqual('одном')
  expect(
    convertDigitToWord(2, NUMBERS.numbers, 'nominative', 'FEMALE'),
  ).toEqual('две')
  expect(
    convertDigitToWord(2, NUMBERS.numbers, 'prepositional', 'MALE'),
  ).toEqual('двух')
  expect(
    convertDigitToWord(5, NUMBERS.tenToNineteen, 'nominative', 'MALE'),
  ).toEqual('пятнадцать')
  expect(
    convertDigitToWord(5, NUMBERS.tenToNineteen, 'nominative', 'FEMALE'),
  ).toEqual('пятнадцать')
  expect(convertDigitToWord(5, NUMBERS.hundreds, 'genitive', 'FEMALE')).toEqual(
    'пятисот',
  )
  expect(convertDigitToWord(5, NUMBERS.tens, 'genitive', 'FEMALE')).toEqual(
    'пятидесяти',
  )
})
