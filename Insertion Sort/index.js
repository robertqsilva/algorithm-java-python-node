function insertionSort(arrayList) {
  for (let i = 1; i < arrayList.length; i++) {
    let indexLeft = i - 1;
    let elementRigth = arrayList[i];

    while (indexLeft >= 0 && elementRigth < arrayList[indexLeft]) {
      arrayList[indexLeft + 1] = arrayList[indexLeft];
      indexLeft--;
      arrayList[indexLeft + 1] = elementRigth;
    }
  }
}
const array = [3, 8, 10, 7, 10, 23, 2, 11, 100, 1, 77];

insertionSort(array);
console.log(array);
