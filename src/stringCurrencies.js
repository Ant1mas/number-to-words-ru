const stringCurrencies = {
  rub: {
    currencyNameCases: ['рубль', 'рубля', 'рублей'],
    fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
    currencyNounGender: {
      integer: 0, // Мужской род
      fractionalPart: 1, // Женский род
    },
  },
  usd: {
    currencyNameCases: ['доллар', 'доллара', 'долларов'],
    fractionalPartNameCases: ['цент', 'цента', 'центов'],
    currencyNounGender: {
      integer: 0,
      fractionalPart: 0,
    },
  },
  eur: {
    currencyNameCases: ['евро', 'евро', 'евро'],
    fractionalPartNameCases: ['цент', 'цента', 'центов'],
    currencyNounGender: {
      integer: 0,
      fractionalPart: 0,
    },
  },
};

export default stringCurrencies;
