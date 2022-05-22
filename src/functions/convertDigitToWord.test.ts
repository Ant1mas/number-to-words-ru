import convertDigitToWord from './convertDigitToWord'
import numberNames from 'src/units/numbers'

test('test', () => {
  expect(
    convertDigitToWord(1, numberNames.numbers, 'nominative', 'FEMALE')
  ).toEqual('одна')
  expect(
    convertDigitToWord(1, numberNames.numbers, 'prepositional', 'MALE')
  ).toEqual('одном')
  expect(
    convertDigitToWord(2, numberNames.numbers, 'nominative', 'FEMALE')
  ).toEqual('две')
  expect(
    convertDigitToWord(2, numberNames.numbers, 'prepositional', 'MALE')
  ).toEqual('двух')
  expect(
    convertDigitToWord(5, numberNames.tenToNineteen, 'nominative', 'MALE')
  ).toEqual('пятнадцать')
  expect(
    convertDigitToWord(5, numberNames.tenToNineteen, 'nominative', 'FEMALE')
  ).toEqual('пятнадцать')
  expect(
    convertDigitToWord(5, numberNames.hundreds, 'genitive', 'FEMALE')
  ).toEqual('пятисот')
  expect(convertDigitToWord(5, numberNames.tens, 'genitive', 'FEMALE')).toEqual(
    'пятидесяти'
  )
})
