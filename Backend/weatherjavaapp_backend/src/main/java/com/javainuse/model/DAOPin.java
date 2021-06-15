package main.java.com.javainuse.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

import javax.persistence.*;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "pins")
public class DAOPin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JsonIgnore
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
    @Lob
    @Column(name = "image")
    private byte[] image;

    @Column
    private double latitude;
    @Column
    private double longitude;
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    @JsonIgnore
    @OneToMany(mappedBy="id")
    private Collection<DAOReview> reviews;

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    @JsonSetter("image")
    public void setImage(String content) {
        image = Base64.getDecoder().decode(content.getBytes(StandardCharsets.UTF_8));
    }

    public String getImage() {
        return Base64.getEncoder().encodeToString(image);
    }

    public String getUser() {
        return user.getUsername();
    }

    @JsonIgnore
    public DAOUser getUserObject() {
        return user;
    }

    public double getLatitude() {
        return latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setUser(DAOUser user) {
        this.user = user;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }


    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Collection<DAOReview> getReviews() {
        return reviews;
    }

    public void setReviews(Collection<DAOReview> reviews) {
        this.reviews = reviews;
    }

    public int getReviewsNumber() {
        return reviews.size();
    }
}
