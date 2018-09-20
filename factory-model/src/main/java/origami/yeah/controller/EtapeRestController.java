package origami.yeah.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import origami.yeah.model.Etape;
import origami.yeah.repository.IRepositoryEtape;


@RestController
@RequestMapping("/etape")
public class EtapeRestController {
	@Autowired
	private IRepositoryEtape etapeRepo;
	
	@GetMapping("")
	@ResponseBody

	public List<Etape> list() {
		return etapeRepo.findAll();
	}
	

}
