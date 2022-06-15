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

import com.groupe2.backspringboot.model.Entreprises;
import com.groupe2.backspringboot.repository.EntreprisesRepository;

@RestController
@RequestMapping("/entreprises")
public class EntreprisesController {
	
	@Autowired
	private EntreprisesRepository repo;
	
	@CrossOrigin
	@GetMapping
	public List<Entreprises> testfindall(){
		return repo.findAll();
	}
	
	@CrossOrigin
	@GetMapping("{id}")
	public Entreprises findbyid(@PathVariable(name = "id") int id) {
		return repo.findById(id).get();
	}
	
	@CrossOrigin
	@PostMapping
	public void create(@RequestBody Entreprises e) {
		repo.save(e);
		
	}
	
	
	@CrossOrigin
	@DeleteMapping("{id}")
	public void delete(@PathVariable(name = "id") int id) {
		repo.delete(repo.findById(id).get());
	}
	
	@CrossOrigin
	@PutMapping
	public void update(@RequestBody Entreprises e) {
		repo.save(e);
	}

}
