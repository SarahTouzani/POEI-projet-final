package com.groupe2.backspringboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.groupe2.backspringboot.model.Prestations;

public interface PrestationRepository extends JpaRepository<Prestations, Integer> {

	public List<Prestations> findByProfession(String profession);

	//public List<Prestations> findAllByOrderByTarifAsc();

}
