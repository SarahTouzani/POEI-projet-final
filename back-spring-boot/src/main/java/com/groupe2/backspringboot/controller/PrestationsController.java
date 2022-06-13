package com.groupe2.backspringboot.controller;

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
import org.springframework.web.bind.annotation.RestController;

import com.groupe2.backspringboot.model.Prestations;
import com.groupe2.backspringboot.repo.PrestationRepository;

@RestController
@RequestMapping("/prestations")
public class PrestationsController {
	
	@Autowired
	private PrestationRepository repo;
	
	@CrossOrigin
	@GetMapping
	public List<Prestations> testfindall(){
		return repo.findAll();
	}
	
	@CrossOrigin
	@GetMapping("{id}")
	public Prestations findbyid(@PathVariable(name = "id") int id) {
		return repo.findById(id).get();
	}
	
	@CrossOrigin
	@PostMapping
	public void create(@RequestBody Prestations p) {
		repo.save(p);
		//return "ok";
	}
	
	@CrossOrigin
	@DeleteMapping("{id}")
	public void delete(@PathVariable(name = "id") int id) {
		repo.delete(repo.findById(id).get());
	}
	
	@CrossOrigin
	@PutMapping
	public void update(@RequestBody Prestations p) {
		repo.save(p);
	}
	
	@CrossOrigin
	@GetMapping("{profession}")
	public List<Prestations> findbyProfession(@PathVariable(name = "profession") String profession) {
		return repo.findByProfession(profession);
	}
	
	@CrossOrigin
	@GetMapping("{tarif}")
	public List<Prestations> findAllByOrderByTarifAsc(@PathVariable(name = "tarif") String tarif) {
		return repo.findAllByOrderByTarifAsc();
	}

}
