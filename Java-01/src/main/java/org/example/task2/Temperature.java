package org.example.task2;

public class Temperature implements Converter {
    private double temperature;
    private TempatureType tempatureType;

    public Temperature(double temperature, TempatureType tempatureType) {
        this.temperature = temperature;
        this.tempatureType = tempatureType;
    }

    @Override
    public double convert(TempatureType tempatureType) {
        switch (tempatureType) {
            case FAHRENHEIT -> {
                return (temperature * 9 / 5) + 32;
            }
            case KELVIN -> {
                return temperature + 273.15;
            }
            case RANKINE -> {
                return (temperature * 9 / 5) + 491.67;
            }
            default -> {
                return 0;
            }
        }
    }
}
