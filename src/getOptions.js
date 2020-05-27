/**
 * Получить опции конверирования.
 * @param {Object} options - Опции, выбранные пользователем.
 * @return {Object} Опции конвертирования.
 */
const getOptions = (options) => {
  // Опции по умолчанию
  const resultOptions = {
    /* currency - Название валюты ('rub', 'usd', 'eur')
    или 'number'
    или объект со своей валютой */
    currency: 'rub',
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
  // Заменить опции по умолчанию выбранными опциями, если они правильно указаны
  const updateOptions = (currentOptions, newOptions) => {
    Object.keys(currentOptions).forEach((key) => {
      // Если нужно изменить эту опцию
      if (newOptions[key] !== undefined) {
        // Если эта опция - объект
        if (
          typeof currentOptions[key] === 'object' &&
          key !== 'currency'
        ) {
          // Перейти внутрь этого объекта (рекурсия)
          updateOptions(currentOptions[key], newOptions[key]);
        } else {
        // Если эта опция - не объект
          // Если тип данных одинаковый или currency[string/object]
          if (
            typeof currentOptions[key] === typeof newOptions[key] ||
            (
              key === 'currency' &&
              (
                typeof newOptions[key] === 'string' ||
                typeof newOptions[key] === 'object'
              )
            )
          ) {
            // Заменить новым значением
            currentOptions[key] = newOptions[key];
          }
        }
      }
    });
  };
  updateOptions(resultOptions, options);
  return resultOptions;
};

export default getOptions;
