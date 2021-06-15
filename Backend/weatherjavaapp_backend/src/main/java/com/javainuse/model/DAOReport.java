package main.java.com.javainuse.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "reports")
public class DAOReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
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
    private String reason;

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

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
}

