package origami.yeah.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import origami.yeah.model.Categorie;
import origami.yeah.model.Views;
import origami.yeah.repository.IRepositoryCategorie;

@RestController
@RequestMapping("/categorie")
@CrossOrigin("*")
public class CategorieRestController {
	
	@Autowired
	private IRepositoryCategorie catRepo;

	@GetMapping("")
	@ResponseBody
	@JsonView(Views.ViewCategorieWithSuperCat.class)
	public List<Categorie> list() {
		return catRepo.findAll();
	}
	
	@GetMapping("/{id}")
	@ResponseBody
	@JsonView(Views.ViewCategorieWithSubCat.class)
	public Categorie detail(@PathVariable Long id) {
		return catRepo.findById(id).get();
	}
	
	@PostMapping("")
	@ResponseBody
	@JsonView(Views.ViewCategorie.class)
	public Categorie add(@RequestBody Categorie categorie) {
		catRepo.save(categorie);

		return categorie;
	}
	
	@PutMapping("/{id}")
	@ResponseBody
	@JsonView(Views.ViewCategorie.class)
	public Categorie edit(@RequestBody Categorie categorie, @PathVariable Long id) {
		catRepo.save(categorie);

		return (Categorie) catRepo.findById(id).get();
	}
	
	@DeleteMapping("/{id}")
	@JsonView(Views.ViewCategorie.class)
	public void delete(@PathVariable Long id) {
		catRepo.deleteById(id);
	}

	
	
}
