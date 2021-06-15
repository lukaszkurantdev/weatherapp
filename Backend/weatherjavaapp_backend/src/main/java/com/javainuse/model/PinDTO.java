package main.java.com.javainuse.model;

public class PinDTO {
    private static final long serialVersionUID = 5926468583005150707L;

    private long id;
    private String title;
    private String description;
    private String image;
    private double latitude;
    private double longitude;


    //need default constructor for JSON Parsing
    public PinDTO()
    {

    }

    public PinDTO(long id, String title, String description, String image, double latitude, double longitude) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }
}
