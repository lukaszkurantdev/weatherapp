package main.java.com.javainuse.model;

import javax.persistence.*;

public class DAOLight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    @JoinColumn(
            name = "user_report_fk",
            foreignKey = @ForeignKey(name = "none", value = ConstraintMode.NO_CONSTRAINT)
    )
    private DAOUser user;
    @Column
    private String title;
    @Column
    private String description;
    @Column
    private String image;
    @Column
    private double latitude;
    @Column
    private double longitude;
    @Temporal(TemporalType.TIMESTAMP)
    private double date;
}
