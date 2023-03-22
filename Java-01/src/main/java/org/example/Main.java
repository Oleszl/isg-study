package org.example;

import org.example.task1.Prime;
import org.example.task2.TempatureType;
import org.example.task2.Temperature;
import org.example.task3.*;

import java.util.Date;

public class Main {
    public static void main(String[] args) {
        volumeCalculation();
        Prime.printPrimes();


        Temperature temperatureCelsius = new Temperature(40, TempatureType.CELSIUS);
        double fahrenheit = temperatureCelsius.convert(TempatureType.FAHRENHEIT);
        double kelvin = temperatureCelsius.convert(TempatureType.KELVIN);
        System.out.println("\n" + fahrenheit);
        System.out.println(kelvin);



    }

    public static void volumeCalculation() {
        Box box = new Box(500);
        Shape cylinder = new Cylinder(5, 5);
        Shape pyramid = new Pyramid(5, 5);
        Shape ball = new Ball(3);
        System.out.println("Initial volume of the box: " + box.getVolume());
        System.out.println("Cylinder volume: " + cylinder.getVolume());
        System.out.println("Shape added to the box: " + box.add(cylinder));
        System.out.println("Current Box volume: " + box.getVolume());
        System.out.println("Pyramid volume: " + pyramid.getVolume());
        System.out.println("Shape added to the box: " + box.add(pyramid));
        System.out.println("Current Box volume: " + box.getVolume());
        System.out.println("Ball volume: " + ball.getVolume());
        System.out.println("Shape added to the box: " + box.add(ball));
        System.out.println("Current Box volume: " + box.getVolume());
    }

}