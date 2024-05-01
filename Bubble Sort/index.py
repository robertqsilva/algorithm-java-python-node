def bubbleSort(arrayList):
    listLength = len(arrayList) - 1
 
    for i in range(listLength):
        for j in range(listLength - i):
            if arrayList[j] > arrayList[j + 1]:
                [arrayList[j], arrayList[j + 1]] = [arrayList[j + 1], arrayList[j]]

array = [3, 8, 10, 7, 10, 23, 2, 11, 100, 1, 77]
bubbleSort(array)
print(array)