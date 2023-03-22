package org.example.task3;

public class Pyramid extends Shape {
    private double baseArea;
    private double height;

    public Pyramid(double baseArea, double height) {
        super(height * baseArea * 1 / 3);
        this.height = height;
        this.baseArea = baseArea;
    }
}
