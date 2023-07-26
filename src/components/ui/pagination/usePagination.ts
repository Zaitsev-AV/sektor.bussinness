/**
 * Хук для построения пагинации
 *
 * @param {number} currentPage - Номер текущей страницы
 * @param {number} lastPage - Номер последней страницы
 * @param {number} maxLength - Максимальное кол-во кнопок пагинации
 *
 * @returns массив из номеров страниц для отображения пагинации
 *
 * Функция анализирует номера текущей и последней страницы,
 * чтобы определить какие номера страниц нужно отобразить с учетом максимальной длины.
 *
 * Если страниц меньше чем макс.длина - показываются все.
 * Иначе отображаются страницы рядом с текущей, а в середине и в конце - многоточия.
 *
 */

export const usePagination = (currentPage: number, lastPage: number, maxLength: number) => {
  const res: Array<number> = []

  if (lastPage <= maxLength) {
    for (let i = 1; i <= lastPage; i++) {
      res.push(i)
    }
  } else {
    const firstPage = 1
    const confirmedPagesCount = 2
    const deductedMaxLength = maxLength - confirmedPagesCount

    const sideLength = Math.ceil(deductedMaxLength / 2)

    if (currentPage - firstPage < sideLength || lastPage - currentPage < sideLength) {
      for (let j = 1; j <= sideLength + firstPage; j++) {
        res.push(j)
      }

      res.push(NaN)

      for (let k = lastPage - sideLength; k <= lastPage; k++) {
        res.push(k)
      }
    } else if (
      currentPage - firstPage >= deductedMaxLength &&
      lastPage - currentPage >= deductedMaxLength
    ) {
      const deductedSideLength = sideLength - 1

      res.push(1)
      res.push(NaN)

      for (let l = currentPage - deductedSideLength; l <= currentPage + deductedSideLength; l++) {
        res.push(l)
      }

      res.push(NaN)
      res.push(lastPage)
    } else {
      const isNearFirstPage = currentPage - firstPage < lastPage - currentPage
      let remainingLength = maxLength

      if (isNearFirstPage) {
        for (let m = 1; m <= currentPage + 1; m++) {
          res.push(m)
          remainingLength -= 1
        }

        res.push(NaN)
        remainingLength -= 1

        for (let n = lastPage - (remainingLength - 1); n <= lastPage; n++) {
          res.push(n)
        }
      } else {
        for (let o = lastPage; o >= currentPage - 1; o--) {
          res.unshift(o)
          remainingLength -= 1
        }

        res.unshift(NaN)
        remainingLength -= 1

        for (let p = remainingLength; p >= 1; p--) {
          res.unshift(p)
        }
      }
    }
  }

  return res
}
