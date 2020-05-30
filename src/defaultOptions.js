const defaultOptions = {
  /* currency - Название валюты ('rub', 'usd', 'eur')
  или 'number'
  или объект со своей валютой */
  currency: 'rub',
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
