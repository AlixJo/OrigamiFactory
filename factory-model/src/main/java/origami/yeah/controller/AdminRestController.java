package origami.yeah.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import origami.yeah.model.Admin;
import origami.yeah.repository.IRepositoryAdmin;

@RestController
@RequestMapping("/admin")
public class AdminRestController {
	
	@Autowired
	private IRepositoryAdmin adminRepo;

	@GetMapping("")
	@ResponseBody
	public List<Admin> list() {
		return adminRepo.findAll();
	}

}
