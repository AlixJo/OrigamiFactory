package origami.yeah.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Transient;


@Entity
public class Origami {
	
	@Id
	@GeneratedValue
	private Long id;
	private String nom;
	private String tempsRea;
	private int nbFeuille;
	@Enumerated(EnumType.STRING)
	private Niveau niveau;
	private Float note;
	private Boolean actif;
	private String youTube;
	private String imageOri;
	
	@OneToMany(mappedBy = "origami", fetch=FetchType.LAZY)
	private List<Etape> etapes = new ArrayList<>();

	@ManyToMany(mappedBy = "origamis", fetch = FetchType.EAGER)
	private List<Categorie> categories = new ArrayList<>();

	
	
	public Origami(String nom, String tempsRea) {
		super();
		this.nom = nom;
		this.tempsRea = tempsRea;
	}

	public Origami(Long i, String nom) {
		super();
		this.id = i;
		this.nom = nom;
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
