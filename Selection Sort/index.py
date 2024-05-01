def seletionSort(arrayList):
    for i in range(len(arrayList) - 1):
        smallest = i

        for j in range(i + 1, len(arrayList)):
            if(arrayList[j] < arrayList[smallest]):
                smallest = j
            
        
        [arrayList[i], arrayList[smallest]] = [arrayList[smallest], arrayList[i]]

ARRAY = [3, 8, 10, 7, 10, 23, 2, 11, 100, 1, 77]
seletionSort(ARRAY)
print(ARRAY)