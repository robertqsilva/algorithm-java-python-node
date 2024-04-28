function quicksort(arrayList, left = 0, rigth = arrayList.length - 1) {
  const partion = (left, rigth) => {
    const pivot = arrayList[Math.floor((left + rigth) / 2)];

    while (left <= rigth) {
      while (arrayList[left] < pivot) {
        left++;
      }

      while (arrayList[rigth] > pivot) {
        rigth--;
      }

      if (left <= rigth) {
        [arrayList[left], arrayList[rigth]] = [
          arrayList[rigth],
          arrayList[left],
        ];
        left++;
        rigth--;
      }
    }
    return left;
  };

  if (left >= rigth) {
    return;
  }

  const index_pivot = partion(left, rigth);
  quicksort(arrayList, left, index_pivot - 1);
  quicksort(arrayList, index_pivot, rigth);
  return arrayList;
}

const array = [3, 8, 10, 7, 10, 23, 2, 11, 100, 1, 77];

console.log(quicksort(array));