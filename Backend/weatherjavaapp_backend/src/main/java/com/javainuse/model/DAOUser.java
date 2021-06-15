package main.java.com.javainuse.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "user")
public class DAOUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column
	private String username;
	@Column
	@JsonIgnore
	private String password;
	@Column
	private double latitude;
	@Column
	private double longitude;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(
			name = "users_roles",
			joinColumns = @JoinColumn(
					name = "user_id", referencedColumnName = "id"),
			inverseJoinColumns = @JoinColumn(
					name = "role_id", referencedColumnName = "id"))
	private Collection<DAORole> roles;

	public long getId() {
		return id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public Collection<DAORole> getRoles() {
		return roles;
	}

	public void setRoles(Collection<DAORole> roles) {
		this.roles = roles;
	}

	public List<DAOPrivilege> getPrivileges() {
		Set<DAOPrivilege> privileges = new HashSet<>();

		for (DAORole role : this.getRoles()) {
			for (DAOPrivilege privilege : role.getPrivileges()) {
				privileges.add(privilege);
			}
		}
		List<DAOPrivilege> mainList = new ArrayList<>();
		mainList.addAll(privileges);

		return mainList;
	}

	public List<String> getPrivilegesNames() {
		Set<String> privileges = new TreeSet<>();

		for (DAORole role : this.getRoles()) {
			for (DAOPrivilege privilege : role.getPrivileges()) {
				privileges.add(privilege.getName());
			}
		}
		List<String> mainList = new ArrayList<>();
		mainList.addAll(privileges);
		return mainList;
	}
}