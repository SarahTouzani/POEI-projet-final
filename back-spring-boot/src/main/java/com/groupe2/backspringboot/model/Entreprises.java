package com.groupe2.backspringboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Version;

import lombok.Data;

@Data
@Entity
@Table(name = "Entreprises")
public class Entreprises {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String entreprise;
	public String adresse;
	public String departement;
	public String telephone;
	public String mail;
	public String profession;
	
	@Version
	private int version;
	
}
