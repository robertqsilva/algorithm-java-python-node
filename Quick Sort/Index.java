public class Index {

    static int partion(int[] arrayList, int left, int right) {

        int pivot = arrayList[(left + right) / 2];

        while (left <= right) {
            while (arrayList[left] < pivot) {
                left++;
            } 

            while (arrayList[right] > pivot) {
                right--;
            }

            if (left <= right) {
                int tempLeft = arrayList[left];
                arrayList[left] = arrayList[right];
                arrayList[right] = tempLeft;

                left++;
                right--;
            }
        }
        System.out.println(left);
        return left;
    }

    static int[] quickSort(int[] arrayList, int left, int right) {

        if (left >= right) {
            return null;
        }

        int indexPivot = partion(arrayList, left, right);
        quickSort(arrayList, left, indexPivot - 1);
        quickSort(arrayList, indexPivot, right);
        return arrayList;
    }

    static void quickSort(int[] arrayList) {
        int left = 0;
        int right = arrayList.length - 1;

        quickSort(arrayList, left, right);
    }

    public static void main(String[] args) {

        int[] array = { 3, 8, 10, 7, 10, 2, 12, 77 };
        quickSort(array);
        for (int num : array) {
            System.out.print(num + " ");
        }
    }
}
