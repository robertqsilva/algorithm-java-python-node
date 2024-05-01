public class Index {
 
    static void bubbleSort(int[] arrayList) {
        int listLength = arrayList.length - 1;

        for (int i = 0; i < listLength; i++) {
            for (int j = 0; j < listLength - i; j++) {

                if (arrayList[j] > arrayList[j + 1]) {
                    int temp = arrayList[j];
                    arrayList[j] = arrayList[j + 1];
                    arrayList[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] array = { 3, 8, 10, 7, 10, 23, 2, 11, 100, 1, 77 };
        bubbleSort(array);

        for (int number : array) {
            System.out.print(number + " ");
        }
    }
}
