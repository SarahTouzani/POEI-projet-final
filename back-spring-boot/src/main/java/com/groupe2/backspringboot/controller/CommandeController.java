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

import com.groupe2.backspringboot.model.Commande;
import com.groupe2.backspringboot.repository.CommandeRepository;

@RestController
@RequestMapping("/commandes")
public class CommandeController {
	
	@Autowired
	private CommandeRepository repo;
	
	@CrossOrigin
	@GetMapping
	public List<Commande> testfindall(){
		return repo.findAll();
	}
	
	@CrossOrigin
	@GetMapping("{id}")
	public Commande findbyid(@PathVariable(name = "id") int id) {
		return repo.findById(id).get();
	}
	
	@CrossOrigin
	@PostMapping
	public void create(@RequestBody Commande c) {
		repo.save(c);
		
	}
	
	
	@CrossOrigin
	@DeleteMapping("{id}")
	public void delete(@PathVariable(name = "id") int id) {
		repo.delete(repo.findById(id).get());
	}
	
	@CrossOrigin
	@PutMapping
	public void update(@RequestBody Commande c) {
		repo.save(c);
	}

}
