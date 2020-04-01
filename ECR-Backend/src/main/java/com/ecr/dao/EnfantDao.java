package com.ecr.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ecr.entities.Enfant;
@CrossOrigin(origins="http://localhost:4200")
@RepositoryRestController
@Repository
public interface EnfantDao extends JpaRepository<Enfant, Long> {
	

}
