import { Component, OnInit } from '@angular/core';
import { EnfantService } from '../enfant.service';
import { Enfant } from '../enfant';
import { Router, ActivatedRoute } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-ecr-update',
  templateUrl: './ecr-update.component.html',
  styleUrls: ['./ecr-update.component.css']
})
export class EcrUpdateComponent implements OnInit {

  id :number;
  enfant : Enfant ;
  
  constructor(private enfantService: EnfantService , 
              private router: Router , private route : ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.enfant = new Enfant() ;

    this.enfantService.getEnfant(this.id)
      .subscribe(data=>{
        console.log(data)
      this.enfant=data ;
      } ,error=>console.log(error));
  }

  updateEnfant(){
    this.enfantService.updateEnfant(this.id , this.enfant)
    .subscribe(data=>console.log(data) , error=>console.log(error));
    this.enfant=new Enfant() ;
    this.router.navigate(['/ecr-list']);
  }

  onSubmit(){
    this.updateEnfant() ;
  }

}
