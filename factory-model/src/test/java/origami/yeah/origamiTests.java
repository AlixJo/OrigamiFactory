package origami.yeah;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import origami.yeah.model.Origami;
import origami.yeah.repository.IRepositoryOrigami;


	@RunWith(SpringRunner.class)
	@SpringBootTest
	public class origamiTests {
		@Autowired
		private IRepositoryOrigami origamiRepo;

		@Test
		public void contextLoads() {
			
			Origami Lion = new Origami("dfdfsd", "kjsdbfjkhsqdbfh");
			
			origamiRepo.save(Lion);
			
		}

	}
	
