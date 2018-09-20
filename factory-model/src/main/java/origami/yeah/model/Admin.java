package origami.yeah.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Admin {
	@Id
	@GeneratedValue
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Column
	@JsonView(Views.ViewCommon.class)
	private String username;
	@Column
	@JsonView(Views.ViewCommon.class)
	private String password;
	
	//Constructeurs
	
	public Admin() {
		super();
	}
	
	
	
	public Admin(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}



	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	
	
	

}
