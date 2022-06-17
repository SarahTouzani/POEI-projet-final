package com.groupe2.backspringboot.auth.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
@Entity
@Table(name = "contact_information")
public class UserContactInformation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@NotBlank
	private String lastname;
	@NotBlank
	private String firstname;
	@NotBlank
	private String address;
	@NotBlank
	private String zipCode;
	@NotBlank
	private String city;
	@NotBlank
	private String telephone;

}
