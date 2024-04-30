
def insertionSort(arrayList):

    for i in range(1, len(arrayList)):
        indexLeft = i - 1
        elementRigth = arrayList[i]

        while indexLeft >= 0 and elementRigth < arrayList[indexLeft]:
            arrayList[indexLeft + 1] = arrayList[indexLeft]
            indexLeft-=1
            arrayList[indexLeft + 1] = elementRigth


array = [3, 8, 10, 7, 10, 23, 2, 11, 100, 1, 77]

insertionSort(array)
print(array)