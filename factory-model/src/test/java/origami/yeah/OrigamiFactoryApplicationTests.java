package origami.yeah;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import origami.yeah.model.Admin;
import origami.yeah.repository.IRepositoryAdmin;

@RunWith(SpringRunner.class)
@SpringBootTest
public class OrigamiFactoryApplicationTests {
	@Autowired
	private IRepositoryAdmin adminRepo;

	@Test
	public void contextLoads() {
		
		Admin adm = new Admin("Admin","Admin");
		
		adminRepo.save(adm);
		
	}

}
