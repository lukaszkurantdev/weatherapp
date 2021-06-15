package main.java.com.javainuse.model;

public class RedactorRoleDTO {
    long userId;

    public RedactorRoleDTO(long userId) {
        this.userId = userId;
    }

    public RedactorRoleDTO() {
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }
}
