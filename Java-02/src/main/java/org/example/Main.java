package org.example;

import java.util.Arrays;
import java.util.Random;
import java.util.stream.DoubleStream;

public class Main {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(BubbleSort.sort(generateArray(25), SortType.Ascending)));
    }

    public static double[] generateArray(int size) {
        return DoubleStream.generate(() -> new Random().nextDouble(-100.00, 100.00)).limit(size).toArray();
    }
}