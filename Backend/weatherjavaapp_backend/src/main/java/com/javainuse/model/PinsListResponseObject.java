package main.java.com.javainuse.model;

public class PinsListResponseObject {
    DAOPin pin;
    boolean isCreatedByUser;
    boolean isReviewedByUser;

    public PinsListResponseObject(DAOPin pin, boolean isCreatedByUser, boolean isReviewedByUser) {
        this.pin = pin;
        this.isCreatedByUser = isCreatedByUser;
        this.isReviewedByUser = isReviewedByUser;
    }

    public DAOPin getPin() {
        return pin;
    }

    public void setPin(DAOPin pin) {
        this.pin = pin;
    }

    public boolean isCreatedByUser() {
        return isCreatedByUser;
    }

    public void setCreatedByUser(boolean createdByUser) {
        isCreatedByUser = createdByUser;
    }

    public boolean isReviewedByUser() {
        return isReviewedByUser;
    }

    public void setReviewedByUser(boolean reviewedByUser) {
        isReviewedByUser = reviewedByUser;
    }
}
