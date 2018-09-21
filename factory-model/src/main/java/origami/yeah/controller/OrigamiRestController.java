package origami.yeah.controller;

import java.util.List;

import javax.validation.Valid;

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

import origami.yeah.model.Origami;
import origami.yeah.model.Views;
import origami.yeah.repository.IRepositoryOrigami;

@CrossOrigin("*")
@RestController
@RequestMapping("/origami")
public class OrigamiRestController {

	@Autowired
	private IRepositoryOrigami origamiRepo;

	@GetMapping("")
	@ResponseBody
	@JsonView(Views.ViewOrigami.class)
	public List<Origami> list() {
		return origamiRepo.findAll();
	}
	
	@GetMapping("/{id}")
	@ResponseBody
	@JsonView(Views.ViewOrigamiWithEtapeCat.class)
	public Origami detail(@PathVariable Long id) {
		return origamiRepo.findById(id).get();	}

	
	@PostMapping("")
	@ResponseBody
	@JsonView(Views.ViewOrigami.class)
	public Origami add(@Valid @RequestBody Origami origami) {
		origamiRepo.save(origami);
		return origami;
	}
	
	@PutMapping("/{id}")
	@ResponseBody
	@JsonView(Views.ViewOrigami.class)
	public Origami edit(@RequestBody Origami origami, @PathVariable Long id) {
		origamiRepo.save(origami);
		
		return origamiRepo.findById(id).get();
	}
	
	@DeleteMapping("/{id}")
	@JsonView(Views.ViewOrigami.class)
	public void delete(@PathVariable Long id) {
		origamiRepo.deleteById(id);
	}
	
	
	
}
