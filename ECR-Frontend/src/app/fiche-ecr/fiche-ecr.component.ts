import { Component, OnInit } from '@angular/core';
import { EnfantService } from '../enfant.service';
import { Router } from '@angular/router';
import { Enfant } from '../enfant';
import { error } from 'protractor';

@Component({
  selector: 'app-fiche-ecr',
  templateUrl: './fiche-ecr.component.html',
  styleUrls: ['./fiche-ecr.component.css']
})
export class FicheEcrComponent implements OnInit {

  constructor(private enfantService:EnfantService , private router: Router) { }

  enfant : Enfant = new Enfant();
  listOptions = [
    { id: "true", name: "Oui" },
    { id: "false", name: "Non" }
  ];
  submitted = false ;
  ngOnInit() {

  }

  addEnfant() {
    this.submitted = false ;
    this.enfant = new Enfant ();
  }

  saveEnfant(){
    this.enfantService.addEnfant(this.enfant)
    .subscribe(
        data=>console.log(data) ,error=> console.log(error)  
      );
      this.enfant = new Enfant();
      this.router.navigate(['/ecr-list']);
  }

  onSubmit(){
    this.submitted=true ;
    this.saveEnfant() ;
  }

  // goToListEcr(){
  //   this.router.navigate(['/ecr-list']);
  // }

}
