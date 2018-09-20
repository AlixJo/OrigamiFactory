package origami.yeah.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Categorie {
	@Id
	@GeneratedValue
	@JsonView(Views.ViewCommon.class)
	private Long id;
	
	@Column
	@JsonView(Views.ViewCommon.class)
	private String nom;
	
	@Column
	@JsonView(Views.ViewCommon.class)
	private Categorie superCat; 
	
	@Transient
	@ManyToMany(mappedBy = "categories", fetch = FetchType.LAZY)
	private List<Origami> origamis = new ArrayList<>();

	//contructeur
	public Categorie() {
		super();
	}

	public Categorie(Long id, String nom, Categorie superCat, List<Origami> origamis) {
		super();
		this.id = id;
		this.nom = nom;
		this.superCat = superCat;
		this.origamis = origamis;
	}

	public Categorie(String nom) {
		super();
		this.nom = nom;
	}

	//getter setter
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Categorie getSuperCat() {
		return superCat;
	}

	public void setSuperCat(Categorie superCat) {
		this.superCat = superCat;
	}

	public List<Origami> getOrigamis() {
		return origamis;
	}

	public void setOrigamis(List<Origami> origamis) {
		this.origamis = origamis;
	}
	
	
	
	

}
