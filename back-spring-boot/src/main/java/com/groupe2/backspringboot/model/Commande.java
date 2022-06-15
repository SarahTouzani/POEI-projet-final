package com.groupe2.backspringboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Version;

import lombok.Data;

@Data
@Entity
public class Commande {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private int idClient;
	
	@Column(columnDefinition = "JSON")
	private String prestations;
	
	private String date;
	
	private double total;
	
	@Version
	private int version;

}
