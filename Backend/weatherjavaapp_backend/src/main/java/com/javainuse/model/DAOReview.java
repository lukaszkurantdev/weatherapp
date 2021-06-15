package main.java.com.javainuse.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "reviews")
public class DAOReview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(
            name = "user_fk",
            foreignKey = @ForeignKey(name = "none", value = ConstraintMode.NO_CONSTRAINT)
    )
    private DAOUser user;

    @ManyToOne
    @JoinColumn(
            name = "pin_fk",
            foreignKey = @ForeignKey(name = "none", value = ConstraintMode.NO_CONSTRAINT)
    )
    private DAOPin pin;
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;
    @Column
    private boolean isThumbUp;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public DAOUser getUser() {
        return user;
    }

    public void setUser(DAOUser user) {
        this.user = user;
    }

    public DAOPin getPin() {
        return pin;
    }

    public void setPin(DAOPin pin) {
        this.pin = pin;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public boolean isThumbUp() {
        return isThumbUp;
    }

    public void setThumbUp(boolean thumbUp) {
        isThumbUp = thumbUp;
    }

}
