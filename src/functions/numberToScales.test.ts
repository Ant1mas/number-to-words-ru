import numberToScales from './numberToScales';

test('test', () => {
  expect(numberToScales('00000000001234567890000')).toEqual(['000', '000', '000', '001', '234', '567', '890', '000']);
});
