package com.ecr.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecr.entities.Enfant;
@Repository
public interface EnfantDao extends JpaRepository<Enfant, Long> {

}
