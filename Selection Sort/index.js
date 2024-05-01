function seletionSort(arraylist) {
  for (let i = 0; i < arraylist.length - 1; i++) {
    let smallest = i;

    for (let j = i + 1; j < arraylist.length; j++) {
      if (arraylist[j] < arraylist[smallest]) {
        smallest = j;
      }
    } 

    [arraylist[i], arraylist[smallest]] = [arraylist[smallest], arraylist[i]];
  }
}

const array = [3, 8, 10, 7, 10, 23, 2, 11, 100, 1, 77];

seletionSort(array);
console.log(array);
