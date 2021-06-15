package main.java.com.javainuse.model;

public class Lightning {
    private double longitude;
    private double latitude;
    private double date;
    private String color;

    public Lightning() {
    }

    public Lightning(double longitude, double latitude, double date) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.date = date;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getDate() {
        return date;
    }

    public void setDate(double date) {
        this.date = date;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
