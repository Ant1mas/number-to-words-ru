import ConvertOptions from 'src/typeScript/interfaces/ConvertOptions';
import declensions from 'src/units/declensions';

const defaultOptions: ConvertOptions = {
  currency: 'rub',
  declension: declensions.NOMINATIVE,
  roundNumber: -1,
  convertMinusSignToWord: true,
  showNumberParts: {
    integer: true,
    fractional: true,
  },
  convertNumbertToWords: {
    integer: true,
    fractional: false,
  },
  showCurrency: {
    integer: true,
    fractional: true,
  },
};

export default defaultOptions;
