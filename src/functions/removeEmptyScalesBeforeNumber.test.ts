import removeEmptyScalesBeforeNumber from './removeEmptyScalesBeforeNumber';

test('test', () => {
  expect(removeEmptyScalesBeforeNumber(['000', '000', '000', '001', '000', '203', '000'])).toEqual(['001', '000', '203', '000']);
  expect(removeEmptyScalesBeforeNumber(['001', '000', '203', '000'])).toEqual(['001', '000', '203', '000']);
});
