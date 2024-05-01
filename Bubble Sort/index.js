function bubbleSort(arrayList){
    const listLength = arrayList.length - 1;
 
    for(let i = 0; i < listLength; i++){
        for(let j = 0; j < listLength - i; j++){
            if(arrayList[j] > arrayList[j + 1]){
                [arrayList[j], arrayList[j + 1]] = [arrayList[j + 1], arrayList[j]]
            }
        }
    }
}

const array = [3, 8, 10, 7, 10, 23, 2, 11, 100, 1, 77];

bubbleSort(array)
console.log(array);