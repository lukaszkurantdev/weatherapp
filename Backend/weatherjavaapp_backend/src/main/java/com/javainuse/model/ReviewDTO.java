package main.java.com.javainuse.model;

public class ReviewDTO {

    long pinId;
    int value;

    public ReviewDTO(long pinId, int value) {
        this.pinId = pinId;
        this.value = value;
    }

    public ReviewDTO() {
    }

    public long getPinId() {
        return pinId;
    }

    public void setPinId(long pinId) {
        this.pinId = pinId;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
