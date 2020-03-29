package com.ecr.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity @Data @AllArgsConstructor @NoArgsConstructor @ToString
public class Enfant implements Serializable {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id ;
	@Column(nullable=false , length=10)
	private String nom ;
	@Column(nullable=false , length=10)
	private String prenom ;
	@Column(nullable=false , length=10)
	private Date dateNaiss ;
	@Column(nullable=false , length=20)
	private String ville ;
	@Column(nullable=false)
	private boolean handicapeNaiss;
	
	
}
