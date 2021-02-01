const root = '../../../../';
const numberToWordsRu = require(`${root}dist/bundle`);

describe('Проверка падежей', () => {
  test('Родительный', () => {
    expect(numberToWordsRu.convert('0', {declension: 'genitive'}))
    .toBe('Ноля рублей 00 копеек');
    expect(numberToWordsRu.convert('1', {declension: 'genitive'}))
    .toBe('Одного рубля 00 копеек');
    expect(numberToWordsRu.convert('2', {declension: 'genitive'}))
    .toBe('Двух рублей 00 копеек');
    expect(numberToWordsRu.convert('3', {declension: 'genitive'}))
    .toBe('Трёх рублей 00 копеек');
    expect(numberToWordsRu.convert('4', {declension: 'genitive'}))
    .toBe('Четырёх рублей 00 копеек');
    expect(numberToWordsRu.convert('5', {declension: 'genitive'}))
    .toBe('Пяти рублей 00 копеек');
    expect(numberToWordsRu.convert('10', {declension: 'genitive'}))
    .toBe('Десяти рублей 00 копеек');
    expect(numberToWordsRu.convert('11', {declension: 'genitive'}))
    .toBe('Одиннадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('12', {declension: 'genitive'}))
    .toBe('Двенадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('13', {declension: 'genitive'}))
    .toBe('Тринадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('14', {declension: 'genitive'}))
    .toBe('Четырнадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('15', {declension: 'genitive'}))
    .toBe('Пятнадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('16', {declension: 'genitive'}))
    .toBe('Шестнадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('17', {declension: 'genitive'}))
    .toBe('Семнадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('18', {declension: 'genitive'}))
    .toBe('Восемнадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('19', {declension: 'genitive'}))
    .toBe('Девятнадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('20', {declension: 'genitive'}))
    .toBe('Двадцати рублей 00 копеек');
    expect(numberToWordsRu.convert('21', {declension: 'genitive'}))
    .toBe('Двадцати одного рубля 00 копеек');
    expect(numberToWordsRu.convert('30', {declension: 'genitive'}))
    .toBe('Тридцати рублей 00 копеек');
    expect(numberToWordsRu.convert('32', {declension: 'genitive'}))
    .toBe('Тридцати двух рублей 00 копеек');
    expect(numberToWordsRu.convert('40', {declension: 'genitive'}))
    .toBe('Сорока рублей 00 копеек');
    expect(numberToWordsRu.convert('43', {declension: 'genitive'}))
    .toBe('Сорока трёх рублей 00 копеек');
    expect(numberToWordsRu.convert('50', {declension: 'genitive'}))
    .toBe('Пятидесяти рублей 00 копеек');
    expect(numberToWordsRu.convert('54', {declension: 'genitive'}))
    .toBe('Пятидесяти четырёх рублей 00 копеек');
    expect(numberToWordsRu.convert('60', {declension: 'genitive'}))
    .toBe('Шестидесяти рублей 00 копеек');
    expect(numberToWordsRu.convert('70', {declension: 'genitive'}))
    .toBe('Семидесяти рублей 00 копеек');
    expect(numberToWordsRu.convert('80', {declension: 'genitive'}))
    .toBe('Восьмидесяти рублей 00 копеек');
    expect(numberToWordsRu.convert('90', {declension: 'genitive'}))
    .toBe('Девяноста рублей 00 копеек');
    expect(numberToWordsRu.convert('99', {declension: 'genitive'}))
    .toBe('Девяноста девяти рублей 00 копеек');
    expect(numberToWordsRu.convert('100', {declension: 'genitive'}))
    .toBe('Ста рублей 00 копеек');
    expect(numberToWordsRu.convert('101', {declension: 'genitive'}))
    .toBe('Ста одного рубля 00 копеек');
    expect(numberToWordsRu.convert('110', {declension: 'genitive'}))
    .toBe('Ста десяти рублей 00 копеек');
    expect(numberToWordsRu.convert('200', {declension: 'genitive'}))
    .toBe('Двухсот рублей 00 копеек');
    expect(numberToWordsRu.convert('201', {declension: 'genitive'}))
    .toBe('Двухсот одного рубля 00 копеек');
    expect(numberToWordsRu.convert('210', {declension: 'genitive'}))
    .toBe('Двухсот десяти рублей 00 копеек');
    expect(numberToWordsRu.convert('500', {declension: 'genitive'}))
    .toBe('Пятисот рублей 00 копеек');
    expect(numberToWordsRu.convert('501', {declension: 'genitive'}))
    .toBe('Пятисот одного рубля 00 копеек');
    expect(numberToWordsRu.convert('510', {declension: 'genitive'}))
    .toBe('Пятисот десяти рублей 00 копеек');
    expect(numberToWordsRu.convert('1000', {declension: 'genitive'}))
    .toBe('Одной тысячи рублей 00 копеек');
    expect(numberToWordsRu.convert('1001', {declension: 'genitive'}))
    .toBe('Одной тысячи одного рубля 00 копеек');
    expect(numberToWordsRu.convert('1002', {declension: 'genitive'}))
    .toBe('Одной тысячи двух рублей 00 копеек');
    expect(numberToWordsRu.convert('1005', {declension: 'genitive'}))
    .toBe('Одной тысячи пяти рублей 00 копеек');
    expect(numberToWordsRu.convert('1100', {declension: 'genitive'}))
    .toBe('Одной тысячи ста рублей 00 копеек');
    expect(numberToWordsRu.convert('1000000', {declension: 'genitive'}))
    .toBe('Одного миллиона рублей 00 копеек');
    expect(numberToWordsRu.convert('987654321', {declension: 'genitive'}))
    .toBe('Девятисот восьмидесяти семи миллионов шестисот пятидесяти четырёх тысяч трёхсот двадцати одного рубля 00 копеек');
    expect(numberToWordsRu.convert('1001121.01', {declension: 'genitive', convertNumbertToWords: {fractional: true}}))
    .toBe('Одного миллиона одной тысячи ста двадцати одного рубля одной копейки');
    expect(numberToWordsRu.convert('2002122.02', {declension: 'genitive', convertNumbertToWords: {fractional: true}}))
    .toBe('Двух миллионов двух тысяч ста двадцати двух рублей двух копеек');
    expect(numberToWordsRu.convert('5005125.05', {declension: 'genitive', convertNumbertToWords: {fractional: true}}))
    .toBe('Пяти миллионов пяти тысяч ста двадцати пяти рублей пяти копеек');
  });
  test('Дательный', () => {
    expect(numberToWordsRu.convert('0', {declension: 'dative'}))
    .toBe('Нолю рублям 00 копейкам');
    expect(numberToWordsRu.convert('1', {declension: 'dative'}))
    .toBe('Одному рублю 00 копейкам');
    expect(numberToWordsRu.convert('2', {declension: 'dative'}))
    .toBe('Двум рублям 00 копейкам');
    expect(numberToWordsRu.convert('3', {declension: 'dative'}))
    .toBe('Трём рублям 00 копейкам');
    expect(numberToWordsRu.convert('4', {declension: 'dative'}))
    .toBe('Четырём рублям 00 копейкам');
    expect(numberToWordsRu.convert('5', {declension: 'dative'}))
    .toBe('Пяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('10', {declension: 'dative'}))
    .toBe('Десяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('11', {declension: 'dative'}))
    .toBe('Одиннадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('12', {declension: 'dative'}))
    .toBe('Двенадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('13', {declension: 'dative'}))
    .toBe('Тринадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('14', {declension: 'dative'}))
    .toBe('Четырнадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('15', {declension: 'dative'}))
    .toBe('Пятнадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('16', {declension: 'dative'}))
    .toBe('Шестнадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('17', {declension: 'dative'}))
    .toBe('Семнадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('18', {declension: 'dative'}))
    .toBe('Восемнадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('19', {declension: 'dative'}))
    .toBe('Девятнадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('20', {declension: 'dative'}))
    .toBe('Двадцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('21', {declension: 'dative'}))
    .toBe('Двадцати одному рублю 00 копейкам');
    expect(numberToWordsRu.convert('30', {declension: 'dative'}))
    .toBe('Тридцати рублям 00 копейкам');
    expect(numberToWordsRu.convert('32', {declension: 'dative'}))
    .toBe('Тридцати двум рублям 00 копейкам');
    expect(numberToWordsRu.convert('40', {declension: 'dative'}))
    .toBe('Сорока рублям 00 копейкам');
    expect(numberToWordsRu.convert('43', {declension: 'dative'}))
    .toBe('Сорока трём рублям 00 копейкам');
    expect(numberToWordsRu.convert('50', {declension: 'dative'}))
    .toBe('Пятидесяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('54', {declension: 'dative'}))
    .toBe('Пятидесяти четырём рублям 00 копейкам');
    expect(numberToWordsRu.convert('60', {declension: 'dative'}))
    .toBe('Шестидесяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('70', {declension: 'dative'}))
    .toBe('Семидесяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('80', {declension: 'dative'}))
    .toBe('Восьмидесяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('90', {declension: 'dative'}))
    .toBe('Девяноста рублям 00 копейкам');
    expect(numberToWordsRu.convert('99', {declension: 'dative'}))
    .toBe('Девяноста девяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('100', {declension: 'dative'}))
    .toBe('Ста рублям 00 копейкам');
    expect(numberToWordsRu.convert('101', {declension: 'dative'}))
    .toBe('Ста одному рублю 00 копейкам');
    expect(numberToWordsRu.convert('110', {declension: 'dative'}))
    .toBe('Ста десяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('200', {declension: 'dative'}))
    .toBe('Двумстам рублям 00 копейкам');
    expect(numberToWordsRu.convert('201', {declension: 'dative'}))
    .toBe('Двумстам одному рублю 00 копейкам');
    expect(numberToWordsRu.convert('210', {declension: 'dative'}))
    .toBe('Двумстам десяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('500', {declension: 'dative'}))
    .toBe('Пятистам рублям 00 копейкам');
    expect(numberToWordsRu.convert('501', {declension: 'dative'}))
    .toBe('Пятистам одному рублю 00 копейкам');
    expect(numberToWordsRu.convert('510', {declension: 'dative'}))
    .toBe('Пятистам десяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('1000', {declension: 'dative'}))
    .toBe('Одной тысяче рублей 00 копейкам');
    expect(numberToWordsRu.convert('1001', {declension: 'dative'}))
    .toBe('Одной тысяче одному рублю 00 копейкам');
    expect(numberToWordsRu.convert('1002', {declension: 'dative'}))
    .toBe('Одной тысяче двум рублям 00 копейкам');
    expect(numberToWordsRu.convert('1005', {declension: 'dative'}))
    .toBe('Одной тысяче пяти рублям 00 копейкам');
    expect(numberToWordsRu.convert('1100', {declension: 'dative'}))
    .toBe('Одной тысяче ста рублям 00 копейкам');
    expect(numberToWordsRu.convert('1000000', {declension: 'dative'}))
    .toBe('Одному миллиону рублей 00 копейкам');
    expect(numberToWordsRu.convert('987654321', {declension: 'dative'}))
    .toBe('Девятистам восьмидесяти семи миллионам шестистам пятидесяти четырём тысячам трёмстам двадцати одному рублю 00 копейкам');
    expect(numberToWordsRu.convert('1001121.01', {declension: 'dative', convertNumbertToWords: {fractional: true}}))
    .toBe('Одному миллиону одной тысяче ста двадцати одному рублю одной копейке');
    expect(numberToWordsRu.convert('2002122.02', {declension: 'dative', convertNumbertToWords: {fractional: true}}))
    .toBe('Двум миллионам двум тысячам ста двадцати двум рублям двум копейкам');
    expect(numberToWordsRu.convert('5005125.05', {declension: 'dative', convertNumbertToWords: {fractional: true}}))
    .toBe('Пяти миллионам пяти тысячам ста двадцати пяти рублям пяти копейкам');
  });
  test('Винительный', () => {
    expect(numberToWordsRu.convert('0', {declension: 'accusative'}))
    .toBe('Ноль рублей 00 копеек');
    expect(numberToWordsRu.convert('1', {declension: 'accusative'}))
    .toBe('Один рубль 00 копеек');
    expect(numberToWordsRu.convert('2', {declension: 'accusative'}))
    .toBe('Два рубля 00 копеек');
    expect(numberToWordsRu.convert('3', {declension: 'accusative'}))
    .toBe('Три рубля 00 копеек');
    expect(numberToWordsRu.convert('4', {declension: 'accusative'}))
    .toBe('Четыре рубля 00 копеек');
    expect(numberToWordsRu.convert('5', {declension: 'accusative'}))
    .toBe('Пять рублей 00 копеек');
    expect(numberToWordsRu.convert('10', {declension: 'accusative'}))
    .toBe('Десять рублей 00 копеек');
    expect(numberToWordsRu.convert('11', {declension: 'accusative'}))
    .toBe('Одиннадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('12', {declension: 'accusative'}))
    .toBe('Двенадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('13', {declension: 'accusative'}))
    .toBe('Тринадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('14', {declension: 'accusative'}))
    .toBe('Четырнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('15', {declension: 'accusative'}))
    .toBe('Пятнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('16', {declension: 'accusative'}))
    .toBe('Шестнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('17', {declension: 'accusative'}))
    .toBe('Семнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('18', {declension: 'accusative'}))
    .toBe('Восемнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('19', {declension: 'accusative'}))
    .toBe('Девятнадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('20', {declension: 'accusative'}))
    .toBe('Двадцать рублей 00 копеек');
    expect(numberToWordsRu.convert('21', {declension: 'accusative'}))
    .toBe('Двадцать один рубль 00 копеек');
    expect(numberToWordsRu.convert('30', {declension: 'accusative'}))
    .toBe('Тридцать рублей 00 копеек');
    expect(numberToWordsRu.convert('32', {declension: 'accusative'}))
    .toBe('Тридцать два рубля 00 копеек');
    expect(numberToWordsRu.convert('40', {declension: 'accusative'}))
    .toBe('Сорок рублей 00 копеек');
    expect(numberToWordsRu.convert('43', {declension: 'accusative'}))
    .toBe('Сорок три рубля 00 копеек');
    expect(numberToWordsRu.convert('50', {declension: 'accusative'}))
    .toBe('Пятьдесят рублей 00 копеек');
    expect(numberToWordsRu.convert('54', {declension: 'accusative'}))
    .toBe('Пятьдесят четыре рубля 00 копеек');
    expect(numberToWordsRu.convert('60', {declension: 'accusative'}))
    .toBe('Шестьдесят рублей 00 копеек');
    expect(numberToWordsRu.convert('70', {declension: 'accusative'}))
    .toBe('Семьдесят рублей 00 копеек');
    expect(numberToWordsRu.convert('80', {declension: 'accusative'}))
    .toBe('Восемьдесят рублей 00 копеек');
    expect(numberToWordsRu.convert('90', {declension: 'accusative'}))
    .toBe('Девяносто рублей 00 копеек');
    expect(numberToWordsRu.convert('99', {declension: 'accusative'}))
    .toBe('Девяносто девять рублей 00 копеек');
    expect(numberToWordsRu.convert('100', {declension: 'accusative'}))
    .toBe('Сто рублей 00 копеек');
    expect(numberToWordsRu.convert('101', {declension: 'accusative'}))
    .toBe('Сто один рубль 00 копеек');
    expect(numberToWordsRu.convert('110', {declension: 'accusative'}))
    .toBe('Сто десять рублей 00 копеек');
    expect(numberToWordsRu.convert('200', {declension: 'accusative'}))
    .toBe('Двести рублей 00 копеек');
    expect(numberToWordsRu.convert('201', {declension: 'accusative'}))
    .toBe('Двести один рубль 00 копеек');
    expect(numberToWordsRu.convert('210', {declension: 'accusative'}))
    .toBe('Двести десять рублей 00 копеек');
    expect(numberToWordsRu.convert('500', {declension: 'accusative'}))
    .toBe('Пятьсот рублей 00 копеек');
    expect(numberToWordsRu.convert('501', {declension: 'accusative'}))
    .toBe('Пятьсот один рубль 00 копеек');
    expect(numberToWordsRu.convert('510', {declension: 'accusative'}))
    .toBe('Пятьсот десять рублей 00 копеек');
    expect(numberToWordsRu.convert('1000', {declension: 'accusative'}))
    .toBe('Одну тысячу рублей 00 копеек');
    expect(numberToWordsRu.convert('1001', {declension: 'accusative'}))
    .toBe('Одну тысячу один рубль 00 копеек');
    expect(numberToWordsRu.convert('1002', {declension: 'accusative'}))
    .toBe('Одну тысячу два рубля 00 копеек');
    expect(numberToWordsRu.convert('1005', {declension: 'accusative'}))
    .toBe('Одну тысячу пять рублей 00 копеек');
    expect(numberToWordsRu.convert('1100', {declension: 'accusative'}))
    .toBe('Одну тысячу сто рублей 00 копеек');
    expect(numberToWordsRu.convert('1000000', {declension: 'accusative'}))
    .toBe('Один миллион рублей 00 копеек');
    expect(numberToWordsRu.convert('987654321', {declension: 'accusative'}))
    .toBe('Девятьсот восемьдесят семь миллионов шестьсот пятьдесят четыре тысячи триста двадцать один рубль 00 копеек');
    expect(numberToWordsRu.convert('1001121.01', {declension: 'accusative', convertNumbertToWords: {fractional: true}}))
    .toBe('Один миллион одну тысячу сто двадцать один рубль одну копейку');
    expect(numberToWordsRu.convert('2002122.02', {declension: 'accusative', convertNumbertToWords: {fractional: true}}))
    .toBe('Два миллиона две тысячи сто двадцать два рубля две копейки');
    expect(numberToWordsRu.convert('5005125.05', {declension: 'accusative', convertNumbertToWords: {fractional: true}}))
    .toBe('Пять миллионов пять тысяч сто двадцать пять рублей пять копеек');
  });
  test('Творительный', () => {
    expect(numberToWordsRu.convert('0', {declension: 'instrumental'}))
    .toBe('Нолём рублями 00 копейками');
    expect(numberToWordsRu.convert('1', {declension: 'instrumental'}))
    .toBe('Одним рублём 00 копейками');
    expect(numberToWordsRu.convert('2', {declension: 'instrumental'}))
    .toBe('Двумя рублями 00 копейками');
    expect(numberToWordsRu.convert('3', {declension: 'instrumental'}))
    .toBe('Тремя рублями 00 копейками');
    expect(numberToWordsRu.convert('4', {declension: 'instrumental'}))
    .toBe('Четырьмя рублями 00 копейками');
    expect(numberToWordsRu.convert('5', {declension: 'instrumental'}))
    .toBe('Пятью рублями 00 копейками');
    expect(numberToWordsRu.convert('10', {declension: 'instrumental'}))
    .toBe('Десятью рублями 00 копейками');
    expect(numberToWordsRu.convert('11', {declension: 'instrumental'}))
    .toBe('Одиннадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('12', {declension: 'instrumental'}))
    .toBe('Двенадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('13', {declension: 'instrumental'}))
    .toBe('Тринадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('14', {declension: 'instrumental'}))
    .toBe('Четырнадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('15', {declension: 'instrumental'}))
    .toBe('Пятнадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('16', {declension: 'instrumental'}))
    .toBe('Шестнадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('17', {declension: 'instrumental'}))
    .toBe('Семнадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('18', {declension: 'instrumental'}))
    .toBe('Восемнадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('19', {declension: 'instrumental'}))
    .toBe('Девятнадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('20', {declension: 'instrumental'}))
    .toBe('Двадцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('21', {declension: 'instrumental'}))
    .toBe('Двадцатью одним рублём 00 копейками');
    expect(numberToWordsRu.convert('30', {declension: 'instrumental'}))
    .toBe('Тридцатью рублями 00 копейками');
    expect(numberToWordsRu.convert('32', {declension: 'instrumental'}))
    .toBe('Тридцатью двумя рублями 00 копейками');
    expect(numberToWordsRu.convert('40', {declension: 'instrumental'}))
    .toBe('Сорока рублями 00 копейками');
    expect(numberToWordsRu.convert('43', {declension: 'instrumental'}))
    .toBe('Сорока тремя рублями 00 копейками');
    expect(numberToWordsRu.convert('50', {declension: 'instrumental'}))
    .toBe('Пятьюдесятью рублями 00 копейками');
    expect(numberToWordsRu.convert('54', {declension: 'instrumental'}))
    .toBe('Пятьюдесятью четырьмя рублями 00 копейками');
    expect(numberToWordsRu.convert('60', {declension: 'instrumental'}))
    .toBe('Шестьюдесятью рублями 00 копейками');
    expect(numberToWordsRu.convert('70', {declension: 'instrumental'}))
    .toBe('Семьюдесятью рублями 00 копейками');
    expect(numberToWordsRu.convert('80', {declension: 'instrumental'}))
    .toBe('Восемьюдесятью рублями 00 копейками');
    expect(numberToWordsRu.convert('90', {declension: 'instrumental'}))
    .toBe('Девяноста рублями 00 копейками');
    expect(numberToWordsRu.convert('99', {declension: 'instrumental'}))
    .toBe('Девяноста девятью рублями 00 копейками');
    expect(numberToWordsRu.convert('100', {declension: 'instrumental'}))
    .toBe('Ста рублями 00 копейками');
    expect(numberToWordsRu.convert('101', {declension: 'instrumental'}))
    .toBe('Ста одним рублём 00 копейками');
    expect(numberToWordsRu.convert('110', {declension: 'instrumental'}))
    .toBe('Ста десятью рублями 00 копейками');
    expect(numberToWordsRu.convert('200', {declension: 'instrumental'}))
    .toBe('Двумястами рублями 00 копейками');
    expect(numberToWordsRu.convert('201', {declension: 'instrumental'}))
    .toBe('Двумястами одним рублём 00 копейками');
    expect(numberToWordsRu.convert('210', {declension: 'instrumental'}))
    .toBe('Двумястами десятью рублями 00 копейками');
    expect(numberToWordsRu.convert('500', {declension: 'instrumental'}))
    .toBe('Пятьюстами рублями 00 копейками');
    expect(numberToWordsRu.convert('501', {declension: 'instrumental'}))
    .toBe('Пятьюстами одним рублём 00 копейками');
    expect(numberToWordsRu.convert('510', {declension: 'instrumental'}))
    .toBe('Пятьюстами десятью рублями 00 копейками');
    expect(numberToWordsRu.convert('1000', {declension: 'instrumental'}))
    .toBe('Одной тысячей рублей 00 копейками');
    expect(numberToWordsRu.convert('1001', {declension: 'instrumental'}))
    .toBe('Одной тысячей одним рублём 00 копейками');
    expect(numberToWordsRu.convert('1002', {declension: 'instrumental'}))
    .toBe('Одной тысячей двумя рублями 00 копейками');
    expect(numberToWordsRu.convert('1005', {declension: 'instrumental'}))
    .toBe('Одной тысячей пятью рублями 00 копейками');
    expect(numberToWordsRu.convert('1100', {declension: 'instrumental'}))
    .toBe('Одной тысячей ста рублями 00 копейками');
    expect(numberToWordsRu.convert('1000000', {declension: 'instrumental'}))
    .toBe('Одним миллионом рублей 00 копейками');
    expect(numberToWordsRu.convert('987654321', {declension: 'instrumental'}))
    .toBe('Девятьюстами восемьюдесятью семью миллионами шестьюстами пятьюдесятью четырьмя тысячами тремястами двадцатью одним рублём 00 копейками');
    expect(numberToWordsRu.convert('1001121.01', {declension: 'instrumental', convertNumbertToWords: {fractional: true}}))
    .toBe('Одним миллионом одной тысячей ста двадцатью одним рублём одной копейкой');
    expect(numberToWordsRu.convert('2002122.02', {declension: 'instrumental', convertNumbertToWords: {fractional: true}}))
    .toBe('Двумя миллионами двумя тысячами ста двадцатью двумя рублями двумя копейками');
    expect(numberToWordsRu.convert('5005125.05', {declension: 'instrumental', convertNumbertToWords: {fractional: true}}))
    .toBe('Пятью миллионами пятью тысячами ста двадцатью пятью рублями пятью копейками');
  });
  test('Предложный', () => {
    expect(numberToWordsRu.convert('0', {declension: 'prepositional'}))
    .toBe('Ноле рублях 00 копейках');
    expect(numberToWordsRu.convert('1', {declension: 'prepositional'}))
    .toBe('Одном рубле 00 копейках');
    expect(numberToWordsRu.convert('2', {declension: 'prepositional'}))
    .toBe('Двух рублях 00 копейках');
    expect(numberToWordsRu.convert('3', {declension: 'prepositional'}))
    .toBe('Трёх рублях 00 копейках');
    expect(numberToWordsRu.convert('4', {declension: 'prepositional'}))
    .toBe('Четырёх рублях 00 копейках');
    expect(numberToWordsRu.convert('5', {declension: 'prepositional'}))
    .toBe('Пяти рублях 00 копейках');
    expect(numberToWordsRu.convert('10', {declension: 'prepositional'}))
    .toBe('Десяти рублях 00 копейках');
    expect(numberToWordsRu.convert('11', {declension: 'prepositional'}))
    .toBe('Одиннадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('12', {declension: 'prepositional'}))
    .toBe('Двенадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('13', {declension: 'prepositional'}))
    .toBe('Тринадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('14', {declension: 'prepositional'}))
    .toBe('Четырнадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('15', {declension: 'prepositional'}))
    .toBe('Пятнадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('16', {declension: 'prepositional'}))
    .toBe('Шестнадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('17', {declension: 'prepositional'}))
    .toBe('Семнадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('18', {declension: 'prepositional'}))
    .toBe('Восемнадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('19', {declension: 'prepositional'}))
    .toBe('Девятнадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('20', {declension: 'prepositional'}))
    .toBe('Двадцати рублях 00 копейках');
    expect(numberToWordsRu.convert('21', {declension: 'prepositional'}))
    .toBe('Двадцати одном рубле 00 копейках');
    expect(numberToWordsRu.convert('30', {declension: 'prepositional'}))
    .toBe('Тридцати рублях 00 копейках');
    expect(numberToWordsRu.convert('32', {declension: 'prepositional'}))
    .toBe('Тридцати двух рублях 00 копейках');
    expect(numberToWordsRu.convert('40', {declension: 'prepositional'}))
    .toBe('Сорока рублях 00 копейках');
    expect(numberToWordsRu.convert('43', {declension: 'prepositional'}))
    .toBe('Сорока трёх рублях 00 копейках');
    expect(numberToWordsRu.convert('50', {declension: 'prepositional'}))
    .toBe('Пятидесяти рублях 00 копейках');
    expect(numberToWordsRu.convert('54', {declension: 'prepositional'}))
    .toBe('Пятидесяти четырёх рублях 00 копейках');
    expect(numberToWordsRu.convert('60', {declension: 'prepositional'}))
    .toBe('Шестидесяти рублях 00 копейках');
    expect(numberToWordsRu.convert('70', {declension: 'prepositional'}))
    .toBe('Семидесяти рублях 00 копейках');
    expect(numberToWordsRu.convert('80', {declension: 'prepositional'}))
    .toBe('Восьмидесяти рублях 00 копейках');
    expect(numberToWordsRu.convert('90', {declension: 'prepositional'}))
    .toBe('Девяноста рублях 00 копейках');
    expect(numberToWordsRu.convert('99', {declension: 'prepositional'}))
    .toBe('Девяноста девяти рублях 00 копейках');
    expect(numberToWordsRu.convert('100', {declension: 'prepositional'}))
    .toBe('Ста рублях 00 копейках');
    expect(numberToWordsRu.convert('101', {declension: 'prepositional'}))
    .toBe('Ста одном рубле 00 копейках');
    expect(numberToWordsRu.convert('110', {declension: 'prepositional'}))
    .toBe('Ста десяти рублях 00 копейках');
    expect(numberToWordsRu.convert('200', {declension: 'prepositional'}))
    .toBe('Двухстах рублях 00 копейках');
    expect(numberToWordsRu.convert('201', {declension: 'prepositional'}))
    .toBe('Двухстах одном рубле 00 копейках');
    expect(numberToWordsRu.convert('210', {declension: 'prepositional'}))
    .toBe('Двухстах десяти рублях 00 копейках');
    expect(numberToWordsRu.convert('500', {declension: 'prepositional'}))
    .toBe('Пятистах рублях 00 копейках');
    expect(numberToWordsRu.convert('501', {declension: 'prepositional'}))
    .toBe('Пятистах одном рубле 00 копейках');
    expect(numberToWordsRu.convert('510', {declension: 'prepositional'}))
    .toBe('Пятистах десяти рублях 00 копейках');
    expect(numberToWordsRu.convert('1000', {declension: 'prepositional'}))
    .toBe('Одной тысяче рублей 00 копейках');
    expect(numberToWordsRu.convert('1001', {declension: 'prepositional'}))
    .toBe('Одной тысяче одном рубле 00 копейках');
    expect(numberToWordsRu.convert('1002', {declension: 'prepositional'}))
    .toBe('Одной тысяче двух рублях 00 копейках');
    expect(numberToWordsRu.convert('1005', {declension: 'prepositional'}))
    .toBe('Одной тысяче пяти рублях 00 копейках');
    expect(numberToWordsRu.convert('1100', {declension: 'prepositional'}))
    .toBe('Одной тысяче ста рублях 00 копейках');
    expect(numberToWordsRu.convert('1000000', {declension: 'prepositional'}))
    .toBe('Одном миллионе рублей 00 копейках');
    expect(numberToWordsRu.convert('987654321', {declension: 'prepositional'}))
    .toBe('Девятистах восьмидесяти семи миллионах шестистах пятидесяти четырёх тысячах трёхстах двадцати одном рубле 00 копейках');
    expect(numberToWordsRu.convert('1001121.01', {declension: 'prepositional', convertNumbertToWords: {fractional: true}}))
    .toBe('Одном миллионе одной тысяче ста двадцати одном рубле одной копейке');
    expect(numberToWordsRu.convert('2002122.02', {declension: 'prepositional', convertNumbertToWords: {fractional: true}}))
    .toBe('Двух миллионах двух тысячах ста двадцати двух рублях двух копейках');
    expect(numberToWordsRu.convert('5005125.05', {declension: 'prepositional', convertNumbertToWords: {fractional: true}}))
    .toBe('Пяти миллионах пяти тысячах ста двадцати пяти рублях пяти копейках');
  });
  // describe('Падежи с настроенной валютой', () => {
  //   test('Объект падежей не указан', () => {

  //   });
  //   test('Объект падежей указан', () => {

  //   });
  //   expect(numberToWordsRu.convert('4011123.02', {
  //     declension: 'nominative',
  //     currency: {
  //       currencyNameCases: ['доллар', 'доллара', 'долларов'],
  //       fractionalPartNameCases: ['цент', 'цента', 'центов'],
  //       currencyNounGender: {
  //         integer: 0,
  //         fractionalPart: 0,
  //       },
  //     },
  //     convertNumbertToWords: {
  //       integer: true,
  //       fractional: true,
  //     },
  //   }))
  //   .toBe('Четырёх миллионов одиннадцати тысяч ста двадцати трёх рублей двух копеек');
  //   expect(numberToWordsRu.convert('4011123.02', {
  //     declension: 'instrumental',
  //     currency: {
  //       currencyNameCases: ['доллар', 'доллара', 'долларов'],
  //       fractionalPartNameCases: ['цент', 'цента', 'центов'],
  //       currencyNounGender: {
  //         integer: 0,
  //         fractionalPart: 0,
  //       },
  //     },
  //     convertNumbertToWords: {
  //       integer: true,
  //       fractional: true,
  //     },
  //   }))
  //   .toBe('Четырьмя миллионами одиннадцатью тысячами ста двадцатью тремя рублями двумя копейками');
  //   expect(numberToWordsRu.convert('4011121.02', {
  //     declension: 'genitive',
  //     currency: {
  //       currencyNameCases: ['доллар', 'доллара', 'долларов'],
  //       fractionalPartNameCases: ['цент', 'цента', 'центов'],
  //       currencyNounGender: {
  //         integer: 0,
  //         fractionalPart: 0,
  //       },
  //     },
  //     convertNumbertToWords: {
  //       integer: true,
  //       fractional: true,
  //     },
  //   }))
  //   .toBe('Четырёх миллионов одиннадцати тысяч ста двадцати одного рубля двух копеек');
  //   expect(numberToWordsRu.convert('4011121.02', {
  //     declension: 'instrumental',
  //     currencyNameCases: ['доллар', 'доллара', 'долларов'],
  //       currencyNameDeclensions: {
  //         [declensions.NOMINATIVE]: ['доллар', 'доллары'],
  //         [declensions.GENITIVE]: ['доллара', 'долларов'],
  //         [declensions.DATIVE]: ['доллару', 'долларам'],
  //         [declensions.ACCUSATIVE]: ['доллар', 'доллары'],
  //         [declensions.INSTRUMENTAL]: ['долларом', 'долларами'],
  //         [declensions.PREPOSITIONAL]: ['долларе', 'долларах'],
  //       },
  //       fractionalPartNameCases: ['цент', 'цента', 'центов'],
  //       fractionalPartNameDeclensions: {
  //         [declensions.NOMINATIVE]: ['цент', 'центы'],
  //         [declensions.GENITIVE]: ['цента', 'центов'],
  //         [declensions.DATIVE]: ['центу', 'центам'],
  //         [declensions.ACCUSATIVE]: ['цент', 'центы'],
  //         [declensions.INSTRUMENTAL]: ['центом', 'центами'],
  //         [declensions.PREPOSITIONAL]: ['центе', 'центах'],
  //       },
  //       currencyNounGender: {
  //         integer: 0,
  //         fractionalPart: 0,
  //       },
  //   }))
  //   .toBe('Четырёх миллионов одиннадцати тысяч ста двадцати одного доллара двух центов');
  // });
});
