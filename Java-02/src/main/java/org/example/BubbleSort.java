package org.example;

public class BubbleSort {
    public static double[] sort(double[] array, SortType sortType) {
        for (int i = 0; i < array.length - 1; i++)
            for (int j = 0; j < array.length - i - 1; j++)
                if (sortType.equals(SortType.Ascending)) {
                    if (array[j] > array[j + 1]) {
                        double temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                } else {
                    if (array[j] < array[j + 1]) {
                        double temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
        return array;
    }
}