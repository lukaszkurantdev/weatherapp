package main.java.com.javainuse.model;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

public class JwtResponse implements Serializable {

	private static final long serialVersionUID = -8091879091924046844L;
	private final String jwttoken;
	private List<String> privileges;
	private double latitude;
	private double longitude;

	public JwtResponse(String jwttoken) {
		this.jwttoken = jwttoken;
	}

	public String getToken() {
		return this.jwttoken;
	}

	public JwtResponse(String jwttoken, List<String> privileges, double latitude, double longitude) {
		this.jwttoken = jwttoken;
		this.privileges = privileges;
		this.longitude = longitude;
		this.latitude = latitude;
	}

	public List<String> getPrivileges() {
		return privileges;
	}

	public void setPrivileges(List<String> privileges) {
		this.privileges = privileges;
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