package origami.yeah;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import origami.yeah.model.Admin;
import origami.yeah.model.Categorie;
import origami.yeah.repository.IRepositoryAdmin;
import origami.yeah.repository.IRepositoryCategorie;

@RunWith(SpringRunner.class)
@SpringBootTest
public class YMYTest {
	@Autowired
	private IRepositoryCategorie catRepo;

	@Test
	public void contextLoads() {
		
		Categorie cat1 = new Categorie("Animaux");
		Categorie cat2 = new Categorie("Reel");
		Categorie cat3 = new Categorie("Lion");
		
		
		catRepo.save(cat1);
		catRepo.save(cat2);
		catRepo.save(cat3);
		
	}

}
