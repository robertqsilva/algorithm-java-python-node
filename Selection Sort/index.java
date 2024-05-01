public class index {
    static void selectionSort(int[] arrayList) {
        for (int i = 0; i < arrayList.length - 1; i++) {
            int smallest = i;
            for (int j = i + 1; j < arrayList.length; j++) {
                if (arrayList[j] < arrayList[smallest]) {
                    smallest = j;
                }
            } 
            int temp = arrayList[i];
            arrayList[i] = arrayList[smallest];
            arrayList[smallest] = temp;
        }
    }

    
    public static void main(String[] args) {
        int[] array = { 3, 8, 10, 7, 10, 23, 2, 11, 100, 1, 77 };
        selectionSort(array);
        for (int num : array) {
            System.out.print(num + " ");
        }
    }
}