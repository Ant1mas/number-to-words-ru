import fractionalPartToMinLength from '@/functions/fractionalPartToMinLength'

test('test', () => {
  expect(
    fractionalPartToMinLength(['+', '123', '/', '4'], {
      fractionalPartMinLength: 5,
    }),
  ).toEqual(['+', '123', '/', '4'])
  expect(
    fractionalPartToMinLength(['+', '123', '.', '456'], {
      fractionalPartMinLength: 2,
    }),
  ).toEqual(['+', '123', '.', '456'])
  expect(
    fractionalPartToMinLength(['+', '123', '.', '4'], {
      fractionalPartMinLength: 10,
    }),
  ).toEqual(['+', '123', '.', '4000000000'])
})
