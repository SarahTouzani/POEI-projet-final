package com.groupe2.backspringboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Version;

@Entity

public class Prestations {

	private int id;
	private String prestation;
	private String profession;
	private double tarif;
	private int version;

	public Prestations(String prestation, String profession, double tarif) {
		this.prestation = prestation;
		this.profession = profession;
		this.tarif = tarif;
	}

	public Prestations() {
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPrestation() {
		return prestation;
	}

	public void setPrestation(String prestation) {
		this.prestation = prestation;
	}

	public String getProfession() {
		return profession;
	}

	public void setProfession(String profession) {
		this.profession = profession;
	}

	@Version
	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public double getTarif() {
		return tarif;
	}

	public void setTarif(double tarif) {
		this.tarif = tarif;
	}

	@Override
	public String toString() {
		return "Prestations [id=" + id + ", prestation=" + prestation + ", profession=" + profession + ", tarif="
				+ tarif + "]";
	}

}
