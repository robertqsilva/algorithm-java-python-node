public class index {

    static void insertionSort(int[] arrayList) {

        for (int i = 1; i < arrayList.length; i++) {
            int indexLeft = i - 1;

            int elementRigth = arrayList[i];

            while (indexLeft >= 0 && elementRigth < arrayList[indexLeft]) {
                arrayList[indexLeft + 1] = arrayList[indexLeft];
                indexLeft--;
                arrayList[indexLeft + 1] = elementRigth;
            }
        }
    }

    public static void main(String[] args) {
        int[] arrayList = { 3, 8, 10, 7, 10, 23, 2, 11, 100, 1, 77 };
        insertionSort(arrayList);

        for (int num : arrayList) {
            System.out.print(num + " ");
        }
    }
}