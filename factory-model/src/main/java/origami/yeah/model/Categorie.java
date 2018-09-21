package origami.yeah.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Transient;
import javax.persistence.UniqueConstraint;

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
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn
	@JsonView(Views.ViewCategorieWithSuperCat.class)
	private Categorie superCat; 
	
	@Column
	@OneToMany(mappedBy = "superCat", fetch=FetchType.LAZY)
	@JsonView(Views.ViewCategorieWithSubCat.class)
	private List<Categorie> sousCats;
	
	@ManyToMany(mappedBy = "categories", fetch = FetchType.LAZY)
	@JsonView(Views.ViewCategorieWithSubCat.class)
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

	public List<Categorie> getSousCats() {
		return sousCats;
	}

	public void setSousCats(List<Categorie> sousCats) {
		this.sousCats = sousCats;
	}

	public List<Origami> getOrigamis() {
		return origamis;
	}

	public void setOrigamis(List<Origami> origamis) {
		this.origamis = origamis;
	}
	
	
	
	

}
