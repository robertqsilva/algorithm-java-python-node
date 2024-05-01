import math

def quickSort(arrayList, left = 0, rigth = None):

    if rigth is None:
        rigth = len(arrayList) - 1

    def partion(left, rigth):

        indexPivot = math.floor((left + rigth) / 2)
        pivot = arrayList[indexPivot]

        while left <= rigth:
            while arrayList[left] < pivot:
                left+=1
            
            while arrayList[rigth] > pivot:
                rigth-=1
            
            if left <= rigth:
                [arrayList[left], arrayList[rigth]] = [arrayList[rigth], arrayList[left]]
                left+=1
                rigth-=1
         
        return left
    
    if left >= rigth:
        return   

    pivotIndex = partion(left, rigth)
    quickSort(arrayList, left, pivotIndex - 1)
    quickSort(arrayList, pivotIndex, rigth)
    return arrayList

array = [3, 8, 10, 7,10, 23, 2, 11, 100, 1, 77]
quickSort(array)
print(array) 