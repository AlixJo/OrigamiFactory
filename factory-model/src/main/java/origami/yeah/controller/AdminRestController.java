package origami.yeah.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import origami.yeah.model.Admin;
import origami.yeah.model.Views;
import origami.yeah.repository.IRepositoryAdmin;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminRestController {
	
	@Autowired
	private IRepositoryAdmin adminRepo;

	@GetMapping("")
	@ResponseBody
	@JsonView(Views.ViewAdmin.class)
	public List<Admin> list() {
		return adminRepo.findAll();
	}

}
