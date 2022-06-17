package com.groupe2.backspringboot.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Version;

import lombok.Data;

@Data
@Entity
public class Commande implements Serializable{
	
	
	private static final long serialVersionUID = 7999707544138948542L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private int idClient;
	
	@ElementCollection
	@CollectionTable(name = "liste_prestations")
	private List<String> prestations;
	
	private String date;
	
	private double total;
	
	@Version
	private int version;

}
