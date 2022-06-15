package com.groupe2.backspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.groupe2.backspringboot.model.Commande;

public interface CommandeRepository extends JpaRepository<Commande, Integer>{

}
