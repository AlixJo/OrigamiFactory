package origami.yeah.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonView;


@Entity
public class Origami {
	
	@Id
	@GeneratedValue
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@JsonView(Views.ViewCommon.class)
	private String nom;
	@JsonView(Views.ViewCommon.class)
	private String tempsRea;
	@JsonView(Views.ViewCommon.class)
	private int nbFeuille;
	@Enumerated(EnumType.STRING)
	@JsonView(Views.ViewCommon.class)
	private Niveau niveau;
	@JsonView(Views.ViewCommon.class)
	private Float note;
	@JsonView(Views.ViewCommon.class)
	private Boolean actif;
	@JsonView(Views.ViewCommon.class)
	private String youTube;
	@JsonView(Views.ViewCommon.class)
	private String imageOri;
	
	@OneToMany(mappedBy = "origami", fetch=FetchType.LAZY)
	@JsonView(Views.ViewOrigami.class)
	private List<Etape> etapes = new ArrayList<>();
	@JsonView(Views.ViewOrigami.class)
	@ManyToMany
	@JoinTable(name = "origami_categorie", joinColumns = @JoinColumn(name = "origami_id"), inverseJoinColumns = @JoinColumn(name = "categorie_id"), uniqueConstraints = @UniqueConstraint(columnNames = {
			"origami_id", "categorie_id" }))
	private List<Categorie> categories = new ArrayList<>();

	
	
	public Origami() {
		super();
	}


	public Origami(String nom, String tempsRea) {
		super();
		this.nom = nom;
		this.tempsRea = tempsRea;
	}


	public Origami(Long id, String nom, String tempsRea, int nbFeuille, Niveau niveau, Float note, Boolean actif,
			String youTube, String imageOri) {
		super();
		this.id = id;
		this.nom = nom;
		this.tempsRea = tempsRea;
		this.nbFeuille = nbFeuille;
		this.niveau = niveau;
		this.note = note;
		this.actif = actif;
		this.youTube = youTube;
		this.imageOri = imageOri;
	}
	
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
	public String getTempsRea() {
		return tempsRea;
	}
	public void setTempsRea(String tempsRea) {
		this.tempsRea = tempsRea;
	}
	public int getNbFeuille() {
		return nbFeuille;
	}
	public void setNbFeuille(int nbFeuille) {
		this.nbFeuille = nbFeuille;
	}
	public Niveau getNiveau() {
		return niveau;
	}
	public void setNiveau(Niveau niveau) {
		this.niveau = niveau;
	}
	public Float getNote() {
		return note;
	}
	public void setNote(Float note) {
		this.note = note;
	}
	public Boolean getActif() {
		return actif;
	}
	public void setActif(Boolean actif) {
		this.actif = actif;
	}
	public String getYouTube() {
		return youTube;
	}
	public void setYouTube(String youTube) {
		this.youTube = youTube;
	}
	public String getImageOri() {
		return imageOri;
	}
	public void setImageOri(String imageOri) {
		this.imageOri = imageOri;
	}

	public List<Etape> getEtapes() {
		return etapes;
	}

	public void setEtapes(List<Etape> etapes) {
		this.etapes = etapes;
	}

	public List<Categorie> getCategories() {
		return categories;
	}

	public void setCategories(List<Categorie> categories) {
		this.categories = categories;
	}

	
}
