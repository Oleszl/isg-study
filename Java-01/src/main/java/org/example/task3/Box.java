package org.example.task3;

public class Box extends Shape {
    private double capacity;
    private static int count;

    public Box(double capacity) {
        super(capacity);
        this.capacity = capacity;
    }

    public boolean add(Shape shape) {
        if (capacity >= shape.getVolume()) {
            capacity -= shape.getVolume();
            count++;
            System.out.println("There are " + count + " shapes in the Box");
            return true;
        } else {
            System.out.println("There isn\'t enough volume in the Box");
            return false;
        }
    }

    @Override
    public double getVolume() {
        return capacity;
    }
}
