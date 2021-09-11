import getNumberScaleName from './getNumberScaleName';

test('test', () => {
  expect(getNumberScaleName(0, 0, 'nominative')).toBe('');
  expect(getNumberScaleName(1, 0, 'nominative')).toBe('тысяча');
  expect(getNumberScaleName(1, 1, 'nominative')).toBe('тысячи');
  expect(getNumberScaleName(1, 1, 'accusative')).toBe('тысячи');
  expect(getNumberScaleName(1, 2, 'nominative')).toBe('тысяч');
  expect(getNumberScaleName(1, 2, 'accusative')).toBe('тысяч');
  expect(getNumberScaleName(2, 1, 'nominative')).toBe('миллиона');
  expect(getNumberScaleName(2, 0, 'nominative')).toBe('миллион');
})
