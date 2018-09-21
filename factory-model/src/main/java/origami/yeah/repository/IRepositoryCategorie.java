package origami.yeah.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import origami.yeah.model.Categorie;

public interface IRepositoryCategorie extends JpaRepository<Categorie, Long>{
	
	@Query("select c from Categorie c where c.id <> :id")
	List<Categorie> findAllOther(@Param("id") Long id);
	 
}
