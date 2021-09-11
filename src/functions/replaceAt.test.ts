import replaceAt from './replaceAt';

test('test', () => {
  expect(replaceAt('12345', 2, '67')).toBe('12675');
  expect(replaceAt('12345', 2, '67890')).toBe('1267890');
  expect(replaceAt('12345', 2, 67890)).toBe('1267890');
  expect(replaceAt('12345', 20, 67)).toBe('1234567');
});
