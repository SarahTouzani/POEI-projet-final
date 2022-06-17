package com.groupe2.backspringboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.groupe2.backspringboot.model.Entreprises;

public interface EntreprisesRepository extends JpaRepository<Entreprises, Integer>{
	
	public List<Entreprises> findByDepartement(String departement);
	
	public List<Entreprises> findByProfession(String profession);
	
	public List<Entreprises> findByProfessionAndDepartement(String profession, String departement);
}
