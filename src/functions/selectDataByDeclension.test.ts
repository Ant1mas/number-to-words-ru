import selectDataByDeclension from './selectDataByDeclension';

let testDeclensionsObject = {};
beforeAll(() => {
  testDeclensionsObject = {
    nominative: ["десятая", "десятые"],
    genitive: ["десятой", "десятых"],
    dative: ["десятой", "десятым"],
    accusative: ["десятую", "десятых"],
    instrumental: ["десятой", "десятыми"],
    prepositional: ["десятой", "десятых"]
  };
})

test('Обычные случаи', () => {
  expect(selectDataByDeclension(testDeclensionsObject, 'prepositional')).toBe('десятой');
  expect(selectDataByDeclension(testDeclensionsObject, 'nominative', false)).toBe('десятая');
  expect(selectDataByDeclension(testDeclensionsObject, 'nominative', true)).toBe('десятых');
  expect(selectDataByDeclension(testDeclensionsObject, 'instrumental', false)).toBe('десятой');
  expect(selectDataByDeclension(testDeclensionsObject, 'instrumental', true)).toBe('десятыми');
});
test('Особые случаи', () => {
  expect(selectDataByDeclension(testDeclensionsObject, 'nominative', true)).toBe('десятых');
  expect(selectDataByDeclension(testDeclensionsObject, 'accusative', true)).toBe('десятых');
});
