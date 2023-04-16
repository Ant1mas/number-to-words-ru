/**
 * Убрать пустые классы перед числом в массиве классов числа.\
 * ['000', '000', '050', '000'] превратится в ['050', '000'].
 * @param {string[]} numberScalesArr - Массив классов числа ['009', '876', '543', ...].
 * @return {string} Массив классов числа без нулевых классов в начале.
 */
export default function removeEmptyScalesBeforeNumber(
  numberScalesArr: string[],
): string[] {
  // Найти первый индекс класса, в котором есть цифры (не "000")
  const firstScaleWithNumberIndex = numberScalesArr.findIndex((scale) => {
    return scale !== '000'
  })
  // Удалить все индексы массива до индекса найденного числа
  const resultNumberScalesArr = numberScalesArr.slice(firstScaleWithNumberIndex)
  return resultNumberScalesArr
}
