package origami.yeah;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


import origami.yeah.model.Etape;
import origami.yeah.repository.IRepositoryEtape;


@RunWith(SpringRunner.class)
@SpringBootTest
public class EtapeTests {
	@Autowired
	private IRepositoryEtape etapeRepo;


	@Test
	public void contextLoads() {
		
		Etape etape21 = new Etape( 10,"Ceci est un ori GINAL","Ceci est un lien image GENIAL");
		
		etapeRepo.save(etape21);
		
Etape etape4 = new Etape( 999,"Ceci est un orix","Ceci est X");
		
		etapeRepo.save(etape4);
		

	}
		
	
}