package origami.yeah.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import origami.yeah.model.Origami;


public interface IRepositoryOrigami extends JpaRepository<Origami, Long> {

}
