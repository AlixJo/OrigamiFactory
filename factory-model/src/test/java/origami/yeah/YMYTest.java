package origami.yeah;

import java.util.Optional;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import origami.yeah.model.Categorie;
import origami.yeah.repository.IRepositoryCategorie;

@RunWith(SpringRunner.class)
@SpringBootTest
public class YMYTest {
	@Autowired
	private IRepositoryCategorie catRepo;

	@Test
	public void contextLoads() {
		
		int startCount = catRepo.findAll().size();

		Categorie cat = new Categorie("new cat");

		catRepo.save(cat);

		Categorie catFind = catRepo.findById(cat.getId()).get();

		Assert.assertEquals("new cat", catFind.getNom());

		catFind.setNom("TheCat");

		catRepo.save(catFind);

		catFind = catRepo.findById(cat.getId()).get();

		Assert.assertEquals("TheCat", catFind.getNom());

		int endCount = catRepo.findAll().size();

		Assert.assertEquals(1, (endCount - startCount));

		catRepo.delete(catFind);

		Optional<Categorie> catOptional = catRepo.findById(cat.getId());

		if (catOptional.isPresent()) {
			Assert.fail("La suppression de la catégorie a échouer");
		}
		
	}

}
