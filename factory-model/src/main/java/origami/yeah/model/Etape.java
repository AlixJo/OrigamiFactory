package origami.yeah.model;



import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;


@Entity
public class Etape {
	@Id
	@GeneratedValue
	private Long id;
	private int numeroEtape;
	private String description;
	private String imageEtape;
	@Transient
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="origami_id")
	private Origami origami;

	public Etape() {
		super();
	}


	


	public Etape(Long id, int numeroEtape, String description, String imageEtape, Origami origami) {
		super();
		this.id = id;
		this.numeroEtape = numeroEtape;
		this.description = description;
		this.imageEtape = imageEtape;
		this.origami = origami;
	}





	public Origami getOrigami() {
		return origami;
	}




	public void setOrigami(Origami origami) {
		this.origami = origami;
	}





	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public int getNumeroEtape() {
		return numeroEtape;
	}


	public void setNumeroEtape(int numeroEtape) {
		this.numeroEtape = numeroEtape;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getImageEtape() {
		return imageEtape;
	}


	public void setImageEtape(String imageEtape) {
		this.imageEtape = imageEtape;
	}


}
