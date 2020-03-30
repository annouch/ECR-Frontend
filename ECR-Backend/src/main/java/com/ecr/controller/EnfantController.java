package com.ecr.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecr.dao.EnfantDao;
import com.ecr.entities.Enfant;

@RestController @CrossOrigin(origins="http://localhost:4200")
@RequestMapping("api/ecr")
public class EnfantController {

@Autowired
private EnfantDao enfantdao ;

@GetMapping("/enfants")
public List<Enfant> getEnfants(){
	return enfantdao.findAll();
}

@GetMapping("/enfants/{id}")
public ResponseEntity<Enfant> getEnfantsById(@PathVariable(value="id") Long enfantId ) 

	throws ResourceNotFoundException {
		Enfant enfant = enfantdao.findById(enfantId)
				.orElseThrow(() -> new ResourceNotFoundException("Enfant non existe avec ce Id :" + enfantId));
		return ResponseEntity.ok().body(enfant);
	}
		
	



@PostMapping("/enfants")
public Enfant creatEnfant(@Valid @RequestBody Enfant enfant) {
	return enfantdao.save(enfant);
}

@PutMapping("/enfants/{id}")
public ResponseEntity<Enfant> updateEnfant(@PathVariable(value="id") Long enfantId,@Valid @RequestBody  Enfant enfantupdate)
throws ResourceNotFoundException{
	
	Enfant enfantecr = enfantdao.findById(enfantId)
			.orElseThrow(() -> new ResourceNotFoundException("Enfant non existe avec ce Id :" + enfantId));
	
	enfantecr.setId(enfantupdate.getId());
	enfantecr.setNom(enfantupdate.getNom());
	enfantecr.setPrenom(enfantupdate.getPrenom());
	enfantecr.setDateNaiss(enfantupdate.getDateNaiss());
	enfantecr.setDateNaiss(enfantupdate.getDateNaiss());
	enfantecr.setVille(enfantupdate.getVille());
	enfantecr.setHandicapeNaiss(enfantupdate.isHandicapeNaiss());
	
	final Enfant enfantMaj = enfantdao.save(enfantecr);
	
	return ResponseEntity.ok().body(enfantMaj);
	
}

@DeleteMapping("enfants/{id}")
public String deleteEnfant(@PathVariable(value="id") Long enfantId) throws ResourceNotFoundException{
	
	Enfant enfantdlt = enfantdao.findById(enfantId).orElseThrow(() -> new ResourceNotFoundException("Enfant non existe avec ce Id :" + enfantId));
	enfantdao.delete(enfantdlt);
	return "L'Enfant avec l'ID :"+enfantId+" a été bien Supprimé";
}

}
